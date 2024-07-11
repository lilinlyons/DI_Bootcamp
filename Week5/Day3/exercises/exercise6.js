let newDiv = document.getElementById("navBar")

newDiv.setAttribute('id', "socialNetworkNavigation");



let newElement = document.createElement('li')

const existingList = document.getElementsByTagName("ul")[0];

let newText = 'Logout'

newElement.append(newText)

existingList.appendChild(newElement);



let first = existingList.firstElementChild.textContent
console.log(first)

let last = existingList.lastElementChild.textContent
console.log(last)