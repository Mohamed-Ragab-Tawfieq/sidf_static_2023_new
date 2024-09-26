/*** progress ***/
window.addEventListener('scroll', function () {
    const progress = document.getElementById('top-progress');
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / docHeight) * 100;

    progress.style.width = scrollPercentage + '%';
});

/*** about nav active ***/
function handleAboutNav() {
    document.addEventListener("DOMContentLoaded", function () {
        const navLinks = document.querySelectorAll(".sidf-navbar .nav-link");

        navLinks.forEach(link => {
            if (link.href === window.location.href) {
                link.classList.add("active");
            }
        });
    });
}
handleAboutNav()

/*** header fixed ***/
window.addEventListener('scroll', function () {
    const header = document.getElementById('inner-header');
    const progress = document.getElementById('sidf-navbar');
    const aboutBrief = document.getElementById('first-section');
    const welcomeArrows = document.querySelector('.inner-top-img .arrows');
    const stickyHeader = header.offsetTop;

    if (window.scrollY > stickyHeader) {
        header?.classList.add('sticky');
    } else {
        header?.classList.remove('sticky');
    }

    if (window.scrollY > stickyHeader + 300) {
        aboutBrief?.classList.add('arrows-move');
    } else {
        aboutBrief?.classList.remove('arrows-move');
    }

    if (window.scrollY > stickyHeader + 600) {
        progress?.classList.add('sticky');
    } else {
        progress?.classList.remove('sticky');
    }

    if (window.scrollY > 200) {
        welcomeArrows?.classList.add('hide');
    } else {
        welcomeArrows?.classList.remove('hide');
    }
})

/*** about arrows ***/
$(document).ready(function () {
    const aboutBrief = document.getElementById('first-section');
    const welcomeArrows = document.querySelector('.inner-top-img .arrows');

    if (aboutBrief) {
        if (aboutBrief.classList.contains('aos-animate')) {
            welcomeArrows?.classList.add('hide')
        } else {
            welcomeArrows?.classList.remove('hide')
        }
    }
})

/*** slider ***/
$(document).ready(function () {
    if ($('.owl-carousel').length) {
        $('.owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 10,
            nav: true,
            rtl: true,
            navText: [
                '<i class="material-icons"> chevron_right </i>',
                '<i class="material-icons"> chevron_left </i>',
            ],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4.3
                }
            }
        });
    }
});

/*** counters ***/
$(document).ready(function () {
    if ($('[data-purecounter-end]').length) {
        new PureCounter({
            // Setting that can't' be overriden on pre-element
            selector: '.purecounter', // HTML query selector for spesific element

            // Settings that can be overridden on per-element basis, by `data-purecounter-*` attributes:
            start: 0, // Starting number [uint]
            duration: 1, // The time in seconds for the animation to complete [seconds]
            delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
            once: true, // Counting at once or recount when the element in view [boolean]
            pulse: false, // Repeat count for certain time [boolean:false|seconds]
            legacy: true, // If this is true it will use the scroll event listener on browsers
            filesizing: false, // This will enable/disable File Size format [boolean]
            formater: 'us-US', // Number toLocaleString locale/formater, by default is "en-US" [string|boolean:false]
            separator: true, // This will enable/disable comma separator for thousands. Use it for set the symbol too [boolean|char|string]
            callbacks: {
                onComplete: function () {
                    formatPureCounterCurrency();
                }
            }
        });

    }
})

/*** aos animation ***/
$(document).ready(function () {
    if ($('[data-aos]').length) {
        AOS.init();
    }
});

/*** top video ***/
function playTopVideo() {
    const video = document.getElementById('top-video')
    video.play()

    video.addEventListener('play', () => {
        document.getElementById('inner-top-img').classList.add('video-playing');
    });

    video.addEventListener('ended', () => {
        document.getElementById('inner-top-img').classList.remove('video-playing');
    });
}


/*** next and prev ***/
$(document).ready(function () {
    console.log($('#sidf-navbar .active').parent().prev().find('.nav-link').attr('href'))
    if ($('#sidf-navbar').length) {
        // next
        var nextText = $('#sidf-navbar .active').parent().next().find('.nav-link').text();
        var nextHref = $('#sidf-navbar .active').parent().next().find('.nav-link').attr('href');

        $('#next-page').text(nextText);
        $('#next-page').parent().attr('href', nextHref);

        if ($('#sidf-navbar .nav-item:last-of-type .active').length) {
            $('.routing-links a:first-of-type').attr('style', 'display: none !important');
        }

        // prev
        var prevText = $('#sidf-navbar .active').parent().prev().find('.nav-link').text();
        var prevHref = $('#sidf-navbar .active').parent().prev().find('.nav-link').attr('href');

        $('#prev-page').text(prevText);
        $('#prev-page').parent().attr('href', prevHref);


        if ($('#sidf-navbar .nav-item:first-of-type .active').length) {
            $('.routing-links a:last-of-type').attr('style', 'display: none !important');
        }
    }
});