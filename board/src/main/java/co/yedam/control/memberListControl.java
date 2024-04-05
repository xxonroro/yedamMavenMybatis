package co.yedam.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.MemberService;
import co.yedam.service.MemberServiceImpl;
import co.yedam.vo.MemberVO;

public class memberListControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		MemberService svc = new MemberServiceImpl();
		List<MemberVO> mvoList = svc.memberList();
		
		req.setAttribute("mvoList", mvoList);
		
		req.getRequestDispatcher("member/memberList.tiles").forward(req, resp);
	}
}
