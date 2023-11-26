// students models datas of users

const mongoose = require("mongoose");
const UsersShema = mongoose.Schema({
    name :{
        type:String,
        default:""
    },

    registerDate:{
        type:Number,
        default:Date.now()
    },

    passWord:{
        type:String,
        default:""
    },

    stateAccount:{
        type:Boolean,
        default: false
    },

    typeAccount:{
        type:String,
        default:"NUser"
    },

    picture:{
        type:String,
        default:""
    },
    

    //Coordo Datas
    email:{
        type:String,
        default:"-"
    },
    tel:{
        type:String,
        default:"-"
    },
});

module.exports = mongoose.model("User", UsersShema);
