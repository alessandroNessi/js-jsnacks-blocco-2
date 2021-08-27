var numbersArray=[];
document.getElementById("textInput").addEventListener('keyup', insertNum);
function insertNum(event){
    if(event.code=="NumpadEnter"||event.code=="Enter"){
        var userInput=document.getElementById("textInput").value;
        document.getElementById("textInput").value="";
        if(isNumber(userInput)){
            userInput=parseInt(userInput);
            document.getElementById("lista").innerHTML += "<li>"+ userInput +"</li>"
            numbersArray.push(userInput);
            if(numbersArray.length%2==1){
                document.getElementById("sum").innerHTML=parseInt(document.getElementById("sum").innerHTML)+userInput;
            }
        }else{
            alert("You didn't typed a number");
        }
    }
}
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