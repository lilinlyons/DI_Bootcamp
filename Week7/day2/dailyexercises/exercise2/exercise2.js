// Exercise 2
// ** urlparameters */
const url = "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const options = {
    method: "GET"
};

fetch(url, options)
    .then((response) => {
        if(response.ok){
            console.log("response.status =", response.status)
            return response.json()
        } else {
            throw new Error("Response not okay")
        }
    })
    .then((data) => {
        console.log(data.data)
    })
    .catch((e) => {
        console.log(e)
    });