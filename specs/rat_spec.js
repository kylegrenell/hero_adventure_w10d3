var assert =  require("assert");
var Rat = require("../rat");
var rat = new Rat("Bertie", 50, 10);
var Hero = require("../hero");
var myHero = new Hero("Euan", 100, 10, "coffee");
var Food = require("../food");
var pie = new Food("pie", 10);

describe("rat", function(){

  it("The rat should have a name", function(){
    assert.equal("Bertie", rat.name);
  });

  it("The rat should be able to touch the food", function(){
    assert.equal("I am touching the pie", rat.touch(pie));
  });

  it("The rats health should decrease by the heros strength when fighting", function(){
    myHero.fight(rat);
    assert.equal(40, rat.health);
  });

  it("The rat can fight", function(){
    assert.equal("I am fighting", rat.fight(myHero));
  })




});