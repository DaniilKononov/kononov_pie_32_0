let a = Number();
let b = Number();
let x = Number();
let y = Number();

do {
	a = Number(prompt('Введите значение а: '));
	b = Number(prompt('Введите значение b: '));
	x = Number(prompt('Введите произвольное значение Х'));
} while (isNaN(a)||isNaN(b)||isNaN(x));

switch(x) {
	case 0:
		y = 1 / (1 + a*Math.abs(x));
		break;
	case -2:
		y = Math.cos(b*(x**2)) + 0.5*x;
		break;
	case 1:
		y =Math.sqrt(1+Math.exp(a*x));
		break;
	default:
		alert('Нет решений');
}

alert('Значение функции f(x) =' + y);