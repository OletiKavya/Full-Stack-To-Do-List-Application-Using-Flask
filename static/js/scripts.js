document.addEventListener('DOMContentLoaded', () => {
    fetchTodos();
});

function fetchTodos() {
    fetch('/gettodo')
        .then(response => response.json())
        .then(data => {
            const todoList = document.getElementById('get-todo');
            todoList.innerHTML = '';
            data.forEach(todo => {
                const li = document.createElement('li');
                li.textContent = `ID: ${todo.id} - Task: ${todo.task} - Status: ${todo.status}`;
                todoList.appendChild(li);
            });
        });
}

function addTodo() {
    const task = document.getElementById('new-task').value.trim();
    const status = document.getElementById('new-status').value.trim();
    
    if (!task) {
        alert("Task cannot be empty!");
        return;
    }
    
    fetch('/addtodo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task, status })
    })
    .then(response => response.json())
    .then(() => {
        document.getElementById('new-task').value = '';
        document.getElementById('new-status').value = '';
        fetchTodos();
    });
}

function updateTodo() {
    const id = document.getElementById('update-id').value.trim();
    const task = document.getElementById('update-task').value.trim();
    const status = document.getElementById('update-status').value.trim();
    
    if (!id) {
        alert("ID cannot be empty!");
        return;
    }
    
    fetch(`/modtodo/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task, status })
    })
    .then(response => response.json())
    .then(() => {
        document.getElementById('update-id').value = '';
        document.getElementById('update-task').value = '';
        document.getElementById('update-status').value = '';
        fetchTodos();
    });
}

function deleteTodo() {
    const id = document.getElementById('delete-id').value.trim();
    
    if (!id) {
        alert("ID cannot be empty!");
        return;
    }
    
    fetch(`/deltodo/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        document.getElementById('delete-id').value = '';
        fetchTodos();
    });
}
