//nivel de barteria
navigator.getBattery().then(function(battery) {
   function updateAllBatteryInfo(){
     updateChargeInfo();
     updateLevelInfo();
    //  updateChargingInfo();
    //  updateDischargingInfo();
   }
   updateAllBatteryInfo();
 

   battery.addEventListener('chargingchange', function(){
     updateChargeInfo();
   });
   function updateChargeInfo(){
     console.log("La batería esta cargando? "
                 + (battery.charging ? "Si" : "No"));
   }
 

   battery.addEventListener('levelchange', function(){
     updateLevelInfo();
   });
   function updateLevelInfo(){
     var a = ("Nivel de la batería: " + battery.level * 100 + "%");
    
        if (battery.level == 1){
            document.getElementById("bateryLevel").innerText = a;        
        } else if (battery.level < 1){
            document.getElementById("bateryLevel").innerText = "Hola";        
        }
   }
 
   
//    battery.addEventListener('chargingtimechange', function(){
//      updateChargingInfo();
//    });
//    function updateChargingInfo(){
//      console.log("Tiempo de carga de la batería: "
//                   + battery.chargingTime + " segundos");
//    }
 
//    battery.addEventListener('dischargingtimechange', function(){
//      updateDischargingInfo();
//    });
//    function updateDischargingInfo(){
//      console.log("Tiempo de descarga de la batería: "
//                   + battery.dischargingTime + " segundos");
//    }
 });
 