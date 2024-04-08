package co.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.MemberService;
import co.yedam.service.MemberServiceImpl;

public class RemoveMemberControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String mid = req.getParameter("mid");
		
		MemberService svc = new MemberServiceImpl();
		if(svc.removeMember(mid)) {
			resp.getWriter().print("{\"retCode\": \"Success\"}");
		}
		else {
			resp.getWriter().print("{\"retCode\": \"Fail\"}");
		}

	}

}
