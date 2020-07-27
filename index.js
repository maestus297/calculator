function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (sum) {
	let result=0;

	for(let i=0; i<sum.length; i++){
		result += sum[i];
	}
	return result;
}

function multiply (mul) {
	let result=1;

	for(let i=0; i<mul.length; i++){
		result *= mul[i];
	}
	return result;
}

function power(a, b) {
	let result = 1;
	for(i=0; i<b;i++){
		result *= a
	}
	return result;
}

function factorial(a) {
	let x=1;
	if(a==0){
		return 1;
	} else if (a>0) {
	for(let i=1; i<=a;i++) {
		x *= i; 
	}
	return x;
}
}

// const container  = document.querySelector('#grid')

// for(let i=0; i<20; i++) {
//     let x = document.createElement('button');
// 	container.appendChild(x);
// 	x.setAttribute('class', 'button');
// }


let c;
c=0;

const display = document.querySelector('#scrn');
display.innerHTML = c;

function operator()