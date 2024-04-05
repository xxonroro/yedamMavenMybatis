package co.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;
import co.yedam.vo.BoardVO;

public class BoardControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// db조회 -> 페이지재지정.
		String bno = req.getParameter("bno");
		
//		BoardMapper mapper = DataSource.getInstance().openSession().getMapper(BoardMapper.class);
//		BoardVO vo = mapper.getBoard(Integer.parseInt(bno));
		
		String sc = req.getParameter("searchCondition");
		String kw = req.getParameter("keyword");
		
		BoardService svc = new BoardServiceImpl();
		
		svc.updateViewCnt(Integer.parseInt(bno));
		BoardVO vo = svc.getBoard(Integer.parseInt(bno));
		
		req.setAttribute("bvo", vo);
		req.setAttribute("searchCondition", sc);
		req.setAttribute("keyword", kw);
		
		req.getRequestDispatcher("board/board.tiles").forward(req, resp);
	}

}
