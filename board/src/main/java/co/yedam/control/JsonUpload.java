package co.yedam.control;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;

import javax.servlet.ServletException;
import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.util.StreamUtils;

import com.fasterxml.jackson.databind.ObjectMapper;

import co.yedam.common.Control;
import co.yedam.service.MemberService;
import co.yedam.service.MemberServiceImpl;
import co.yedam.vo.CartVO;

public class JsonUpload implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8");
		req.setCharacterEncoding("utf-8");

		ServletInputStream sis = req.getInputStream();
		String json = StreamUtils.copyToString(sis, StandardCharsets.UTF_8);

		System.out.println(json); // [{"no":11,"productNm":"p11"...}...]

		ObjectMapper mapper = new ObjectMapper(); // js: JSON.parse()
		CartVO[] cartList = mapper.readValue(json, CartVO[].class);

		Arrays.asList(cartList).forEach(cart -> System.out.println(cart));

		MemberService svc = new MemberServiceImpl();
		int cnt = svc.addCartAry(cartList);

		resp.getWriter().print("total Count " + cnt + " added.");
	}

}
