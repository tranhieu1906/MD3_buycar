let money = 0000
let buyCar = (car) => {
    return new Promise((resolve,reject) => {
        if(money >= 10000){
            resolve(`Buycar ${car} sucsses`)
        }else{
            reject("Do not enough money");
        }
    })
}

buyCar("audi")
.then((data) => {
    console.log(data)
})
.catch((err) => {
    console.log(err)
})