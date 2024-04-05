package co.yedam.service;

import java.util.List;

import co.yedam.common.DataSource;
import co.yedam.mapper.MemberMapper;
import co.yedam.vo.MemberVO;
import co.yedam.vo.ProductVO;

public class MemberServiceImpl implements MemberService{
	
	MemberMapper mapper = DataSource.getInstance().openSession(true).getMapper(MemberMapper.class);

	@Override
	public MemberVO loginCheck(MemberVO vo) {
		return mapper.selectMember(vo);
	}

	@Override
	public boolean insertMember(MemberVO vo) {
		return mapper.insertMember(vo) == 1;
	}

	@Override
	public List<MemberVO> memberList() {
		return mapper.memberList();
	}

	@Override
	public List<ProductVO> productList() {
		return mapper.productList();
	}

	
}
