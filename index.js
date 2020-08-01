const operators   = {
	'plus': function(a, b){ return a + b},
	'minus': function(a, b){ return a - b},
	'multiply': function (a, b) {return a * b},
	'divide': function (a, b){return a / b},
}

let x = '';  // display variable, concatanating string
let a;       // operator parameter
let b;       // operator parameter
let op = ''; // operator designation e.g., 'plus', 'minus' etc.
const display = document.getElementById("scrn");

function displayValue(n) {
	x += "" + n;
	display.value = x;
	b = parseInt(x); 
}


function parameters(){
	a = b;
	b = 0;
	x = '';
	display.value = x;
}

function assign(operator){
	if(op != '') {
		equal();
		op = operator;
		parameters();
	} else {
	op = operator;
	parameters();
	}
}

function equal() {
	if(op !='') {
	x = "" + (operators[op](a, b));
	b = parseInt(x);
	op = '';
	}
	if(x == Infinity) {
		display.value = "the cake is a lie";
	} else {
	display.value = x;
	}
	
	}

	
function reset() {
	x = '';
	display.value = x;
	a = '';
	b = '';
}