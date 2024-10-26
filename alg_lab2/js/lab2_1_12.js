let a = prompt('Введите значение катета а: ');
let b = prompt('Введите значение катета b: ');

first_catheter = parseInt(a);
second_catheter = parseInt(b);

let c = Math.sqrt(first_catheter**2 + second_catheter**2 );
let perimeter = first_catheter + second_catheter + c;



alert('Гипотенуза прямоугольного треугольника равна = ' + c + '\nПериметр прямоугольного треугольника равен = '+ perimeter );
