
book1 = {'title': 'Harry Potter' ,'author': 'JK Rowling', 'image': 'https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF894,1000_QL80_.jpg', 'alreadyRead': true}
book2 ={'title': 'The Hunger Games','author': 'Suzanne Collins', 'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxkDDMJnI5QgOoIgDKMmM6oasG6y7MLWe_jw&s', 'alreadyRead': false}


let allBooks = [book1, book2]



const existingList = document.getElementsByClassName("listBooks")[0]

allBooks.forEach((item) =>{
    let newElement = document.createElement('div')
    let newText = `${item['title']} written by ${item['author']}`



    let newImg = document.createElement('img')
    newImg.src = item['image']
    newImg.style.width = '200px'

    newElement.append(newText)
    newElement.append(newImg)

    if (item['alreadyRead'] === true){
        newElement.style.color = 'red'

    }
    else {
        newElement.style.color = 'black'
    }



    existingList.append(newElement)
    }
)



