$(document).ready(function() {

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
    history: true,
    status: '.scroller-status',
    scrollThresold: 150
  });
});
