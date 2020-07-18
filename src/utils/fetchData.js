let xmlHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = (urlApi) => {
	return new Promise((resolve, reject) => {
		const xhttp = new xmlHttpRequest();
		xhttp.open("GET", urlApi, true); //El tercer valor es activar el asincronismo en xmlhttprequest
		xhttp.onreadystatechange = () => {
			//5 Estados (Inicializado, Cargando, Cargado, Error, Completado)

			if (xhttp.readyState === 4) {
				xhttp.status === 200
					? resolve(JSON.parse(xhttp.responseText))
					: reject(new Error("Hubo un error", urlApi));
			}
		};
		xhttp.send();
	});
};

module.exports = fetchData; //Porque estamos utilizando Node
