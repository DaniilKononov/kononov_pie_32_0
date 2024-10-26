let number = parseInt(prompt('Введите трехзначное число: '));

let first_number = parseInt(Math.trunc(number % 10));
let second_number = parseInt(Math.trunc((number % 100) / 10));
let third_number = parseInt(Math.trunc(number / 100));

let result = (first_number + '') + (second_number + '') + (third_number + '');

alert('Полученное число справа налево = ' + result);	



