package co.yedam.vo;

import lombok.Data;

@Data
public class ProductVO {
	private String prodCode;
	private String prodName;
	private String prodDesc;
	private int price;
	private int salePrice;
	private int likeCnt;
	private String prodImg;
}
