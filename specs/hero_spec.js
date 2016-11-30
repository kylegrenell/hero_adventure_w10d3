var assert =  require("assert");
var Hero = require("../hero");
var myHero = new Hero("Euan", 100, 10, "coffee");
var Rat = require("../rat");
var rat = new Rat("Bertie", 50, 10);
var Food = require("../food");
var pie = new Food("pie", 10);
var coffee = new Food("coffee", 20);

describe("hero", function(){

  beforeEach( function() {
    myHero.health = 100;
  })
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
  
  it("Hero should be able to eat food", function(){
    assert.equal("I am eating pie", myHero.eat(pie) )
  });

  it("Food should increase hero's health", function(){
    myHero.eat(pie);
    assert.equal(110, myHero.health);
  });

  it("Favorite food should increase health by 1.5 times standard replenishment value", function(){
    myHero.eat(coffee);
    assert.equal(130, myHero.health);
  });

  it("Hero should lose health if eats poisoned food", function(){
    rat.touch(pie);
    myHero.eat(pie);
    assert.equal(90, myHero.health);
  });

  it("Hero can fight", function(){
    assert.equal("I am fighting", myHero.fight(rat));
  });





});