function distinct(arr) {
	return arr.filter( (e, i, arr) => {
		return arr.indexOf(e, i + 1) === -1;
	})
}

function fn(a){
    console.log(a);
    var a=2;
    function a(){}
    console.log(a);
}
fn(1);

function  fn(a){
    var a;
    function a(){}
    console.log(a);
    a = 2;
    console.log(a);
}

fn(1);

// 所有全局变量都是window或Global的属性
// 函数声明会被提到范围作用域的顶端
// 变量声明被提到范围作用域的顶端
// 变量声明比函数声明优先级高，变量声明优于函数声明，如果两者同时存在，后被提升的函数声明会覆盖被提升的变量声明
// 变量赋值不会被提升，到执行行代码才开始赋值

window.onload = function() {
	var target = document.getElementById('target')
	function callback(e) {
		alert('hello')
		target.removeEventListener('click', fn)
	}
	target.addEventListener('click', fn)
}

// A closure is the combination of a function and the lexical environment within which that function was declared. 

var counter = (function() {
	var privateCounter = 0;
	function changeBy(val) {
		privateCounter += val;
	}
	return {
		increment: function() {
			changeBy(1)
		},
		decrement: function() {
			changeBy(-1)
		},
		value: function() {
			return privateCounter
		}
 	}
})();

function Teacher(lastname, firstname, age, gender, subject) {
	Person.call(this, lastname, firstname, age, gender)
	this.subject = subject
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.greeting = function() {

}




