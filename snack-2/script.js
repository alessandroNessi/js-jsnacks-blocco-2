//input
var userInput=prompt("inserisci il numero: ");
while(isNumber(userInput)==false){
    userInput=prompt("Non hai inserito un numero, inserisci un numero: ");
}
userInput=parseInt(userInput);
if(userInput%2==1){
    userInput+=1;
}
document.getElementById("risultato").innerHTML=userInput;

/**
 * Given a string returns true if is composed only by numbers, false if there is some forbidden char, doesn't work with negative numbers
 */
 function isNumber(temp){
    if(temp.length==0){
        return false;
    }
    for(let t=0; t<temp.length; t++){
        if(temp[t]!="0"&&temp[t]!="1"&&temp[t]!="2"&&temp[t]!="3"&&temp[t]!="4"&&temp[t]!="5"&&temp[t]!="6"&&temp[t]!="7"&&temp[t]!="8"&&temp[t]!="9"){
            return false;
        }
    }
    return true;
}