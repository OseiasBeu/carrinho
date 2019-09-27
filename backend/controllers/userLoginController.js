const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

let usuarioController = {};
router.get('/listausuarios', async (req, res) => {
    try {
        const usuario_obj = await Usuario.find();
        return res.status(200).send({ usuario_obj })
    }
    catch (err) {
        console.log(res)
        return res.status(400).send({ ERRO: 'Falha ao listar os usuários da base!' })
    }
})


router.post('/register', async (req, res) => {
    if (req.body.username && req.body.password) {
        if (req.body.password2 && req.body.password == req.body.password2) {
            Usuario.findOne({ 'username': req.body.username })
                .then(user => {
                    if (user) {
                        res.json({ sucess: false, message: 'This username has no available' });
                    } else {
                        bcrypt.hash(req.body.password, 10)
                            .then(hash => {
                                let encryptedPassword = hash;

                                let newUser = new Usuario({
                                    username: req.body.username,
                                    password: encryptedPassword,
                                    email: req.body.email,
                                    endereco: req.body.endereco,
                                    cep: req.body.cep,
                                    temMercado: req.body.temMercado,
                                    nomeMercado: req.body.nomeMercado
                                });

                                Usuario.insertMany(newUser);
                                newUsario.save()
                                    .then(() => res.json({ success: true, message: 'User created with sucess', statusCode: 201 }))
                                    .catch(err => res.json({ sucess: false, message: err, statusCode: 500 }));
                            }).catch(err => res.json({ success: true, message: 'User created with sucess', statusCode: 201 }/*res.json({ sucess: false, message: err, statusCode: 500 }*/));
                    }
                })
        } else {
            res.json({ success: false, message: 'Passwords doesnt match', statusCode: 400 });
        }
    } else {
        res.json({ success: false, message: 'Username and password fields are requireds', statusCode: 400 });
    }
})




// router.post('/register', async (req, res)=>{
//     const { username } = req.body;
//     try{
//         if (await Usuario.findOne({ username })) {
//             return res.status(400).send({ ERRO: 'Username já existe!' });
//         }

//         const usuario_obj = await Usuario.insertMany(req.body);
//         return res.status(200).send(`Usuario: ${usuario_obj} Criado com sucesso!`)

//     }catch(err){
//         console.log(err)
//         return res.status(400).send({ERRO: 'Falha ao criar novo usuário'})
//     }
// })


// usuarioController.newUsario = (req, res) =>{
//     if(req.body.username && req.body.password){
//         if(req.body.password2 && req.body.password == req.body.password2){
//             Usuario.findOne({'username': req.body.username})
//             .then( user =>{
//                 if(user){
//                     res.json({sucess: false, message: 'This username has no available'});
//                 }else{
//                     bcrypt.hash(req.body.password, 10)
//                     .then(hash => {
//                         let encryptedPassword = hash;

//                         let newUser = new Usuario({
//                             username: req.body.username,
//                             password: encryptedPassword,
//                             email: req.body.email,
//                             endereco: req.body.endereco,
//                             cep: req.body.cep,
//                             temMercado:req.body.temMercado,
//                             nomeMercado: req.body.nomeMercado
//                         });

//                         newUsario.save()
//                         .then(()=> res.json({ success: true, message: 'User created with sucess', statusCode:201}))
//                         .catch(err => res.json({sucess: false, message: err, statusCode:500}));
//                     }).catch(err => res.json({sucess: false, message: err, statusCode:500}));
//                 }
//             })
//         }else{
//             res.json({ success:false, message: 'Passwords doesnt match', statusCode:400});
//         }
//     }else{
//         res.json({success: false, message: 'Username and password fields are requireds', statusCode: 400});
//     }
// }


module.exports = app => app.use('/usuarios', router); // usuarioController;