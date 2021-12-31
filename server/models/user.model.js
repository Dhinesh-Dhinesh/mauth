const mongoose = require('mongoose');

const User = new mongoose.Schema(
    {
        name : { type : 'string' , required : true , unique : true},
        email : { type : 'string' , required : true , unique : true },
        password : { type : 'string' , required : true },
        quote : { type : 'string'}
    },
    {
        collection : 'user-data'
    }
)

const model = mongoose.model('UserData',User);

module.exports = model;