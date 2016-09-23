$(document).ready(function(){

	smoothScroll(500);


		//smoothscroll	
		function smoothScroll (duration) {
			$('h4').on('click', function(event) {

		    	var target = $(this);

		    	if( target.length ) {
		        	event.preventDefault();
		        	$('html, body').animate({
		            	scrollTop: target.offset().top
		       	 	}, duration);
		    	}
			});
		}
	


});