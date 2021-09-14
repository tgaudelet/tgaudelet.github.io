var prevScrollpos = window.pageYOffset;
var main = function() {


	$( window ).scroll(function() {
		var currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos) {
			$(".navbar").style.top = "0";
		} else {
			$(".navbar").style.top = "-200px";
		}
		prevScrollpos = currentScrollPos;
	});

	$('.navbar a').click(function(){
		var newPage = $(this).attr('id');
		
		$('html,body').animate({
        scrollTop: $("." + newPage).offset().top},
        'slow');
	
	});
	$('.dropdown a').click(function(){
		var newPage = $(this).attr('id');
		
		$('html,body').animate({
        scrollTop: $("." + newPage).offset().top},
        'slow');

	});
	
	
	$('.item').click(function() {
				
		if ($(this).hasClass('current'))
		{
			$(this).siblings('.description').toggle();
			$(this).removeClass('current');
		}
		else
		{
			$('.item').removeClass('current');
			$('.description').hide();
			$(this).addClass('current');
			$(this).siblings('.description').show();			
		};
	});
	
	$('body').bind('copy paste',function(e) {
    e.preventDefault(); return false; 
	});

	$(document).on('scroll', function() {

	    if($(this).scrollTop()<$('.navbar').position().top){
		$('.navbar a').removeClass('active');
		$('.dropdown-content a').removeClass('active');
		$('.navtop').addClass('active');
	    }
	else if ($(window).scrollTop() + $(window).height() == $(this).height()){
		$('.navbar a').removeClass('active');
		$('.dropdown-content a').removeClass('active');
		$('.navcontact').addClass('active');
	    }
	else if ($(this).scrollTop()>=$('.projects').position().top){
		$('.navbar a').removeClass('active');
		$('.dropdown-content a').removeClass('active');
		$('.navprojects').addClass('active');
	    }
	else if ($(this).scrollTop()>=$('.resume').position().top){
		$('.navbar a').removeClass('active');
		$('.dropdown-content a').removeClass('active');
		$('.navresume').addClass('active');
	    }
	else if ($(this).scrollTop()>=$('.publications').position().top){
		$('.navbar a').removeClass('active');
		$('.dropdown-content a').removeClass('active');
		$('.navpublications').addClass('active');
	    }
	else if ($(this).scrollTop()>=$('.home').position().top){
		$('.navbar a').removeClass('active');
		$('.dropdown-content a').removeClass('active');
		$('.navhome').addClass('active');
	    }
	});
	
 	/*$('.navbar a').click(function() {
		$('.navbar a').removeClass('active');
		$(this).addClass('active');
	});*/

	//$(window).scroll(function() {
  	//	if ($(document).scrollTop() > 50) {
    	//		$('.navbar').addClass('shrink');
   	//		$('.shrink').removeClass('navbar');
  	//		} else {
   	//		$('.shrink').addClass('navbar');
   	//		$('.navbar').removeClass('shrink');
	//			  }
	//			});

}

$(document).ready(main);
