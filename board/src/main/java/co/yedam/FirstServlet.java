package co.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSource;
import co.yedam.common.SearchVO;
import co.yedam.mapper.BoardMapper;
import co.yedam.vo.BoardVO;

// init() -> service() ...........-> destroy()

public class FirstServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
    public FirstServlet() {
    	System.out.println("FirstServlet생성자 호출");
        
    }
    
    //init()
    @Override
    public void init(ServletConfig config) throws ServletException {
    	System.out.println("init() 호출");
    }
    
    // 사용자의 요청정보 처리할 : HttpServletRequest req
    // 사용자에게 전달할 : HttpServletResponce resp
    
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    	
    	resp.setContentType("text/html;charset=utf-8");
    	SqlSession session = DataSource.getInstance().openSession();
    	BoardMapper mapper = session.getMapper(BoardMapper.class);
    	
    	int page = 1;
    	SearchVO search = new SearchVO();
    	search.setPage(page);
    	List<BoardVO> list = mapper.selectList(search);
    	
    	PrintWriter out = resp.getWriter();
    	String html = "<table border='1'>";
    	html += "<thead><tr><th>글번호</th><th>제목</th><th>작성자</th><th>내용</th><th>작성일지</th></tr></thead>";
    	html += "<tbody>";
    	
    	//반복생성.
    	for(BoardVO board : list) {
    		html += "<tr><td>" + board.getBoardNo() + "</td>";
    		html += "<td>" + board.getTitle() + "</td>";
    		html += "<td>" + board.getWriter() + "</td>";
    		html += "<td>" + board.getContent() + "</td>";
    		html += "<td>" + board.getCreateDate() + "</td></tr>";
    	}
    	
    	html += "<tbody>";
    	html += "</table>";
    	
    	out.print(html);
    }
    
    @Override
    public void destroy() {
    	System.out.println("destroy() 호출");

	}
    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().append("Served at: ").append(request.getContextPath());
		
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
