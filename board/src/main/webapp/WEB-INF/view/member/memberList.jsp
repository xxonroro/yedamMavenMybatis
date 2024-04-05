<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<table class="table table-striped">
	<tr>
		<th>아이디</th
		><th>비밀번호</th>
		<th>유저 이름</th>
		<th>가입일자</th>
		<th>전화번호</th>
	</tr>
	<tbody>
	<c:forEach var="vo" items="${mvoList }">
		<tr>
			<td><c:out value="${vo.memberId }" /></td>
			<td><c:out value="${vo.memberPw }" /></td>
			<td><c:out value="${vo.memberNm }" /></td>
			<td><c:out value="${vo.createDate }" /></td>
			<td><c:out value="${vo.phone }" /></td>
		</tr>
	</c:forEach>
	</tbody>
</table>