const fileds = ['id', 'first_name', 'last_name', 'email', 'gender', 'salary'];

document.querySelector("#show>table").innerHTML = "";
const table = document.querySelector("#show>table");
table.appendChild(makeHeader());
table.appendChild(makeBody());

// thead 생성. 아이디/이름/이메일/성별/급여
function makeHeader() {
	// thead 생성. tr 생성.  th*5 생성 
	let thead = document.createElement("thead");
	let tr = document.createElement("tr");
	thead.appendChild(tr);

	fileds.forEach(filed => {
		let th = document.createElement("th")
		th.innerHTML = filed;
		tr.appendChild(th);
	});
	return thead;
}

// tbody 생성. json 데이터를 기반으로 생성.
function makeBody() {
	let tbody = document.createElement("tbody");

	members.forEach((element, index) => {
		if (index < 5) {
			tbody.appendChild(makeRow(element));
		}
	});
	return tbody;
}

// row 생성
function makeRow(member = {}) {
	let tr = document.createElement("tr");
	fileds.forEach(field => {
		let td = document.createElement("td")
		td.innerHTML = member[field];
		tr.appendChild(td);
	});
	let btn = document.createElement('button');
	btn.innerText = "삭제";
	btn.className = "btn"; // btn.setAttribut('class', 'btn');
	btn.classList.add("btn-danger");
	btn.addEventListener("click", function(e) {
		e.stopPropagation();
		tr.remove();
	}, false);

	let td = document.createElement("td");
	td.appendChild(btn);
	tr.appendChild(td);

	return tr;
}

// 저장 버튼 이벤트.
document.querySelector("#addBtn").addEventListener("click", function(event) {
	console.log("message");
	// id, fname, lname, email, gender, salary => 입력 값.
	const userVal = {}
	userVal.id = document.getElementById('id').value;
	userVal.fname = document.querySelector("#fname").value;
	userVal.lname = document.querySelector("#lname").value;
	userVal.email = document.querySelector("#email").value;
	userVal.salary = document.querySelector("#salary").value;
	userVal.gender = document.querySelector("#gender").value;

	let tr = makeRow(userVal);

	document.querySelector("#show tbody").appendChild(tr);
});

console.dir(document.forms[0]);
document.querySelector("form:nth-of-type(1)").addEventListener("submit", function(e) {
	e.preventDefault();
});

// 클릭 처리
document.querySelectorAll("#show tbody tr").forEach(element => {
	element.addEventListener("click", function(e) {
		document.querySelector("#id").value = this.children[0].innerHTML;
		document.querySelector("#fname").value = this.children[1].innerHTML;
		document.querySelector("#lname").value = this.children[2].innerHTML;
		document.querySelector("#email").value = this.children[3].innerHTML;
		document.querySelector("#gender").value = this.children[4].innerHTML;
		document.querySelector("#salary").value = this.children[5].innerHTML;
	}, false)
}) // captituring(상 - > 하), bubbling(하 -> 상)

// 수정 처리
document.querySelector("#modifyBtn").addEventListener("click", function(e) {
	let id = document.querySelector("#id").value;

	document.querySelectorAll("#show tbody tr").forEach(item => {
		let rowId = item.children[0].innerHTML;

		if (rowId == id) {
			item.children[1].innerHTML = document.querySelector("#fname").value;
			item.children[2].innerHTML = document.querySelector("#lname").value;
			item.children[3].innerHTML = document.querySelector("#email").value;
			item.children[4].innerHTML = document.querySelector("#gender").value;
			item.children[5].innerHTML = document.querySelector("#salary").value
		}
	});
});



