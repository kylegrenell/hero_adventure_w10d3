var assert =  require("assert");

var Nemesis = require("../nemesis");
var Hero = require("../hero");
var Rat = require("../rat");
var Food = require("../food");

var myNemesis = new Nemesis("Kyle", 100, 10, "decaf coffee");
var myHero = new Hero("Euan", 100, 10, "coffee");
var pie = new Food("pie", 10);
var coffee = new Food("coffee", 20);
var rat = new Rat("Bertie", 50, 10);
var decafCoffee = new Food("decaf coffee", 20);

describe("food", function(){

  it("Food should have a name", function(){
    assert.equal("pie", pie.name);
  });

  it("Food should have replenishment value", function(){
    assert.equal(20, coffee.value);
  });

  it("Food should not be poisoned if not touched by rat", function(){
    assert.equal(false, pie.poisoned);
  });

  it("The food should be poisoned when touched by the rat", function(){
    rat.touch(pie);
    assert.equal(true, pie.poisoned);
  });

  it("Nemesis can replace heros coffee with decaf", function(){
    console.log(coffee.decaffed); // false
    myNemesis.touch(coffee);
    console.log(coffee.decaffed); // true
    assert.equal(true, coffee.decaffed);
  });

});