package co.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.common.Control;
import co.yedam.service.MemberService;
import co.yedam.service.MemberServiceImpl;
import co.yedam.vo.MemberVO;

public class LoginControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String id = req.getParameter("id");
		String pw = req.getParameter("pw");
		
		MemberService svc = new MemberServiceImpl();
		
		MemberVO mvo = new MemberVO();
		mvo.setMemberId(id);
		mvo.setMemberPw(pw);
		
		mvo = svc.loginCheck(mvo);
		
		if(mvo != null) {
			HttpSession session = req.getSession();
			session.setAttribute("logId", mvo.getMemberId());
			session.setAttribute("auth", mvo.getResponsibility());
			
			if (mvo.getResponsibility().equalsIgnoreCase("Admin")) {
				// 관리자 페이지.
				req.getRequestDispatcher("member/boardList.tiles").forward(req, resp);
				
			} else {
				// 사용자 페이지.
				req.getRequestDispatcher("board/boardList.tiles").forward(req, resp);
//				resp.sendRedirect("boardList.do");
			}
						
			
		} else {
			req.setAttribute("msg", "id와 password를 확인하세요");
			req.getRequestDispatcher("WEB-INF/view/loginForm.jsp").forward(req, resp);
		}
	}

}
