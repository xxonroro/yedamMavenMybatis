package co.yedam.test;

import co.yedam.common.SearchVO;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;

public class AppTest {
	public static void main(String[] args) {
		SearchVO search = new SearchVO();
		search.setPage(2);
		search.setSearchCondition("TW");
		search.setKeyword("user");
		
		BoardService svc = new BoardServiceImpl();
		svc.boardList(search).forEach(board -> System.out.println(board.toString()));
	}
}
