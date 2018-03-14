/*navbar related*/

/*Code that displays the colored bar in the skillbars*/

$(".bar").each(function(){
  $(this).find(".bar-inner").animate({
    width: $(this).attr("data-width")
  },2000)
});
