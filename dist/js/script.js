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
    var element = document.getElementById("header-mobile-menu");
    var burgerIcon = document.getElementById("burger-icon");
    var closeIcon = document.getElementById("close-icon");
    element.classList.toggle("header-mobile-menu-show");
    burgerIcon.classList.toggle("burger-icon-hide");
    closeIcon.classList.toggle("close-icon-show");
 }

 $(document).ready(function(){
    $('.carousel-screen__slider').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        draggable:false
    });
});

$(function(){
    if ( $(window).width() < 768) {
        var ind = 2;
        $('.carousel-screen__slider').slick('slickRemove', ind-1);
    }
});
