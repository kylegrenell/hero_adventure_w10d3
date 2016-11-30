var Food = require('./food');
var Hero = require('./hero');
var Rat = require('./rat');
var Nemesis = require('./nemesis');

var pie = new Food("pie", 10);
var coffee = new Food("coffee", 20);
var myHero = new Hero("Euan", 100, 10, "coffee");
var rat = new Rat("Bertie", 50, 5);
var myNemesis = new Nemesis("Kyle", 100, 10, "decaf coffee");
var decafCoffee = new Food("decaf coffee", 20);

console.log("The sneaky little rat touches the pie: ", rat.touch(pie) );
console.log( "Euan tucks into a now poisoned pie: ", myHero.eat(pie) );
console.log( "Euans health has declined to ", myHero.health + " out of 100");
console.log("In a fit of rage a weakened Euan strikes out at the rat: ", myHero.fight(rat) );
console.log("The rat has been struck, its health is: ", rat.health + " out of 100" );
console.log("The rat says: ", rat.fight(myHero) + " back");
console.log("Euan has been bitten: ", myHero.health);
console.log("Euan's nemesis Kyle then switches out his ", myNemesis.touch(coffee) + " coffee for decaf");
console.log("Euan's checks if it's " + coffee.decaffed + " that he's drinking decaf, he is not happy with Kyle");


