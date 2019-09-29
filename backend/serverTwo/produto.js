const express = require('express');
let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb+srv://admin:26031998boxe@@cluster0-kmy6c.mongodb.net/'
const cors = require('cors');
const bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());


// =========================---MÉTODOS DE CONSULTA---=================================
app.get('/', (req, res) => {

    let cursor = db.collection('/mkt1').find().toArray()
    res.send(cursor);
    console.log(`TESTE DE FUNCIONAMENTO EXECUTADO COM SUCESSO! ${cursor}`)
});

app.get('/listaprodutos', async (req, res) => {
    console.log('listando produtos')
    await db.collection('/mkt1').find().toArray(function (erro, dados) {
        if (erro) {
            res.status(500).send('Aconteceu um ERRO!!!!');
            return;
        }
        res.status(200).send(dados);
    })
})


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