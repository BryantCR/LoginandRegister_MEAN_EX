//* REQUIRES
const mongoose = require('mongoose');


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
        required : true
    },


});
//*----------------CONSTRUCTOR END----------------------------------------------------------------------------------

//*CONNECT COLLECTION
const User = mongoose.model( 'users', UserSchema );
                          //Col. name, constructor

//*----------------QUERYS------------------------------------------------------------------------------------------

//?----------------(QUERYS FOR USERS)----------------------------
const UserModel = {

    createUser : function (newUser) {
        return User.create(newUser) //User is in the connection up ☝️
    },
    getUserByEmail : function( email ){
        return User.findOne({ email });
    },
    //TODO INSERT MORE QUERYS

}

//*----------------QUERYS END--------------------------------------------------------------------------------------

//* EXPORT MODEL (QUERY OBJECTS)
module.exports = {UserModel};