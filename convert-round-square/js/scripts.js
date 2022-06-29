function roundsquare() {
   let user = document.getElementById("diametro");
   let user2 = document.getElementById("lado");
   let a =user.value;
   let lado2 = user2.value;

   area = Math.PI * (Math.pow(((a *25.4)/2),2));
   lado1 = area /lado2;
   lado1 = lado1.toFixed(2);
   area = area.toFixed(2);
   
   document.getElementById("resultadoArea").innerText =  area + " ";
   document.getElementById("resultado1").innerText =  lado1 + " ";
   document.getElementById("resultado2").innerText =  lado2 + " ";
}

// roundsquare();

function converter(){
   let user = document.getElementById("units");
   let a = user.value;
   if(a == "cmin"){
      document.getElementById("userSelect").innerText = a;
   }else if(a == "mmin"){
      document.getElementById("userSelect").innerText = a;
   }else if(a == "incm"){
      document.getElementById("userSelect").innerText = a;
   }else if(a == "inmm"){
      document.getElementById("userSelect").innerText = a;
   }
   
   
}
// converter();
