// constructor
var Hero = function(name, health, favouriteFood){
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
};

Hero.prototype = {
  talk: function(){
    var saying = "My name is " + this.name;
    return saying;
  }
}



module.exports = Hero;