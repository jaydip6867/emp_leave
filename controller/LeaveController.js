const LeaveModel = require("../model/LeaveModel")

exports.addleave = async (req,res)=>{
    LeaveModel.create(req.body);
    res.status(200).json({
        status:'add leave success..'
    })
}

exports.getleave = async (req,res)=>{
    var data = await LeaveModel.find();
    res.status(200).json({
        status:'Get All Leave Data...',
        data
    })
}