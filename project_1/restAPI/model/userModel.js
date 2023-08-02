const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: [true, 'Please enter a name']
    },
    email:{
        type:String,
        require: [true, 'Please enter a EMAIL']
    },
    password: {
        type: String,
        require: [true, 'Please enter a password']
    },
    contact: {
        type: String,
        require: [true, 'please enter a contact']
    },
},{
    timestamps: true
})

module.exports = mongoose.model('users', userSchema)