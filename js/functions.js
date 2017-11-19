
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

/***************** Native map ****************************/

Array.prototype.myMap = function(callback, context) {
	var arry = []
	for (var i = 0; i < this.length; i++) {
		arr.push(callback(this[i], i, this))
	}
	return arr
}


/***************** Lodash map  ****************************/

function map(array, iteratee) {
	let index = -1
	const length = array == null ? 0 : array.length
	const result = new Array(length)

	while(++index < length) {
		result[index] = iteratee(array[index], index, array)
	}
	return result;
}


/**************** Native reduce ****************************/

Array.prototype.myReduce = function(callback, initialVal) {
	var accumulator = (initialVal === undefined) ? undefined : initialVal
	for (var i = 0; i < this.length; i++) {
		if (accumulator !== undefined) {
			accumulator = callback.call(undefined, accumulator, this[i], i, this);
		} else
			accumulator = this[i]
	}
	return accumulator
}


/**************** Lodash reduce ****************************/

function reduce(collection, iteratee, accumulator) {
	const func = Array.isArray(collection) ? arrayReduce : baseReduce
	const initAccum = arguments.length < 3
	return func(collection, iteratee, accumulator, initAccum, baseEach)
}

function arrayReduce(array, iteratee, accumulator, initAccum) {
	let index = -1
	const length = array == null ? 0 : array.length

	if (initAccum && length) {
		accumulator = array[++index]
	}
	while(++index < length) {
		accumulator = iteratee(accumulator, array[index], index, array)
	}
	return accumulator
}

function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
	eachFunc(collection, (value, index, collection) => {
		accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection)
	})
	return accumulator
}




