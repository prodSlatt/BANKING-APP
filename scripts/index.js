const profiles = [
  {
    firstName: "Joe",
    lastName: "Mama",
    balance: 1500,
    savings: 5000,
    username: "joemama",
    password: "password2021",
  },
  {
    firstName: "Mike",
    lastName: "Hawk",
    balance: 2300,
    savings: 120,
    username: "mikehawk",
    password: "password2022",
  },
  {
    firstName: "Ben",
    lastName: "Dover",
    balance: 12,
    savings: 50000,
    username: "bendover",
    password: "password2023",
  },
];

function login() {
  const username = document.getElementById("user").value;
  const password = document.getElementById("pass").value;

  const profile = profiles.find(
    (profile) => profile.username === username && profile.password === password
  );

  if (profile) {
    // Save the profile in local storage
    localStorage.setItem("loggedInProfile", JSON.stringify(profile));

    // Redirect to the dashboard page
    window.location.href = "view/dashboard.html";
  }

  // Display an error message
  document.getElementById("error").textContent =
    "Incorrect username or password.";
}

/* SPLIT HERE*/
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
