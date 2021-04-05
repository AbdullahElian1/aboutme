'use strict';
let userName = prompt("Enter Your Name");
console.log(userName);
alert("welcome "+ userName +" to my website");


let firstQuastion = prompt("does the page owner name Abdullah answer yes/no");
console.log(firstQuastion);
switch(firstQuastion.toLowerCase()){
    case 'yes' :
    case 'y':
        alert("you are correct");
        break;
    case 'no':
    case 'n' :
        alert("you are wrong");
        break;
    default :
    alert("please enter yes or no ");    

}


