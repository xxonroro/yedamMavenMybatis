package co.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.MemberService;
import co.yedam.service.MemberServiceImpl;
import co.yedam.vo.MemberVO;

public class AddMemberAjax implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String mid = req.getParameter("mid");
		String mnm = req.getParameter("name");
		String phn = req.getParameter("phone");
		String mpw = req.getParameter("pass");
		
		MemberVO mvo = new MemberVO();
		mvo.setMemberId(mid);
		mvo.setMemberNm(mnm);
		mvo.setPhone(phn);
		mvo.setMemberPw(mpw);
		
		MemberService svc = new MemberServiceImpl();
		if(svc.insertMember(mvo)) {
			resp.getWriter().print("{\"retCode\": \"Success\"}");
		}
		else {
			resp.getWriter().print("{\"retCode\": \"Fail\"}");
		}
	}

}
