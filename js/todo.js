const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
   localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)); // 로컬에 json으로 todo 저장
}

function deletToDo(event){
    const li = event.target.parentElement; // target은 이벤트가 일어난 곳
    toDos = toDos.filter(item => item.id !== parseInt(li.id)); //parseInt string -> int
    //id에 맞지 않는 요소는 toDos로 넣기
    li.remove();
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = " Do it!";
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    button.addEventListener("click",deletToDo);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit); //toDoForm에서 sumit이 일어나면 handleToDoSubmit를 실행해주세요

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
