var user = (function(username) {
    return username
})('Sam');


function addUsername() {
    let input = user


    const existingElement = document.getElementsByClassName('navbar')[0]

    const newElement = document.createElement('div');
    newElement.textContent = input;

    existingElement.appendChild(newElement);

}

addUsername()