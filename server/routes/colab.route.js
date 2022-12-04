const express = require('express');
const app = express();
const colabRoutes = express.Router();

let Colab = require('../model/colab');

//Adicionar um Colaborador
colabRoutes.route('/add').post(function (req, res){
    let colab = new colab(req.body);
    colab.save()
    .then(colab => {
        res.status(200).json({'status': 'sucess','msg': 'colab adicionado com sucesso!'});
    })
    .cath(err => {
        res.status(409).send({'status': 'failure','mssg': 'Não foi possivel salvar registro no banco de dados'});
    })
});

//Buscando todos os Colaboradores
colabRoutes.route('/').get(function (req, res){
    Colab.find(function (err, colabs){
        if(err){
            res.status(400).send({ 'status': 'failure','msg': 'algo deu errado' }); 
        }else{
            res.status(200).json({ 'status': 'sucess','colabs': colabs });
        }
    });
});

//Buscando um Colaborador por Id:
colabRoutes.route('/colab/:id').get(function (req, res) {
    let id = req.params.id;

    Colab.findById(id, function (err, colab){
        if(err){
            res.status(400).send({ 'status': 'failure','mssg': 'algo deu errado' }); 
        }else{
            res.status(200).json({ 'status': 'sucess','colab': colab });
        }
    });
});

//Atualizar Colab
colabRoutes.route('/update/:id').put(function (req, res){
    colab.findById(req.params.id, function(err, colab){
        if(!colab){
            res.status(400).send({ 'status': 'failure','msg': 'algo deu errado' }); 
        }else{
            //Lembrar de atualizar com o grupo*
            //atributos do Colaborador
            colab.name = req.body.name;
            colab.email = req.body.email;
            colab.status = req.body.status;

            colab.save().then(business => {
                res.status(200).json({ 'status': 'sucess','mssg': 'Update completo!'})
            })
        }
    });
});

//Deletar colab
colabRoutes.route('/delete/id:').delete(function (req, res){
    colab.findByIdRemove({ _id: req.params.id}, function(err,){
        if(err){
            res.status(400).send({ 'status': 'failure','msg': 'algo deu errado' });
        }else{
            res.status(200).json({ 'status': 'sucess','mssg': 'Deletado com sucesso!'});
        }
    });
});

module.exports = colabRoutes;
