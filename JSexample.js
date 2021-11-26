var txt= "abcdefghigklmnopqrstuvwxyz"
var txt1 = txt.length;
var txt2 = txt.slice(0,4);
console.log(txt2);
var txt3= "come visit microsoft"
var txt4 = txt3.replace("microsoft","BGU")
console.log(txt4)



const d = new Date();
console.log(d);
var h =d.getHours();
console.log(h);

if (h<12){
    greeting= "goodmorning";
} else {
    greeting="good evning";
};
console.log(greeting);

function greet() {
    document.getElementById("P").innerHTML=greeting;
}
var cars=["toyota","honda","Ford"];


var i;
for (i=0; i<cars.length; i++){
    console.log(cars[i]);
}
