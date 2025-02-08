const EmployeeModel = require("../model/EmployeeModel")

exports.getemployee = async (req,res)=>{
    var data = await EmployeeModel.find();
    res.status(200).json({
        status:'get data',
        data
    })
}

exports.addemployee = async (req,res)=>{
    EmployeeModel.create(req.body);
    res.status(200).json({
        status:'add employee done...',
    })
}

exports.getsingleemployee = async (req,res)=>{
    var data = await EmployeeModel.findById(req.params.id);
    res.status(200).json({
        status:'get employee success..',
        data
    })
}

exports.deleteemployee = async (req,res)=>{
    var data = await EmployeeModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
        status: data.fullName+' employee deleted...'
    })
}

exports.editemployee = async (req,res)=>{
    var id = req.params.id;
    var data = await EmployeeModel.findByIdAndUpdate(id,req.body);
    res.status(200).json({
        status: 'Employee Update Done...'
    })
}