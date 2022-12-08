const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Stations = new Schema({
    codigo: {
        type: String
    },
    status: {
        type: Number
    },
    Hora: {
        type: Number
    }
    },{
    collection: 'wokrstation'
});

module.exports = mongoose.model('wokrstation', Stations);