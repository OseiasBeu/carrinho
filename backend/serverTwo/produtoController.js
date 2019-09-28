let MongoClient = require('mongodb').MongoClient;
let express = require('express');
let url = 'mongodb+srv://admin:26031998boxe@@cluster0-kmy6c.mongodb.net/'
let app = express();
let bodyParser = require('body-parser');
let cors = require('cors');
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json());
app.use(cors());


MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) return console.log(err)
    db = client.db('carrinho')


    const port = process.env.PORT || 8080;
    app.listen(port, () => {
        console.log(`=================================================`)
        console.log(`Servidor funcionando na porta ${port}!`)
        console.log(`PRESSIONE 'CTRL + C' PARA SAIR`)
        console.log(`=================================================`)
    })
})

  app.get('/listaprodutos', function(req, res) {
    db.collection('mkt1').find().toArray(function(erro, dados) {
        if (erro) {
            res.status(500).send('Aconteceu um ERRO!!!!');
            return;
        }
        res.status(200).send(dados);
    });
});


