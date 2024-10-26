let a = Number();
let b = Number();
let x = Number();
let y = Number();

do {
	a = Number(prompt('Введите значение а: '));
	b = Number(prompt('Введите значение b: '));
	x = Number(prompt('Введите произвольное значение Х'));
} while (isNaN(a)||isNaN(b)||isNaN(x));

if (x>0) {
	y =Math.sqrt(1+Math.exp(a*x));
} else if (x <= -2) {
	y = Math.cos(b*(x**2)) + 0.5*x;
} else {
	y = 1 / (1 + a*Math.abs(x));
}

alert('Значение функции f(x) =' + y);