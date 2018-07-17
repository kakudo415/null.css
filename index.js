"use strict";
const URL = "https://kakudo415.github.io/null.css/";
let client = new XMLHttpRequest();
client.onreadystatechange = () => {
	if (client.readyState == 4 && client.status == 200) {
		let version = JSON.parse(client.responseText);
		let latest = version[version.length - 1];
		document.write(`<link rel="stylesheet" href="${URL}${latest}/null.css">\n`);
	} else {
		console.error("Failed to load null.css");
	}
};
client.open("GET", URL + "version.json", true).send();
