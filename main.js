/* -- scroll to top button -- */
$(document).ready(function(){
    $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 400);
            return false;
        });
});


/* --- scrollspy target ---  */
$(document).ready(function () {
  $("body").attr({
    "data-spy": "scroll",
    "data-target": "#sidenav",
    "data-offset": "85" //not working
  });
}); 
