var userInput;
var sum=0;
//for
var numberRequested=prompt("inserisci la quantità di numeri da inserire o \"exit\" per uscire durante l'inserimento");
for(var i=0; i<numberRequested && userInput!="exit"; i++){
    userInput=prompt("Insert the "+ (i+1) +" number:");
    if(userInput!="exit"){
        userInput=parseInt(userInput);
        if(isNaN(userInput)){
            alert("you insered the wrong number! Try again");
            i--;
        }else{
            sum +=userInput;
        }
    }
}
//while
// var i=0;
// while(i<numberRequested && userInput!="exit"){
    // userInput=prompt("Insert the "+ (i+1) +" number:");
    // if(userInput!="exit"){
    //     userInput=parseInt(userInput);
    //     if(isNaN(userInput)){
    //         alert("you insered the wrong number! Try again");
    //     }else{
    //         sum +=userInput;
    //         i++;
    //     }
    // }     
// }
document.getElementById("risultato").innerHTML=sum;