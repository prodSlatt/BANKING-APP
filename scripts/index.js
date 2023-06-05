/*check for login info here*/

function myFunction() {
  /* checks values to matching username and password*/
  if (
    document.getElementById("user").value === "yes" &&
    document.getElementById("pass").value == "yes"
  ) {
    /*goes to dashboard page*/
    window.location.href = "../view/dashboard.html";
  }
}

/* Object Database */
let profile1 = {
  firstName: "Joe",
  lastName: "Mama",
  balance: 1500,
  savings: 5000,
  username: "joemama",
  password: "password2021",
};
let profile2 = {
  firstName: "Mike",
  lastName: "Hawk",
  balance: 2300,
  savings: 120,
  username: "mikehawk",
  password: "password2022",
};
let profile3 = {
  firstName: "Ben",
  lastName: "Dover",
  balance: 12,
  savings: 50000,
  username: "bendover",
  password: "password2023",
};

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
