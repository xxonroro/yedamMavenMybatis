<%@page import="co.yedam.vo.BoardVO"%>
<%@page import="co.yedam.mapper.BoardMapper"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>



<%
	BoardVO vo = (BoardVO) request.getAttribute("bvo");
%>
	<form action="modifyBoard.do">
	<input type="hidden" name="bno" value="<%=vo.getBoardNo() %>">
	<input type="hidden" name="searchCondition" value="${searchCondition }">
	<input type="hidden" name="keyword" value="${keyword }">
	<table class="table">
		<tr>
			<th>글번호</th>
			<td><%=vo.getBoardNo() %></td>
			<th>글제목</th>
			<td><input type="text" name="title" value="<%=vo.getTitle() %>"></td>
		</tr>
		<tr>
			<th>글내용</th>
			<td colspan="3"><textarea name="content"><%=vo.getContent() %></textarea></td>
		</tr>
		<tr>
			<th>작성자</th><td><%=vo.getWriter() %></td>
			<th>작성일시</th><td><%=vo.getCreateDate() %></td>
		</tr>
		<tr>
			<td colspan="4">
				<button type="submit">수정</button>
				<button type="button">삭제</button>
			</td>
		</tr>
	</table>
	</form>
