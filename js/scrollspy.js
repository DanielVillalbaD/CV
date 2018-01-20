var navItems = document.querySelectorAll("ul.sticky-ul li a");


for (var i =0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', getElementsToGo);
    
    function getElementsToGo(event) {
        var goTo = this.href.split("#");
        var sectionToGo = goTo[goTo.length - 1];
        var elementToGo = getElementToScroll(sectionToGo);

        removeBlink();
        this.classList.add("blink");

        if (sectionToGo == "educacion" || sectionToGo == "sobre-mi" || sectionToGo == "experiencia" && !document.getElementById(sectionToGo).classList.contains('tab-on')) {
            $('ul li.star-tab').removeClass('tab-on'); //No conseguía hacerlo en JS y me rendí, para luego seguir intentándolo
            $('.tabs-content').removeClass('tab-on'); //No conseguía hacerlo en JS y me rendí, para luego seguir intentándolo
            document.querySelector("[data='" + sectionToGo + "']").classList.add('tab-on');
            document.getElementById(sectionToGo).classList.add('tab-on');          
        } 

        if (goTo.length === 2) {
            event.preventDefault();
            scrollToElement(elementToGo);
        }
    };
}

function removeBlink() {
    for (var i =0; i < navItems.length; i++) {
        navItems[i].classList.remove("blink");
    }
}

function getElementToScroll(id) {
    var elem;
    if (id === "") {
        elem = document.getElementById("portada");
    } else {
        elem = document.getElementById(id);
    }

    return elem;
}

function scrollToElement(element) {
    
    var jump = parseInt(element.getBoundingClientRect().top * 0.2);
    document.body.scrollTop += jump;
    document.documentElement.scrollTop += jump;

    if(!element.lastJump || element.lastJump > Math.abs(jump)) {
    element.lastJump = Math.abs(jump);
    setTimeout(function() {
        scrollToElement(element);
    }, 40);
    } else {
        element.lastJump = null;
    }
}