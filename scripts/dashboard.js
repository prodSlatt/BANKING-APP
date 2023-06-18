const loggedInProfile = JSON.parse(localStorage.getItem('loggedInProfile'));

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
  console.log('Logged in profile not found.');
}


