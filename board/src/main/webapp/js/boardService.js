const svc = {
  replyList(bno = 1, successCall) {
    let xhtp = new XMLHttpRequest();
    xhtp.open("get", "replyList.do?bno=" + bno);
    xhtp.send();
    xhtp.onload = function () {
      let result = JSON.parse(xhtp.response);
      successCall(result);
    };
  },
  removeReply(rno = 1, successCall, errorCall) {
    let xhtp = new XMLHttpRequest();
    xhtp.open("get", "removeReply.do?rno=" + rno);
    xhtp.send();
    xhtp.onload = function () {
      let result = JSON.parse(xhtp.response);
      if (result.retCode == "Success") {
        successCall();
      } else {
        errorCall();
      }
    };
  },
};

export { svc };
