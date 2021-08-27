var userInput;
var sum=0;
//for
for(var i=0; i<5; i++){
    userInput=parseInt(prompt("Insert the "+ (i+1) +" number:"));
    if(isNaN(userInput)){
        alert("you insered the wrong number! Try again");
        i--;
    }else{
        sum +=userInput;
    }
}
//while
// var i=0;
// while(i<5){
//     userInput=parseInt(prompt("Insert the "+ (i+1) +" number:"));
//     if(isNaN(userInput)){
//         alert("you insered the wrong number! Try again");
//         i--;
//     }else{
//         sum +=userInput;
//     }
//     i++;
// }
console.log(sum);