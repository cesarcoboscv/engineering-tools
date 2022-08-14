//Fecha
var uptodate = document.getElementById("jsdates");
setInterval(function(){
    d = new Date();
    dayNumber = d.getDate();
    day = d.getDay();
    hour=d.getHours();
    
    mins=d.getMinutes();
    if (mins < 10){
        mins = "0" + mins;
    }
    
    var weekdays = new Array(7);
    weekdays[0] = "Domingo";
    weekdays[1] = "Lunes";
    weekdays[2] = "Martes";
    weekdays[3] = "Miércoles";
    weekdays[4] = "Jueves";
    weekdays[5] = "Viernes";
    weekdays[6] = "Sabado";
    var r = weekdays[d.getDay()];

    uptodate.innerHTML =r + " " + dayNumber + " - " + hour +":" + mins;
 },1000);



