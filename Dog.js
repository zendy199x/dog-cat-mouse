function Dog() {
	this.stomach =[];
}

Dog.prototype.eat = function(cat) {
	this.stomach.push(cat);
}

Dog.prototype.sayHi = function (arguments) {
	console.log('Hi! I am a dog. My name is ' + chalk.red(this.name));	
};

module.exports = Dog;