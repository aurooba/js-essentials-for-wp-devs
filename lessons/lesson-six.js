// spread operator

const identity = {
	first: "Aurooba",
	last: "Ahmed",
	age: 31,
	colour: "black",
}

const aurooba = {
	...identity,
	colour: "green",

}

console.log(aurooba);