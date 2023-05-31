/*check for login info here*/

function myFunction() {
  /* checks values to matching username and password*/
  if (
    document.getElementById("user").value === "joemama" &&
    document.getElementById("pass").value === "password2021"
  ) {
    /*goes to dashboard page*/
    window.location.replace =
      "C:\\Users\\gamin\\OneDrive\\Desktop\\NEW SHIT\\BANKING APP\\dashboard.html";
    console.log(document.getElementById("user").value);
    console.log(document.getElementById("pass").value);
  }

  if (
    document.getElementById("user").value === "mikehawk" &&
    document.getElementById("pass").value === "password2022"
  ) {
    window.location.href = "dashboard.html";
  }

  if (
    document.getElementById("user").value === "bendover" &&
    document.getElementById("pass").value === "password2023"
  ) {
    window.location.href = "dashboard.html";
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
