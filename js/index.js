$(document).ready(function(){
 $('#first').height($(window).height());
 $('#second').height($(window).height());
 $('#third').height($(window).height());
 $('#fourth').height($(window).height());
});

$("#goto-first").click(function(){
  $('html, body').animate({
      scrollTop: $("#first").offset().top
  }, 1000);
});

$("#goto-second").click(function(){
  $('html, body').animate({
      scrollTop: $("#second").offset().top
  }, 1000);
});

$("#goto-third").click(function(){
  $('html, body').animate({
      scrollTop: $("#third").offset().top
  }, 1000);
});

$("#goto-fourth").click(function(){
  $('html, body').animate({
      scrollTop: $("#fourth").offset().top
  }, 1000);
});

$("#foot-goto-first").click(function(){
  $('html, body').animate({
      scrollTop: $("#first").offset().top
  }, 1000);
});

$("#foot-goto-second").click(function(){
  $('html, body').animate({
      scrollTop: $("#second").offset().top
  }, 1000);
});

$("#foot-goto-third").click(function(){
  $('html, body').animate({
      scrollTop: $("#third").offset().top
  }, 1000);
});

$("#foot-goto-fourth").click(function(){
  $('html, body').animate({
      scrollTop: $("#fourth").offset().top
  }, 1000);
});