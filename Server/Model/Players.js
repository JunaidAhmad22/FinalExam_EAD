const mongoose= require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const PlayerSchema = new mongoose.Schema({
    name:{type:String,
          required:[true,'Name is requires'],
          unique:true},
    country:{type:String,required:true,unique:true},
    playerType: {type: String, required: true}, 
    role: {type: String, required: true},
    score: Number,
    ranking: Number,
    createdOn: {
        type: Date,
        default: new Date(),
    }
})

const Player = mongoose.model('Player',PlayerSchema,'Player');
mongoose.exports = Player;