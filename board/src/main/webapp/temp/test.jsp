<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>jstl test</title>
</head>
<body>
	<%
		String name = "홍길동";
		System.out.println(name);
		
	%>
	<c:set var="myName" value="김민기"></c:set>
	<p>myName 변수의 값... <c:out value="${myName }"></c:out></p>
	
	<c:set var="age" value="20"></c:set>
	<c:if test="${age >= 20 }">
		<p>성인입니다</p>
	</c:if>
	
	<c:choose>
		<c:when test="${age>=20 }">
			<p>성인입니다.</p>
		</c:when>
		<c:otherwise>
			<p>미성년입니다.</p>
		</c:otherwise>
	</c:choose>
	
	<c:forEach begin="1" end="10" var="num" step="2">
		<span><c:out value="${num}"></c:out></span>
	</c:forEach>
</body>
</html>