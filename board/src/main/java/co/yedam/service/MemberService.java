package co.yedam.service;

import java.util.List;

import co.yedam.vo.CartVO;
import co.yedam.vo.MemberVO;
import co.yedam.vo.ProductVO;

public interface MemberService {
	public MemberVO loginCheck(MemberVO vo);
	public boolean insertMember(MemberVO vo);
	public List<MemberVO> memberList();
	public List<ProductVO> productList();
	
	public boolean removeMember(String mid);
	
	public List<CartVO> selectCartList();
	public boolean delectCartList(int no);
	public boolean delectAll();
	public boolean updateCart(CartVO vo);
	public int addCartAry(CartVO[] array);
}
	