let hr = document.getElementById('hr');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

//
function displayTime () {
    let date = new Date();
    //get hour, min, sec
    let hh = date.getHours();
    let mm = date.getMinutes();
    let secs = date.getSeconds();

    let hourRotation = 30*hh + mm/2;
    let minRotation = 6*mm;
    let secRotation = 6*secs;

    hr.style.transform = `rotate(${hourRotation}deg)`
    min.style.transform = `rotate(${minRotation}deg)`
    sec.style.transform = `rotate(${secRotation}deg)`
}
setInterval(displayTime, 1000)