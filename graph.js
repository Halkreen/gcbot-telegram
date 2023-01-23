var results = []
fetch('./result.json').then(response => {
  results = response.json();
})

var dataset = [0];
for (let i = 0; i < results.length; i++) {
  dataset.push(dataset[i] + results[i].winnings);
}

var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: dataset,
    datasets: [
      {
        data: dataset,
        label: "Bankroll",
        borderColor: "rgb(62,149,205)",
        backgroundColor: "rgb(62,149,205,0.1)",
        pointRadius: 0,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          ticks: {
            display: false, //this will remove only the label
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontColor: "rgba(255, 255, 255, 0.5)", // this here
          },
          gridLines: {
            color: "rgba(255, 255, 255, 0.1)",
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
  },
});
