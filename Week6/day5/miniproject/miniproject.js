const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image:'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image:'https://robohash.org/10?200x200'
    }
];

let existingElement = document.getElementsByClassName('img-grid')[0];
let rowElement = null;

robots.forEach((item, index) => {
    if (index % 4 === 0) {
        rowElement = document.createElement('div');
        rowElement.classList.add('row');
        existingElement.append(rowElement);
    }

    // Create the img-wrapper element
    let newElement = document.createElement('div');
    newElement.classList.add('img-wrapper');

    let newImg = document.createElement('img');
    newImg.src = item['image'];
    newImg.style.width = '200px';

    let newText = document.createElement('h4');
    newText.textContent = item['name'];

    let username = document.createElement('div')
    username.textContent = item['username'];

    let email = document.createElement('div')
    email.textContent = item['email'];



    newElement.append(newImg);
    newElement.append(newText);
    newElement.append(username);
    newElement.append(email);

    rowElement.append(newElement);
});

function filterFunction() {
    // Declare variables
    var input, filter, imgGrid, imgWrappers, i, txtValue;
    input = document.getElementById("filterInput");
    filter = input.value.toUpperCase();
    imgGrid = document.getElementsByClassName("img-grid")[0];
    imgWrappers = imgGrid.getElementsByClassName("img-wrapper");

    for (i = 0; i < imgWrappers.length; i++) {
        txtValue = imgWrappers[i].textContent || imgWrappers[i].innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            imgWrappers[i].style.display = "";
        } else {
            imgWrappers[i].style.display = "none";
        }
    }
}

let inputElement =  document.getElementById("filterInput");
inputElement.addEventListener('input', filterFunction);