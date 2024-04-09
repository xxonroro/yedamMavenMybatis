const fields = ["boardNo", "title", "content", "writer", "createDate"];

function makeRow(member = {}) {
  let tr = document.createElement("tr");

  fields.forEach((element) => {
    let td = document.createElement("td");
    td.innerText = member[element] == undefined ? "" : member[element];
    tr.appendChild(td);
  });

  let btn = document.createElement("button");
  btn.innerText = "삭제";
  btn.addEventListener("click", function (event) {
    const delHtp = new XMLHttpRequest();
    delHtp.open("get", "removeBoardAjax.do?bno=" + member.boardNo);
    delHtp.send();

    delHtp.onload = function () {
      let result = JSON.parse(delHtp.response);
      if (result.retCode == "Success") {
        alert("삭제 성공");
        tr.remove();
      } else if (result.retCode == "Fail") {
        alert("삭제 처리 중 에러");
      } else {
        alert("알 수 없는 코드");
      }
    };
  });

  let td = document.createElement("td");
  td.appendChild(btn);
  tr.appendChild(td);

  return tr;
}

const xhtp = new XMLHttpRequest();
xhtp.open("get", "boardAjax.do?page=" + currentPage);
xhtp.send();

xhtp.onload = function () {
  console.log(JSON.parse(xhtp.response));
  let boards = JSON.parse(xhtp.response);

  boards.forEach((element) => {
    document.querySelector("#list").append(makeRow(element));
  });
};
