package co.yedam.service;

import java.util.List;

import co.yedam.vo.MemberVO;
import co.yedam.vo.ProductVO;

public interface MemberService {
	public MemberVO loginCheck(MemberVO vo);
	public boolean insertMember(MemberVO vo);
	public List<MemberVO> memberList();
	public List<ProductVO> productList();
	
	public boolean removeMember(String mid);
}
