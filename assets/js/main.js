
/*********** handle loader ***********/
function handleLoader() {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader?.classList.add('hide');
    }, 200);
}
handleLoader();

/*********** toggle home item ***********/
function toggleItem() {
    if (window.innerWidth <= 991) {
        document.querySelectorAll('.arrow-btn').forEach(item => {
            item?.addEventListener("click", () => {
                item.parentNode.parentNode.classList.toggle('expanded');
            });
        });
    }
}

toggleItem();