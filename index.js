const title = document.querySelector("#title");

const BASE_COLOR = "#34495e"
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click",handleClick);
}

init();

window.addEventListener("click", handleclick); // resize될때 실행
//handleResize()는 바로 실행

const age = prompt("How old are you");

if (age > 18 && age < 21) {
    console.log("you can drink but you should not");
} else if (age >21) {
    console.log("go ahead");
} else {
    console.log("bye");
}

