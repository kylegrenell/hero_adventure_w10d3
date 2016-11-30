var assert =  require("assert");
var Food = require("../food");
var pie = new Food("pie", 10);
var coffee = new Food("coffee", 20);
var Rat = require("../rat");
var rat = new Rat("Bertie");

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

});