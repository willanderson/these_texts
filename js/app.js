$(document).ready(function() {

    var h = $('#drawer').outerHeight(true);
    $("#drawer").css("top", h * -1);


    $(window).resize(function(){
      var h = $('#drawer').outerHeight(true);
      $("#drawer").css("top", h * -1);
    })

    $("#about-btn").click(function(e) {
        $("body").toggleClass("menu--active");
        $('#about-btn').html($('#about-btn').text() == 'Close' ? 'Information' : 'Close')
        e.preventDefault();
    })



    $("#page-content").click(function(e) {
        if ($("body").hasClass("menu--active")) {
            $("body").removeClass("menu--active");
            $('#about-btn').html($('#about-btn').text() == 'Close' ? 'Information' : 'Close')
            e.preventDefault();
        }
    });

    $('.posts').infiniteScroll({
        // options
        path: '.pagination__next',
        append: '.post',
        status: '.scroller-status',
        scrollThresold: 100
    });


});
