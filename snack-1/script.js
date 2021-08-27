var userInput;
var sum=0;
//for
var numberRequested=prompt("inserisci la quantità di numeri da inserire o \"exit\" per uscire durante l'inserimento");
while(isNumber(numberRequested)==false){
    numberRequested=prompt("Non hai inserito un numero corretto, inserisci la quantità di numeri da inserire o \"exit\" per uscire durante l'inserimento");
}
numberRequested=parseInt(numberRequested);
for(var i=0; i<numberRequested && userInput!="exit"; i++){
    userInput=prompt("Insert the "+ (i+1) +" number:");
    if(userInput!="exit"){
        while(isNumber(userInput)==false){
            userInput=prompt("You insered the wrong number, reinsert the "+ (i+1) +" number:");
        }
        sum +=userInput;
    }
}
//while
// var i=0;
// while(i<numberRequested && userInput!="exit"){
    // userInput=prompt("Insert the "+ (i+1) +" number:");
    // if(userInput!="exit"){
    // while(isNumber(userInput)==false){
    //     userInput=prompt("You insered the wrong number, reinsert the "+ (i+1) +" number:");
    // }
    // i++;
    // sum +=userInput;
    // }
// }
document.getElementById("risultato").innerHTML=sum;
//function check if the input is onlynumbers
function isNumber(temp){
    for(let t=0; t<temp.length; t++){
        if(temp[t]!="0"&&temp[t]!="1"&&temp[t]!="2"&&temp[t]!="3"&&temp[t]!="4"&&temp[t]!="5"&&temp[t]!="6"&&temp[t]!="7"&&temp[t]!="8"&&temp[t]!="9"){
            return false;
        }
    }
    return true;
}