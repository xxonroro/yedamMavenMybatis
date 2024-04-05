package co.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.control.AddBoard;
import co.yedam.control.AddBoardForm;
import co.yedam.control.BoardControl;
import co.yedam.control.BoardListControl;
import co.yedam.control.DomForm;
import co.yedam.control.LoginControl;
import co.yedam.control.LoginFormControl;
import co.yedam.control.LogoutControl;
import co.yedam.control.ModifyBoard;
import co.yedam.control.ModifyBoardForm;
import co.yedam.control.RemoveBoard;
import co.yedam.control.RemoveBoardForm;
import co.yedam.control.addMemberForm;
import co.yedam.control.memberDataControl;
import co.yedam.control.memberList;
import co.yedam.control.memberListControl;
import co.yedam.control.productList;

// init -> service -> destroy
public class FrontControl extends HttpServlet{
	
	// url pattern - 실행서블릿. 관리.
	Map<String, Control> map;
	public FrontControl() {
		map = new HashMap<>();
	}
	
	@Override
	public void init(ServletConfig config) throws ServletException {
		map.put("/main.do", new MainControl());
		map.put("/second.do", null);
		map.put("/resume.do", new ResumeControl());
		
		// 게시글 목록
		map.put("/boardList.do", new BoardListControl());
		map.put("/getBoard.do", new BoardControl());
		map.put("/addForm.do", new AddBoardForm());
		map.put("/addBoard.do", new AddBoard());
		map.put("/modifyForm.do", new ModifyBoardForm());
		map.put("/modifyBoard.do", new ModifyBoard());
		map.put("/removeForm.do", new RemoveBoardForm());
		map.put("/removeBoard.do", new RemoveBoard());
		
		// member관련
		map.put("/loginForm.do", new LoginFormControl());
		map.put("/login.do", new LoginControl());
		map.put("/logout.do", new LogoutControl());
		map.put("/addMemberForm.do", new addMemberForm());
		map.put("/addMember.do", new addMember());
		map.put("/memberList.do", new memberListControl());
		
		// json 데이터 생성
		map.put("/domForm.do", new DomForm());
		map.put("/memberData.do", new memberDataControl());
		
		//product

		map.put("/productList.do", new productList());
	}
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		
		resp.setContentType("text/html;charset=utf-8");
		
		String uri = req.getRequestURI();
		String context = req.getContextPath();
		String path = uri.substring(context.length());
		
		System.out.println("uri : " + uri + ", context : " + context + ", path : " + path);
		Control control = map.get(path);
		control.exec(req, resp);
	}
	
}