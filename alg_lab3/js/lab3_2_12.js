let first_number = Number();						
let second_number = Number();		
let third_number = Number();					


do {
	first_number = Number(prompt('Введите первое число: '));
	second_number = Number(prompt('Введите второе число: '));		
	third_number = Number(prompt('Введите третье число: '));						
} while (isNaN(first_number)||isNaN(second_number)||isNaN(third_number));
	
let minimum	= first_number;
if (second_number < minimum) {
	minimum = second_number;
}
if (third_number < minimum) {
	minimum = third_number;
}

alert('Наименьшим числом является: ' + minimum);