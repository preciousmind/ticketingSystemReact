
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    FName: { type: String },
    LName: { type: String },
    UserType: {type: String},
    Email: { type: String, unique: true, required: true},
    Pwd: { type: String, index: true, required: false},
    Status: {type: String, index: true},
    CrtdOn: {type: Date},
    ModOn: {type: Date}
    
}, { autoIndex: false, timestamps: { createdAt: 'CrtdOn', updatedAt: 'ModOn' } });


module.exports = {userSchema};