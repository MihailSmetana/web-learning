const input = document.getElementById("taskInput");
const button = document.getElementById("addTaskBtn");
const list = document.getElementById("taskList");

// завантажуємо справи при старті
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

savedTasks.forEach((task) => {
  addTaskToList(task);
});

button.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText === "") {
    return;
  }

  savedTasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(savedTasks));

  addTaskToList(taskText);
  input.value = "";
});

// функція додавання справи
function addTaskToList(text) {
  const li = document.createElement("li");
  li.textContent = text;

  li.addEventListener("click", () => {
    const index = savedTasks.indexOf(text);
    if (index > -1) {
      savedTasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(savedTasks));
    }
    li.remove();
  });

  list.appendChild(li);
}
