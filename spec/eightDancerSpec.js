describe("eightDancer", function() {

  var eightDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    eightDancer = new makeEightDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(eightDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(eightDancer, 'step');
    eightDancer.step();
    expect(eightDancer.step.called).to.be.true;
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
