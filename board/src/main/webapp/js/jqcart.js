console.log('start');
// 숫자 3자리 콤마찍기
Number.prototype.formatNumber = function() {
	if (this == 0)
		return 0;
	let regex = /(^[+-]?\d+)(\d{3})/;
	let nstr = (this + '');
	while (regex.test(nstr)) {
		nstr = nstr.replace(regex, '$1' + ',' + '$2');
	}
	return nstr;
};

const basket = {
	cartCount : 0, //전체 상품의 개수
	cartTotal: 0, // 전체 상품의 총합 가격
	//목록.
	list: function(){
		svc.cartList(function(result) {
			console.log(result);
			result.forEach(cart => {
				
                // 전체 상품의 개수 및 전체 상품의 총합 가격
				basket.cartCount += cart.qty;
				basket.cartTotal += (cart.qty * cart.price);
				
				let temp = $('[data-id]:eq(0)').clone(true);
				temp.css('display', 'block');
				temp.attr('data-id', cart.no);
				temp.find('div.img img').attr('src', 'image/'+cart.productNm+'.jpg');
				temp.find('div.pname>span').text(cart.productNm);
				temp.find('div.basketprice').text(cart.price.formatNumber()+'원');
                // .basketprice인 요소의 텍스트 내용을 변경함으로써 사라진 인풋 요소를 생성하여 .basketprice인 요소의 첫번째 자식요소로 추가함
				temp.find('div.basketprice').prepend($('<input />').attr({'type': 'hidden', 'name': 'p_price','id':"p_price"+cart.no})
				  .addClass('p_price')
				  .val(cart.price)
				); 

				
				temp.find('div.sum').text((cart.price * cart.qty).formatNumber()+'원');
				temp.find('div.sum').attr('id', 'p_sum' + cart.no);
				temp.find('div.updown input').val(cart.qty);	
				temp.find('div.updown input').attr('id', 'p_num' + cart.no);
				
				// keyup, click 등록.
				temp.find('div.updown input').keyup((event) => basket.changePNum(cart.no, event));
				temp.find('div.updown span').click((event) => basket.changePNum(cart.no, event));
					
				// 삭제 click 등록.	
				temp.find('div.subdiv basketcmd').click(() => basket.delItem(cart.no));
				
				temp.appendTo('#basket');
			});
			basket.reCalc();
		}, function(err) {
			console.log(err);
		})
	}, //end of list.
	//합계수량, 금액 출력.
	reCalc(){
		$('#sum_p_num span').text(basket.cartCount);
		$('#sum_p_price span').text(basket.cartTotal.formatNumber());
	},
	// 수량변경. no,qty(1, -1)
	changePNum(no, event){
		
		console.log(event);
		let qty = -1;
		if(event.target.nodeName == "I"){
			if(event.target.className.indexOf('up') != -1){
				qty = 1;
			}
		} else if(event.target.nodeName == "INPUT"){
			if(event.key == 'ArrowUp'){
				qty = 1;
			}
		} //end of if.
		
		let qtyElem = $('#p_num' + no); // 삭제 버튼을 누른 상품의 수량을 나타내는 input 요소
		let sumElem = $('#p_sum' + no); // 삭제 버튼을 누른 상품의 합계를 나타내는 div 요소
		let price = $('#p_price' +no).val(); // 삭제 버튼을 누른 상품의 가격 (문자열)
		let curQty = qtyElem.val(); // 그 input 요소의 값 (수량)(문자열) 
		
		let cvo = {no,qty};
		svc.cartUpdate(cvo,
		  (result) => {
			console.log(result);
			if(result.retCode == 'Success') {
				qtyElem.val(parseInt(curQty) + qty);
				sumElem.text(((parseInt(curQty) + qty) * parseInt(price)).formatNumber() + '원');
				// 수량, 금액변경.
				basket.cartCount += qty;
				basket.cartTotal += (price * qty);
				basket.reCalc(); //합계부분
			}
		 },
		  () => {
			alert('에러가 발생');
		 }
		);
	},  //end of changePNum.
		
	// 한건삭제.
	delItem(no) {
		let delNo = $(event.currentTarget).closest('div.row').data('id');
		console.log(delNo);
		
		svc.cartRemove(delNo, 
		  (result) => {
			if(result.retCode == 'Success'){
				let price = $('#p_price' + delNo).val(); //금액
				let qty = $('#p_num' + delNo).val(); //수량
				console.log(qty, price);
				
				basket.cartCount -= qty;
				basket.cartTotal -= (price * qty);
				basket.reCalc();
				
				$('[data-id="' + delNo + '"]').remove();
			}
		  },
		  (err) => {
			
		  }
		)
	}, //end of delItem
	
	//선택상품삭제
	delCheckedItem(){
		let chkNo = $('div.data .check input:checked');
		console.log(chkNo);
		for(let i=0; i<chkNo.length; i++){
			
		}
		
	}, // end of delCheckedItem
	
	//장바구니비우기
	delAllItem(){
		
	} // end of delAllItem
}

basket.list();