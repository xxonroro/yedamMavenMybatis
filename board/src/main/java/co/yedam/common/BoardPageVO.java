package co.yedam.common;

import lombok.Data;

@Data
public class BoardPageVO {
	private int page;
	private String searchCondition;
	private String keyword;
}
