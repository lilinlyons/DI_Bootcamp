
document.getElementsByClassName("list")[0].innerHTML = "  <li>John</li>\n" +
    "  <li>Richard</li>";

let secondList = document.getElementsByClassName("list")[1].innerHTML = " <li>David</li><li>Dan</li>"

const ulElements = document.querySelectorAll('ul')

ulElements.forEach(ul => {
    const liElements = ul.querySelectorAll('li')
    if (liElements.length > 0) {
        liElements[0].textContent = "Lili"
    }

});
ulElements.forEach(ul => {
    ul.classList.add('student_list')
});

const firstUL = document.querySelector('ul')

if (firstUL) {
    firstUL.classList.add('university')
    firstUL.classList.add('attendance')
}

const containerDiv = document.getElementById('container')

if (containerDiv) {
    containerDiv.style.backgroundColor = 'lightblue'
    containerDiv.style.padding = '20px'
}

const lastUl = document.getElementsByClassName("list")[1]

lastUl.lastElementChild.remove("Dan")

const firstUl = document.getElementsByClassName("list")[0]



if (firstUl) {
    const liElements = firstUl.querySelectorAll('li')

    liElements[1].style.border = '2px solid red'; // Example border style
    }

const body = document.getElementsByTagName('body')[0]

if (body){
    body.style.fontSize = 'x-small'

}

