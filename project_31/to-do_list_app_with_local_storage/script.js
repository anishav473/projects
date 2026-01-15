const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

document.addEventListener("DOMContentLoaded", loadTasks);

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addTask();
});

function addTask() {
  if (taskInput.value.trim() === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    ${taskInput.value}
    <span>✖</span>
  `;

  li.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") return;
    li.classList.toggle("completed");
    saveTasks();
  });

  li.querySelector("span").addEventListener("click", function () {
    li.remove();
    saveTasks();
  });

  taskList.appendChild(li);
  taskInput.value = "";
  saveTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
  taskList.innerHTML = localStorage.getItem("tasks") || "";
}
