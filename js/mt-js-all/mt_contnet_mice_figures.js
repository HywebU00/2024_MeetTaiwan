var ctx1 = document.querySelector('.dataChart-tb1');
var ctx2 = document.querySelector('.dataChart-tb2');
var ctx3 = document.querySelector('.dataChart-tb3');
const dataLabel = ['參加國外人數', '總場次', '北部', '中部', '南部', '東部', '離島', '線上', '年度'];
const dataYear = ['2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014'];
// Conference DataList
const dataTitle = ['國際會議', '國際展覽', '企業會議暨獎旅'];
const dataTotalType = ['line', 'line', 'bar'];
const dataCTX = [ctx1, ctx2, ctx3];
const dataList = [
  [
    ['#1c3270', '#a2c9dd', '#65a4c6', '#25679e', '#225793', '#132b50', '#326990'],

    [58958, 12625, 13718, 5618, 60770, 61403, 58900, 57800, 28300, 32300],
    [],
    [254, 193, 67, 51, 207, 201, 178, 165, 165, 156],
    [42, 36, 12, 15, 36, 28, 30, 15, 9, 8],
    [75, 53, 16, 35, 45, 43, 35, 36, 40, 44],
    [5, 10, 2, 2, 3, 5, 5, 1, 1, 2],
    [2, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 68, 76, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    ['#5f2972', '#dbccf3', '#bda7e6', '#7e73b9', '#8948a3', '#683081', '#461c59'],

    [55681, 72505, 15280, 8813, 220116, 193811, 185000, 150000, 137700, 132000],
    [],
    [130, 133, 84, 62, 178, 181, 176, 185, 141, 150],
    [19, 30, 25, 22, 44, 38, 43, 44, 44, 33],
    [37, 41, 31, 7, 62, 60, 51, 39, 42, 33],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 6, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    ['#03045e', '#004e98', '#60b1a2'],
    [20000, 215, 0, 1538, 33561, 31260, 20700, 34200, 35800, 24500],
    [130, 3, 0, 10, 132, 127, 120, 126, 125, 118],
  ],
];
let c = 0;
while (c < 3) {
  let i = 0;
  let text = 0;
  while (i <= 9) {
    let k = 3;
    if (c < 2) {
      while (k <= 8) {
        if (!dataList[c][k][i]) {
          text += 0;
        } else {
          text += dataList[c][k][i];
        }
        k++;
      }
      dataList[c][2].push(text);
    }
    i++;
    text = 0;
  }
  const dataSets = [
    {
      type: 'bar',
      label: c < 2 ? ' ' : '總場次',
      backgroundColor: c < 2 ? 'transparent' : dataList[c][0][2] + '88',
      borderColor: 'transparent',
      data: dataList[c][2],
      yAxisID: 'y' + (c < 2 ? '2' : '3'),
    },
    {
      type: 'line',
      label: '參加國外人數',
      backgroundColor: dataList[c][0][0],
      borderColor: dataList[c][0][0],
      data: dataList[c][1],
      yAxisID: 'y1',
    },
    {
      type: 'bar',
      label: '北部',
      backgroundColor: dataList[c][0][1],
      data: dataList[c][3],
    },
    {
      type: 'bar',
      label: '中部',
      backgroundColor: dataList[c][0][2],
      data: dataList[c][4],
    },
    {
      type: 'bar',
      label: '南部',
      backgroundColor: dataList[c][0][3],
      data: dataList[c][5],
    },
    {
      type: 'bar',
      label: '東部',
      backgroundColor: dataList[c][0][4],
      data: dataList[c][6],
    },
    {
      type: 'bar',
      label: '離島',
      backgroundColor: dataList[c][0][5],
      data: dataList[c][7],
    },
    {
      type: 'bar',
      label: '線上',
      backgroundColor: dataList[c][0][6],
      data: dataList[c][8],
    },
  ];

  if (c > 1) {
    var IncentiveDataSets = dataSets.slice(0, 2);
  }

  const data = {
    labels: dataYear,
    datasets: c < 2 ? dataSets : IncentiveDataSets,
  };

  const getOrCreateTooltip = (chart) => {
    let tooltipEl = chart.canvas.parentNode.querySelector('div');
    if (!tooltipEl) {
      tooltipEl = document.createElement('div');
      tooltipEl.style.background = 'rgba(0, 0, 0, 0.7)';
      tooltipEl.style.borderRadius = '3px';
      tooltipEl.style.color = 'white';
      tooltipEl.style.opacity = 1;
      tooltipEl.style.pointerEvents = 'none';
      tooltipEl.style.position = 'absolute';
      tooltipEl.style.transform = 'translate(-50%, 0)';
      tooltipEl.style.transition = 'all .1s ease';

      const table = document.createElement('table');
      table.style.margin = '0px';
      tooltipEl.appendChild(table);
      chart.canvas.parentNode.appendChild(tooltipEl);
    }

    return tooltipEl;
  };

  const externalTooltipHandler = (context) => {
    // Tooltip Element
    const { chart, tooltip } = context;
    const tooltipEl = getOrCreateTooltip(chart);
    if (tooltip.opacity === 0) {
      tooltipEl.style.opacity = 0;
      return;
    }

    // Set Text
    if (tooltip.body) {
      const titleLines = tooltip.title || [];
      const bodyLines = tooltip.body.map((b) => b.lines);

      const tableHead = document.createElement('thead');

      titleLines.forEach((title) => {
        const tr = document.createElement('tr');
        tr.style.borderWidth = 0;

        const th = document.createElement('th');
        th.style.borderWidth = 0;
        th.style.fontSize = '1.2rem';
        const text = document.createTextNode(title);

        th.appendChild(text);
        tr.appendChild(th);
        tableHead.appendChild(tr);
        console.log();
      });

      const tableBody = document.createElement('tbody');
      bodyLines.forEach((body, i) => {
        const colors = tooltip.labelColors[i];
        const span = document.createElement('span');
        span.style.background = colors.backgroundColor;
        span.style.borderColor = colors.borderColor;
        span.style.borderWidth = '2px';
        span.style.marginRight = '10px';
        span.style.height = '10px';
        span.style.width = '10px';
        span.style.display = 'inline-block';
        span.style.borderRadius = '50%';

        const tr = document.createElement('tr');
        tr.style.backgroundColor = 'inherit';
        tr.style.borderWidth = 0;

        const td = document.createElement('td');
        td.style.borderWidth = 0;

        if (body[0].split(':')[0] === '參加國外人數') {
          const text = document.createTextNode(body + ' 人次');
          td.appendChild(span);
          td.appendChild(text);
          tr.appendChild(td);
          tableBody.appendChild(tr);
        } else if (body[0].split(':')[0] === ' ' || body[0].split(':')[0] === '總場次') {
          const text = document.createTextNode('共計' + body[0].split(':')[1] + ' 場');

          td.style.fontSize = '1rem';
          td.style.textAlign = 'center';

          td.appendChild(text);
          tr.appendChild(td);
          tableBody.appendChild(tr);
        } else {
          if (body[0].split(':')[1] == 0) {
          } else {
            const text = document.createTextNode(body + ' 場');

            td.appendChild(span);
            td.appendChild(text);
            tr.appendChild(td);
            tableBody.appendChild(tr);
          }
        }
      });
      const tableRoot = tooltipEl.querySelector('table');

      // Remove old children
      while (tableRoot.firstChild) {
        tableRoot.firstChild.remove();
      }

      // Add new children
      tableRoot.appendChild(tableHead);
      tableRoot.appendChild(tableBody);
    }

    const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

    // Display, position, and set styles for font
    tooltipEl.style.opacity = 1;
    tooltipEl.style.left = positionX + tooltip.caretX + 'px';
    tooltipEl.style.top = positionY + tooltip.caretY + 'px';
    tooltipEl.style.font = tooltip.options.bodyFont.string;
    tooltipEl.style.fontSize = '12px';
    tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
  };

  // new Chart(ctx1, {
  new Chart(dataCTX[c], {
    type: 'bar',
    data: data,
    options: {
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          stacked: true,
          type: 'linear',
          suggestedMin: 100,
          suggestedMax: 400,
          display: c < 2 ? true : false,
          title: {
            display: true,
            text: '在臺舉辦場次',
            padding: 10,
          },
        },
        y1: {
          beginAtZero: true,
          type: 'linear',
          display: true,
          position: 'right',
          grid: {
            drawOnChartArea: false,
          },
          title: {
            display: true,
            text: '參加國外人數',
            padding: 10,
          },
        },
        y2: {
          beginAtZero: true,
          type: 'linear',
          display: false,
          suggestedMin: 100,
          suggestedMax: 400,
          grid: {
            drawOnChartArea: false,
          },
        },
        y3: {
          beginAtZero: true,
          type: 'linear',
          display: c < 2 ? false : true,
          grid: {
            drawOnChartArea: false,
          },
          title: {
            display: true,
            text: '在臺舉辦場次',
            padding: 10,
          },
        },
        x: {
          stacked: true,
          grid: {
            display: false,
          },
          title: {
            display: true,
            text: '年份',
          },
        },
      },
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      plugins: {
        title: {
          display: true,
          text: dataTitle[c],
          padding: 20,
          font: {
            size: 18,
          },
        },
        legend: {
          labels: {
            usePointStyle: true,
            pointStyle: 'circle',
            padding: 20,
          },
          position: 'bottom',
        },
        tooltip: {
          enabled: false,
          position: 'nearest',
          external: externalTooltipHandler,
        },
      },
    },
  });
  // TABLE SETTING //
  var ttx = document.querySelector('.tb' + (c + 1) + ' .chart-table');
  if (dataTitle[c]) {
    const ttxYear = document.querySelector('.tb' + (c + 1) + ' .tb-year');
    const ttxYearTitle = document.querySelector('.tb' + (c + 1) + ' .tb-year th');

    let y = 0;
    while (y < 10) {
      const th = document.createElement('th');
      const TBtext = dataYear[y];
      th.innerHTML = TBtext;
      ttxYear.appendChild(th);
      y++;

      ttxYearTitle.style.backgroundColor = dataList[c][0][2];
      ttx.style.backgroundColor = dataList[c][0][2] + '11';
      th.style.backgroundColor = dataList[c][0][2] + 'aa';
      th.style.padding = '9px';
    }

    const ttxTotal = document.querySelector('.tb' + (c + 1) + ' .tb-total');
    const ttxTotalTitle = document.querySelector('.tb' + (c + 1) + ' .tb-total td');
    let t = 0;
    while (t < 10) {
      const td = document.createElement('td');
      const TBtext = dataList[c][2][t];
      td.innerHTML = toThousands(TBtext) + ' 場';
      ttxTotal.appendChild(td);
      t++;

      ttxTotalTitle.style.backgroundColor = dataList[c][0][2] + '44';
    }

    const ttxNumber = document.querySelector('.tb' + (c + 1) + ' .tb-number');
    const ttxNumberTitle = document.querySelector('.tb' + (c + 1) + ' .tb-number td');

    let u = 0;
    while (u < 10) {
      const td = document.createElement('td');
      const TBtext = dataList[c][1][u];
      td.innerHTML = toThousands(TBtext) + ' 人';
      ttxNumber.appendChild(td);
      td.style.backgroundColor = dataList[c][0][2] + 'aa';
      u++;

      ttxNumberTitle.style.backgroundColor = dataList[c][0][2];
    }
    if (c < 2) {
      const ttxDataCol = document.querySelector('.tb' + (c + 1) + ' .tb-datacol');

      let lo = 0;
      while (lo < 6) {
        let n = 0;
        let u = 0;
        const tr = document.createElement('tr');
        const td = document.createElement('td');

        td.innerHTML = toThousands(dataLabel[lo + 2]);
        tr.appendChild(td);
        td.style.backgroundColor = dataList[c][0][2] + '66';

        while (n < 10) {
          const td = document.createElement('td');
          const TBtext = dataList[c][lo + 3][n];
          if (TBtext === 0) {
            td.innerHTML = '-';
          } else {
            td.innerHTML = toThousands(TBtext) + ' 場';
          }
          tr.appendChild(td);

          n++;
        }

        ttxDataCol.appendChild(tr);

        if (lo % 2) {
          tr.style.backgroundColor = dataList[c][0][2] + '11';
        } else {
          tr.style.backgroundColor = dataList[c][0][2] + '44';
        }
        lo++;
      }
    }
  }
  const ttxCol = document.querySelector('.tb' + (c + 1) + ' .tb-col');
  ttxCol.style.backgroundColor = dataList[c][0][2] + 'bb';
  if (c > 1) {
    ttxCol.style.display = 'none';
  }
  c++;
}
function toThousands(num) {
  return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}
document.querySelector('.toggle-tb.tb1').addEventListener('click', TBtoogle);
document.querySelector('.toggle-tb.tb2').addEventListener('click', TBtoogle);
document.querySelector('.toggle-tb.tb3').addEventListener('click', TBtoogle);

function TBtoogle(e) {
  const tb = this.parentNode.parentNode.classList;
  const tgBtnClass = this.querySelector('i').classList;
  const result = tb.toggle('tb-on');
  tgBtnClass.toggle('fa-chevron-down');
  tgBtnClass.toggle('fa-chevron-up');
}
