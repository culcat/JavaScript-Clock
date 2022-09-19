window.addEventListener('load', calculateTime)
function calculateTime(){
    var date = new Date();
    var dayNumber = date.getDate();
    //var dayNames = date.getUTCMonth();
    var sec = date.getSeconds();
    var hour = date.getHours();
    var minute = date.getMinutes();
    const month = ["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"];
    const d = new Date();
    let name = month[d.getMonth()];
    //var pmam = hour >= 12 ? 'PM' : 'AM';
    //var dayNames =  ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    // hour = hour % 12;
    // hour = hour ? 12 : '12';
    // hour = hour < 10 ? '0' + hour : hour;
    // minute = minute < 10 ? '0' + minute : minute;
    
   // document.getElementById("dayToday").innerHTML = dayNames;
    document.getElementById("day").innerHTML = dayNumber;
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    //document.getElementById("pmam").innerHTML = pmam;
    document.getElementById("dayToday").innerHTML = name;
document.getElementById("sec").innerHTML = sec;


    setTimeout(calculateTime, 200);
    console.log(calculateTime);


}

const back = document.querySelector("body");
back.style.background = "black"; 

const font = document.querySelector("h1");
back.style.color = "white"; 