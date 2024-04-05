package co.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;
import co.yedam.vo.BoardVO;

public class ModifyBoardForm implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String bno = req.getParameter("bno");
		
		String sc = req.getParameter("searchCondition");
		String kw = req.getParameter("keyword");
		
		BoardService svc = new BoardServiceImpl();
		
		BoardVO vo = svc.getBoard(Integer.parseInt(bno));
		
		req.setAttribute("bvo", vo);
		req.setAttribute("searchCondition", sc);
		req.setAttribute("keyword", kw);
		
		req.getRequestDispatcher("WEB-INF/view/modifyForm.jsp").forward(req, resp);
	}

}
