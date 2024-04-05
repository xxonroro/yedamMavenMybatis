console.log("basic.js start.");



// 매개 값 입력 => 반환;
function sum(n1 = 0, n2 = 0) {
	return n1 + n2;
}

let result = sum(10);
console.log(result);

const sum1 = function(a = 0, b = 0) {
	return a + b;
}

const sum2 = sum1;

console.log(sum1() + sum2(10));

function sum3(n1 = [0, 10]) {
	let result = 0;
	for (let num of n1) {
		result += num;
	}
	return result;
}

result = sum3([10, 20, 30]);

console.log(result);

showDay(["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"]);
function showDay(day = []) {
	const tr = document.createElement('tr');

	day.forEach(element => {
		let th = document.createElement('th');
		th.innerText = element;
		tr.appendChild(th);
	})
	document.querySelector("#header").appendChild(tr);
}

const showDate = function(start = 1, end = 31) {
	let spaces = getSpaces(5);

	let tr = document.createElement('tr');
	for (let i = 0; i < spaces; i++) {
		let td = document.createElement('td');
		td.innerText = '';
		tr.appendChild(td);
	}

	for (let i = start; i <= end; i++) {
		let td = document.createElement('td');
		td.innerText = i;
		tr.appendChild(td);

		if ((i + spaces) % 7 == 0) {
			document.querySelector("#list").appendChild(tr);
			tr = document.createElement('tr');
		}
	}
	document.querySelector("#list").appendChild(tr);
}
showDate(1, getLastDate(5));

// 공백 계산 함수.
function getSpaces(month = 1) {
	switch (month) {
		case 1: return 1;
		case 4: return 1;
		case 5: return 3;
	}
}

function getLastDate(month = 1) {
	switch (month) {
		case 1: return 31;
		case 4: return 30;
		case 5: return 31;
	}
}

