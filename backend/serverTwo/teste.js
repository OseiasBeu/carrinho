// // let url = 'mongodb+srv://admin:26031998boxe@@cluster0-kmy6c.mongodb.net/'
// // let db = 'carrinho'
// // let col = '/mkt1'

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


let query = ['feijao','abacate']
// $regex: "/.*abc./", $options:"i"
let x = ["sai","test","jacob","justin"]
let regex = query.map(function (e) { return new RegExp(e,"i"); });


console.log(regex)