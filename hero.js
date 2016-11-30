var Hero = function(name, health, strength, favouriteFood){
  this.name = name;
  this.health = health;
  this.strength = strength;
  this.favouriteFood = favouriteFood;
};

Hero.prototype = {
  talk: function(){
    var saying = "My name is " + this.name;
    return saying;
  },
  
  eat: function(food){
    var eating = "I am eating " + food.name;
    if(food.poisoned === true){
      this.health -= food.value;
    } else {
      if(food.name === this.favouriteFood){
        this.health += (food.value * 1.5);
      } else {
        this.health += food.value;
      }
    }
    return eating;
  },

  fight: function( opponent ){
    var fighting = "I am fighting";
    opponent.health -= this.strength;
    return fighting;
  }
  
};

module.exports = Hero;