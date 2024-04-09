package co.yedam.service;

import java.util.List;

import co.yedam.vo.ReplyVO;

public interface ReplyService {
	public List<ReplyVO> replyList(int bno);
	public boolean removeReply(int rno);
}
