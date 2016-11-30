var assert =  require("assert");
var Hero = require("../nemesis");
var kyle = new Hero("Kyle", 100, 10, "decaf coffee");
var myHero = new Hero("Euan", 100, 10, "coffee");
var Rat = require("../rat");
var rat = new Rat("Bertie", 50, 10);
var Food = require("../food");
var pie = new Food("pie", 10);
var coffee = new Food("coffee", 20);
var decafCoffee = new Food("decaf coffee", 20);

describe("nemesis", function(){

  beforeEach( function() {
    kyle.health = 100;
  })
  it("Nemesis should have a name", function(){
    assert.equal("Kyle", kyle.name);
  });

  it("Nemesis should start with full health", function(){
    assert.equal(100, kyle.health);
  });

  it("Nemesis has favorite food", function(){
    assert.equal("decaf coffee", kyle.favouriteFood);
  });

  it("Nemesis should be able to talk", function(){
    assert.equal("It's me, your nemesis Kyle", kyle.talk());
  });
  
  it("Nemesis should be able to eat food", function(){
    assert.equal("I am eating pie", kyle.eat(pie) )
  });

  it("Food should increase nemisis health", function(){
    kyle.eat(pie);
    assert.equal(110, kyle.health);
  });

  it("Favorite food should increase health by 1.5 times standard replenishment value", function(){
    kyle.eat(decafCoffee);
    assert.equal(130, kyle.health);
  });

  it("Nemesis should lose health if eats poisoned food", function(){
    rat.touch(pie);
    kyle.eat(pie);
    assert.equal(90, kyle.health);
  });

  it("Nemesis can fight", function(){
    assert.equal("Take this.. and this... ", kyle.fight(rat));
  });

  it("Nemesis health should decreased when rat fights", function(){
    rat.fight(kyle);
    assert.equal(90, kyle.health);
  })

  it("Nemesis should be able to fight hero", function(){
    kyle.fight(myHero);
    assert.equal(90, myHero.health);
  })


});