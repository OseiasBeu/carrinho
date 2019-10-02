const express = require('express');
let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb+srv://admin:26031998boxe@@cluster0-kmy6c.mongodb.net'
const cors = require('cors');
const bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());


app.get('/', async (req, res) => {
    let cursor = await db.collection('mkt3').find().limit(50).toArray()
    try {
        res.send(cursor)
        console.log(`TESTE DE FUNCIONAMENTO EXECUTADO COM SUCESSO!`)
    } catch{
        res.send(`<h2>DEU RUIM</h2>`)
    }
});

app.get('/listaprodutos/:collection', async (req, res) => {
    let collection = req.params.collection;
    console.log(collection)
    let cursor = await db.collection(`${collection}`).find().limit(50).toArray()
    try {
        res.send(cursor)
        console.log(`TESTE DE FUNCIONAMENTO EXECUTADO COM SUCESSO!`)
    } catch{
        res.send(`<h2>DEU RUIM</h2>`)
    }
});


app.post('/filtroPorEanEMercado/:collection', async (req, res) => {
    let collection = req.params.collection;
    let carrinho = Object.values(req.body)
    console.log(carrinho[0])
    let cursor = await db.collection(`${collection}`).find({ "ID_PRODUTO": { $in: carrinho[0] } }).toArray()
    try {
        res.send(cursor)
    } catch{
        res.send(`<h2>DEU RUIM</h2>`)
    }
});


app.post('/filtroPorNomeEMercado/:collection', async (req, res) => {
    let collection = req.params.collection;
    let carrinho = Object.values(req.body)
    console.log(carrinho[0])
    let regex = carrinho[0].map(function (e) { return new RegExp(e, "i"); });
    let cursor = await db.collection(`${collection}`).find({ "NOME_PRODUTO": { $in: regex } }).toArray()
    console.log(cursor)
    try {
        res.send(cursor)
    } catch{
        res.send(`<h2>DEU RUIM</h2>`)
    }
});

/* PRECISO CRIAR UMA COLEÇÃO SÓ COM:
 1º NOMES DOS PRODUTOS,
 2º EANS,
 3º CAMINHOS DAS IMAGENS 
 ---PARA CHAMAR NO FRONTEND---
*/
app.post('/selecionaMenorPreco', async (req, res) => {
    let collection = ['mkt1', 'mkt2', 'mkt3', 'mkt4', 'mkt5']
    let opcoes = [{}]
    let carrinho = Object.values(req.body)
    console.log(carrinho[0])
    let cursor = await pesquisaPorCollection(carrinho)
    
    async function  pesquisaPorCollection(arr) {
        for (coll in collection) {
            // console.log(collection[coll])
          opcoes[coll] = await db.collection(`${collection[coll]}`).find({ "ID_PRODUTO": { $in: arr[0] } }).toArray()
        //   console.log(opcoes)
        }
        return opcoes
    }

    console.log(cursor)
    try {
        res.send(cursor)
    } catch{
        res.send(`<h2>DEU RUIM</h2>`)
    }
});




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



/*
CESTA BÁSICA
[6476,7506339394603,]
db.mkt1.find({"ID_PRODUTO":{$in:[6476,7506339394603]}})
[7897022000018,7897173600037,7891103187827,8413700164286,7898949924289,
    7896362900088,
    7896041162516,
    7898045270655,
    7898171843044,
    7898462314321,
    97,
    7896315400702,
    3560070212682,
    7898215152330]
0 -arroz;
1 -feijão;
2 -óleo de soja;
3 -sal;
4 -açúcar;
5 -café;
6 -molho de tomate;
7 -macarrão espaguete ou parafuso;
8 -sardinha/atum;
9 -salsicha/charque;
10 -milho;
11 -ervilha;
12 -farinha de trigo;
13 -biscoito doce ou salgado;
14 -leite em pó.

BUSCA APROXIMADA POR PRODUTO:
let cursor = await db.collection(`${collection}`).find({"NOME_PRODUTO": /ABACATE/}).toArray()
*/