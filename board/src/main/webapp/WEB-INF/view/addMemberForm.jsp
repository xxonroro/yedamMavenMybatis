<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>


<h3>회원가입</h3>
<form action="addMember.do" method="post">
	<table border="1">
		<tr>
			<th>아이디</th>
			<td><input class="form-control" type="text" name="id"></td>
		</tr>
		<tr>
			<th>비밀번호</th>
			<td><input class="form-control" type="password" name="pw"></td>
		</tr>
		<tr>
			<th>이름</th>
			<td><input class="form-control" type="text" name="nm"></td>
		</tr>
		<tr>
			<th>전화번호</th>
			<td><input class="form-control" type="text" name="phone"></td>
		</tr>
		<tr>
			<td colspan="2" align="center"><input class="btn btn-primary" type="submit" value="가입"></td>
		</tr>
	</table>
</form>