function getSum(mas) {
	let sum = 0;
	for (let i=0; i<mas.length; i++) {
		if ((mas[i]%2 == 0) && (mas[i]>0)) {
			sum += mas[i];
		} 
	}
	return sum;
}

function createArray() {
	let st = document.getElementById("numbers").value;
	let arr = st.split(' ');
	for (let i=0; i<arr.length; i++){
		arr[i] = Number(arr[i]);
	}
	for (let i=0; i<arr.length; i++){
		if (Number.isInteger(arr[i])) {
			if (arr[i] == 0) {
				arr.splice(i, arr.length - i);
				document.getElementById("resultContainer").innerHTML=arr;
				return arr;
			} else {
				if (i == arr.length - 1) {
					arr = [];
					document.getElementById("resultContainer").innerHTML='Введите последовательность заново';
				}
			}
		} else {
			arr = [];
			document.getElementById("resultContainer").innerHTML='Введено не целое число';
		}
	}
	return arr;
}

function count() {
	let arr = createArray();
	if (arr.length == 0) {
		document.getElementById("answerContainer").innerHTML='Нельзя вычислить,так как набор не введен';
	} else {
		document.getElementById("answerContainer").innerHTML=getSum(arr);
	}
}

