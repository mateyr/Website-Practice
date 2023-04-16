/*const navButton = document.querySelector('.nav__button');
const navMenu = document.querySelector('.nav__container');

navButton.addEventListener('click', ()=>{

    const navLogo = document.querySelector('.nav__logo');

    navMenu.classList.toggle('nav__container--active');

    if(navMenu.classList.contains('nav__container--active')){
        navLogo.setAttribute('src', './img/logo-bookmark-white.svg');
        navButton.setAttribute('src','./img/icon-close.svg');
    }else{
        navLogo.setAttribute('src', './img/logo-bookmark.svg');
        navButton.setAttribute('src','./img/icon-hamburger.svg');
    }

});
*/

// Seleccionar elementos
const navButton = document.querySelector('.nav__button');
const navMenu = document.querySelector('.nav__container');
const navLogo = document.querySelector('.nav__logo');


// Agregar evento de clic
navButton.addEventListener('click', toggleMenu);

// Función para alternar el menú
function toggleMenu() {
  navMenu.classList.toggle('nav__container--active');
  toggleImage(navMenu.classList.contains('nav__container--active'));
}

// Función para alternar la imagen de la marca y el botón de navegación
function toggleImage(isActive) {
  const logoSrc = isActive ? './img/logo-bookmark-white.svg' : './img/logo-bookmark.svg';
  const buttonSrc = isActive ? './img/icon-close.svg' : './img/icon-hamburger.svg';

  navLogo.setAttribute('src', logoSrc);
  navButton.setAttribute('src', buttonSrc);
}

const tabButtons = document.querySelectorAll('.features__tab');

tabButtons.forEach(tabButton => {
  tabButton.addEventListener('click', (e) =>{
    e.preventDefault();
    if(!tabButton.classList.contains('features__tab--active')){

      const articleNumber = tabButton.getAttribute('data-article');

      const articleShow = document.querySelector(`.features__article:nth-of-type(${articleNumber})`);

      removeActivElements('features__article--active');
      removeActivElements('features__tab--active');
      articleShow.classList.add('features__article--active');
      tabButton.classList.add('features__tab--active');
    }
    
  })
});


const removeActivElements = (selector) =>{
    const elementsActive = document.querySelectorAll(`.${selector}`);0
    if(elementsActive.length){
      elementsActive.forEach(elementsActive =>{
        elementsActive.classList.remove(selector);
      });
    }
}

const clickQuestions = document.querySelectorAll('.article__question');

clickQuestions.forEach(clickQuestions =>{
  clickQuestions.addEventListener('click', () =>{
    const arrow = clickQuestions.children[0];
    const answerContainer = clickQuestions.nextElementSibling;

    arrow.classList.toggle('article__arrow--rotate');
    answerContainer.classList.toggle('article__content--show');
  })
});


window.addEventListener('resize', () =>{
  if(document.querySelector('.nav__container--active')){
    navMenu.classList.remove('nav__container--active');
    toggleImage(false)
  }
});

