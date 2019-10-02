// // let url = 'mongodb+srv://admin:26031998boxe@@cluster0-kmy6c.mongodb.net/'
// // let db = 'carrinho'
// // let col = '/mkt1'
// mongo "mongodb+srv://cluster0-kmy6c.mongodb.net/carrinho"  --username admin

// // console.log(url+db+col)



// // db.mkt1.find({"ID_PRODUTO":{$in:[6476,7506339394603]}})


// // let lista = {"LISTA":[6476,7506339394603]};
// // console.log(lista.LISTA[0])


// var obj = {"LISTA":[6476,7506339394603]};
// // { first: "John", last: "Doe" };
//     // Visit non-inherited enumerable keys
// //    let cursor =  Object.values(obj).forEach(function(values) {
// //         console.log(values);
// //     });


// let cursor =  Object.values(obj)

// console.log("objeto:::")
// console.log(cursor[0])


// let query = ['feijao','abacate']
// // $regex: "/.*abc./", $options:"i"
// let x = ["sai","test","jacob","justin"]
// let regex = query.map(function (e) { return new RegExp(e,"i"); });


// console.log(regex)

let collections = ['mkt1','mkt2','mkt3','mkt4','mkt5']
console.log(collections)

let mkt1 = {
    LETRA: "A",
    VALOR: 1
}


let mkt2 = {
    LETRA: "B",
    VALOR: 2
}


let mkt3 = {
    LETRA: "C",
    VALOR: 3
}


let mkt4 = {
    LETRA: "D",
    VALOR: 4
}


let mkt5 = {
    LETRA: "E",
    VALOR: 5
}



for (mkt in collections){
    console.log(collections[mkt])

}