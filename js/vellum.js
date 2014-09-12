$(document).ready(function(){
 
	 //Scroll navigation
	 $('.site-sub-nav a[href*=#]:not([href=#]), #home a[href*=#]:not([href=#])').click(function() {
	 	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	 	      var target = $(this.hash);
	 	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	 	      if (target.length) {
	 	      	if($(window).width() < 1023 && $(window).width() > 767) {
	 	      	 	var menu_offset = 255;
	 	      	 }else {
	 	      	 	var menu_offset = 210;
	 	      	 }
	 	        $('html,body').animate({ scrollTop: (target.offset().top - menu_offset)}, 1000);
	 	       
	 	        return false;
	 	      }
	 	    }
	 	  });
	 
	 //Click event to scroll to top
	 	$('.top a').click(function(){
	 		$('html, body').animate({scrollTop : 0},1000);
	 		return false;
	 	});	
	 	
	 //Pop-up	
	 $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	 	          disableOn: 700,
	 	          type: 'iframe',
	 	          mainClass: 'mfp-fade',
	 	          removalDelay: 160,
	 	          preloader: false,
	 	
	 	          fixedContentPos: false
	 	        });
	 	        
	//Attorney Tabs
	$('.attorney-nav a').click(function (){
		var id = '#' + $(this).attr('id')+'-tab';
		$(id).fadeIn();
		$(this).parent().addClass('on');
		$('.tab:not('+id+')').fadeOut();
		$('.attorney-nav a:not(#'+$(this).attr('id')+')').parent().removeClass('on');
	}); 
	
	//Testimonial Carousel
	 var owl = $("#carousel");
	 
	owl.owlCarousel({
		items : 3, 
		itemsDesktop : [1200,3], 
		itemsDesktopSmall : [1024,2], 
		itemsTablet: [768,1], 
		itemsMobile : false 
	});
	 
	// Custom Navigation Events
	$(".next").click(function(){
	owl.trigger('owl.next');
	})
	$(".prev").click(function(){
	owl.trigger('owl.prev');
	})
	 	
	 var s = skrollr.init({forceHeight: false});

});

