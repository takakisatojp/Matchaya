$(function() {
 $('#header a').click(function(){
  var id = $(this).attr('href');
  var position = $(id).offset().top;
  $('html, body').animate({
    'scrollTop': position
  },1000);
 });
});

$(function() {
    $('#footer a').click(function(){
     var id = $(this).attr('href');
     var position = $(id).offset().top;
     $('html, body').animate({
       'scrollTop': position
     },1000);
    });
   });