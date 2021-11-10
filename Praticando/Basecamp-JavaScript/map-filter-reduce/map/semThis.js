function mapSemThis(arr) {
	const nums = [2, 4, 6, 8, 10];

	return arr.map(function (item) {
		return item * 2;
	});
}

console.log(mapSemThis(nums));

console.log(nums);
