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
        localStorage.setItem('loggedInProfile', JSON.stringify(profile));

        // Redirect to the dashboard page
        window.location.href = "view/dashboard.html";
      } 

      // Display an error message
      document.getElementById("error").textContent = "Incorrect username or password.";
      
    }
