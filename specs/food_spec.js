var assert =  require("assert");
var Food = require("../food");
var pie = new Food("pie", 10);
var coffee = new Food("coffee", 20);

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


});