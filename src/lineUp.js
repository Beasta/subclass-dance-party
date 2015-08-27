var lineUp = function(){
  var halfHeight = Math.floor($("body").height()/2);
  var width = 0;
  console.dir(dancers);

  var widthIncrement = Math.floor($("body").width()/window.dancers.length);
  for (var i = 0; i < window.dancers.length; i++) {
    if(window.dancers[i] instanceof makeEightDancer){
      window.dancers[i].startTop = halfHeight;
      window.dancers[i].startLeft = width;
    }else if(window.dancers[i] instanceof makeBoundingDancer){
      window.dancers[i].startTop = halfHeight;
      window.dancers[i].startLeft = width;
      window.dancers[i].currentTop = halfHeight;
      window.dancers[i].currentLeft = width;
    }else{
      window.dancers[i].setPosition(halfHeight,width);
    }
    width += widthIncrement;
  };
}