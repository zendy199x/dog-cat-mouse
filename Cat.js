var Mouse = require('./Mouse');

function Cat() {
 this.stomach = [];
}

Cat.prototype.eat = function(mouse) {
	if(animal instanceof Mouse) {
		this.stomach.push(animal);
	} else {
		throw new Error('Cat can only eat mouse');
	}
};
module.exports = Cat;