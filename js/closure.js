const arr = [10, 12, 15, 21];
for(var i = 0; i < arr.length; i++) {
	setTimeout(function(i_local) {
		return function() {
			console.log(i_local);
		}
	}(i), 3000); 
}

for(var i =0; i < arr.length; i++) {
	setTimeout(function(i_local) {
		return function() {
			console.log('The index of this number is: ')
		}
	}(i), 3000)
}

const arr = [10, 12, 15, 21];
for(let i = 0; i < arr.length; i++) {
	setTimeout(function() {
		console.log(i)
	}, 3000)
}