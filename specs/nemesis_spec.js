var assert =  require("assert");
var Nemesis = require("../nemesis");
var Hero = require("../hero");
var Rat = require("../rat");
var Food = require("../food");

var myNemesis = new Nemesis("Kyle", 100, 10, "decaf coffee");
var myHero = new Hero("Euan", 100, 10, "coffee");
var rat = new Rat("Bertie", 50, 10);
var pie = new Food("pie", 10);
var coffee = new Food("coffee", 20);
var decafCoffee = new Food("decaf coffee", 20);


describe("nemesis", function(){

  beforeEach( function() {
    myNemesis.health = 100;
  })
  it("Nemesis should have a name", function(){
    assert.equal("Kyle", myNemesis.name);
  });

  it("Nemesis should start with full health", function(){
    assert.equal(100, myNemesis.health);
  });

  it("Nemesis has favorite food", function(){
    assert.equal("decaf coffee", myNemesis.favouriteFood);
  });

  it("Nemesis should be able to talk", function(){
    assert.equal("It's me, your nemesis Kyle", myNemesis.talk());
  });
  
  it("Nemesis should be able to eat food", function(){
    assert.equal("I am eating pie", myNemesis.eat(pie) )
  });

  it("Food should increase nemisis health", function(){
    myNemesis.eat(pie);
    assert.equal(110, myNemesis.health);
  });

  it("Favorite food should increase health by 1.5 times standard replenishment value", function(){
    myNemesis.eat(decafCoffee);
    assert.equal(130, myNemesis.health);
  });

  it("Nemesis should lose health if eats poisoned food", function(){
    rat.touch(pie);
    myNemesis.eat(pie);
    assert.equal(90, myNemesis.health);
  });

  it("Nemesis can fight", function(){
    assert.equal("Take this.. and this... ", myNemesis.fight(rat));
  });

  it("Nemesis health should decreased when rat fights", function(){
    rat.fight(myNemesis);
    assert.equal(90, myNemesis.health);
  })

  it("Nemesis should be able to fight hero", function(){
    myNemesis.fight(myHero);
    assert.equal(90, myHero.health);
  })


});