
// 1. validator
// 2. animations for navigation
// 3. animation for title
// 4. pause carousel on form interaction
// 5. pause form on scroll
// 6. smooth scroll
// 7. active tabs for portfolio
// 8. link to tab
// 9. swipe carousel on mobile
// 10. Date
// 11. lazy loader (not used currently)
// 12. back button to last tab


// 1. form validation

$(function()
{
    function after_form_submitted(data)
    {
        if(data.result == 'success')
        {
            $('form#reused_form').hide();
            $('#success_message').show();
            $('#error_message').hide();
        }
        else
        {
            $('#error_message').append('<ul></ul>');

            jQuery.each(data.errors,function(key,val)
            {
                $('#error_message ul').append('<li>'+key+':'+val+'</li>');
            });
            $('#success_message').hide();
            $('#error_message').show();

            //reverse the response on the button
            $('button[type="button"]', $form).each(function()
            {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if(label)
                {
                    $btn.prop('type','submit' );
                    $btn.text(label);
                    $btn.prop('orig_label','');
                }
            });

        }//else
    }

	$('#reused_form').submit(function(e)
      {
        e.preventDefault();

        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function()
        {
            $btn = $(this);
            $btn.prop('type','button' );
            $btn.prop('orig_label',$btn.text());
            $btn.text('Sending ...');
        });


                    $.ajax({
                type: "POST",
                url: 'handler.php',
                data: $form.serialize(),
                success: after_form_submitted,
                dataType: 'json'
            });

      });
});

// 2. animate navigation on page load

$('.about').delay(2500).queue(function() {
                           $(this).addClass("roll-in-right");
                           $(this).dequeue();
                       });

$('.recentWork').delay(1900).queue(function() {
                          $(this).addClass("roll-in-right");
													  $(this).dequeue();

                      });

$('.contact').delay(2300).queue(function() {
                          $(this).addClass("roll-in-right");
                          $(this).dequeue();
                      });

$('.branding').delay(2100).queue(function() {
                          $(this).addClass("roll-in-right");
                          $(this).dequeue();
                      });



// 3. animate slogan on page load

$('.intro').delay(1200).queue(function() {
                          $(this).addClass("focus-in-expand");
                          $(this).dequeue();
                      });



// 4. pause carousel on form interaction

     $('input, textarea').focus(function(){
        $("#carousel-example-generic").carousel('pause');
     }).blur(function() {
        $("#carousel-example-generic").carousel('cycle');
     });

		 $('input[type="radio"], input[type="checkbox"]').click(function(){
				$("#carousel-example-generic").carousel('pause');
		 });


// 5. pause carousel on scroll

 $(window).scroll(function() {
 		$('#carousel-example-generic').each(function(){
 		var imagePos = $(this).offset().top;

 		var topOfWindow = $(window).scrollTop();
 			if (imagePos < topOfWindow+1) {
 				$(this).carousel('pause');
        $(this).dequeue();

      }
        else $("#carousel-example-generic").carousel('cycle');
 		});
 	});


// 6. Smooth scroll/

    $('a[href^="#"]').click(function(){
           var that = this;
           $('html, body').animate({
                   scrollTop: $( $(that).attr('href') ).offset().top
           }, 400);
           return false;
    });


// 7. active tabs
  $('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
    $(this).addClass('active').siblings().removeClass("active");
  })

// 8. enable link to tab
  var hash = location.hash.replace(/^#/, '');  // ^ means starting, meaning only match the first hash
  if (hash) {
      $('.nav-tabs a[href="#' + hash + '"]').tab('show').addClass('active').siblings().removeClass("active");
  }

// 9. swipe carousel on mobile
$('.carousel').on('touchstart', function(event){
    const xClick = event.originalEvent.touches[0].pageX;
    $(this).one('touchmove', function(event){
        const xMove = event.originalEvent.touches[0].pageX;
        const sensitivityInPx = 5;

        if( Math.floor(xClick - xMove) > sensitivityInPx ){
            $(this).carousel('next');
        }
        else if( Math.floor(xClick - xMove) < -sensitivityInPx ){
            $(this).carousel('prev');
        }
    });
    $(this).on('touchend', function(){
        $(this).off('touchmove');
    });
});

// 10. date
document.getElementById("year").innerHTML = new Date().getFullYear();


// 11. lazy loader

   document.addEventListener("DOMContentLoaded", function() {
     var lazyloadImages = document.querySelectorAll("img.lazy");
     var lazyloadThrottleTimeout;

     function lazyload () {
       if(lazyloadThrottleTimeout) {
         clearTimeout(lazyloadThrottleTimeout);
       }

       lazyloadThrottleTimeout = setTimeout(function() {
           var scrollTop = window.pageYOffset;
           lazyloadImages.forEach(function(img) {
               if(img.offsetTop < (window.innerHeight + scrollTop)) {
                 img.src = img.dataset.src;
                 img.classList.remove('lazy');
               }
           });
           if(lazyloadImages.length == 0) {
             document.removeEventListener("scroll", lazyload);
             window.removeEventListener("resize", lazyload);
             window.removeEventListener("orientationChange", lazyload);
           }
       }, 20);
     }

     document.addEventListener("scroll", lazyload);
     window.addEventListener("resize", lazyload);
     window.addEventListener("orientationChange", lazyload);
   });



// 12. back button to last tab

   $(document).ready(function() {
  // add a hash to the URL when the user clicks on a tab
  $('a[data-toggle="tab"]').on('click', function(e) {
    history.pushState(null, null, $(this).attr('href'));
  });
  // navigate to a tab when the history changes
  window.addEventListener("popstate", function(e) {
    var activeTab = $('[href=' + location.hash + ']');
    if (activeTab.length) {
      activeTab.tab('show');
    } else {
      $('.nav-tabs a:first').tab('show');
    }
  });
});
