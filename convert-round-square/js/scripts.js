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
document.getElementById("userInputUnit").innerText =  "cm";
function converter(){
   let user = document.getElementById("userSelect");
   let a = user.value;
   let c;

   let userInput = document.getElementById("userInput");
   let b = userInput.value;
   document.getElementById("userInputUnit").innerText =  "cm";
   if(a == "cmin"){
      c = b / 2.54;
      c = c.toFixed(2);
      
      document.getElementById("resultConvert").innerText =  c;
      document.getElementById("unit").innerText =  " in";
      document.getElementById("userInputUnit").innerText =  "cm";
   }else if(a == "mmin"){
      c = b / 25.4
      c = c.toFixed(2);
      
      document.getElementById("resultConvert").innerText =  c;
      document.getElementById("unit").innerText =  " in";
      document.getElementById("userInputUnit").innerText =  "mm";
   }else if(a == "incm"){
      c = b *  2.54
      c = c.toFixed(2);
      
      document.getElementById("resultConvert").innerText =  c;
      document.getElementById("unit").innerText =  " cm";
      document.getElementById("userInputUnit").innerText =  "in";
   }else if(a == "inmm"){
      c = b * 25.4;
      c = c.toFixed(2);
      
      document.getElementById("resultConvert").innerText =  c;
      document.getElementById("unit").innerText =  " mm";
      document.getElementById("userInputUnit").innerText =  "in";
   }
   
   
}
// converter();
