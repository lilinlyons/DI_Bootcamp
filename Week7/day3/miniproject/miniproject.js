const search = document.getElementsByClassName('btn search')[0];


search.addEventListener('click', function () {
    const section = document.getElementsByClassName("character")[0];
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

    const loadingIndicator = document.getElementById('load');
    loadingIndicator.style.display = 'block';


    const randomNum = Math.floor(Math.random()*83)
    const url = `https://www.swapi.tech/api/people/` + randomNum;
    console.log(url);

    const options = {
        method: "GET"
    };

    setTimeout(() => {
        fetch(url, options)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Response not okay');
                }
            })
            .then(async (data) => {
                let filteredData = data.result.properties
                console.log(filteredData)


                const existingList = document.getElementsByClassName("character")[0];
                let newElement = document.createElement('div');
                characterName = filteredData.name
                characterHeight = filteredData.height
                characterGender = filteredData.gender
                characterBirth = filteredData.birth_year

                newElement.append(`character name: ${characterName}`)
                newElement.append(document.createElement('br'))
                newElement.append(`height: ${characterHeight}`)
                newElement.append(document.createElement('br'))
                newElement.append(`gender: ${characterGender}`)
                newElement.append(document.createElement('br'))
                newElement.append(`birth year: ${characterBirth}`)
                newElement.append(document.createElement('br'))

                let homeUrl = await filteredData.homeworld

                getHomeworld(homeUrl).then(characterHome => {
                    newElement.append(`homeworld: ${characterHome}`)
                    return characterHome
                });


                existingList.append(newElement)
                loadingIndicator.style.display = 'none';


            })
            .catch((e) => {
                console.log(e);
                loadingIndicator.style.display = 'none';
            });


        console.log("Delayed for 1 second.");
    }, "2000");

});

async function getHomeworld(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.result.properties.name
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}