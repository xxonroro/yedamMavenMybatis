/**
 *  ajax (Asynchronouse Javascrpipt And XML)
 */

setTimeout(() => {
  console.log("code 1");
}, 1000);

setTimeout(function () {
  console.log("code 2");
}, 3000);

setTimeout(function () {
  console.log("code 3");
}, 2000);

let xhtp = new XMLHttpRequest(); // 비동기방식으로 처리하는 대표적인 객체 (서버 상의 파일을 읽어온다.)
xhtp.open("get", "js/MOCK_DATA.json"); // 서버의 파일을 요청
xhtp.send(); // 처리 시작 (비동기)
xhtp.onload = function () {
  console.log("1");
  //   console.log("xhtp: " + xhtp.reponse);
  console.log(JSON.parse(xhtp.response));
};
console.log("2");
