var Cat = require('./Cat');
var Mouse = require('./Mouse');
var Dog = require('./Dog');

var cat = new Cat();
var mouse = new Mouse('Mickey');
var dog = new Dog();
try {
	cat.eat(dog);
}.catch (error) {
	console.log('Eror while cat eating a dog ')

cat.eat(dog);
console.log(cat);