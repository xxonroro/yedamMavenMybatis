package co.yedam.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSource;
import co.yedam.mapper.ReplyMapper;
import co.yedam.vo.ReplyVO;

public class ReplyServiceImpl implements ReplyService{

	SqlSession session = DataSource.getInstance().openSession(true);
	ReplyMapper mapper = session.getMapper(ReplyMapper.class);
	
	
	@Override
	public List<ReplyVO> replyList(int bno) {
		return mapper.replyList (bno);
	}


	@Override
	public boolean removeReply(int rno) {
		return mapper.deleteReply(rno) == 1;
	}

}
