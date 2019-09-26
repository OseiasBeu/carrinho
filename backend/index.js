const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


require('./controllers/index')(app);


app.get('/', (req, res) => {
    res.send('<h1>API em funcionamento!</h1>');
    console.log("TESTE DE FUNCIONAMENTO EXECUTADO COM SUCESSO!")
});



app.listen(port, function () {
    console.log("==========================================================")
    console.log("")
    console.log(`\n\n \tSERVIDOR RODANDO NA PORTA:${port} \n\n`);
    console.log("")
    console.log("==========================================================")
}); 