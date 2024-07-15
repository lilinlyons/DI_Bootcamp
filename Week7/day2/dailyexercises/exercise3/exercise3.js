// fetch("https://www.swapi.tech/api/starships/9/")
//     .then((response) => {
//         if(response.ok){
//             console.log("response.status =", response.status)
//             return response.json()
//         } else {
//             throw new Error("Response not okay")
//         }
//     })
//     .then(objectStarWars => console.log(objectStarWars.result))
//     .catch((e) => {
//         console.log(e)
//     });
//

// ** urlparameters */
const url = "\"https://www.swapi.tech/api/starships/9/";
const options = {
    method: "GET"
};


const info = async (url, options) => {
    try {
        let res = await fetch(url, options);
        let data = await res.json();
        // return data;
        return console.log(data.result)
    } catch (error) {
        console.log(error);
    }
};
info("https://www.swapi.tech/api/starships/9/", options);
// info("https://jsonplaceholder.typicode.com/users")