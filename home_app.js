var main = function() {

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

document.addEventListener("DOMContentLoaded", function(){

  el_autohide = document.querySelector('.navbar');
  
  // add padding-top to bady (if necessary)
  navbar_height = document.querySelector('.navbar').offsetHeight;
  document.body.style.paddingTop = navbar_height + 'px';

  if(el_autohide){
    var last_scroll_top = 0;
    window.addEventListener('scroll', function() {
          let scroll_top = window.scrollY;
         if(scroll_top < last_scroll_top) {
              el_autohide.classList.remove('scrolled-down');
              el_autohide.classList.add('scrolled-up');
          }
          else {
              el_autohide.classList.remove('scrolled-up');
              el_autohide.classList.add('scrolled-down');
          }
          last_scroll_top = scroll_top;
    }); 
    // window.addEventListener
  }
  // if

}); 