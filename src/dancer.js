// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top,left);
  this.time=0;
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  //this.setPosition(top, left);
}


makeDancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var that = this;
  var thisTime = this.timeBetweenSteps;
  setTimeout(function(){that.step()}, thisTime);
};

makeDancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  //this.setColor();
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.setColor = function(){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  // var red = (Math.floor(Math.random()*256));
  // var green = (Math.floor(Math.random()*256));
  // var blue = (Math.floor(Math.random()*256));
  var red = (Math.floor(Math.cos(this.time)*256));
  var green = (Math.floor(Math.sin(this.time)*256));
  var blue = (Math.floor((Math.sin(this.time)+Math.cos(this.time))*256));
  var stringBorder = this.$node.css('border');

  //stringBorder = stringBorder.slice(0,10)+' rgb('+ red + ',' +blue + ',' +green + ')';
  //console.log(stringBorder);
  //this.$node.css('border',stringBorder);
  this.$node.css('border-color','rgb('+ red + ',' +blue + ',' +green + ')');
};

