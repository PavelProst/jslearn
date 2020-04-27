let car = {
	carFirst: {
		name: 'Fiat',
		color: 'red',
		maxSpeed: 250,
		audio: {
			brand: 'Sony',
			speakers: 12
				},
		cost: 1e3,
		update: upSpeed
	},
	carSecond: {
		name: 'Seat',
		color: 'red'
	}
};

car.carFirst.update(car.carFirst);

function upSpeed (desper) {
	console.log (desper.maxSpeed);
	desper.maxSpeed = 300;
	console.log	(desper.maxSpeed);
}

console.log (car.carFirst.maxSpeed);