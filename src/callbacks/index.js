function sum(num1, num2) {
	return num1 + num2;
}

function calcular(num1, num2, callback) {
	return callback(num1, num2);
}

console.log(calcular(100, 5, sum));

function date(callback) {
	console.log(new Date());

	setTimeout(() => {
		let date = new Date();
		callback(date);
	}, 3000);
}

function Impimirdate(dateNow) {
	console.log(dateNow);
}

console.log(date(Impimirdate));
