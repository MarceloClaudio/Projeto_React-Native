const express = require('express');
const app = express();
const workstationRoutes = express.Router();

let Stations = require('../model/wokrstation');

//Adicionar um Colaborador
workstationRoutes.route('/add').post(function (req, res){
    let station = new station(req.body);
    station.save()
    .then(colab => {
        res.status(200).json({'status': 'sucess','msg': 'station adicionado com sucesso!'});
    })
    .cath(err => {
        res.status(409).send({'status': 'failure','mssg': 'Não foi possivel salvar registro no banco de dados'});
    })
});

//Buscando todos os Colaboradores
workstationRoutes.route('/').get(function (req, res){
    Stations.find(function (err, stations){
        if(err){
            res.status(400).send({ 'status': 'failure','msg': 'algo deu errado' }); 
        }else{
            res.status(200).json({ 'status': 'sucess','stations': stations });
        }
    });
});

//Buscando um Colaborador por Id:
workstationRoutes.route('/station/:id').get(function (req, res) {
    let id = req.params.id;

    Stations.findById(id, function (err, station){
        if(err){
            res.status(400).send({ 'status': 'failure','mssg': 'algo deu errado' }); 
        }else{
            res.status(200).json({ 'status': 'sucess','colab': station });
        }
    });
});

//Atualizar Colab
workstationRoutes.route('/update/:id').put(function (req, res){
    Stations.findById(req.params.id, function(err, station){
        if(!station){
            res.status(400).send({ 'status': 'failure','msg': 'algo deu errado' }); 
        }else{
            //Lembrar de atualizar com o grupo*
            //atributos do Colaborador
            station.codigo = req.body.codigo;
            station.status = req.body.status;
            station.Hora = req.body.Hora;

            station.save().then(business => {
                res.status(200).json({ 'status': 'sucess','mssg': 'Update completo!'})
            })
        }
    });
});

//Deletar colab
workstationRoutes.route('/delete/id:').delete(function (req, res){
    Stations.findByIdRemove({ _id: req.params.id}, function(err,){
        if(err){
            res.status(400).send({ 'status': 'failure','msg': 'algo deu errado' });
        }else{
            res.status(200).json({ 'status': 'sucess','mssg': 'Deletado com sucesso!'});
        }
    });
});

module.exports = workstationRoutes;
