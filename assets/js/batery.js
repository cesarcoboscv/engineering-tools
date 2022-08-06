//Battery level
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
        var element = document.getElementById("batstatus");
        var a = Math.round(battery.level * 100);
        a =a + "%";
	// console.log("La batería esta cargando? " + (battery.charging ? "Si" : "No"));
		if (battery.charging == true){
		element.classList.remove("fa-battery-full");
		element.classList.remove("fa-battery-three-quarters");
		element.classList.remove("fa-battery-half");
		element.classList.remove("fa-battery-quarter");
		element.classList.remove("fa-battery-low");
		element.classList.add("fa-bolt");
		document.getElementById("bateryLevel").innerText = a; 
		}
    }

	battery.addEventListener('levelchange', function(){
    	updateLevelInfo();
   	});
   	function updateLevelInfo(){
        var a = Math.round(battery.level * 100);
        a =a + "%";
	var element = document.getElementById("batstatus");
        if (battery.level == 1 ){
            document.getElementById("bateryLevel").innerText = a; 
            element.classList.add("fa-battery-full");
        }
        if (battery.level < .9 && battery.charging == false){
            document.getElementById("bateryLevel").innerText = a; 
            element.classList.remove("fa-battery-full");    
            element.classList.add("fa-battery-three-quarters");
            element.classList.remove("fa-battery-half");
            element.classList.remove("fa-bolt");
        }
        if (battery.level < .7 && battery.charging == false){
            document.getElementById("bateryLevel").innerText = a;
            element.classList.remove("fa-battery-three-quarters");
            element.classList.add("fa-battery-half");
            element.classList.remove("fa-battery-quarter");
            element.classList.remove("fa-bolt");
        }
        if (battery.level < .3 && battery.charging == false){
            document.getElementById("bateryLevel").innerText = a; 
            element.classList.remove("fa-battery-half");   
            element.classList.add("fa-battery-quarter");
            element.classList.remove("fa-battery-low");
            element.classList.remove("fa-bolt");
        }
        if (battery.level < .1 && battery.charging == false){
            document.getElementById("bateryLevel").innerText = a;        
            element.classList.remove("fa-battery-quarter");
            element.classList.add("fa-battery-low");
            element.classList.remove("fa-bolt");
            alert("Batería Baja!, Conecta tu dispositivo");
    	}
   	}
 
//    battery.addEventListener('chargingtimechange', function(){
//    	updateChargingInfo();
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