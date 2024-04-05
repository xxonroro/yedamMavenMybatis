package co.yedam.common;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.service.MemberService;
import co.yedam.service.MemberServiceImpl;
import co.yedam.vo.MemberVO;

public class addMember implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String id = req.getParameter("id");
		String pw = req.getParameter("pw");
		String name = req.getParameter("nm");
		String phone = req.getParameter("phone");

		MemberVO member = new MemberVO();
		member.setMemberId(id);
		member.setMemberPw(pw);
		member.setMemberNm(name);
		member.setPhone(phone);
		
		MemberService msv = new MemberServiceImpl();
		
		if(msv.insertMember(member)) {
			resp.sendRedirect("boardList.do");
		}else {
			req.setAttribute("msg", "등록 중 에러가 발생.");
			req.getRequestDispatcher("WEB-INF/view/error.jsp").forward(req, resp);
		}
		

	}

}
