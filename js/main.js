$(".toggle-icon").click(function() {
  $(".overlay").toggleClass("anim");
});

$(".animation").click(function() {
  $(".anim").toggleClass("reverse-animation");
});
$(".toggle-icon").click(function() {
  $("#nav-container").toggleClass("pushed");
});
