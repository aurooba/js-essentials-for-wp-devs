// filtering arrays

const plans = [
	{ name: "Basic", price: 250 },
	{ name: "Economy", price: 375 },
	{ name: "Business", price: 1258 },
];

const affordablePlans = plans.filter((plan) => plan.price < 1000);

console.log(affordablePlans);
