describe("boundingDancer", function() {

  var boundingDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    boundingDancer = new makeBoundingDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(boundingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that moves it up and down", function() {
    sinon.spy(boundingDancer, 'setPosition');
    boundingDancer.step();
    expect(boundingDancer.setPosition.called).to.be.true;
  });

  // describe("dance", function(){
  //   it("should call step at least once per second", function(){
  //     sinon.spy(blinkyDancer, "step");
  //     expect(blinkyDancer.step.callCount).to.be.equal(0);
  //   blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  //     clock.tick(timeBetweenSteps);

  //     expect(blinkyDancer.step.callCount).to.be.equal(1);

  //     clock.tick(timeBetweenSteps);
  //     expect(blinkyDancer.step.callCount).to.be.equal(2);
  //   });
  // });
});