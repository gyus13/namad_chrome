// 변수 생성
const form = document.querySelector(".js-form"),
 input = form.querySelector("input"),
 greeting = document.querySelector(".js-greetings");

 // 클래스 이름 설정
const USER_LS = "currentUser",
 SHOWING_CN = "showing";

 // 6
function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

// 5
function handleSubmit(event) {
    event.preventDefault(); // 기본동작 막기
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

// 4
function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

// 3
function paintGreeting(text) {
    form.classList.remove(SHOWING_CN); // 이름을 입력할 box를 없앤다
    greeting.classList.add(SHOWING_CN); // 이름을 출력하는 태그를 보이게한다.
    greeting.innerText = `Hello, ${text}`;
}

// 2
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

// 1
function init(){
    loadName();
}

init();