
/******************* Native filter  ***********************/
Array.prototype.myFilter = function(callback, context) {
	var arr = []
	for (var i = 0; i < this.length; i++) {
		if (callback.call(context, this[i], i, this))
			arr.push(this[i])
	}
	return arr
}

/******************* Lodash filter  ***********************/

function filter(array, predicate) {
	let index = -1
	let resIndex = 0
	const length = array == null ? 0 : array.length
	const result = [];

	while(++index < length) {
		const value = array[index];
		if (predicate(value, index, array)) {
			result[resIndex++] = value
		}
	}
	return result
}