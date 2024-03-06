// mapping over arrays

const plans = [
	{ name: "Basic", price: 250 },
	{ name: "Economy", price: 375 },
	{ name: "Business", price: 1258 }
]

const formattedPlans = plans.map(
	(plan) => {
		return {
			...plan,
			price: `$${plan.price}`
		}
	}
)
console.log(formattedPlans);