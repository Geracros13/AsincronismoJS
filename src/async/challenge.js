const fetchData = require("../utils/fetchData");

const API = "https://rickandmortyapi.com/api/character/";

const anotherFunction = async (url) => {
	try {
		const data = await fetchData(url);
		const personaje = await fetchData(`${API} ${data.results[5].id}`);
		const origin = await fetchData(personaje.origin.url);

		console.log(data.info.count);
		console.log(personaje.name);
		console.log(origin.dimension);
	} catch (error) {
		console.error(error);
	}
};

console.log("Antees");
anotherFunction(API);
console.log("Despueess");
