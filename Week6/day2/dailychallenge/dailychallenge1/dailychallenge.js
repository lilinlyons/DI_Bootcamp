const gameInfo = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];

function map(){
    let usersUpdate=[];
    gameInfo.forEach((item) =>{
        usersUpdate.push(`${item['username']}!`)}

    )
    console.log(usersUpdate)
    return usersUpdate
}

map()


function highscore(){
    let winners=[];
    gameInfo.forEach((item) =>{
        item['score'] > 5 ? winners.push(item['username']) : console.log(`${item['username']} did not have a high enough score`)}

    )

    return winners
}

let winners = highscore()

