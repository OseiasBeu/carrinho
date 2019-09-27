const mongoose = require('../database/database.js');
const UsuarioSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true
    },
    email:{
        type:String,
        required: true
    },
    endereco:{
        type:String,
    },
    cep:{
        type:String
    },
    temMercado:{
        type: Boolean,
        required: true,
        default: false
    },
    nomeMercado: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    password2:{
        type: String
    }
});

const Usuario = mongoose.model('usuario', UsuarioSchema);

module.exports = Usuario;