var asyncTwo = new Promise(function(resolve) {
	setTimeout(function() {
		resolve(2)
	}, 0)
})

function addThree(value) {
	return Promise.resolve(value + 3)
}

function multiple(value) {
	return Promise.resolve(value * 2)
}