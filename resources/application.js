$(document).ready(function(){
//    reslide();
});

$("#about").css("color", "gray").css("max-width","50%");
//$("body").css("background-color","white");
$("#aboutMe")
  .show()
  .addClass("selectable")
  .click(function (e){
  alert("You clicked something!");
});
$(".selectable").click(function(e){
  alert("You clicked something!");
});

$("#style").change(function(){
  
  var selectedStyle= $(this).val();
  console.log(selectedStyle);
  switch(selectedStyle){
    case 'blue': $("body").css('background-color','blue'); break;
    case 'green': $("body").css('background-color','green');break;
    case 'gray': $("body").css('background-color','gray');break;
  }
});

// function reslide(){
//   $('.slide-right').delay(1000).animate({width:'0'}, 600).delay(8000).animate({width:'100%'}, 200, function(){
// setTimeout(reslide, 3000);
// }); 
// }