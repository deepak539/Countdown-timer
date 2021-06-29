const newYears = 'jan 1, 2022 12:00:00';

function countdown(){
    const newYearsDate = new Date(newYears).getTime();
    var x = setInterval(function(){
    const currentDate = new Date();
    var ms = newYearsDate - currentDate;
    var days = Math.floor(ms / (24*60*60*1000));
    var hours = Math.floor((ms%(24*60*60*1000))/ (1000*60*60));
    var mins = Math.floor((ms%(1000*60*60))/(1000*60))
    var secs = Math.floor((ms%(1000*60))/(1000));
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("secs").innerHTML = secs;
    },1000);
}

countdown();