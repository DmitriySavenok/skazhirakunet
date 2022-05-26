let body = document.querySelector('#body');
let header = document.querySelector("#header");
let menuButton = document.querySelector("#header__menu-button");
let headerLink = document.querySelector(".header__link");
let headerContent = document.querySelector("#header__content");

// Изменение атрибута href для перехода к форме обратной связи
function needHelpButtonHref() {
  let needHelpButton = document.querySelector("#need-help-button");
  let lifeStoriesButton = document.querySelector("#life-stories-button");
  let theyNeedHelpButton = document.querySelector("#they-need-help-button");

  if (body.classList.contains('index-body') == true) {
    needHelpButton.href="#contact-us";
  }
  if (body.classList.contains('index-body') == true) {
    lifeStoriesButton.href="#life-stories-section";
  }
  if (body.classList.contains('index-body') == true) {
    theyNeedHelpButton.href="#they-need-help-section";
  }
}

// Активный пункт навигации
function headerMenuActiveLink() {
  let bodyClass = document.getElementById("body").classList.item(0);

  switch(bodyClass) {
    case 'life-stories-body':
      let lifeStories = document.querySelector(".header__life-stories-link")
      lifeStories.classList.add("header-active-link");
      break;
    case 'requisites-body':
      let requisitesBody = document.querySelector(".requisites-button")
      requisitesBody.classList.add("header-active-link");
      break;
    case 'documents-body':
      let documentsBody = document.querySelector(".documents-page-link")
      documentsBody.classList.add("header-active-link");
    break;
  }
}

needHelpButtonHref();
headerMenuActiveLink();

function headerMenuToggle() {
  body.classList.toggle("noscroll");
  menuButton.classList.toggle("opened");
  headerContent.classList.toggle("opened");
}

function headerMenuClose() {
  body.classList.remove("noscroll");
  menuButton.classList.remove("opened");
  headerContent.classList.remove("opened");
}

function headerMenu() {
  headerMenuToggle();

  if (menuButton.classList.contains('opened') == true) {
    document.addEventListener( 'click', (e) => {
      const withinBoundaries = e.composedPath().includes(header);
      if ( ! withinBoundaries ) {
        headerMenuClose();
      }
    })
  }
}

document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = 120;

      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });

      headerMenuClose();
  });
});
