window.onload = function() {
    const listContainer = document.getElementById('ft_list');
    const newButton = document.getElementById('new-button');

    // โหลดงานจากคุกกี้เมื่อเริ่มต้น
    loadTasks();

    // เพิ่มงานใหม่
    newButton.onclick = function() {
        const task = prompt("Enter a new TO DO:");
        if (task && task.trim() !== "") {
            addTask(task);
        }
    };

    function addTask(task) {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'todo-item';
        taskDiv.innerText = task;
        taskDiv.onclick = function() {
            if (confirm("Do you want to delete this TO DO?")) {
                listContainer.removeChild(taskDiv);
                saveTasks();
            }
        };
        listContainer.insertBefore(taskDiv, listContainer.firstChild);
        saveTasks();
    }

    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('.todo-item').forEach(item => tasks.push(item.innerText));
        document.cookie = "tasks=" + JSON.stringify(tasks) + "; path=/";
    }

    function loadTasks() {
        const cookie = document.cookie.split('; ').find(row => row.startsWith('tasks='));
        if (cookie) {
            const tasks = JSON.parse(cookie.split('=')[1]);
            tasks.forEach(task => addTask(task));
        }
    }
};
