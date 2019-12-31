$(document).ready(function() {


  if (sessionStorage.getItem('splash') !== 'true') {
    setTimeout(function() {
      $('body').addClass('loaded');
      createCookie("adSeen", "1", 1000);
    }, 1000);
    sessionStorage.setItem('splash', 'true');
  } else {
    $('#loader-wrapper').hide();
    $('body').addClass('loaded');
  }


  var h = $('#drawer').outerHeight(true);
  $("#drawer").css("top", h * -1);


  $(window).resize(function() {
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
