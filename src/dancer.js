// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top,left);
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
  this.setColor();
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
  var red = (Math.floor(Math.random()*256)).toString(16);
  var green = (Math.floor(Math.random()*256)).toString(16);
  var blue = (Math.floor(Math.random()*256)).toString(16);
  var pad = '00';
  red = pad.substring(0,pad.length - red.length) + red;
  green = pad.substring(0,pad.length - green.length) + green;
  blue = pad.substring(0,pad.length - blue.length) + blue;
  this.$node.css('border','10px solid #' + red + blue + green);
};

