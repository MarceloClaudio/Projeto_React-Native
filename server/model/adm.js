const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Adm = new Schema({
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
      }
    },{
    collection: 'adm'
});

module.exports = mongoose.model('adm', Adm);