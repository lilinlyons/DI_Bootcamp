const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];


function getCarHonda(carInventory){
    for (let i = 0; i < carInventory.length; i++) {
        const item = carInventory[i];
        if (item['car_make'] === 'Honda') {
            console.log(`This is a ${item['car_make']} ${item['car_model']} from ${item['car_year']}`)
            break
        }
    }
}

getCarHonda(inventory)



function sortCarInventoryByYear(carInventory){
    inventory.sort( (x, y) =>
        x['car_year'] - y['car_year'])

    console.log(inventory)

}

sortCarInventoryByYear(inventory)