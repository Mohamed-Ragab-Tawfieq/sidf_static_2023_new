
/*********** handle loader ***********/
function handleLoader() {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader?.classList.add('hide');
    }, 200);
}
handleLoader();

/*********** home hexgons ***********/
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