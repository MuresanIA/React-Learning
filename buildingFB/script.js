var dataBase = [
    {
        userName: "alex",
        password: "supersecret"
    }
];

var newsFeed = [
    {
        userName: "Bobby",
        timeLine: "So cool because of learning"
    },
    {
        userName: "Sally",
        timeLine: "Javascript is so coooooooooool"    
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass){
    if(user === dataBase[0].userName &&
         pass === dataBase[0].password) {
             console.log(newsFeed);
         }else {
             alert("Sorry, wrong username and password!");
         }
}

signIn(userNamePrompt, passwordPrompt);