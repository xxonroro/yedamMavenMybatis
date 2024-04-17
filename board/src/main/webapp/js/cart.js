$(document).ready(function () {
  $.ajax({
    url: "cartList.do",
    method: "get",
    dataType: "json",
  }).done(function (result) {
    let sum = 0;
    let count = 0;

    result.forEach((product) => {
      let clone = $(".data").first().clone(true);

      clone.css("display", "block");
      clone.attr("data-id", product.no);

      clone.find(".img img").attr("src", "./image/" + product.productNm + ".jpg");
      clone.find(".pname span").text(product.productNm);

      clone.find(".basketprice").text(product.price + "원");
      clone.find(".p_price").val(product.price);

      let numInput = clone.find("#p_num1");

      numInput.val(product.qty);
      clone.find(".sum").text(product.price * numInput.val() + "원");
      count += Number(numInput.val());

      sum += product.price * numInput.val();

      $("#basket").append(clone);

      $("#sum_p_num span").text(count);
      $("#sum_p_price span").text(sum);
    });
  });

  // 삭제
  $(".basketcmd").on("click", function (e) {
    let no = $(this).closest(".data").data("id");

    $.ajax({
      url: "deleteCartList.do",
      method: "post",
      dataType: "json",
      data: {
        no: no,
      },
    }).done(
      function (result) {
        if (result.retCode == "Success") {
          let list = $(this).closest(".data");
          let listPrice = Number(list.find(".basketprice input").val());
          let listCount = Number(list.find("##p_num1").val());

          $("#sum_p_num").text();

          list.remove();
        } else {
          alert("삭제 ❌");
        }
      }.bind(this)
    );
  });

  $(".basketrowcmd .abutton:first").on("click", function (e) {
    let checkList = $("input[type='checkbox']:checked").closest(".data");
    console.log(checkList);

    checkList.each(function () {
      let no = $(this).data("id");

      $.ajax({
        url: "deleteCartList.do",
        method: "post",
        dataType: "json",
        data: {
          no: no,
        },
      }).done(
        function (result) {
          if (result.retCode == "Success") {
            $(this).remove();
          } else {
            alert("삭제 ❌");
          }
        }.bind(this)
      ); // AJAX 콜백 내에서 'this'를 현재 요소에 바인딩
    });
  });

  $(".basketrowcmd .abutton:last").on("click", function (e) {
    $.ajax({
      url: "deleteAll.do",
      method: "post",
      dataType: "json",
    }).done(function (result) {
      if (result.retCode == "Success") {
        $(".data").remove();
      } else {
        alert("삭제 X");
      }
    });
  });

  $("i.up").on("click", function (e) {
    $(this).closest(".basketprice").text;
  });
});
