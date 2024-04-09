package co.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;
import co.yedam.vo.BoardVO;

public class AddAjaxBoard implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
		
		int bno = Integer.parseInt(req.getParameter("bno"));
		
		String title = req.getParameter("title");
		String content = req.getParameter("content");
		String writer = req.getParameter("writer");
		
		BoardVO bvo = new BoardVO();
		bvo.setBoardNo(bno);
		bvo.setTitle(title);
		bvo.setContent(content);
		bvo.setWriter(writer);
		
		
		
		Bard
		
		BoardService bsv = new BoardServiceImpl();
		if(bsv.insertAjaxBoard(bvo)) {
			resp.getWriter().print("{\"retCode\": \"Success\"}");
		}
		else {
			resp.getWriter().print("{\"retCode\": \"Fail\"}");
		}

	}

}
