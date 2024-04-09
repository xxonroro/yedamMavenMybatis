package co.yedam.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import co.yedam.common.BoardPageVO;
import co.yedam.common.Control;
import co.yedam.common.PageDTO;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;
import co.yedam.vo.BoardVO;

public class BoardForm implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {	
		String page = req.getParameter("page");
		page = page == null ? "1" : page;
		
		BoardPageVO bpvo = new BoardPageVO();
		bpvo.setPage(Integer.parseInt(page));
		
		BoardService bsvc = new BoardServiceImpl();
		List<BoardVO> list = bsvc.boardList(bpvo);
		int cnt = bsvc.getCount();
		
		PageDTO dto = new PageDTO(Integer.parseInt(page), cnt);
		
		req.setAttribute("paging", dto);
		
		req.getRequestDispatcher("board/boardAjaxForm.tiles").forward(req, resp);
	}
}
