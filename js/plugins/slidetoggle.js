//Plugin para slide-toggle menu en la mediaquery de mobile
jQuery(document).ready(function($){

	/* prepend menu icon */
	$('nav').prepend('<div class="menu-icon">Menu</div>');
	
	/* toggle nav */
	$(".menu-icon").click(function(){
		$("nav>ul").slideToggle();
		$(this).toggleClass("active");
	});
});
