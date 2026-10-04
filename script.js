const addtodobutton = document.querySelector("#add-todo");
const todolist = document.querySelector(".todo-list");
addtodobutton.addEventListener("click", () => {
    const newTodoItem = document.createElement("div");
    const now = new Date();
    newTodoItem.classList.add("todo-item");
    newTodoItem.innerHTML = `
        <input type="checkbox" id="todo_${Date.now()}">
        <textarea placeholder="enter todo" rows="1" spellcheck="false">${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}.${String(now.getMilliseconds()).padStart(3, '0')}</textarea>
    `;
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-todo");
    deleteButton.setAttribute("title", "Delete Todo");
    deleteButton.innerHTML = '<span class="material-symbols-rounded">delete</span>';
    deleteButton.addEventListener("click", () => {
        newTodoItem.remove();
        if(todolist.children.length === 0){
            todolist.innerHTML = '<p>click the <span class="material-symbols-rounded">add_task</span> to add a new todo!</p>';
        }
    });
    if(todolist.children.length === 1 && todolist.children[0].tagName === "P"){
        todolist.innerHTML = "";
    }
    newTodoItem.appendChild(deleteButton);
    todolist.appendChild(newTodoItem);
});