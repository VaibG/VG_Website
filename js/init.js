/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

 jQuery(document).ready(function($) {

/*----------------------------------------------------*/
/* FitText Settings
------------------------------------------------------ */

    setTimeout(function() {
	   $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
	 }, 100);


/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});


/*----------------------------------------------------*/
/* Highlight the current section in the navigation bar
------------------------------------------------------*/

	var sections = $("section");
	var navigation_links = $("#nav-wrap a");

	sections.waypoint({

      handler: function(event, direction) {

		   var active_section;

			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		},
		offset: '35%'

	});


/*----------------------------------------------------*/
/*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

   $('header').css({ 'height': $(window).height() });
   $(window).on('resize', function() {

        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })
   });


/*----------------------------------------------------*/
/*	Fade In/Out Primary Navigation
------------------------------------------------------*/

   $(window).on('scroll', function() {

		var h = $('header').height();
		var y = $(window).scrollTop();
      var nav = $('#nav-wrap');

	   if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
	      nav.fadeOut('fast');
	   }
      else {
         if (y < h*.20) {
            nav.removeClass('opaque').fadeIn('fast');
         }
         else {
            nav.addClass('opaque').fadeIn('fast');
         }
      }

	});


/*----------------------------------------------------*/
/*	Modal Popup
------------------------------------------------------*/

    $('.item-wrap a').magnificPopup({

       type:'inline',
       fixedContentPos: false,
       removalDelay: 200,
       showCloseBtn: false,
       mainClass: 'mfp-fade'

    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
    		e.preventDefault();
    		$.magnificPopup.close();
    });

/*----------------------------------------------------*/
/*  Modal Popup
------------------------------------------------------*/

  $('.profile-pic').waypoint(function() {
    $('.profile-pic').css({
      animation: "fadeInUp 1s ease-in-out",
      opacity: "1"
    });
  }, { offset: '75%' });
$('.description').waypoint(function() {
    $('.description').css({
      animation: "fadeInUp 1s ease-in-out",
      opacity: "1"
    });
  }, { offset: '75%' });

$('.headerr').waypoint(function() {
    $('.headerr').css({
      animation: "fadeInUp 1s ease-in-out",
      opacity: "1"
    });
  }, { offset: '75%' });




/*----------------------------------------------------*/
/*	contact form
------------------------------------------------------*/

   // $('form#contactForm button.submit').click(function() {

   //    $('#image-loader').fadeIn();

   //    var contactName = $('#contactForm #contactName').val();
   //    var contactEmail = $('#contactForm #contactEmail').val();
   //    var contactSubject = $('#contactForm #contactSubject').val();
   //    var contactMessage = $('#contactForm #contactMessage').val();

   //    var data = 'contactName=' + contactName + '&contactEmail=' + contactEmail +
   //             '&contactSubject=' + contactSubject + '&contactMessage=' + contactMessage;

   //    $.ajax({

	  //     type: "POST",
	  //     url: "inc/sendEmail.php",
	  //     data: data,
	  //     success: function(msg) {

   //          // Message was sent
   //          if (msg == 'OK') {
   //             $('#image-loader').fadeOut();
   //             $('#message-warning').hide();
   //             $('#contactForm').fadeOut();
   //             $('#message-success').fadeIn();   
   //          }
   //          // There was an error
   //          else {
   //             $('#image-loader').fadeOut();
   //             $('#message-warning').html(msg);
	  //           $('#message-warning').fadeIn();
   //          }

	  //     }

   //    });
   //    return false;
   // });


   // $(window).scroll( function(){
    
   //      /* Check the location of each desired element */
   //      $('.fadeIn').each(function(i){
            
   //          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
   //          var bottom_of_window = $(window).scrollTop() + $(window).height();
            
   //          /* If the object is completely visible in the window, fade it it */
   //          if( bottom_of_window > bottom_of_object ){
                
   //              $(this).animate({'opacity':'1'},1500);
                    
   //          }
            
   //      }); 
    
   //  });
   
});


/*----------------------------------------------------*/
/*  Remodal
------------------------------------------------------*/

// var listSwiper = {};
//   // open popup event
//   $(document).on("opened", ".remodal", function() {
//     // init swiper in project popup
//     var remodalId = $(this).data("remodal-id");
//     ga("send", "event", "Project", "open", remodalId);
//     if (!listSwiper[remodalId]) {
//       new Swiper($(this).children(".swiper-container")[0], {
//         preloadImages: false,
//         lazyLoading: true,
//         pagination: ".swiper-pagination",
//         paginationClickable: true,
//         slidesPerView: 1,
//         spaceBetween: 10,
//         keyboardControl: true,
//         a11y: true,
//         nextButton: ".swiper-button-next",
//         prevButton: ".swiper-button-prev"
//       });
//       listSwiper[remodalId] = true;
//     }
//   });
// });








