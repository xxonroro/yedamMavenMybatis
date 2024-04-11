/**
 *
 */
import { svc } from "./boardService.js";
console.log(svc);

let page = 1;
svc.replyList({ bno, page }, replyListFnc2);

function replyListFnc2(result) {
  document.querySelectorAll('.content>ul>li[style="display: block;"]').forEach((item) => item.remove());

  result.forEach((element) => {
    let template = document.querySelector("div.content>ul>li:nth-of-type(3)").cloneNode(true);

    template.querySelector("span:nth-of-type(1)").innerText = element.replyNo;
    template.querySelector("span:nth-of-type(2)").innerText = element.reply;
    template.querySelector("span:nth-of-type(3)").innerText = element.replyer;
    template.querySelector("button").addEventListener("click", function (e) {
      svc.removeReply(
        element.replyNo, // 삭제할 댓글 번호
        () => template.remove(),
        () => alert("처리중 에러!!")
      );
    });
    template.style.display = "block";
    document.querySelector("div.content > ul").appendChild(template);
  });
  // 페이징 생성.
  svc.pagingList(bno, createPageList);
}

function replyListFnc1(result) {
  result.forEach((element) => {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = element.replyNo;
    span.className = "col-sm-2";
    li.appendChild(span);

    span = document.createElement("span");
    span.innerText = element.reply;
    span.className = "col-sm-5";
    li.appendChild(span);

    span = document.createElement("span");
    span.innerText = element.replyer;
    span.className = "col-sm-2";
    li.appendChild(span);

    let btn = document.createElement("button");
    btn.innerText = "삭제";
    btn.className = "col-sm-2";
    li.appendChild(btn);
    // ul
    document.querySelector("div.content ul").appendChild(li);
  });
}

function deleteFormFunc() {
  document.forms[0].action = "removeForm.do";
  console.dir(document.forms[0].action);
  document.forms[0].submit();
}

document.querySelector('form[name="submitForm"]').addEventListener("submit", function (e) {
  e.preventDefault; // 기본기능 차단
  if (logId == writer) {
    this.submit();
  } else {
    alert("권한이 없습니다.");
  }
});

// paging 생성
let pageTarget = document.querySelector("div.pagination");

function createPageList(result) {
  // 기존태그가 있으면 초기화...
  pageTarget.innerHTML = "";

  let totalCnt = result.totalCount;
  let startPage, endPage; // 시작 페이지, 마지막 페이지
  let next, prev; // 이전, 이후
  let realEnd = Math.ceil(totalCnt / 5);

  endPage = Math.ceil(page / 5) * 5;
  startPage = endPage - 4;
  endPage = endPage > realEnd ? realEnd : endPage;

  next = endPage < realEnd ? true : false;
  prev = startPage > 1;

  // a 태그 생성
  if (prev) {
    let a = document.createElement("a");
    a.innerHTML = "&laquo;";
    a.href = "#";
    a.setAttribute("data-page", startPage - 1);
    pageTarget.appendChild(a);
  }

  for (let pg = startPage; pg <= endPage; pg++) {
    let a = document.createElement("a");
    a.innerHTML = pg;
    a.href = "#";
    a.setAttribute("data-page", pg);
    pageTarget.appendChild(a);

    if (pg == page) {
      a.className = "active";
    }
  }
  if (next) {
    let a = document.createElement("a");
    a.innerHTML = "&raquo;";
    a.href = "#";
    a.setAttribute("data-page", endPage + 1);
    pageTarget.appendChild(a);
  }
  // pagination 이동
  document.querySelectorAll(".pagination>a").forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      page = item.dataset.page;
      svc.replyList({ bno, page }, replyListFnc2);
    });
  });
}

// 등록 버튼
document.querySelector("#addReply").addEventListener("click", function (e) {
  let reply = document.getElementById("reply").value;
  if (!reply) {
    alert("댓글을 입력하세요.!!");
    return;
  }

  let rvo = {
    bno: bno,
    replyer: logId,
    reply: reply,
  };

  svc.addReply(rvo, function (result) {
    if (result.retCode == "Success") {
      svc.replyList({ bno, page }, replyListFnc2);
    } else {
      alert("처리중 에러가 발생!!");
    }
  });
  document.getElementById("reply").value = "";
});
