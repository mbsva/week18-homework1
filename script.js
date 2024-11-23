
const taskInput = document.getElementById('task');
const addButton = document.getElementById('add');
const clearButton = document.getElementById('clear');
const taskList = document.getElementById('task-list');
const noTasksMessage = document.getElementById('no-tasks');

// Function to add a task
addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new task item
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const label = document.createElement('label');
    label.textContent = taskText;

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    taskList.appendChild(listItem);

    // Clear input field and update UI
    taskInput.value = "";
    updateUI();
});

// Function to clear all tasks
clearButton.addEventListener('click', () => {
    taskList.innerHTML = ""; // Remove all tasks
    updateUI();
});

// Function to update UI
function updateUI() {
    // Show/hide "no tasks" message
    if (taskList.children.length === 0) {
        noTasksMessage.style.display = "block";
        clearButton.disabled = true;
    } else {
        noTasksMessage.style.display = "none";
        clearButton.disabled = false;
    }
}

// Initial UI update
updateUI();
