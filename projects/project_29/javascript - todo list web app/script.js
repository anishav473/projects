// DOM Elements
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const taskCount = document.getElementById('task-count');
const themeToggle = document.getElementById('theme-toggle');
const dateDisplay = document.getElementById('date-display');

// State Management
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let filter = 'all';

// Initialize App
const init = () => {
    dateDisplay.innerText = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
    render();
};

// Add Task
const addTask = () => {
    const text = input.value.trim();
    if (text === "") return;

    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
    };

    todos.unshift(newTodo); // Add to beginning
    input.value = "";
    updateStorage();
};

// Toggle Complete
const toggleTodo = (id) => {
    todos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
    updateStorage();
};

// Delete Task
const deleteTodo = (id) => {
    todos = todos.filter(todo => todo.id !== id);
    updateStorage();
};

// LocalStorage Sync
const updateStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
    render();
};

// Render Logic
const render = () => {
    const filtered = todos.filter(t => {
        if (filter === 'pending') return !t.completed;
        if (filter === 'completed') return t.completed;
        return true;
    });

    todoList.innerHTML = filtered.map(todo => `
        <li class="task-item ${todo.completed ? 'completed' : ''}">
            <input type="checkbox" ${todo.completed ? 'checked' : ''} onchange="toggleTodo(${todo.id})">
            <span style="margin-left: 10px">${todo.text}</span>
            <button class="delete-btn" onclick="deleteTodo(${todo.id})">
                <i class="fas fa-trash-alt"></i>
            </button>
        </li>
    `).join('');

    const left = todos.filter(t => !t.completed).length;
    taskCount.innerText = `${left} task${left !== 1 ? 's' : ''} left`;
};

// Event Listeners
addBtn.addEventListener('click', addTask);
input.addEventListener('keypress', (e) => e.key === 'Enter' && addTask());

document.querySelectorAll('.chip').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelector('.chip.active').classList.remove('active');
        e.target.classList.add('active');
        filter = e.target.dataset.filter;
        render();
    });
});

themeToggle.addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});

init();