// Mobile Carousel Swipe Support

  $(document).ready(function() {  
  		 $("#myCarousel").swiperight(function() {  
    		  $(this).carousel('prev');  
	    		});  
		   $("#myCarousel").swipeleft(function() {  
		      $(this).carousel('next');  
	   });  
	});  

// Scroll to Top

(function ($){
    $('a[href^="#"]').on('click', function(event) {
	    var target = $(this.hash);
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 70}, 500);
	});
}(jQuery));