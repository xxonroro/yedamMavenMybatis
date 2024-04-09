package co.yedam.mapper;

import java.util.List;

import co.yedam.vo.ReplyVO;

public interface ReplyMapper {
	public List<ReplyVO> replyList(int bno);
	public int deleteReply(int rno);
}
