<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<c:forEach var="pvo" items="${pList }">
<div class="col mb-5">
	<div class="card h-100">
		<!-- Sale badge-->		
		<c:if test = "${pvo.salePrice != null }">
		<div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div> 
		</c:if> 
		
		<!-- Product image-->
		<img class="card-img-top"
			src="upload/${pvo.prodImg}" alt="..." />
		<!-- Product details-->
		<div class="card-body p-4">
			<div class="text-center">
				<!-- Product name-->
				
				<h5 class="fw-bolder">${pvo.prodName}</h5>
				<!-- Product reviews-->
				
				<div class="d-flex justify-content-center small text-warning mb-2">
				<c:forEach var="index" begin="1" end="${pvo.likeCnt}">
					<div class="bi-star-fill"></div>
				</c:forEach>
				</div>
				
				<!-- Product price-->
				<c:choose>
				<c:when test="${pvo.salePrice != null }">
						
				<span class="text-muted text-decoration-line-through">${pvo.price}</span>
				${pvo.salePrice}
				</c:when>
				<c:otherwise>
				${pvo.price}
				</c:otherwise>
				</c:choose>
			</div>
		</div>
		<!-- Product actions-->
		<div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
			<div class="text-center">
				<a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a>
			</div>
		</div>
	</div>
</div>
</c:forEach>