package co.yedam.mapper;

import java.util.List;

import co.yedam.vo.CartVO;
import co.yedam.vo.MemberVO;
import co.yedam.vo.ProductVO;

public interface MemberMapper {
	public MemberVO selectMember(MemberVO mvo);
	public int insertMember(MemberVO mvo);
	public List<MemberVO> memberList();
	public List<ProductVO> productList();
	public int deleteMember(String mid);
	
	public List<CartVO> selectCartList();
	public int delectCartList(int no);
	public int delectAll();
	public int updateCart(CartVO vo);
	public int insertCartAry(CartVO[] vo);
}
