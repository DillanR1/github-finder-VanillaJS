// Init Github
const github = new Github();

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
      console.log(data);
        // Remove console.log once working, just sanity checking for now
      if (data.profile.message === "Not Found") {
        // Show alert

      } else {
        // Show profile

      }
    });
  } else {
    // Clear profile

  }
});
