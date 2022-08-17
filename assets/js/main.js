const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
};

if(deviceType() == "desktop" ){
    document.querySelector(".phone-container").style.backgroundImage = "url('https://drive.google.com/uc?export=view&id=1rlz6Dp7EYnqpGPVU0tkCXKMQ6LVzgOOt')";
    
    var dateScript = document.createElement("script");
    dateScript.src = "../assets/js/date.js";
    dateScript.src = "./assets/js/date.js";
    document.body.appendChild(dateScript);
    
    var batScript = document.createElement("script");
    batScript.src = "../assets/js/batery.js";
    batScript.src = "./assets/js/batery.js";
    document.body.appendChild(batScript);

}else{
    document.querySelector(".status-container").style.display = "none";
}