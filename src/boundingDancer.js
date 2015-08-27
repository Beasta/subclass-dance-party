var makeBoundingDancer = function(top,left,timeBetweenSteps,boundingHeight){
  makeDancer.call(this,top,left,timeBetweenSteps);
  this.boundingHeight = boundingHeight;
  this.startTop = top;
  this.startLeft = left;
  this.currentTop = top;
  this.currentLeft = left;
  this.step();
}

makeBoundingDancer.prototype = Object.create(makeDancer.prototype);
makeBoundingDancer.prototype.constructor = makeBoundingDancer;
makeBoundingDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  
  //var this.currentLeft = this.startLeft;
  if(this.currentTop-this.startTop > 0){ //case where current position is higher than start 
    this.currentTop = this.startTop;
  }else{
    this.currentTop = this.startTop + $("body").height() * 0.05;
  }
  console.log($("body").height());
  this.setPosition(this.currentTop, this.currentLeft);

}