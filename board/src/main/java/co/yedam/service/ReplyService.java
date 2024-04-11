package co.yedam.service;

import java.util.List;
import java.util.Map;

import co.yedam.common.SearchVO;
import co.yedam.vo.ReplyVO;

public interface ReplyService {
	public List<ReplyVO> replyList(SearchVO serach);
	public boolean removeReply(int rno);
	public int getReplyCount(int bno);
	public boolean addReply(ReplyVO rvo);
	
	public List<Map<String, Object>> getCntByMember();
}
