var makeEightDancer = function(top,left,timeBetweenSteps){
  makeDancer.call(this,top,left,timeBetweenSteps);
  this.time = 0;
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

    that.setPosition(that.startTop + 100*Math.sin(2*that.time), that.startLeft + 100*Math.cos(that.time));
    that.time += 0.5;
  },timeBetweenSteps);
}
