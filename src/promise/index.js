const somethingWillHappen = () => {
	return new Promise((resolve, reject) => {
		if (true) {
			resolve("Todo bieeen!");
		} else {
			reject("La cagaste chavo, no cumplio!!!");
		}
	});
};

somethingWillHappen()
	.then((response) => console.log(response))
	.catch((err) => console.error(err));

const somethingWillHappen2 = () => {
	return new Promise((resolve, reject) => {
		if (true) {
			setTimeout(() => {
				resolve("Truee");
			}, 3000);
		} else {
			const error = new Error("La cagaste mi chavo");
			reject(error);
		}
	});
};

somethingWillHappen2()
	.then((response) => console.log(response))
	.catch((err) => console.error(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
	.then((response) => {
		console.log("Arreglo de resultados", response);
	})
	.catch((err) => {
		console.error(err);
	});
