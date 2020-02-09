const clockContainer = document.querySelector(".js-clock"), 
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    /*
    if(seconds <10) {
        clockTitle.innerText = `${hours}:${minutes}:0${seconds}`;
    } else {
        clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
    }
    */
    clockTitle.innerText = `${hours}:${
        minutes < 10 ? `0${minutes}` : minutes}`;
}

function init() {
     getTime();
     setInterval(getTime, 1000);
}

init();