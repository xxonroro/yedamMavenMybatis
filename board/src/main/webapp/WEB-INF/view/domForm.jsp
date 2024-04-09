<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<h3>DOM 연습</h3>

<!-- 멤버 추가 화면 -->
<form>
	<table class="table">
		<tr>
			<th>아이디</th>
			<td><input type="text" id="id"></td>
		</tr>
		<tr>
			<th>이름</th>
			<td><input type="text" id="fname"></td>
		</tr>
		<tr>
			<th>성씨</th>
			<td><input type="text" id="lname"></td>
		</tr>
		<tr>
			<th>이메일</th>
			<td><input type="email" id="email"></td>
		</tr>
		<tr>
			<th>급여</th>
			<td><input type="number" id="salary"></td>
		</tr>
		<tr>
			<th>성별</th>
			<td>
				<select id="gender">
					<option value="Male">Male</option>
					<option value="Female">Female</option>
				</select>
			</td>
		</tr>
		<tr>
			<td colspan="2" align="center">
				<button id="addBtn">저장</button>
				<button id="modifyBtn">수정</button>
			</td>
		</tr>
	</table>
</form>


<input id = "year" type="text" />
<input id = "month" type="text" />
<input id = "calBtn" type = "submit" value = "선택" />


<div id="show">
	<table border='1' class="table">
		<thead id="header" />

		<tbody id="list" />
	</table>
</div>

시간: <span id = "timer"></span>

<script src="js/ajax.js"></script>

</body>
</html>