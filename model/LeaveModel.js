var mongoose = require('mongoose');

var LeaveSchema = new mongoose.Schema({
    EmpId:{
        type:String,
    },
    leaveReason:{
        type:String,
    },
    leaveType:{
        type:String,
    },
    description:{
        type:String,
    },
    leaveHours:{
        type:Number,
    },
    startDate:{
        type:String,
    },
    endDate:{
        type:String,
    }
})

module.exports = mongoose.model('leave',LeaveSchema);