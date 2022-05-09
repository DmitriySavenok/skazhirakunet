let body = document.querySelector('#body');
let header = document.querySelector("#header");
let menuButton = document.querySelector("#header__menu-button");
let headerLink = document.querySelector(".header__link");
let headerContent = document.querySelector("#header__content");

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
