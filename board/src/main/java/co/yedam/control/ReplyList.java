package co.yedam.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Control;
import co.yedam.service.ReplyService;
import co.yedam.service.ReplyServiceImpl;
import co.yedam.vo.ReplyVO;

public class ReplyList implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 원본 글 파라미터.
		resp.setContentType("text/json;charset=utf-8");
		
		String bno = req.getParameter("bno");
		
		ReplyService svc = new ReplyServiceImpl();
		List<ReplyVO> list = svc.replyList(Integer.parseInt(bno));
		
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
		String json = gson.toJson(list);
		
		resp.getWriter().print(json);

	}
}
