//input
var nomi = ["Gianni", "Mario", "Weejee"];
var cognomi = ["Rossi","Bianchi","Ammaccabanane"];
var invitati = [];
var persona;
while(nomi.length>0){
    temp = randomN(nomi.length);
    persona = nomi[temp];
    nomi.splice(temp, 1);
    temp = randomN(cognomi.length);
    persona +=" " + cognomi[temp];
    cognomi.splice(temp, 1);
    invitati.push(persona);
    document.getElementById("risultato").innerHTML += "<li>" + persona + "</li>";
    document.getElementsByTagName("li")[2-nomi.length].style.color = "rgb("+randomN(256)+","+randomN(256)+","+randomN(256)+")";
}
console.log(invitati);
/**
 * return a number from 0 to "number"
 */
function randomN(number){
    return Math.floor((Math.random() * number));
}