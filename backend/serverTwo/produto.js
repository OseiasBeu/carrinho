    const express = require('express');
let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb+srv://admin:26031998boxe@@cluster0-kmy6c.mongodb.net'
const cors = require('cors');
const bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());
// const middleWare = require('middleWare');
// const MONGO = require('mongodb').MongoClient;

// const db = await MongoClient.connect(url);
// try {
//     const stuff = await db.collection("Stuff").find({});
//     // Do something with the result of the query
// } finally {
//     db.close();
// }

app.get('/',async    (req, res) => {
    let cursor = await db.collection('mkt1').find({}).toArray()
    console.log(cursor);
    console.log(`TESTE DE FUNCIONAMENTO EXECUTADO COM SUCESSO! ${res.send(cursor)}`)
});



// router.get('/', middleWare(async (req, res, next) => {
//     const db = await MONGO.connect(url);
//     const MyCollection = db.collection('mkt1');
//     const result = await MyCollection.find(query).toArray();
//     res.send(result);
// }))

// // =========================---MÉTODOS DE CONSULTA---=================================
// app.get('/', (req, res) => {
//     let cursor = db.collection('/mkt1').find({"ID_PRODUTO": 6476}).toArray()
//     console.log(cursor);
//     console.log(`TESTE DE FUNCIONAMENTO EXECUTADO COM SUCESSO! ${res.send(cursor)}`)
// });

// app.get('/listaprodutos', async (req, res) => {
//     console.log('listando produtos')
//     await db.collection('/mkt1').find().toArray(function (erro, dados) {
//         if (erro) {
//             res.status(500).send('Aconteceu um ERRO!!!!');
//             return;
//         }
//         console.log('listando produtos1')
//         res.status(200).send(dados);
//     })
// })


MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) return console.log(err)
    db = client.db('carrinho')


    const port = process.env.PORT || 3001;
    app.listen(port, () => {
        console.log(`=================================================`)
        console.log(`Servidor funcionando na porta ${port}!`)
        console.log(`PRESSIONE 'CTRL + C' PARA SAIR`)
        console.log(`=================================================`)
    })
})


