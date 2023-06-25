const loggedInProfile = JSON.parse(localStorage.getItem("loggedInProfile"));

// Check if the loggedInProfile exists
if (loggedInProfile) {
  // Access the properties of loggedInProfile
  console.log(loggedInProfile.firstName);
  console.log(loggedInProfile.lastName);
  console.log(loggedInProfile.balance);
  console.log(loggedInProfile.savings);
  console.log(loggedInProfile.username);
  console.log(loggedInProfile.password);
} else {
  console.log("Logged in profile not found.");
}

const chartData = {
  labels: ["Python", "Java", "JavaScript", "C#", "Others"],
  data: [30, 17, 10, 7, 36],
};

const myChart = document.querySelector(".my-chart");
const ul = document.querySelector(".programming-stats .details ul");

new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: chartData.labels,
    datasets: [
      {
        label: "Language Popularity",
        data: chartData.data,
      },
    ],
  },
  options: {
    borderWidth: 10,
    borderRadius: 2,
    hoverBorderWidth: 0,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

const populateUl = () => {
  chartData.labels.forEach((l, i) => {
    let li = document.createElement("li");
    li.innerHTML = `${l}: <span class='percentage'>${chartData.data[i]}%</span>`;
    ul.appendChild(li);
  });
};

populateUl();

var chrt = document.getElementById("chartId").getContext("2d");
var chartId = new Chart(chrt, {
  type: "doughnut",
  data: {
    labels: ["HTML", "CSS", "JAVASCRIPT", "CHART.JS", "JQUERY", "BOOTSTRP"],
    datasets: [
      {
        label: "online tutorial subjects",
        data: [20, 40, 13, 35, 20, 38],
        backgroundColor: [
          "yellow",
          "aqua",
          "pink",
          "lightgreen",
          "gold",
          "lightblue",
        ],
        hoverOffset: 5,
      },
    ],
  },
  options: {
    responsive: false,
  },
});
