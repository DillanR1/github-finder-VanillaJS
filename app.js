// Init Github
const github = new Github();

// Init UI
const ui = new UI;

// Search Input
const searchUser = document.getElementById("searchUser");

// Search input event listener
searchUser.addEventListener("keyup", (e) => {
  // Get Input Text
  const userText = e.target.value;

  //NOTE gets value of the text and console logs it as long as its not blank

  if (userText !== "") {
    // Make HTTP call
    github.getUser(userText).then((data) => {

      if (data.profile.message === "Not Found") {
        // Show alert
        ui.showAlert('User not found', 'alert alert-danger')
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);

      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
