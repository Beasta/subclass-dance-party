var makeEightDancer = function(top,left,timeBetweenSteps){
  makeDancer.call(this,top,left,timeBetweenSteps);
  //this.time = 0;
  this.startTop = top;
  this.startLeft = left;
  this.step(0.01*timeBetweenSteps);
}

makeEightDancer.prototype = Object.create(makeDancer.prototype);
makeEightDancer.prototype.constructor = makeEightDancer;
makeEightDancer.prototype.step = function(timeBetweenSteps){
  //makeDancer.prototype.step.call(this);
  var that = this;
  setInterval(function(){
    that.setColor();
    that.changeSize();
    that.time += timeBetweenSteps*0.001;
    that.setPosition(that.startTop + 100*Math.sin(2*that.time),
       that.startLeft + 100*Math.cos(that.time));
    that.time += timeBetweenSteps*0.01;
  },timeBetweenSteps);

}
makeEightDancer.prototype.changeSize = function(){
  //this.$node.css('border-radius',10*Math.cos(this.time)+10+'px');
  var stringBorder = this.$node.css('border');
  stringBorder = stringBorder.substring(2);
  this.$node.css('border',Math.floor((10*Math.sin(this.time)+20))+stringBorder);
  //console.log(Math.floor((10*Math.cos(this.time)+10)));
}