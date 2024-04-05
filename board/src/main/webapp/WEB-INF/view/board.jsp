<%@page import="co.yedam.vo.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    
    

	
	<h3>상세페이지</h3>
	<form name="submitForm" action="modifyForm.do">
	<input type="hidden" name="bno" value="${bvo.boardNo }">
	<input type="hidden" name="searchCondition" value="${searchCondition }">
	<input type="hidden" name="keyword" value="${keyword }">
	<table class="table">
		<tr>
			<th>글번호</th><td>${bvo.boardNo }</td>
			<th>조회수</th><td>${bvo.viewCnt }</td>
		</tr>
		<tr>
			<th>글내용</th><td colspan="3">${bvo.content }</td>
		</tr>
		<tr>
			<th>작성자</th><td>${bvo.writer }</td>
			<th>작성일시</th><td>${bvo.createDate }</td>
		</tr>
		<tr>
		<c:if test="${bvo.img != null}">
			<td colspan="4"><img src="upload/${bvo.img }" width="200px"></td>
		</c:if>
		</tr>
		<tr>
			<td colspan="4">
				<button type="submit" class="btn btn-primary">수정</button>
				<button type="button" class="btn btn-warning" onclick="deleteFormFunc()">삭제</button>
			</td>
		</tr>
	</table>
	</form>
	<script>
		function deleteFormFunc(){
			document.forms[0].action ="removeForm.do";
			console.dir(document.forms[0].action);
			document.forms[0].submit();
		}
		
		const logId ="${logId}";
		const writer = "${bvo.writer}";
		document.querySelector('form[name="submitForm"]')
			.addEventListener('submit', function(e){
				e.preventDefault; // 기본기능 차단
				if (logId == writer){
					this.submit();
				} else{
					alert('권한이 없습니다.');
				}
			})
	</script>
