var express = require('express');
var router = express.Router();
var employee = require('../controller/EmployeeController');
var leave = require('../controller/LeaveController');

/* GET home page. */
router.get('/',employee.getemployee);
router.post('/',employee.addemployee);
router.get('/getemployee/:id',employee.getsingleemployee);
router.post('/editemployee/:id',employee.editemployee);
router.get('/deleteemployee/:id',employee.deleteemployee);

router.get('/getleave',leave.getleave);
router.post('/addleave',leave.addleave);    

module.exports = router;
