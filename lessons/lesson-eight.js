// optional chaining

const userInfo = {
	first: "Aurooba",
	last: "Ahmed",
	age: 31,
	location: {
		country: "Canada",
	},
	popularPosts: [
		{ id: 23, title: "Annual Review 2023" },
		{ id: 467, title: "Introducing Super List" },
	],
	slogan: () => 'Huzzah'
};

const country = userInfo.location?.country
console.log(userInfo.popularPosts?.[0].id);

// console.log(userInfo.location.country);