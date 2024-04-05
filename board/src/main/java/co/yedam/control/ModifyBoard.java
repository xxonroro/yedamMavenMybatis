package co.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;
import co.yedam.vo.BoardVO;

public class ModifyBoard implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		BoardVO vo = new BoardVO();
		vo.setBoardNo(Integer.parseInt(req.getParameter("bno")));
		vo.setTitle(req.getParameter("title"));
		vo.setContent(req.getParameter("content"));
		
		String sc = req.getParameter("searchCondition");
		String kw = req.getParameter("keyword");
		String page = req.getParameter("page");
		page = page == null ? "1" : page;
		
		BoardService svc = new BoardServiceImpl();
		
		req.setAttribute("searchCondition", sc);
		req.setAttribute("keyword", kw);
		
		if(svc.modifyBoard(vo)) {
//			resp.sendRedirect("boardList.do");
			resp.sendRedirect("boardList.do?page=" + page + "&searchCondition=" + sc + "&keyword=" + kw);
			
		} else {
			req.setAttribute("msg", "등록 중 에러가 발생.");
			req.getRequestDispatcher("WEB-INF/view/error.jsp").forward(req, resp);
		}
	}
	
}
