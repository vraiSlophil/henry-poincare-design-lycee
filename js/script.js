function toggleMenu(){
    var menu = document.getElementById("header__menu");
    var button = document.getElementById("header__menu-button");
    
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
    if (element.classList.contains("MobileHidden")){
        element.classList.remove("MobileHidden");
        element.classList.add("MobileShow");
        element.style.display = "flex";
        return;
    }
    if (element.classList.contains("MobileShow")) {
        element.classList.remove("MobileShow");
        element.classList.add("MobileHidden");
        element.style.display = "none";
        return;
    }
    element.classList.add("MobileHidden");
}

function slideUpdater(){
    let slides = [document.getElementById("main__slide__first"),
                    document.getElementById("main__slide__second"),
                    document.getElementById("main__slide__third"),
                    document.getElementById("main__slide__fourth"),
                    document.getElementById("main__slide__fifth"),
                    document.getElementById("main__slide__sixth"),
                    document.getElementById("main__slide__seventh"),
                    document.getElementById("main__slide__eighth"),
                    document.getElementById("main__slide__ninth")];
    for (i = 0; i < 9; i++) {
        if (slides[i].classList.contains("ActiveSlide")){
            return;
        }
        return;
    }

    
}