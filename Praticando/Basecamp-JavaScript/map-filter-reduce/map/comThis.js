const laranja = {
	value: 2,
};

const maca = {
	value: 1.5,
};

function mapComThis() {
	const array = [1, 2, 3, 4, 5];

	return array.map(function (item) {
		return item * this.value;
	}, apple);
}

console.log(mapComThis());
