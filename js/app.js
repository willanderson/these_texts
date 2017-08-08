$(document).ready(function() {

  $("#about-btn").click(function(e){
      $("body").toggleClass("menu--active");
      e.preventDefault();
  })

  $("#page-content").click(function(e){
  if ( $("body").hasClass( "menu--active" ) ) {
      $("body").removeClass("menu--active");
      e.preventDefault();
    }
  });

  $("#chat-btn").click(function(){
      $('.main').velocity("slideUp");

  })

});
