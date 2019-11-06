 $(document).ready(function() {
 	$('.dropdown-toggle').dropdown("toggle");
   	$('.card-like').click(function(){
    	$(this).toggleClass('active');
   })

   $('.gamburger-nav').click(function(){
     $(this).toggleClass('active');
     $('ul.navbar-nav').toggleClass('active');
     $('.navbar.navbar-expand').toggleClass('active');
   })
   $(function(){
     $(document).click(function(event) {
       if ($(event.target).closest("ul.navbar-nav").length || $(event.target).closest(".gamburger-menu").length) return;
       $('ul.navbar-nav').removeClass('active');
       $('.gamburger-nav').removeClass('active');
       $('.navbar.navbar-expand').removeClass('active');
       event.stopPropagation();
     });
   });
   $('.catalog-title-block').click(function(){
     $(".left-menu-col").toggleClass('active');
   })
   $(function(){
     $(document).click(function(event) {
       if ($(event.target).closest(".catalog-title-block").length) return;
       $('.left-menu-col').removeClass('active');
       event.stopPropagation();
     });
   });
   $('.footer-accordion').click(function(){
     $(this).toggleClass('active');
   })
 });