let first_h1 = document.getElementsByTagName('h1')[0].innerHTML
console.log(first_h1)

let parentElems = document.getElementsByTagName("article");

let childElem = parentElems[0].getElementsByTagName('p')[3];

console.log(childElem);

parentElems[0].removeChild(childElem)


let y = document.getElementsByTagName("h3")[0]

y.addEventListener("click", RespondClick);

function RespondClick() {
    document.getElementsByTagName("h3")[0].style.display = 'none';
}




let bold = document.getElementById("btn")[0]

bold.addEventListener("click", BoldClick);

function BoldClick() {
    document.getElementsByTagName('html')[0] = 'bold'
}


