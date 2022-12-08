const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Colab = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    status: {
        type: Number
    },
    picture: {
        type: String
    },
    senha: {
        type: String
    },
    },{
    collection: 'colab'
});

module.exports = mongoose.model('colab', Colab);