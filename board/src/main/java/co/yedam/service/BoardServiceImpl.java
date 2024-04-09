package co.yedam.service;

import java.util.List;

import co.yedam.common.BoardPageVO;
import co.yedam.common.DataSource;
import co.yedam.common.SearchVO;
import co.yedam.mapper.BoardMapper;
import co.yedam.vo.BoardVO;
import co.yedam.vo.MemberVO;

public class BoardServiceImpl implements BoardService {

	BoardMapper mapper = DataSource.getInstance().openSession(true).getMapper(BoardMapper.class);

	@Override
	public List<BoardVO> boardList(SearchVO search) {
		return mapper.selectList(search);
	}

	@Override
	public int getCount() {
		return mapper.selectCount();
	}

	@Override
	public BoardVO getBoard(int bno) {
		return mapper.getBoard(bno);
	}

	@Override
	public boolean addBoard(BoardVO vo) {
		return mapper.insertBoard(vo) == 1;
	}

	@Override
	public boolean modifyBoard(BoardVO vo) {
		return mapper.modifyBoard(vo) == 1;
	}

	@Override
	public boolean deleteBoard(int bno) {
		return mapper.deleteBoard(bno) == 1;
	}

	@Override
	public boolean updateViewCnt(int bno) {
		return mapper.updateViewCnt(bno) == 1;
	}

	@Override
	public List<BoardVO> baordListTwo() {
		return mapper.boardList();
	}

	@Override
	public boolean insertAjaxBoard(BoardVO bvo) {
		return mapper.insertAjaxBoard(bvo) == 1;
	}

	@Override
	public List<BoardVO> boardList(BoardPageVO page) {
		return mapper.boardSelectList(page);
	}

}
