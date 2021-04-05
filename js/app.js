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

let secondQuastion = prompt("Is the age of the page 23 owner? answer yes/no");
console.log(secondQuastion);
switch(secondQuastion.toLowerCase()){
    case 'yes' :
    case 'y':
        alert(" you are wrong it's 22");
        break;
    case 'no':
    case 'n' :
        alert("you are correct it's 22 ");
        break;
    default :
    alert("please enter yes or no ");    

}


let thirdQuastion = prompt("Did Abdullah graduate from the Hashemite University? answer yes/no");
console.log(thirdQuastion);
switch(thirdQuastion.toLowerCase()){
    case 'yes' :
    case 'y':
        alert("you are wrong it's from  the University of Jordan");
        break;
    case 'no':
    case 'n' :
        alert(" you are correct it's from  the University of Jordan ");
        break;
    default :
    alert("please enter yes or no ");    

}

let fourthQuastion = prompt("Was his major in the university computer science? answer yes/no");
console.log(fourthQuastion);
switch(fourthQuastion.toLowerCase()){
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

let fifthQuastion = prompt("Does he have a passion for programming? answer yes/no");
console.log(fifthQuastion);
switch(fifthQuastion.toLowerCase()){
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


document.write("thank you "+ userName +" for visited my website ");

