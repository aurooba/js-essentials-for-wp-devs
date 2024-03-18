// lesson-fourteen.js

const userObj = {
	name: "Aurooba",
	age: 31,
	greeting() {
		return `Hi! My name is ${this.name}!`
	}
}

console.log(
	userObj["greeting"]()
);

function User(name) {
	this.name = name
	this.age = null
	this.greeting = function greeting() {
		return `Hi! My name is ${this.name}!`
	}
}

const secondUser = new User("Rani")

console.log(secondUser.greeting());