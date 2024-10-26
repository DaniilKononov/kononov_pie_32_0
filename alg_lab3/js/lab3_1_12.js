
let A = Number();
let B = Number();
let C = Number();

do {
	A = Number(prompt('Введите целое число A: '));
	B = Number(prompt('Введите целое число B: '));;
	C = Number(prompt('Введите целое число C: '));
} while (isNaN(A)||isNaN(B)||isNaN(C));

if (A > 0 &&  B > 0 && C > 0) {
	alert('Все числа являются положительными.');
}   else {
	alert('Одно или несколько чисел не являются положительными.');
}
