(function () {
	"use strict";
	
    jQuery(document).ready(function($){
		
		

       //For mobile menu
		$( "#navigation" ).clone().prependTo( $( ".nav-mobile" ) ); 
        //$( ".megamenu-call" ).clone().appendTo( $( ".cell-info-mobile" ) );
        $( ".header-getStarted-btn" ).clone().appendTo( $( ".nav-mobile" ) );

        $(".plan-pack-items").slick({
            slidesToShow: 3,
            arrows: false,
            dots: false,
            autoplay: false,
            infinite: true,
		    prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
            nextArrow: "<button type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>",		
            mouseDrag: false,
            //touchMove: false,
			animateOut: 'slide',
            //centerMode: true,
            //centerPadding: '60px',
            responsive: [{
                breakpoint: 991,
                settings: {
                    autoplay: false,
                    slidesToShow: 1,
                    dots: true,
                }
            }]
            
        });
        
        $(".reviws-sec-items").slick({
            slidesToShow: 1,
            arrows: false,
            dots: true,
            autoplay: false,
            infinite: true,
		    prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
            nextArrow: "<button type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>",		
            mouseDrag: false,
            //touchMove: false,
			animateOut: 'slide',
            //centerMode: true,
            //centerPadding: '60px',
        });
        
        
        $(".process-inner-area").slick({
            slidesToShow: 3,
            arrows: false,
            dots: false,
            autoplay: false,
            infinite: false,
		    prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
            nextArrow: "<button type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>",		
            mouseDrag: false,
            //touchMove: false,
			animateOut: 'slide',
            //centerMode: true,
            //centerPadding: '60px',
            responsive: [{
                breakpoint: 991,
                settings: {
                    autoplay: false,
                    slidesToShow: 1,
                    dots: false,
                    arrows: true,
                }
            }]
            
        });
        
        
        //AOS animation
		AOS.init({
          offset: 200,
          duration: 600,
          easing: 'ease-in-sine',
          delay: 100,
          once: true    
        });
        
        //Custom Scroll
        $(".custom-scroll").niceScroll({
          cursorwidth: "5px"
        }); 
        
		
		$(".scrollup").on("click", function() {
			$("body,html").stop(false, false).animate({
				scrollTop: 0
			}, 800);
			return false;
		});
		
		$(window).on('scroll',function() {
		  if ($(this).scrollTop() > 0){  
			  $('header.for-sticky').addClass("sticky");
		     } else {
			  $('header.for-sticky').removeClass("sticky");
		   }
		   
		   if ($(this).scrollTop() > 200) {
				$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
           
		});
        
       $('.more-info').on('click', function() {
            $('.np11-pmi').removeClass('active');
            $(this).parent().parent().addClass('active');
            $(this).addClass('inactive');
        });
        $('.less-info').on('click', function() {
            $('.np11-pmi').removeClass('active');
        });
		
    });

}(jQuery));	
