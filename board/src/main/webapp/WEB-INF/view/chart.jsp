<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">
  let dataAry = [["user", "count by user"]];
  let xhtp = new XMLHttpRequest();
  xhtp.open("get", "chartJson.do");
  xhtp.send();
  console.log(dataAry);

  xhtp.onload = function () {
    let result = JSON.parse(xhtp.response);
    console.log(result);

    result.forEach((element) => {
      dataAry.push([element.USERNAME, element.CNT]);
    });

    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);
  };

  function drawChart() {
    var data = google.visualization.arrayToDataTable(dataAry);

    var options = {
      title: "My Daily Activities",
    };

    var chart = new google.visualization.PieChart(document.getElementById("donutchart"));
    chart.draw(data, options);
  }
</script>

<div id="donutchart" style="width: 900px; height: 500px"></div>
