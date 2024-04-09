package co.yedam.test;

import java.util.List;

import co.yedam.common.DataSource;
import co.yedam.mapper.ReplyMapper;
import co.yedam.vo.ReplyVO;

public class AppTest {
	public static void main(String[] args) {
		ReplyMapper mapper = DataSource.getInstance().openSession().getMapper(ReplyMapper.class);
		
		List<ReplyVO> list = mapper.replyList(2);
	
		for(ReplyVO rvo : list) {
			System.out.println(rvo);
		}
	}
}
