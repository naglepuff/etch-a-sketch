var side = 16;
var size = 640;

$(document).ready(function(){
  for(var i = 0; i < side; i++){
    for(var j = 0; j < side; j++){
      var box = $("<div class='box'></div");
      box.appendTo('#frame');
    }
  }
  $('.box').css("width", size/side);
  $('.box').css("height", size/side);
});

$(document).ready(function(){
  $('#reset_button').click(function(){
    var newSide = prompt("Enter desired grid size");
    var intNewSide = parseInt(newSide);

    if(isNaN(intNewSide)){
      intNewSide = 16;
    }

    $('.box').remove();
    for(var i = 0; i < intNewSide; i++){
      for(var j = 0; j < intNewSide; j++){
        var box = $("<div class='box'></div>")
        box.appendTo('#frame');
      }
    }
    $('.box').css("width", size/intNewSide);
    $('.box').css("height", size/intNewSide);
  })
});

$(document).ready(function(){
  $(document).on("mouseover", ".box", function(){
    $(this).addClass('hovered');
  });
});
