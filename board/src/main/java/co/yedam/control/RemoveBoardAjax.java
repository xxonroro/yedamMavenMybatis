package co.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;

public class RemoveBoardAjax implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		int bno = Integer.parseInt(req.getParameter("bno"));
		
		BoardService bsv = new BoardServiceImpl();
		if(bsv.deleteBoard(bno)) {
			resp.getWriter().print("{\"retCode\": \"Success\"}");
		}
		else {
			resp.getWriter().print("{\"retCode\": \"Fail\"}");
		}
	}
}
