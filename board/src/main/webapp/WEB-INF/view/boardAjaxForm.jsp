<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<style>
.center {
	text-align: center;
}

.pagination {
	display: inline-block;
}

.pagination a {
	color: black;
	float: left;
	padding: 8px 16px;
	text-decoration: none;
	transition: background-color .3s;
	border: 1px solid #ddd;
	margin: 0 4px;
}

.pagination a.active {
	background-color: #4CAF50;
	color: white;
	border: 1px solid #4CAF50;
}

.pagination a:hover:not(.active) {
	background-color: #ddd;
}
</style>

<h3>글등록</h3>

<form method="post" action="/addAjaxBoard.do">
	<table border="1" class="table">
		<tr>
			<th>글제목</th>
			<td><input class="form-control" type="text" name="title" /></td>
		</tr>
		<tr>
			<th>내용</th>
			<td><textarea class="form-control" rows="3" cold="23"
					name="content"></textarea></td>
		</tr>
		<tr>
			<th>작성자</th>
			<td><input class="form-control" type="text" name="writer"
				value="${logId }" readonly /></td>
		</tr>
		<tr>
			<td colspan="2" align="center"><input id="addBtn"
				class="btn btn-primary" type="submit" value="글등록" /></td>
		</tr>
	</table>
</form>

<div id="show">
	<table class="table">
		<thead>
			<th>번호</th>
			<th>제목</th>
			<th>내용</th>
			<th>작성자</th>
			<th>생성일자</th>
		</thead>
		<tbody id="list">
		
		</tbody>
	</table>
</div>

<div class="center">
	<div class="pagination">

		<c:if test="${paging.prev }">
			<a href="boardForm.do?page=${paging.startPage-1 }">&laquo;</a>
		</c:if>

		<c:forEach var="p" begin="${paging.startPage }"
			end="${paging.endPage }">
			<c:choose>
				<c:when test="${p == paging.page }">
					<a
						href="boardForm.do?page=${p }"
						class="active">${p }</a>
				</c:when>
				<c:otherwise>
					<a
						href="boardForm.do?page=${p }">${p }</a>
				</c:otherwise>
			</c:choose>
		</c:forEach>

		<c:if test="${paging.next }">
			<a href="boardForm.do?page=${paging.endPage+1 }">&raquo;</a>
		</c:if>
	</div>
</div>

<script>
	let currentPage = ${paging.page};
</script>
<script src="js/serviceTwo.js"></script>
