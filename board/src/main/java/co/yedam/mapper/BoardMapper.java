package co.yedam.mapper;

import java.util.List;

import co.yedam.common.BoardPageVO;
import co.yedam.common.SearchVO;
import co.yedam.vo.BoardVO;

public interface BoardMapper {
	public String getTimes();
	public List<BoardVO> selectList(SearchVO search);
	public int selectCount();
	public int insertBoard(BoardVO bo);
	public int deleteBoard(int bno);
	public BoardVO getBoard(int bno);
	public int modifyBoard(BoardVO bo);
	public int updateViewCnt(int bno);
	
	public List<BoardVO> boardSelectList(BoardPageVO page); 
 	
	
	public List<BoardVO> boardList();
	
	public int insertAjaxBoard(BoardVO bvo);
}
