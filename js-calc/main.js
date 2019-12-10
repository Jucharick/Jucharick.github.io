var storage = 0;
var el = document.getElementById("counter");
var currentOperator = "+";

function addNum(number) {
	el.value = parseFloat(el.value + number);
	if (el.value.length == 16) {
		el.value = el.value.substring(0, el.value.length-1);
	}
}

function addDot() {
	el.value = el.value + ".";
}

function addMinus() {
	el.value = el.value * (-1);
}

function setOperator(operator) {
	
	if (currentOperator=="+") {
		storage = storage + parseFloat(el.value);
		console.log(storage);
	}
	if (currentOperator=="-") {
		storage = storage - parseFloat(el.value);
		console.log(storage);
	}
	if (currentOperator=="*") {
		storage = storage * parseFloat(el.value);
		console.log(storage);
	}
	if (currentOperator=="/") {
		storage = storage / parseFloat(el.value);
		console.log(storage);
	}
	if (currentOperator=="%") {
		storage = storage * 0.01
	}
	currentOperator = operator;
	el.value = "";
}

// Math.abs - модуль числа

function showResult() {
	setOperator(currentOperator);
	el.value = parseFloat(storage);
	if (currentOperator=="+" || currentOperator=="-") {
		storage = 0;
	} else if (currentOperator=="*") {
		storage = 1;
	} else if (currentOperator=="/") {
		storage = Math.abs(storage) * parseFloat(el.value);
	}

	// console.log(storage)
}

function del(){
	el.value = el.value.substring(0, el.value.length-1);
	if (el.value.length == 0) {
		el.value = 0;
	}
}

function reset() {
	storage = 0;
	el.value = 0;
	storage2 = 0;
}

// Math.abs() - модуль числа