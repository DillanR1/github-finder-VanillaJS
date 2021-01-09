// Search Input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get Input Text
    const userText = e.target.value;
    
    //NOTE gets value of the text and console logs it as long as its not blank
    
    if(userText !== '') {
        console.log(userText);
    
    }
});