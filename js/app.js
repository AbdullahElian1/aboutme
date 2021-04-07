'use strict';

let score=0;
let userName = prompt("Enter Your Name");
console.log(userName);
alert("welcome "+ userName +" to my website");


function name () {
let firstQuastion = prompt("does the page owner name Abdullah answer yes/no");
console.log(firstQuastion);
switch(firstQuastion.toLowerCase()){
    case 'yes' :
    case 'y':
        alert("you are correct");
        score++;
        break;
    case 'no':
    case 'n' :
        alert("you are wrong");
        break;
    default :
    alert("please enter yes or no ");    
}
}
 name () ;

 function age (){
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
        score++;
        break;
    default :
    alert("please enter yes or no ");    

}
 }
age ();


function graduate (){
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
        score++;
        break;
    default :
    alert("please enter yes or no ");    

}
}
graduate ();


function major (){
let fourthQuastion = prompt("Was his major in the university computer science? answer yes/no");
console.log(fourthQuastion);
switch(fourthQuastion.toLowerCase()){
    case 'yes' :
    case 'y':
        alert("you are correct");
        score++;
        break;
    case 'no':
    case 'n' :
        alert("you are wrong");
        break;
    default :
    alert("please enter yes or no ");    

}
}
major ();


function passion (){
let fifthQuastion = prompt("Does he have a passion for programming? answer yes/no");
console.log(fifthQuastion);
switch(fifthQuastion.toLowerCase()){
    case 'yes' :
    case 'y':
        alert("you are correct");
        score++;
        break;
    case 'no':
    case 'n' :
        alert("you are wrong");
        break;
    default :
    alert("please enter yes or no ");    

}
}
passion ();




function guess (){
let sixQuastion ='';

console.log(sixQuastion);

for(let i=0;i<=3;i++){
    sixQuastion=prompt("you have four attempts  to guess a number ");
    sixQuastion=parseInt(sixQuastion);
    if(sixQuastion ===75){
        alert("Bravoo your correct");
        score++;
        break;
        
    }else if(sixQuastion>=0 && sixQuastion<65){
        alert("too low");

    }else if (sixQuastion>=90 && sixQuastion<=120){
        alert("too high ");

    }else if(sixQuastion>=65 && sixQuastion<=89) {
        alert(" You're close ");
        
    }else{
        alert("please enter number btween 1-100 ");
        
    }

    if(i===3)
        {
            alert("You have exhausted your attempts so,the correct number is 75 ");
            break;
        }

        
    }
}
guess ();

/*
function color (){
let favcolor=['black','white','pink','blue','yellow','red','orange'];
console.log(favcolor);

let sevenQuastion = prompt(" what do you think my favorite color you have six attempts ");
console.log(sevenQuastion);
sevenQuastion=sevenQuastion.toLowerCase();
console.log(sevenQuastion);
let x=true;
for(let i=0;i<=6;i++){
    
    
    for(let j=0; j<favcolor.length;j++){
        if(favcolor[j]===sevenQuastion){
            alert("Bravoo you are correct");
            score++;
            x=false;
           
        }
       
    }

    if(!x){
        break;
    }
    if(i===5)
        {
            alert("the correct colors " + favcolor);
            break;
        }
        
    


    sevenQuastion = prompt(" what do you think my favorite color you have six attempts ");
    
}
}
color ();


console.log(score);
alert("your score is" + score + " from 7");


document.write("thank you "+ userName +" for visited my website ");
*/
















