const fields = ["memberId", "memberPw", "memberNm", "phone"];
function makeRow(member = {}) {
  let tr = document.createElement("tr");

  fields.forEach((element) => {
    let td = document.createElement("td");
    td.innerText = member[element] == undefined ? "" : member[element];
    tr.appendChild(td);
  });
  let btn = document.createElement("button");
  btn.innerText = "삭제";
  btn.addEventListener("click", function (e) {
    const delHtp = new XMLHttpRequest();
    delHtp.open("get", "removeMember.do?mid=" + member.memberId);
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
  td.append(btn);
  tr.append(td);

  return tr;

  //   return fields.reduce((accumulator, currentValue) => {
  //     let td = document.createElement("td");
  //     td.innerText = member[currentValue] == undefined ? "" : member[currentValue];
  //     tr.appendChild(td);

  //     return tr;
  //   }, tr);
}

// Ajax 호출
const xhtp = new XMLHttpRequest();
xhtp.open("get", "memberAjax.do");
xhtp.send();

xhtp.onload = function () {
  let members = JSON.parse(xhtp.response);
  members.forEach((element) => {
    document.querySelector("#list").appendChild(makeRow(element));
  });
};

// 등록
document.querySelector("#addBtn").addEventListener("click", function (e) {
  let id = document.getElementById("mid").value;
  let name = document.getElementById("mname").value;
  let pass = document.getElementById("mpw").value;
  let phone = document.getElementById("phone").value;

  const addHtp = new XMLHttpRequest();
  addHtp.open("get", "addMemberAjax.do?mid=" + id + "&name=" + name + "&pass=" + pass + "&phone=" + phone);
  addHtp.send();
  addHtp.onload = function () {
    let result = JSON.parse(addHtp.response);

    if (result.retCode == "Success") {
      alert("등록 성공.");

      const memberInfo = {
        memberId: id,
        memberNm: name,
        memberPw: pass,
        phone: phone,
      };

      document.querySelector("#list").appendChild(makeRow(memberInfo)); // 어떻게 해야함?
    } else if (result.retCode == "Fail") {
      alert("등록 처리 중 에러.");
    } else {
      alert("알 수 없는 코드.");
    }
  };
});
