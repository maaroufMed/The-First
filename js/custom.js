$(function () {

    'use strict';

    // add class active in links
    $('nav li').click(function () {
        $(this).addClass('active my-color').siblings().removeClass('active my-color');
    });

    // add  class active to  home can you scroll top < 500px
    $(window).scroll(function () {
        if ($(this).scrollTop() < 500) {
            $('nav li a[data-scroll="home"]').parent().addClass('active my-color').siblings().removeClass('active my-color'); 
        }
    });

    // scroll to elements
    $('nav li a').click(function () {
        var myScroll = $(this).data('scroll');
        $('html').animate({
            scrollTop: $('#' + myScroll).offset().top + 2
        }, 600);

    });

    // add class active on link can you scroll
    $(window).scroll(function () {
        $('section').each(function () {
            var myAttr = $(this).attr('id');
            if($(window).scrollTop() > $(this).offset().top) {
                $('nav li a[data-scroll= "' + myAttr + '"]').parent().addClass('active my-color').siblings().removeClass('active my-color');
            }
        });
    });


    // change style navigation
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('nav').css({
               
                backgroundColor: '#fff',
                position:'fixed',
                color: '#111',
                boxShadow: '0 0  10px 0 #ccc'
            });

        } else {
            $('nav').css({
            backgroundColor: 'transparent',
            position: 'absolute',
            color: '#fff',
            boxShadow: 'none'
            });
        }
    });
    // change style navigation
  
    
   // star pugin===================================================

    // slider with owl carousel 
    $("header .owl-carousel").owlCarousel({

        items: 1,
        autoplay: true,
        loop: true,
        autoplayTimeout: 4000,
        nav: false,
        
    });
    

    // testimonilas with owl carousel 
    $('.testimonials').owlCarousel({
        items: 1,
        loop: true,
        margin: 40,
        dots: true,
        autoplay: true,
        center: true,
    });
    

    // our team with owl carousel 
    $('.my-item').owlCarousel({
		loop: false,
		center: false,
		items: 4,
		margin: 40,
		autoplay: false,
		dots:true,
		autoplayTimeout: 4000,
		smartSpeed: 450,
        responsiveClass:true,
        mouseDrag:true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1170: {
				items: 4
			}
		}

    });
    //  owl carousel 


    // mixitup plugin
   // portofolio
	var mixer = mixitup('.gallery', {
        
        animation: {
            duration: 300
        }
    });
    
    $('.project button').click(function () {
       
        $(this).addClass('active my-bg-color').siblings('button').removeClass('active my-bg-color');
    });
    // end mixitup plugin
    
    

    
    // magnific Popup plugin
    // project
    $('.gallery a').magnificPopup({
        type:'image',
        gallery: {
          enabled: true, // set to true to enable gallery
          navigateByImgClick: true, // click of image this click next image
          arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
        }
    });
    // end magnific Popup


    // end pugin===================================================







    // add new color to theme
    $('.fix-menu li').on('click', function () {
       
        $('body').attr('data-color', $(this).data('color'));
    });
    // add new color to theme


    // star fix menu 
    var myWidth = '-' + $('.fix-menu').innerWidth();

    var fixMenu = $('.fix-menu');
    
    $('.fix-menu i').click(function () {
        
        fixMenu.toggleClass('open');
        
        if (fixMenu.hasClass('open')) {
            
            fixMenu.animate({
                
                left: 0
            });
            
        } else {
            
            fixMenu.animate({
                
                left: myWidth
            });
        }

        
    });

    // add style to fix menu 
    $(window).scroll(function () {
        
        if ($(window).scrollTop() > 500) {

            $(' .fix-menu').css({
                boxShadow: '0 0 10px #e3e3e3'
            });
        } else {

            $(' .fix-menu').css({
                boxShadow: 'none'
            });
        }
    });
    // end fix menu 

    // star button top
    $('.top').click(function () {
    $('html').animate({
    scrollTop: 0
    }, 1000);
    });

    $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
    $('.top').show();
    } else {
    $('.top').hide();
    }
    });
    // end button top



        
    $('.about').click(function () {
             $(this).addClass('active').siblings().removeClass('active');

             if ($(this).hasClass('active')) {

                $('.box-about').show().siblings('.box-contact, .box-why-us').hide();
                $('.box-about-right').show().siblings().hide()

             }

            
        });

        $('.contact').click(function () {
             $(this).addClass('active').siblings().removeClass('active');

             if ($(this).hasClass('active')) {

                $('.box-contact').show().siblings('.box-about, .box-why-us').hide();

                $('.box-contact-right').show().siblings().hide()

             }


            
        });
                $('.why-us').click(function () {
             $(this).addClass('active').siblings().removeClass('active');

                if ($(this).hasClass('active')) {

                $('.box-why-us').show().siblings('.box-about, .box-contact').hide();
                $('.box-why-us-right').show().siblings().hide()

             }

        }); 

        // init about video magnificPopup

        $('.about-video').magnificPopup({

       
            type: 'iframe'
 

        });

        $(".box-why-us-right .owl-carousel").owlCarousel({

            items: 1,
            autoplay: true,
            loop: true,
            autoplayTimeout: 5000,
            nav: false
            
        });
		
		$('.brand').owlCarousel({
			items: 6,
			loop: true,
			smartSpeed: 5000,
			autoplay:true,
			autoplayTimeout:2000,
			margin: 40
		});


        //====================================
        // star animated elements on website
        //====================================

        // animate slider----------------------------------------------
        $('.animate-h1').css('transform', 'translateX(0)');
        $('.animate-h3, .animate-btn').css('transform', 'translateY(0)');
        $('.animate-p').css('opacity', '1');
        // animate slider------------------------------------------------


        // animate progress bar 
        $(document).on('scroll', function () {

            if($(window).scrollTop() > $('.about').offset().top ) {

            $('.progress span').each(function () {

            var widthSpan = $(this).data('prog');

            $(this).animate({
            width: widthSpan
            }, 1000);
            
            $(this).siblings('.text').text(widthSpan);

            });

            }
        });


        // services animate
        $(document).on('scroll', function () {

            if($(window).scrollTop() > $('.services').offset().top ) {

            $('.service-box').css('transform', 'rotateY(0)');

            }
        });


        // our team animate
        $(document).on('scroll', function () {

            if($(window).scrollTop() > $('.our-team').offset().top ) {

            $('.our-team .item').css('transform', 'rotateX(0) rotateY(0)');

        }
        });


        // testimonial animate
        $(document).on('scroll', function () {

            if($(window).scrollTop() > $('.testimonial').offset().top ) {

            $('.testimonial .item').css('opacity', '1');

        }
        });


        // portofolio animate
        $(document).on('scroll', function () {

            if($(window).scrollTop() > $('.project').offset().top ) {

            $('.project .gallery').css('transform', 'translateY(0)');
        }
        });


        // blog animate
        $(document).on('scroll', function () {

            if($(window).scrollTop() > $('.blog').offset().top ) {

            $('.blog .one, .blog .three, .blog .two').css('transform', 'rotateX(0) rotateY(0)');

        }
        });


        // contact animate
        $(document).on('scroll', function () {

            if($(window).scrollTop() > $('.contact').offset().top ) {

            $('.contact .form, .contact .contact-us').css('transform', 'rotateX(0)');

        }
        });
        //====================================
        // end animated elements on website
        //====================================


        $(window).on('load', function () {

             $('.animate-page .box').delay(1900).fadeOut();

            $('.animate-page').delay(1900).fadeOut();

            $('body').delay(1900).css({
                'overflow': 'visible'
            });
            
            
        });


});

