$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
            rtl: false,
            loop: true,
            margin: 0,
            items: 8,
            merge: true,
            StartPosition: "first_slide",
            navigationText : ["",""],
            slideBy : 2
    });
    var owl=$(".owl-carousel");
	owl.owlCarousel();
	//$(".next") - находим нашу кнопку
	$(".carousel_right").click(function(){
		owl.trigger("next.owl.carousel");
	});
	$(".carousel_left").click(function(){
		owl.trigger("prev.owl.carousel");
	});
  });