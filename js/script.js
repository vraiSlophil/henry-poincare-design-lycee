const menuButton = document.querySelector("#header__menu-button");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu(){
    let menu = document.getElementById("header__menu");
    let button = document.getElementById("header__menu-button");
    
    if (menu.classList.contains("MenuHidden")){
        menu.classList.remove("MenuHidden");
        menu.classList.add("MenuShow");
        button.innerText = "✕";
        return;
    }
    if (menu.classList.contains("MenuShow")){
        menu.classList.remove("MenuShow");
        menu.classList.add("MenuHidden");
        button.innerText = "☰";
        return;
    }
    menu.classList.add("MenuHidden");
}

function toggleList(element) {
    if (element.classList.contains("MobileHidden") && window.innerWidth <= 870){
        element.classList.remove("MobileHidden");
        element.classList.add("MobileShow");
        element.style.display = "flex";
        return;
    }
    if (element.classList.contains("MobileShow") && window.innerWidth <= 870) {
        element.classList.remove("MobileShow");
        element.classList.add("MobileHidden");
        element.style.display = "none";
        return;
    }
    element.classList.add("MobileHidden");
}

function slideUpdater(){
    const slides = [document.getElementById("main__slide__first"),
                    document.getElementById("main__slide__second"),
                    document.getElementById("main__slide__third"),
                    document.getElementById("main__slide__fourth"),
                    document.getElementById("main__slide__fifth"),
                    document.getElementById("main__slide__sixth"),
                    document.getElementById("main__slide__seventh"),
                    document.getElementById("main__slide__eighth"),
                    document.getElementById("main__slide__ninth")];

    let index = 0;
    slides.forEach((element) => {
        if (element.classList.contains("ActiveSlide")) {
            element.classList.remove("ActiveSlide");
            element.classList.add("HiddenSlide");
            if (index === 8) {
                slides[0].classList.remove("HiddenSlide");
                slides[0].classList.add("ActiveSlide");
                return
            }
            slides[index + 1].classList.remove("HiddenSlide");
            slides[index + 1].classList.add("ActiveSlide");
            return
        }
        index++;
    });
}

setInterval(slideUpdater, 10000)