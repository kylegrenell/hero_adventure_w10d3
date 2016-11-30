var assert =  require("assert");
var Hero = require("../hero");
var myHero = new Hero("Euan", 100, "coffee");

describe("hero", function(){

  // beforeEach( function() {
  // })
  it("Hero should have a name", function(){
    assert.equal("Euan", myHero.name);
  });

  it("Hero should start with full health", function(){
    assert.equal(100, myHero.health);
  });

  it("Hero has favorite food", function(){
    assert.equal("coffee", myHero.favouriteFood);
  });

  it("Hero should be able to talk", function(){
    assert.equal("My name is Euan", myHero.talk());
  });
  






});