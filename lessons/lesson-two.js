// Variable types

function myVariables() {
	console.log(myVar);
	// console.log(myLet);
	var myVar = 'myVar';
	console.log(myVar);
	let myLet = 'myLet';
	console.log(myLet);
	const outsideConst = 'outsideConst';
	console.log(outsideConst);
	if (true) {
		console.log(outsideConst);
		const insideConst = 'insideConst';
		console.log(insideConst);
		var insideVar = 'insideVar';
		let insideLet = 'insideLet';
		console.log(insideLet);
		insideLet = 'now outisde';
		console.log(insideLet);
	}
	insideVar = 'reassigned';
	// console.log(insideConst);
	console.log(insideVar);

}



myVariables();