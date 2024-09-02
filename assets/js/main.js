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
    const parent = document.querySelector('.hexagons-wrap')
    parent?.addEventListener('scroll', function () {
        if (parent.scrollLeft < 0) {
            parent.classList.add('end');
        } else {
            parent.classList.remove('end');
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
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }

    if (window.scrollY > stickyHeader + 300) {
        aboutBrief.classList.add('arrows-move');
    } else {
        aboutBrief.classList.remove('arrows-move');
    }

    if (window.scrollY > stickyHeader + 600) {
        progress.classList.add('sticky');
    } else {
        progress.classList.remove('sticky');
    }

    if (window.scrollY > 200) {
        welcomeArrows.classList.add('hide');
    } else {
        welcomeArrows.classList.remove('hide');
    }
})

/*** about arrows ***/
$(document).ready(function () {
    const aboutBrief = document.getElementById('about-brief');
    const welcomeArrows = document.querySelector('.about-welcome .arrows');

    if (aboutBrief.classList.contains('aos-animate')) {
        welcomeArrows?.classList.add('hide')
    } else {
        welcomeArrows?.classList.remove('hide')
    }
})

/*** slider ***/
$(document).ready(function () {
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
    new PureCounter();
})

/*** aos animation ***/
$(document).ready(function () {
    AOS.init();
})
/*---------------- About end ----------------*/
