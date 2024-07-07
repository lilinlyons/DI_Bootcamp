
function makeJuice(size){
    let ingredients = []
    function addIngredients(first, second, third){
        console.log(`The client wants a ${size} juice, containing ${first}, ${second}, ${third}.`)
        ingredients.push(first, second, third)
        console.log(ingredients)
    }

    function displayJuice(){
        console.log(`The client wants a ${size} juice, containing ${ingredients[0]}, ${ingredients[1]}, ${ingredients[2]}.`)
    }
    addIngredients('apple', 'carrot', 'pineapple')
    addIngredients('orange', 'mango', 'coconut')
    displayJuice()

}

makeJuice('medium')