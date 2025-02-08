var mongoose = require('mongoose');

var EmpSchema = new mongoose.Schema({
    fullName:{
        type:String,
    },
    workHour:{
        type:Number,
    },
});

module.exports = mongoose.model('employee',EmpSchema);