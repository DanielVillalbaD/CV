/**** SCROLL SPY ****/

var acumulativeOffset = function(element) {
    var top = 0;
  
    do {
      top += element.offsetTop || 0;
      element = element.offsetParent;
    } while (element);
  
    return top + 100;
  };
  
  function menuActive(event) {
    var portadaOffset = acumulativeOffset(document.getElementById("nav-container")) + 200;
    var quienSoyOffset = acumulativeOffset(document.getElementById("about-me"));
    var educacionOffset = acumulativeOffset(document.getElementById("edu-exp"));
    var contactoOffset = acumulativeOffset(document.getElementById("contacto"));
    var pageOffset = window.pageYOffset;
  
    if (pageOffset >= 0 && pageYOffset < portadaOffset) {
      removeBlink();
      document.getElementById("portadamen").classList.add("blink");
    } else if (pageYOffset >= portadaOffset && pageYOffset < quienSoyOffset) {
      removeBlink();
      document.getElementById("aboutmen").classList.add("blink");
    }  else if (pageYOffset >= quienSoyOffset && pageYOffset < educacionOffset && document.querySelector("[data='educacion']").classList.contains('tab-on')) {
        removeBlink();
        document.getElementById("educamen").classList.add("blink");
    } else if (pageYOffset >= quienSoyOffset && pageYOffset < educacionOffset && document.querySelector("[data='experiencia']").classList.contains('tab-on')) {
        removeBlink();
        document.getElementById("expmen").classList.add("blink");
    } else if (pageYOffset >= quienSoyOffset && pageYOffset < educacionOffset && document.querySelector("[data='sobre-mi']").classList.contains('tab-on')) {
        removeBlink();
        document.getElementById("videomen").classList.add("blink");
    }else if (pageYOffset >= educacionOffset && pageYOffset < contactoOffset) {
      removeBlink();
      document.getElementById("contactmen").classList.add("blink");
    }
  }
  
  window.addEventListener("scroll", menuActive);
  
  /**** SCROLL SPY ****/
/**** SMOOTH TRANSITION ****/

var navItems = document.querySelectorAll("ul.sticky-ul li a");

for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", getElementsToGo);

  function getElementsToGo(event) {
    var goTo = this.href.split("#");
    var sectionToGo = goTo[goTo.length - 1];
    var elementToGo = getElementToScroll(sectionToGo);

    removeBlink();
    this.classList.add("blink");

    if (
      sectionToGo == "educacion" ||
      sectionToGo == "sobre-mi" ||
      (sectionToGo == "experiencia" &&
        !document.getElementById(sectionToGo).classList.contains("tab-on"))
    ) {
      $("ul li.star-tab").removeClass("tab-on"); //No conseguía hacerlo en JS sin un for y me rendí, si se puede hacer sin un for o sin modificar el html pues molaría saber como
      $(".tabs-content").removeClass("tab-on"); //No conseguía hacerlo en JS sin un for y me rendí, si se puede hacer sin un for o sin modificar el html pues molaría saber como
      document
        .querySelector("[data='" + sectionToGo + "']")
        .classList.add("tab-on");
      document.getElementById(sectionToGo).classList.add("tab-on");
    }

    if (goTo.length === 2) {
      event.preventDefault();
      scrollToElement(elementToGo);
    }
  }
}

function removeBlink() {
  for (var i = 0; i < navItems.length; i++) {
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
  document.body.scrollTop += jump - 35;
  document.documentElement.scrollTop += jump - 35;

  if (!element.lastJump || element.lastJump > Math.abs(jump)) {
    element.lastJump = Math.abs(jump);
    setTimeout(function() {
      scrollToElement(element);
    }, 40);
  } else {
    element.lastJump = null;
  }
}

/**** SMOOTH TRANSITION ****/