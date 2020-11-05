const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date;
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = 
    `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`; 
    // ``(백틱)을 사용하면 ${}을 사용하여 숫자와 문자열을 같이 사용할수 있다.
    }

    function init(){
        getTime();
        setInterval(getTime,1000);
    }

init();

//setInterval(함수,실행할 시간 간격)