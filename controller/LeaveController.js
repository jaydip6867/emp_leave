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

exports.getreport = async (req,res)=>{
    var id = req.params.id;
    var month = parseInt(req.query.month);
    var year = parseInt(req.query.year);

    if(year)
    {
        var data = await LeaveModel.findOne({ "EmpId": id, "year": year });
    }
    else if(month)
    {
        var data = await LeaveModel.findOne({ "EmpId": id, "month": month });
    }
    res.status(200).json({
        stauts:'get leave data of '+id,
        data,
        month,
        year
    })
}