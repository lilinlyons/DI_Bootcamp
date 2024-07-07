let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = groceries['fruits'].forEach((element) => console.log(element))

const cloneGroceries = () =>{
    client = 'Betty'
    user = client
//     They are the same object with the same identity
    var shopping = groceries
    groceries['totalPrice'] = "35$"
//     They are the same object
    groceries['other']['paid'] = false
    // Groceries and shopping are the same object with the same identity so when you change groceries, shopping changes too.

    console.log(groceries)
}

cloneGroceries()