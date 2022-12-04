const express = require('express');
const app = express();
const admRoutes = express.Router();

let adm = require('../model/adm');

//Adicionar um adm
admRoutes.route('/add').post(function (req, res){
    let adm = new colab(req.body);
    adm.save()
    .then(adm => {
        res.status(200).json({'status': 'sucess','msg': 'adm adicionado com sucesso!'});
    })
    .cath(err => {
        res.status(409).send({'status': 'failure','mssg': 'Não foi possivel salvar registro no banco de dados'});
    })
});

//Buscando todos os adms
admRoutes.route('/').get(function (req, res){
    adm.find(function (err, adms){
        if(err){
            res.status(400).send({ 'status': 'failure','msg': 'algo deu errado' }); 
        }else{
            res.status(200).json({ 'status': 'sucess','colabs': adms });
        }
    });
});

//Buscando um adm por Id:
admRoutes.route('/adm/:id').get(function (req, res) {
    let id = req.params.id;

    adm.findById(id, function (err, adm){
        if(err){
            res.status(400).send({ 'status': 'failure','mssg': 'algo deu errado' }); 
        }else{
            res.status(200).json({ 'status': 'sucess','colab': adm });
        }
    });
});

//Atualizar Colab
admRoutes.route('/update/:id').put(function (req, res){
    adm.findById(req.params.id, function(err, adm){
        if(!adm){
            res.status(400).send({ 'status': 'failure','msg': 'algo deu errado' }); 
        }else{
            //Lembrar de atualizar com o grupo*
            //atributos do Colaborador
            adm.name = req.body.name;
            adm.email = req.body.email;
            adm.status = req.body.status;

            adm.save().then(business => {
                res.status(200).json({ 'status': 'sucess','mssg': 'Update completo!'})
            })
        }
    });
});

//Deletar colab
admRoutes.route('/delete/id:').delete(function (req, res){
    adm.findByIdRemove({ _id: req.params.id}, function(err,){
        if(err){
            res.status(400).send({ 'status': 'failure','msg': 'algo deu errado' });
        }else{
            res.status(200).json({ 'status': 'sucess','mssg': 'Deletado com sucesso!'});
        }
    });
});

module.exports = admRoutes;
