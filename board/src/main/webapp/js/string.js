// form 요소 제거
document.querySelector('form').remove();
document.querySelector('#show').innerHTML = "";

let str1 = "hello";
console.log(typeof str1);

let str2 = " hello ";
console.log(str2.toUpperCase());
console.log(str2.trim().toUpperCase().substring(0, 2));
console.log(str2.trim().toUpperCase().slice(-2));

let str3 = "hello,nice,kind";
console.log(str3.indexOf("nice"));

let str4 = str3.replace('hello', '안녕');
console.log(str3, str4);

let str3Ary = str3.split(",");
console.log(str3Ary);
str3.charAt(0); // 주어진 위치에 해당하는 문자 반환.

// 성별을 구분하는 함수.
function checkGender(sso = "031005-3234567") {
	// 1, 3 -> 남자 반환 	2, 4 -> 여자 반환
	if (sso.slice(-7, -6) == '1' || sso.slice(-7, -6) == '3') {
		console.log("남자");
	}
	else {
		console.log("여자");
	}
}
let numbers = ["990108-2345678", "010204-3123456", "0303044123456", "970304 1123456"];
numbers.forEach(elements => checkGender(elements));

console.clear();

// Date 객체
const today = new Date();
console.log(today);
today.setFullYear(2020);
today.setMonth(1);
today.setDate(0);

console.log("말일: " + today.getDate());

console.log(today.getFullYear());
console.log(today.getMonth() + 1); // 0부터 시작
console.log(today.getDate()); console.log(today.getMonth() + 1); // 0부터 시작
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getDay());

document.querySelector("#calBtn").addEventListener("click", function(e) {
	e.preventDefault();

	const year = document.querySelector("#year");
	const month = document.querySelector("#month");

	if (year.value == "" || month.value == "") {
		createCalendar();
	}
	else {
		createCalendar(year.value, month.value);
	}

	year.value = "";
	month.value = "";
});

const show = document.querySelector("#show");

createCalendar(2024, 5);
function createCalendar(year = 2024, month = 4) {
	show.innerHTML = "<h3>" + year + "년" + month + "월</h3>";

	const thisMonth = new Date(year, month - 1, 1);

	// table 생성
	let table = document.createElement('table');
	table.className = "table";
	show.appendChild(table);

	// 요일 출력
	const days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
	let thead = document.createElement('thead');
	let tr = document.createElement('tr');
	days.forEach(element => {
		let th = document.createElement('th');
		th.innerText = element;
		tr.appendChild(th);
	});
	thead.appendChild(tr);
	table.appendChild(thead);

	// 날짜 출력
	let tbody = document.createElement("tbody");
	tr = document.createElement('tr');
	// 요일 지정
	let spaces = thisMonth.getDay();

	// 빈공간 td.
	for (let i = 0; i < spaces; i++) {
		let td = document.createElement('td');
		td.innerText = '';
		tr.appendChild(td);
	}

	// 날짜 출력
	thisMonth.setMonth(month);
	thisMonth.setDate(0);
	let end = thisMonth.getDate();
	for (let i = 1; i <= end; i++) {
		let td = document.createElement('td');
		td.innerText = i;
		tr.appendChild(td);

		if ((i + spaces) % 7 == 0) {
			tbody.appendChild(tr);
			td.style.background = 'blue';
			td.style.color = 'yellow';
			tr = document.createElement('tr');
		}
		else if ((i + spaces) % 7 == 1) {
			td.style.background = 'red';
			td.style.color = 'yellow';
		}
	}
	tbody.appendChild(tr);
	table.appendChild(tbody);
}

// timer 
let timer = document.querySelector("#timer");
// setInterval(함수, 시간간격);

setInterval(function() {
	let now = new Date();
	timer.innerHTML = now.format();
}, 1000);

Date.prototype.format = function() {
	let yyyy = this.getFullYear();
	let MM = this.getMonth() + 1;
	let dd = this.getDate();
	let hh = this.getHours();
	let mm = this.getMinutes();
	let ss = this.getSeconds();
	
	return yyyy + "/" + ("0" + MM).slice(-2) + "/" + ("0" + dd).slice(-2) + " " + ("0" + hh).slice(-2) + ":" + ("0" + mm).slice(-2) + ":" + ("0" + ss).slice(-2);
}

console.clear();