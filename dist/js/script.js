function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

function headerMobileMenuToggleShow() {
    var element = document.getElementById("header-mobile-toggle");
    var burgerIcon = document.getElementById("icon-burger");
    var closeIcon = document.getElementById("icon-close");
    element.classList.toggle("header-mobile-toggle-show");
    burgerIcon.classList.toggle("icon-burger-hide");
    closeIcon.classList.toggle("icon-close-show");
 }

 $(document).ready(function(){
     $('.screen-carousel').slick({
         arrows: false,
         dots: true
     });
 });