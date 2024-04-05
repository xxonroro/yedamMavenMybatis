<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div class="sb-sidenav-menu">
            <div class="nav">
                <a class="nav-link" href="boardList.do">게시글목록</a>
                <c:choose>
			    	<c:when test="${logId == null }">
			      		<a class="nav-link" href="loginForm.do">로그인</a>
			    	</c:when>
			    	<c:otherwise>
			      		<a class="nav-link" href="logout.do">로그아웃</a>
			    	</c:otherwise>
			    </c:choose>
			    <c:if test="${auth == 'Admin' }">
			     	<a class="nav-link" href="memberList.do">회원목록(관리자)</a>
			    </c:if>
            </div>
        </div>
    </nav>
</div>