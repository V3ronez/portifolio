const el = document.querySelector(".menu-mobile-icon");
el.addEventListener('click', () => {
    //mostrar o menu mobile
    const menuitems = document.querySelector('.menu-items')
    if (menuitems.classList.contains("show")) {
        menuitems.classList.add("hide")
        menuitems.classList.remove("show")
    } else {
        menuitems.classList.add("show")
        menuitems.classList.remove("hide")
    }
})