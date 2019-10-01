const express = require('express');
let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb+srv://admin:26031998boxe@@cluster0-kmy6c.mongodb.net'
const cors = require('cors');
const bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());


app.get('/',async    (req, res) => {
    let cursor = await db.collection('mkt3').find().limit(50).toArray()
    try{
        res.send(cursor)
        console.log(`TESTE DE FUNCIONAMENTO EXECUTADO COM SUCESSO!`)
    }catch{
        res.send(`<h2>DEU RUIM</h2>`)
    }
});

app.get('/listaprodutos/:collection',async    (req, res) => {
    let collection = req.params.collection;
    console.log(collection)
    let cursor = await db.collection(`${collection}`).find().limit(50).toArray()
    try{
        res.send(cursor)
        console.log(`TESTE DE FUNCIONAMENTO EXECUTADO COM SUCESSO!`)
    }catch{
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