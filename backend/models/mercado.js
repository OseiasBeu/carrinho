const mongoose = require('../database/database.js');
const MercadoSchema = new mongoose.Schema({
 nome:{
     type: String,
     require: true,
     lowercase: true,
 },
 code:{
     type: String,
     unique:true,
     require: true
 },
 endereco:{
     type: String,
     require: true
 },
 cep:{
     type: String,
     require: true
 }
});
const Mercado = mongoose.model('mercado', MercadoSchema);

module.exports = Mercado; 