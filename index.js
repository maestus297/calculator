const operators   = {
	'plus': function(a, b){ return a + b},
	'minus': function(a, b){ return a - b},
	'multiply': function (a, b) {return a*b},
	'divide': function (a, b){return a/b},
}

let x = '';  
let a;
let b;
let op;
const display = document.getElementById("scrn");

function displayValue(n) {
	x += "" + n;
	display.value = x;
	b = parseInt(x); 
}


function parameters(){
	a = b;
	b = 0;
	x = ''
	display.value = x;
}

function assign(operator){
	op = operator;
}

function equal() {
	x = "" + (operators[op](a, b));
	display.value = x;
	}

	
function reset() {
	x = '';
	display.value = x;
	a = '';
	b = '';
}



