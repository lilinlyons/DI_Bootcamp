let arr = [1, 2, 3]

arr.forEach((item, index, arr) =>{ arr[index] = item * 2
}
)


function map(arr){
    let retArr=[];
    arr.forEach((item) =>{retArr.push(item*2)
        }
    )
    return retArr
}
//map function allows mapping to new array