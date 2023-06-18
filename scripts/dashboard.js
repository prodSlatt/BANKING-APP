/*check for login info here*/

/* Object Database */
let profiles = [
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

function myFunction() {
  for (var i = 0; i < profiles.length; i++) {
    var account = profiles[i];
    if (
      document.getElementById("user").value === account.username &&
      document.getElementById("pass").value === account.password
    ) {
      window.location.href = "../view/dashboard.html";
    }
  }
}

/* Hmmm */
document.addEventListener("mousemove", function (e) {
  var cursorTrail = document.querySelector(".cursor-trail");
  var trail = document.createElement("div");
  trail.classList.add("cursor-trail");
  trail.style.left = e.pageX + "px";
  trail.style.top = e.pageY + "px";
  cursorTrail.appendChild(trail);
  setTimeout(function () {
    trail.remove();
  }, 1500); // Adjust the duration of the cursor trail
});
