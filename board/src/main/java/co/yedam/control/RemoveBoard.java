package co.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;

public class RemoveBoard implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		int bno = Integer.parseInt(req.getParameter("bno"));
//		int bno = (int) req.getAttribute("bno");
		
		BoardService svc = new BoardServiceImpl();
		if(svc.deleteBoard(bno)) {
			resp.sendRedirect("boardList.do");
			
		} else {
			req.setAttribute("msg", "등록 중 에러가 발생.");
			req.getRequestDispatcher("WEN-INF/view/error.jsp").forward(req, resp);
		}

	}

}
