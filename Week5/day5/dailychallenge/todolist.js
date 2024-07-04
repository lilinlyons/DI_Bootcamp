const tasks = [];

let y = document.getElementById("btn")
y.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission behavior

    addTask();
});

function addTask() {
    let input = document.getElementById('input').value;
    if (input !==0){
    tasks.push(input);
    document.getElementById('input').value = '';

    const existingElement = document.getElementsByClassName('listTasks')[0];

    const newElement = document.createElement('div');
    newElement.textContent = input;
    existingElement.appendChild(newElement);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    newElement.appendChild(checkbox);



    }
}

