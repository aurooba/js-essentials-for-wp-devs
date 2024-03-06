// destructuring

const userInfo = {
	first: "Aurooba",
	last: "Ahmed",
	// age: 31,
	popularPosts: [
		{ id: 23, title: "Annual Review 2023" },
		{ id: 467, title: "Introducing Super List" }
	]
}

const { first: firstName, age = 25, } = userInfo

console.log(firstName, age);

// function userInfo({age}) {
// 	const { age } = args
// 	//do something
// }
