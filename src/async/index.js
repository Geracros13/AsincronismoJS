const doSomethingAsync = () => {
	return new Promise((resolve, reject) => {
		true
			? setTimeout(() => {
					resolve("Has algo asincrono");
			  }, 3000)
			: reject(new Error("Errorciñooo"));
	});
};

const doSomething = async () => {
	const someThing = await doSomethingAsync();
	console.log(someThing);
};

console.log("Antes");
doSomething();
console.log("Despues");

const anotherFunction = async () => {
	try {
		const someThing = await doSomethingAsync();
		console.log(someThing);
	} catch (error) {
		console.error(error);
	}
};

console.log("Antes 2");
anotherFunction();
console.log("Despues 2");
