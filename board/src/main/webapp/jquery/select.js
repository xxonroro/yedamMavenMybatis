$(document).ready(function () {
  // + 버튼 첫 번째 select에서 두 번째 select
  $("button:eq(0)").on("click", function (e) {
    let selOp = $("select:eq(0) option:selected");

    $("select:eq(1)").append(selOp);
  });

  // - 버튼 두 번째 select에서 첫 번째 select
  $("button:eq(1)").on("click", function (e) {
    let selOp = $("select:eq(1) option:selected");

    $("select:eq(0)").append(selOp);
  });
});
