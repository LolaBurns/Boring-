$(document).ready(function() {
  $("p#first").click(function() {
    $("p#first").removeClass();
    $("p#first").addClass("highlight");
  });
  
  $("p#second").click(function() {
    $("p#second").removeClass();
    $("p#second").addClass("highlight");
  });
});
