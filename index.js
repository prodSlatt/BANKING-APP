/* PASSWORD CHANGER*/
if (newPass != verifyPass) {
}
/* return to login page*/
function returnLogin(){
  window.location.href = "index.html";
}

/*check for login info here*/

function myFunction() {
  if (document.getElementById("user").value === "joemama" && document.getElementById("pass").value === "password2021"){
  window.location.href = ("dashboard.html");
}
  if (document.getElementById("user").value === "mikehawk" && document.getElementById("pass").value === "password2022"){
  window.location.href = "dashboard.html";
}
  if (document.getElementById("user").value === "bendover" && document.getElementById("pass").value === "password2023"){
  window.location.href = "dashboard.html";
}
}




/* Object Database */
let profile1 = {
  firstName: "Joe",
  lastName: "Mama",
  balance: 1500,
  savings: 5000,
  username: "joemama";
  password: "password2021";
};
let profile2 = {
  firstName: "Mike",
  lastName: "Hawk",
  balance: 2300,
  savings: 120,
  username: "mikehawk";
  password: "password2022";
};
let profile3 = {
  firstName: "Ben",
  lastName: "Dover",
  balance: 12,
  savings: 50000,
  username: "bendover";
  password: "password2023";
};

/* Hmmm */
