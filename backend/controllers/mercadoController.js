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
        return res.status(400).send({ ERRO: 'Falha no registro' });   //retorno de status 400 (erro) e a mensagens Falha no registro
    }
});

//=====================================FIM DA ROTA DE REGISTRO ========================================================================


//=====================================ROTA DE REGISTRO DE MERCADO ========================================================================



module.exports = app => app.use('/mercados', router); //Teremos uma rota /auth/register que irá chamar a função de registro de mercado