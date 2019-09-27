const express = require('express');
const Mercado = require('../models/mercado');
const router = express.Router();

console.log('Chegou no mercadoController.js');
//=====================================ROTA DE REGISTRO DE MERCADO ========================================================================
router.post('/register', async (req, res) => {
    const { code } = req.body;
    try {
        if (await Mercado.findOne({ code })) {
            return res.status(400).send({ ERRO: 'código já existe!' });
        }
        const mercado_obj = await Mercado.insertMany(req.body);
        return res.status(200).send(`Mercado inserido com sucesso!`)
    } catch (err) {
        console.log(res)
        return res.status(400).send({ ERRO: 'Falha no registro' });   //retorno de status 400 (erro) e a mensagens Falha no registro
    }
});

/*
EXEMPLO DE REQUISIÇÃO POST
URL: http://localhost:3000/mercados/register
{
	"nome": "teste",
	"code": "5",
	"endereco": "Rua 4",
	"cep": "10"
}
*/

//=====================================FIM DA ROTA DE REGISTRO ========================================================================


//=====================================ROTA DE VISUALIZAÇÃO DOS MERCADOS ========================================================================
router.get('/mercadoslista', async (req, res) => {
    // console.log(req.body)
    try {
        const mercado_obj = await Mercado.find();
        return res.status(200).send({ mercado_obj })
    }
    catch (err) {
        console.log(res)
        return res.status(400).send({ ERRO: 'Falha ao listar os mercados da base! mó vascilo' })
    }
})

/*
EXEMPLO DE REQUISIÇÃO GET
URL: http://localhost:3000/mercados/mercadoslista
*/
//=====================================FIM DAROTA DE VISUALIZAÇÃO DOS MERCADOS ========================================================================

//=====================================ROTA DE VISUALIZAÇÃO DE UM MERCADO ========================================================================
router.post('/buscamercado', async (req, res) => {
    const { nome } = req.body;
    try {
        const mercado_obj = await Mercado.find({ nome });
        return res.status(200).send({ mercado_obj })
    }
    catch (err) {
        console.log(res)
        return res.status(400).send({ ERRO: 'Falha ao listar os mercados da base! mó vascilo' })
    }
})

/*
EXEMPLO DE REQUISIÇÃO POST
URL: http://localhost:3000/mercados/buscamercado
{
	"nome":"teste"
}

*/
//=====================================ROTA DE VISUALIZAÇÃO DE UM MERCADO ========================================================================


//=====================================ROTA DE VISUALIZAÇÃO DOS MERCADOS ========================================================================
//=====================================ROTA DE VISUALIZAÇÃO DOS MERCADOS ========================================================================

module.exports = app => app.use('/mercados', router); //Teremos uma rota /mercados/register que irá chamar a função de registro de mercado