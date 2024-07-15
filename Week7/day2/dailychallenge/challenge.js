const search = document.getElementsByClassName('btn search')[0];

search.addEventListener('click', function () {
    let userInput = document.getElementById('userInput');

    const url = `https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&tag=${userInput.value}`;
    console.log(url);

    const options = {
        method: "GET"
    };

    fetch(url, options)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Response not okay');
            }
        })
        .then((data) => {
            console.log(data);
            let imageUrl = data.data.images.original.url;

            const existingList = document.getElementById("gifs");
            let newElement = document.createElement('div');

            let newImg = document.createElement('img');
            // <button className="btn delete" type="submit">Delete</button>
            let newDelete = document.createElement('button')
            newDelete.innerText = 'Delete'
            newDelete.type = 'submit'

            newImg.src = imageUrl;
            newImg.style.width = '200px';

            newElement.append(newDelete)
            newElement.append(newImg);

            existingList.append(newElement);
        })
        .catch((e) => {
            console.log(e);
        });
});
