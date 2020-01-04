var todo_input = document.getElementById("todo-input");
var todo_input_btn = document.getElementById("todo-input-btn");
var todo_content = document.getElementById("todo-content");
var isEdit = false;
var editedElement;

todo_input_btn.addEventListener("click", () => {
  if (isEdit) {
    updateElement();
  } else {
    createTodo();
  }
});

todo_input.addEventListener("keyup", event => {
  if (event.keyCode == 13) {
    event.preventDefault();
    if (isEdit) {
      updateElement();
    } else {
      createTodo();
    }
  }
});

function createTodo() {
  let todo_input_value = todo_input.value;
  if (todo_input_value.trim() != "") {    
    let todo_item = document.createElement("div");
    todo_item.classList.add("todo-item");
    todo_item.innerHTML = todo_input_value;
    todo_item.addEventListener("click", e => {
      e.preventDefault();
      editTodoItem(e.target);
    });   
    todo_content.appendChild(todo_item);    
    todo_input.value = "";
  }

  function editTodoItem(element) {
    isEdit = true;
    editedElement = element;
    element.setAttribute("disabled", "true");
    todo_input.value = element.innerText;
    todo_input.focus();
    todo_input_btn.value = "Update";
    console.log(element);
  }
}

function updateElement() {
  editedElement.innerText = todo_input.value;
  todo_input_btn.value = "Add";
  editedElement = null;
  todo_input.value = "";
}
