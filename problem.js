/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/


/*
correctPassword = jenis1
userInput = whatever they write
requiredLength = 6
forgotPassword = Here is a hint + "This password you set should not be used because it glitches the system"
resetPassword = Let's reset your account + "This password you set should not be used because it glitches the system"

passwordCheck("jenis1", "", 6, "forgot", "reset") ! !wrong don't use this! !
*/


function passwordCheck(correctPassword, userInput, requiredLength, forgotPassword, resetPassword){
    if(userInput.length === requiredLength && correctPassword) {
        console.log("Access Granted!");
    } else if(userInput.length != requiredLength && correctPassword) {
        console.log("Access Denied!");
    } else if(userInput === forgotPassword) {
        console.log("Here's a hint." + " This password you set should not be used because it glitches the system!");
    } else if(userInput === resetPassword) {
        console.log("Let's reset your account." + " This password you set should not be used because it glitches the system!");
    } else if(userInput != requiredLength) {
        console.log("Your password is too short!");
    }
}


passwordCheck("jenis1", "jenis1", 6, "forgot", "reset") /* "Access Granted!" */
passwordCheck("jenis1", "shmenis2", 6, "forgot", "reset") /* "Access Denied!" */
passwordCheck(undefined, "forgot", undefined, "forgot", undefined) /* "Here's a hint" "This password you set should not be used because it glitches the system" */ 
passwordCheck(undefined, "reset", undefined, undefined, "reset") /* "Let's reset your account" */
passwordCheck(undefined, "jenis", 6, undefined, undefined) /* "Your password is too short!" */
