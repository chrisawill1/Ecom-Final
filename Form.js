// what js can i add to a form? pop up image when button is clicked 
// uuuhhhhhhh maybe if/else when submit 
// // if button print thanks for submitting, else if email is empty print invalid send


// let userInput = document.getElementById("mail")

// if (userInput === true)
// {
//     alert("Thank You for Submitting!");
// }
// else if(userInput === false)
// {
//     alert("Please input valid email!");
// }

const button = document.getElementById("yippie");
const statusText = document.getElementById("status");

button.addEventListener("click", function() 
{
  
  if (statusText.innerHTML === "Thank you for submitting!")
    {
        statusText.innerHTML = "The light is ON";
    } 
    else 
    {
        statusText.innerHTML = "Please submit valid info!";
    }

});
// something about this looks wrong....check notes if time

// ONCE AGAIN i cant seem to figure out alerts and im running out of time to fix it
