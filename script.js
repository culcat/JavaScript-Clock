window.addEventListener('load', calculateTime)
function calculateTime(){
    var date = new Date();
    var dayNumber = date.getDate();
    var dayNames = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    //var pmam = hour >= 12 ? 'PM' : 'AM';
    var dayNames =  ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    // hour = hour % 12;
    // hour = hour ? 12 : '12';
    // hour = hour < 10 ? '0' + hour : hour;
    // minute = minute < 10 ? '0' + minute : minute;
    
    document.getElementById("dayToday").innerHTML = dayNames[dayNumber];
    document.getElementById("day").innerHTML = dayNumber;
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    //document.getElementById("pmam").innerHTML = pmam;

    setTimeout(calculateTime, 200);
console.log(calculateTime)
}

const back = document.querySelector("body");
back.style.background = "black"; 

const font = document.querySelector("h1");
back.style.color = "white"; 