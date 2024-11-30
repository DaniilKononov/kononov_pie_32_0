function getComposition() {
	let n;
	n = document.getElementById("numberN").value;
	n = Number(n);
	let composition = 1;
	if (Number.isInteger(n) && n > 0) {
		for (let i = 1; i <= n; i++) {
			composition *= (1+i*0.1);
		}
		composition = composition.toFixed(3);
	} else {
		composition = 'Произведение невозожно посчитать, так как было введено не целое число больше 0';
	}
	document.getElementById("resultContainer").innerHTML=composition;
}
