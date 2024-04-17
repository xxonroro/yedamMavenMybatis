package co.yedam.service;

import java.util.List;

import co.yedam.common.BoardPageVO;
import co.yedam.common.SearchVO;
import co.yedam.vo.BoardVO;
import co.yedam.vo.CartVO;

public interface BoardService {
	List<BoardVO> boardList(SearchVO search);
	int getCount();
	BoardVO getBoard(int bno);
	boolean addBoard(BoardVO vo);
	boolean modifyBoard(BoardVO vo);
	boolean deleteBoard(int bno);
	boolean updateViewCnt(int bno);
	
	List<BoardVO> boardList(BoardPageVO page);
	
	boolean insertAjaxBoard(BoardVO bvo);
	List<BoardVO> baordListTwo();

}
