// var  lad;

function roundsquare(a){
   a = 15;
   lado2 = 250;
   area = Math.PI * (Math.pow(((a *25.4)/2),2));
   lado1 = area /lado2;
   return lado1;
}

roundsquare();

// console.log(lado2);

document.getElementById("resultado1").innerHTML = lado1;
document.getElementById("resultado2").innerHTML = lado2;