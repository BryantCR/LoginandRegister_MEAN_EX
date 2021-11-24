//* REQUIRES
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose); // Auto-Increment


//*----------------CONSTRUCTOR-------------------------------------------------------------------------------------
const UserSchema = new mongoose.Schema({

    firstname :{
        type : String,
        required : true,
        minlength : 3,
        maxlength : 20
    },

    lastname : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 20
    },

    email : {
        type : String,
        required : true,
        unique : true
    },

    birthday : {
        type : Date,
        required : true,
    },

    password : {
        type : String,
        required : true,
        minlength : 6,
    },


});
//*----------------CONSTRUCTOR END----------------------------------------------------------------------------------
UserSchema.plugin(AutoIncrement, {inc_field: 'users_id'});

const User = mongoose.model( 'users', UserSchema );

const UserModel = {

    createUser : function (newUser) {
        return User.create(newUser) //User is in the connection up ☝️
    },
    getUserByEmail : function( email ){
        return User.findOne({ email });
    },
    //TODO INSERT MORE QUERYS
}
module.exports = {UserModel};