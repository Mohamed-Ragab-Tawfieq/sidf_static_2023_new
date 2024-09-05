
/*** loader ***/
$(document).ready(function () {
    const loader = document.getElementById('loader');

    setTimeout(() => {
        loader?.classList.add('d-none')
    }, 100);
})

/*---------------- Home start ----------------*/
/*** home hexgons ***/
function handleHexagonHover(element) {
    $('.hexagon').removeClass('expand-hexagon collapse-hexagon');
    $(element).addClass('expand-hexagon');
    $(element).parent().addClass('expand-column');
    $('.hexagon').not(element).addClass('collapse-hexagon');
}

function handleHexagonBlur() {
    $('.hexagon').removeClass('expand-hexagon collapse-hexagon');
    $('.expand-column').removeClass('expand-column');
}

function handleHexagonsScroll() {
    const parent = document.querySelector('.hexagons-wrap');
    const factor = window.innerWidth >= 1200 ? 2.17 : 0.72;

    parent?.addEventListener('scroll', function () {
        const lines = document.querySelector('.progress-lines');
        const windowWidth = window.innerWidth / factor;
        const linesProgress = (parent.scrollLeft / -windowWidth) * 100;
        const arrowsBg = document.querySelector('.arrows-bg');
        const homeSide = document.querySelector('.home-side');

        lines.style.width = linesProgress + 'vw';

        if (parent.scrollLeft < 0) {
            parent.classList.add('end');
            arrowsBg?.classList.add('top');
            homeSide?.classList.add('bottom');
        } else {
            lines.style.width = 2 + 'vw';
            parent.classList.remove('end');
            arrowsBg?.classList.remove('top');
            homeSide?.classList.remove('bottom');
        }
    });
}
handleHexagonsScroll()

/*---------------- Home end ----------------*/


/*---------------- About start ----------------*/
/*** progress ***/
window.addEventListener('scroll', function () {
    const progress = document.getElementById('top-progress');
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / docHeight) * 100;

    progress.style.width = scrollPercentage + '%';
});

/*** header fixed ***/
window.addEventListener('scroll', function () {
    const header = document.getElementById('inner-header');
    const progress = document.getElementById('about-navbar');
    const aboutBrief = document.getElementById('about-brief');
    const welcomeArrows = document.querySelector('.about-welcome .arrows');
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
    const aboutBrief = document.getElementById('about-brief');
    const welcomeArrows = document.querySelector('.about-welcome .arrows');

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
                    items: 4.2
                }
            }
        });
    }
});

/*** about bars ***/
$(document).ready(function () {
    $('.about-bars .item').each(function () {
        var numberText = $(this).find('.number').text().trim();
        var numberValue = parseFloat(numberText);

        if (!isNaN(numberValue)) {
            $(this).find('.btn-gradient').css('height', (numberValue * 4.6) + 'px');
        }
    });
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
        });

    }
})

/*** aos animation ***/
$(document).ready(function () {
    if ($('[data-aos]').length) {
        AOS.init();
    }
});
/*---------------- About end ----------------*/
