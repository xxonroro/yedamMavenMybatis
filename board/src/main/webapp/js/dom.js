/**
 * 
 */


// Ajax 호출.
fetch("memberData.do")// 서버의 페이지 요청
	.then(function(data) {
		return data.json(); // {"name":"홍길동"} => {name: "홍길동"} 	
	})
	.then(function(data) {
		console.log(data);
	})
	.catch(function(err) {
		console.log(err);
	})
members = data;
let tabl = document.createElement('table');
tab.setAttribute('class', 'table');

for (let member of members) {
	let tr = document.createElement('tr');
	for (let prop in member) {
		let td = document.createElement('td');
		td.innerText = member[prop];
		tr.appendChild(td);
	}
	tab.appendChild(tr);
}
document.querySelector('#show').appendChild(tab);
resp.getWriter().print(json);