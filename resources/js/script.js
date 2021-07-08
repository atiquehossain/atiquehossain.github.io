google_ad_client = "ca-pub-2783044520727903";
/* jQuery_demo */
google_ad_slot = "2780937993";
google_ad_width = 728;
google_ad_height = 90;


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);



$(document).ready(function() {
           $(".menu-icon").on("click", function() {
                 $("nav ul").toggleClass("showing");
           });
     });

     // Scrolling Effect

     $(window).on("scroll", function() {
           if($(window).scrollTop()) {
                 $('nav').addClass('black');
           }

           else {
                 $('nav').removeClass('black');
           }
     })

     $(document).ready(function(){
       var mixer =mixitup('.cardfilter');
     });

     // ========================================================================= //

//      [ inspact element disable ]
    // ========================================================================= //

    document.onkeydown = function(e) {
      if(event.keyCode == 123) {
        location.href = "https://github.com/atiquehossain";
         return false;
      }
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {

         location.href = "https://github.com/atiquehossain";
        return false;
      }
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        location.href = "https://github.com/atiquehossain";
        return false;
      }
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        console.log('You cannot inspect Element');
        return false;
      }
      if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        location.href = "https://github.com/atiquehossain";

        return false;
      }
      if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
        location.href = "https://github.com/atiquehossain";

        return false;
      }
    }
    // prevents right clicking
   // document.addEventListener('contextmenu', e => e.preventDefault().  alert("right click disable"));





    // ========================================================================= //

