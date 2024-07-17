class Task {
    constructor(id, description) {
        this.id = id;
        this.description = description;
        this.completed = false;
    }
}

export default class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(description) {
        const id = this.tasks.length + 1;
        const task = new Task(id, description);
        this.tasks.push(task);
    }

    completeTask(taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = true;
        }
    }

    listTasks() {
        console.log('Tasks:');
        this.tasks.forEach(task => {
            const status = task.completed ? 'x' : 'o';
            console.log(`${task.id}. [${status}] ${task.description}`);
        });
    }
}