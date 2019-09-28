//Criando conexão com o banco de dados MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:26031998boxe@@cluster0-kmy6c.mongodb.net/carrinho', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(
    () =>console.log('\tBANCO DE DADOS CONECTADO!!!') 
).catch(
    err => console.log(err)
);

mongoose.Promise = global.Promise;
module.exports = mongoose;  