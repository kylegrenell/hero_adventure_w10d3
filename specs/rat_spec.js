var assert =  require("assert");
var Rat = require("../rat");
var rat = new Rat("Bertie");
var Food = require("../food");
var pie = new Food("pie", 10);

describe("rat", function(){

  it("The rat should have a name", function(){
    assert.equal("Bertie", rat.name);
  });

});