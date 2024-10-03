let mongoose = require('mongoose')
const { type } = require('os')
let schema = mongoose.Schema(
    {
        username: {
            type: String,
        },
        email: {
            type: String,
        },
        password: {
            type: String,
        }
        
    }
)

let User = mongoose.model('users', schema);
module.exports= User;