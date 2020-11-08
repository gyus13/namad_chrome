const toDoform = document.querySelector(".js-toDoForm"),
 toDoInput = toDoform.querySelector("input"),
 toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];


// 6. deleteToDo
function deleteToDo(event){
    //console.log(event.target.parentNode); //target
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li); //removechild(child)
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id); //string인 숫자를 int로 바꿔준다.
    });
    toDos = cleanToDos;
    saveToDos();
}

// 5. saveToDos
function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //object를 string으로 바꿔준다. json
}

// 4. paintToDo
function paintTodo(text) {
    const li = document.createElement("li"); // li를 추가함.
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length +1;
    delBtn.innerText = "XXX";
    delBtn.addEventListener("click",deleteToDo); //todo 지우기
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span); // li 에다 생성한 span 넣기
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj); //배열에 추가해준다.
    saveToDos();
}

// 3. handleSubmit
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value = ""; // 입력한 뒤에 값 날리기
}


// 2.loadTodos
function loadTodos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos); // string을 object로 바꾼다.
        parsedToDos.forEach(function(toDo){
            paintTodo(toDo.text);
        });
    }
}

// 1.init
function init(){
    loadTodos();
    toDoform.addEventListener("submit",handleSubmit);
}

init();