// fetching data with async/await

// https://api.github.com/users/

async function getGithubUserData() {
	const gitHubReponse = await fetch('https://api.github.com/users/aurooba')
	const userData = await gitHubReponse.json()
	console.log(userData);
}

getGithubUserData()