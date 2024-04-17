/*
* jsonUpload.js
*/
document.querySelector('button').addEventListener('click', function(e) {
	let obj = [
		{ no: 11, productNm: '과테말라 안티구아', price: 1100, qty: 11 }
		, { no: 12, productNm: '니카라구아 더치핸드드립', price: 1200, qty: 12 }
		, { no: 13, productNm: '브라질산토스', price: 1300, qty: 13 }
		, { no: 14, productNm: '에티오피아 예가체프', price: 1400, qty: 14 }
		, { no: 15, productNm: '케냐 오크라톡신', price: 1500, qty: 15 }
	]
	// [{"no":11, "productNm":"???"}] JSON.parse()
	// json 사용하여 업로드.
	fetch('jsonUpload.do', {
		method: 'post',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(obj)
	})
		.then(resolve => resolve.text())
		.then(result => console.log(result))
		.catch(err => console.error(err));
})