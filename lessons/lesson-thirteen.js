
// async function getOrgData(...args) {
// 	// console log 0 and start a timer
// 	console.time('fetching getOrgData');
// 	// store time in a var
// 	const gitHubApi = 'https://api.github.com/orgs/';
// 	const orgEndpoints = args.map(org => fetch(`${ gitHubApi }${ org }`));
// 	const orgData = await Promise.all(orgEndpoints);
// 	const orgJson = await Promise.all(orgData.map(org => org.json()));
// 	// console log 1 and end the timer
// 	console.timeEnd('fetching getOrgData');
// 	return orgJson;
// }

// console.log(await getOrgData('facebook', 'google', 'microsoft'))

// // alternate version of the function using for loop
// async function getOrgDataAlt(...args) {
// 	console.time('fetching getOrgDataAlt');
// 	const gitHub = 'https://api.github.com/orgs/';
// 	const orgData = [];
// 	for (let org of args) {
// 		orgData.push(fetch(`${ gitHub }${ org }`));
// 	}
// 	var orgJson = [];
// 	for (let org of orgData) {
// 		orgJson.push(await (await org).json());
// 	}
// 	console.timeEnd('fetching getOrgDataAlt');
// 	return orgJson;
// }

// console.log(await getOrgDataAlt('facebook', 'google', 'microsoft'))


console.time('function time');
var x = 0;
for (var i = 0; i < 100000000; i++) {
	x += 1;
}
console.timeEnd('function time');