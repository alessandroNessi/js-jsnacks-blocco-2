//input
var array1=[];
var array2=[];
var lenght;
length=randomN(30);
for(var i=0; i<length; i++){
    array1.push(randomN(256));
    document.getElementById("array1").innerHTML+="<li>"+ array1[i] +"</li>";
}
length=randomN(30);
for(var i=0; i<length; i++){
    array2.push(randomN(256));
    document.getElementById("array2").innerHTML+="<li>"+ array2[i] +"</li>";
}
//if 0 are equal, else if positive array1 is bigger, else array 2 is bigger
lenght= array1.length-array2.length;
if(lenght!=0){
    let temp;
    if(lenght>0){
        temp=array2.length;
        for(let i=temp; i<array1.length; i++){
            array2.push(randomN(256));
            document.getElementById("array2").innerHTML+="<li class=\"addedElement\">"+ array2[i] +"</li>";
        }
    }else{
        temp=array1.length;
        for(let i=temp; i<array2.length; i++){
            array1.push(randomN(256));
            document.getElementById("array1").innerHTML+="<li class=\"addedElement\">"+ array1[i] +"</li>";
        }
    }
}
/**
 * return a number from 0 to "number"
 */
function randomN(number){
    return Math.floor((Math.random() * number));
}