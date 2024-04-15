/**
 *
 */

$(document).ready(function () {
  $("div.register > table button:eq(0)").on("click", function () {
    let chk = $("<input />").attr("type", "checkbox");
    chk.on("click", function () {
      if ($("tbody input[type='checkbox']:checked").length == $("tbody input[type='checkbox']").length) {
        $("thead input[type='checkbox']").prop("checked", true);
      } else {
        $("thead input[type='checkbox']").prop("checked", false);
      }
    });

    $("#list").append(
      $("<tr />").append(
        $("<td />").text($("#bookCode").val()),
        $("<td />").text($("#bookName").val()),
        $("<td />").text($("#bookAuthor").val()),
        $("<td />").text($("#bookPirce").val()),
        $("<td />").append($("<button>삭제</button>").on("click", deleteBook)),
        $("<td />").append(chk)
      )
    );
    // 초기화
    $("#bookCode").val("");
  });

  $("thead input[type='checkbox']").on("change", function () {
    $("tbody input[type='checkbox']").prop("checked", $(this).prop("checked"));
  });

  $("div.register>table button:eq(1)").on("click", function () {
    $("tbody input[type='checkbox']:checked").parent().parent().remove();
  });

  // 삭제 함수
  function deleteBook(e) {
    $(e.target).parent().parent().remove();
  }
});
