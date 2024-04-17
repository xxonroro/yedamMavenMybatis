let fields = ["memberId", "memberNm", "phone", "memberPw"];
$(document).ready(function () {
  $.ajax({
    url: "../memberAjax.do",
    method: "get",
    dataType: "json",
  })
    .done(function (result) {
      // 요청이 성공적으로 완료되었을 때 실행되는 메서드 (목록 출력. id, 이름, 연락처, 비번)
		console.log(result);
      result.forEach((member) => {
        let tr = $("<tr />");

        fields.forEach((field) => {
          let td = $("<td />");
          td.html(member[field]); // Use dot notation to access object properties
          tr.append(td);
        });

        $("#show tbody").append(tr);
      });

      console.log(result);
    })
    .fail(function (err) {
      // 요청이 실패했을 때 실행되는 메서드
      console.log(err);
    })
    .always(function (data) {
      //  요청의 성공 여부에 상관없이 실행되는 함수
    });

  $("div#register button").on("click", function (e) {
    e.preventDefault();
    $.ajax({
      url: "../addMemberAjax.do",
      method: "post",
      data: $('form[name="myFrm"]').serialize(), // form 요소 안에 있는
      dataType: "json",
    })
      .done(function (result) {
        console.log(result);
        if (result.retCode == "Success") {
          let tr = $("<tr />");

          const memberInfo = {
            memberId: $('input[name="mid"]').val(),
            memberNm: $('input[name="name"]').val(),
            phone: $('input[name="phone"]').val(),
            memberPw: $('input[name="pass"]').val(),
          };

          fields.forEach((field) => {
            tr.append($("<td />").text(memberInfo[field]));
          });

          $("#show tbody").append(tr);
        } else {
          alert("등록 실패");
        }
      })
      .fail(function (err) {});
  });
});
