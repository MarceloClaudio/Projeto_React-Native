var express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'), 
mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Marcelo:1@nodeclusterjs.vthcis7.mongodb.net/test', { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)});

const colabRoute = require('./routes/colab.route');
const admRoute = require('./routes/adm.route')
const workstationRoutes = require('./routes/workstation.route')

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/adm', admRoute);
app.use('colab', colabRoute);
app.use('Station', workstationRoutes);


app.get('/',function(req,res){
    res.send("Server app");
});

app.listen(3001,function(){
    console.log('Conectado na porta 3001');
});