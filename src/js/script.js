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

 // Carousel-screen slider settings
 $(document).ready(function(){
    $('.carousel-screen__slider').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        draggable:false
    });
});

// They-need-your-help slider
$(document).ready(function(){
    $('.they-need-your-help__slider').slick({
        appendArrows: ('.slider-navigation-button'),
        slidesToShow: 4,
        responsive: [
            {
              breakpoint: 1315,
              settings: {
              slidesToShow: 3
                }
              },
            {
              breakpoint: 1048,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 689,
              settings: {
                slidesToShow: 1,
                dots:true,
                arrows: false
              }
            }
            
          ]
    });
});

// Deletes qr-code slide from carousel on tablets and smartphones.
$(function(){
    if ( $(window).width() < 768) {
        var ind = 2;
        $('.carousel-screen__slider').slick('slickRemove', ind-1);
    }
});


// Button to top
$(function() {

    $(window).scroll(function() {
   
    if($(this).scrollTop() != 0) {
   
    $('#toTop').fadeIn();
    
    } else {
   
    $('#toTop').fadeOut();
   
    }
   
    });
    
    $('#toTop').click(function() {
   
    $('body,html').animate({scrollTop:0},800);
   
    });
    
   });


// Contact us (send message script)
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Ваше сообщение отправлено. Спасибо!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

// Scroll to href script
$(document).ready(function() {
  jQuery(".scrollto").click(function () {
  elementClick = jQuery(this).attr("href")

  var element = document.getElementById("header-mobile-menu");
  var burgerIcon = document.getElementById("burger-icon");
  var closeIcon = document.getElementById("close-icon");
  element.classList.toggle("header-mobile-menu-show");
  burgerIcon.classList.toggle("burger-icon-hide");
  closeIcon.classList.toggle("close-icon-show");

  destination = jQuery(elementClick).offset().top - 16;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
  return false;
  });
});
