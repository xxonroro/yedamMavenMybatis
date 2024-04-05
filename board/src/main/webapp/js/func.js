const data = ['Apple', 'Banana', 'Cherry'];

document.querySelector('#show').innerHTML = '';

// 화살표 함수
let ul = document.createElement("ul");
document.querySelector('#show').appendChild(ul);

data.forEach(element => {
	let li = document.createElement("li");
	li.innerText = element;
	li.addEventListener("mouseover", function(event) {
		this.style.background = 'red';
	});
	li.addEventListener("mouseout", function(event) {
		this.style.background = '';
	});

	let btn = document.createElement("button");
	btn.innerText = "삭제";
	btn.addEventListener("click", event => btn.parentElement.remove());
	// button 요소의 상위 요소 삭제

	li.appendChild(btn);
	ul.appendChild(li);
});

