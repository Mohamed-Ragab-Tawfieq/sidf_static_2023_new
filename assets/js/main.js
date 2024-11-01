/*** progress ***/
window.addEventListener('scroll', function () {
    const progress = document.getElementById('top-progress');
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / docHeight) * 100;

    progress.style.width = scrollPercentage + '%';
});

/*** about nav active ***/
function handleSIDFNav() {
    document.addEventListener("DOMContentLoaded", function () {
        const navLinks = document.querySelectorAll(".sidf-navbar .nav-link, .inner-modal nav a, .dash-side-menu .item");

        navLinks?.forEach(link => {
            if (link.href === window.location.href) {
                link.classList.add("active");
            }
        });
    });
}
handleSIDFNav()

function handleMobileNav() {
    document.addEventListener("DOMContentLoaded", function () {
        const ulMenu = document.querySelector(".sidf-navbar ul");
        const selectMenu = document.getElementById("sidf-navbar-mobile");

        if (ulMenu) {
            Array.from(ulMenu.getElementsByTagName("li")).forEach((li) => {
                const link = li.querySelector("a");
                const option = document.createElement("option");

                option.textContent = link.textContent;
                option.value = link.href;

                // Set option as selected if window href matches option value
                if (window.location.href === link.href) {
                    option.selected = true;
                }

                selectMenu.appendChild(option);
            });

            selectMenu.addEventListener("change", function () {
                window.location.href = this.value;
            });
        }
    });
}
handleMobileNav();

/*** inner modal ***/
function handleHover(linkId, menuId) {
    const link = document.getElementById(linkId);
    const menu = document.getElementById(menuId);
    const closeBtn = document.querySelectorAll('.child-menu .close-btn');

    link?.addEventListener('click', function () {
        document.querySelectorAll('.inner-modal .main-list .btn').forEach(item => {
            item.classList.remove('active')
        })

        document.querySelectorAll('.inner-modal .child-menu').forEach(menu => {
            menu.classList.remove('show')
        })

        link.classList.add('active');
        menu.classList.toggle('show');
    });

    closeBtn?.forEach(btn => {
        btn.addEventListener('click', function () {
            btn.closest('.child-menu').classList.remove('show')
        })
    })
}

handleHover('link-1', 'menu-1');
handleHover('link-2', 'menu-2');
handleHover('link-3', 'menu-3');
handleHover('link-4', 'menu-4');
handleHover('link-5', 'menu-5');
handleHover('link-6', 'menu-6');
handleHover('link-7', 'menu-7');
handleHover('link-8', 'menu-8');
handleHover('link-9', 'menu-9');
handleHover('link-10', 'menu-10');

/*** header fixed ***/
window.addEventListener('scroll', function () {
    const header = document.getElementById('inner-header');
    const mobileHeader = document.getElementById('mobile-header');

    const welcomeArrows = document.querySelector('.inner-top-img .arrows');

    if (window.scrollY > 200) {
        header?.classList.add('sticky');
        mobileHeader?.classList.add('sticky');
        welcomeArrows?.classList.add('hide');
    } else {
        header?.classList.remove('sticky');
        mobileHeader?.classList.remove('sticky');
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
            autoplaySpeed: 1000,
            autoplayTimeout: 2000,
            navSpeed: 500,
            margin: 16,
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

document.addEventListener("DOMContentLoaded", function () {
    const playBtn = document.getElementById("play-btn");

    setTimeout(() => {
        playBtn?.click()
    }, 1000);
});

/*** next and prev ***/
$(document).ready(function () {
    if ($('#sidf-navbar').length) {
        // next
        var nextText = $('#sidf-navbar .active').parent().next().find('.nav-link').text();
        var nextHref = $('#sidf-navbar .active').parent().next().find('.nav-link').attr('href');

        $('#next-page').text(nextText);
        $('#next-page').parent().attr('href', nextHref);

        if ($('#sidf-navbar .nav-item:last-of-type .active').length) {
            $('.routing-links .next-btn').attr('style', 'display: none !important');
        }

        if ($('#sidf-navbar .nav-item').length === 1) {
            $('.routing-links .visitors').addClass('flex-grow-0 mx-auto');
        }

        // prev
        var prevText = $('#sidf-navbar .active').parent().prev().find('.nav-link').text();
        var prevHref = $('#sidf-navbar .active').parent().prev().find('.nav-link').attr('href');

        $('#prev-page').text(prevText);
        $('#prev-page').parent().attr('href', prevHref);


        if ($('#sidf-navbar .nav-item:first-of-type .active').length) {
            $('.routing-links .prev-btn').attr('style', 'display: none !important');
        }
    }
});

/*** download modal ***/
function downloadFile() {
    const step1 = document.getElementById('step-1')
    const step2 = document.getElementById('step-2')

    step2.classList.add('d-block')
    step1.classList.add('d-none')
}

function OTPMoveToNext(current, nextFieldId) {
    if (current.value.length === 1 && nextFieldId !== '') {
        const next = document.getElementById(nextFieldId)
        next?.focus();
    }
}

/*** dashboard selects ***/
function handleDashboardSelects() {
    const select = document.querySelectorAll('.dots-card select')
    select?.forEach(item => {
        item.addEventListener('change', function () {
            item.closest('.dots-card').querySelectorAll('.data-content').forEach(function (content) {
                content.style.display = 'none';
            });

            const selectedValue = this.value;
            item.closest('.dots-card').querySelector('.data-' + selectedValue).style.display = 'block';
            item.closest('.dots-card').querySelector('.dropdown-menu').classList.remove('show')
        })
    });
}

handleDashboardSelects();

/*** mobile menu ***/
function toggleMobileMenu() {
    const menu = document.getElementById('dash-side-menu');
    menu?.classList.toggle('collapsed')
}

/*** dashboard downloads ***/
function handleDashDownload() {
    const btn = document.querySelectorAll('.apexcharts-menu-icon i');

    btn.forEach(btn => {
        btn?.addEventListener('click', function () {
            const menu = btn.closest('.apexcharts-toolbar').querySelector('.apexcharts-menu');

            if (!(menu.classList.contains('apexcharts-menu-open'))) {
                return
            }

            menu.classList.toggle('hide');
        })
    })
}
handleDashDownload()

/*** rating ***/
function toggleRate() {
    const stars = document.getElementById('star-rating')

    stars?.closest('.rating').classList.toggle('collapsed')
}

/*** percent ***/
function handlePercent() {
    const mainContent = document.querySelector('.main-content')

    if (mainContent) {
        mainContent.innerHTML = mainContent.innerHTML.replace(/%(\d+(\.\d+)?)/g, '$1%');
    }
}
handlePercent()

/*** tables export ***/
function exportTableToCSV(tableId, filename) {
    let csv = [];
    const rows = document.querySelectorAll(`#${tableId} tr`);

    rows.forEach(row => {
        let rowData = [];
        row.querySelectorAll("td, th").forEach(cell => {
            rowData.push(cell.innerText);
        });
        csv.push(rowData.join(","));
    });

    const csvContent = "\uFEFF" + csv.join("\n");

    const csvFile = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const downloadLink = document.createElement("a");

    downloadLink.href = URL.createObjectURL(csvFile);
    downloadLink.download = 'table';
    downloadLink.click();
}

/*** cards export ***/
function generateCSV() {
    const rows = [['رقم القسم', 'عنوان القسم', 'عنوان الصفحة', 'الإجمالي', 'نسبة التغيير', 'إجمالي اليوم']];
    const cards = document.querySelectorAll('.dots-card'); // Select each card section
    const fileName = document.querySelector('.dash-title').innerHTML

    cards.forEach(card => {
        const sectionNumber = card.querySelector('header .number').textContent.trim();

        card.querySelectorAll('.data-content').forEach(content => {
            const sectionTitle = content.querySelector('.main-title') ? content.querySelector('.main-title').textContent.trim() : '';
            const pageTitle = content.querySelector('.subtitle') ? content.querySelector('.subtitle').textContent.trim() : '';
            const number = content.querySelector('.number.purecounter') ? content.querySelector('.number.purecounter').getAttribute('data-purecounter-end') : '';
            const counterPercent = content.querySelector('.counter-percent') ? content.querySelector('.counter-percent').getAttribute('data-purecounter-end') : '';
            const counterPlus = content.querySelector('.counter-plus') ? content.querySelector('.counter-plus').getAttribute('data-purecounter-end') : '';

            rows.push([sectionNumber, sectionTitle, pageTitle, number, counterPercent, counterPlus]);
        });
    });

    let csvContent = "\uFEFF" + rows.map(e => e.join(",")).join("\n");

    const encodedUri = encodeURI("data:text/csv;charset=utf-8," + csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", fileName);
    document.body.appendChild(link); // Required for Firefox
    link.click();
}

function generateRateCSV() {
    const rows = [['رقم القسم', 'عنوان القسم', 'عنوان الصفحة', 'التقييم', 'عدد المشاركين', 'نسبة التغيير', 'إجمالي اليوم']];
    const cards = document.querySelectorAll('.dots-card');
    const fileName = document.querySelector('.dash-title').innerHTML

    cards.forEach(card => {
        const sectionNumber = card.querySelector('header .number').textContent.trim();

        card.querySelectorAll('.data-content').forEach(content => {
            const sectionTitle = content.querySelector('.main-title') ? content.querySelector('.main-title').textContent.trim() : '';
            const subtitle = content.querySelector('.subtitle') ? content.querySelector('.subtitle').textContent.trim() : '';
            const rateValue = content.querySelector('.number.purecounter') ? content.querySelector('.number.purecounter').getAttribute('data-purecounter-end') : '';
            const rateTotal = content.querySelector('.rate-total') ? content.querySelector('.rate-total').getAttribute('data-purecounter-end') : '';
            const counterPercent = content.querySelector('.counter-percent') ? content.querySelector('.counter-percent').getAttribute('data-purecounter-end') : '';
            const counterPlus = content.querySelector('.counter-plus') ? content.querySelector('.counter-plus').getAttribute('data-purecounter-end') : '';

            rows.push([sectionNumber, sectionTitle, subtitle, rateValue, rateTotal, counterPercent, counterPlus]);
        });
    });

    let csvContent = "\uFEFF" + rows.map(e => e.join(",")).join("\n");

    const encodedUri = encodeURI("data:text/csv;charset=utf-8," + csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", fileName);
    document.body.appendChild(link); // Required for Firefox
    link.click();
}
