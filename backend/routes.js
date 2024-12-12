const express = require('express');
const router = express.Router();
const hospitalController =require('./hospitalController')

router.post('/addhospital', hospitalController.addHospital);
router.post('/adddoctors', hospitalController.addDoctors);
router.post('/addhospitaldetails', hospitalController.addHospitalDetails);
router.post('/adddoctordetails', hospitalController.addDoctorDetails);
router.get('/getallhospitaldetails/:hospitalid', hospitalController.getAllHospitalDetails);
router.get('/getalldoctordetails/:doctorid', hospitalController.getAllDoctorDetails);
router.get('/getalldoctors', hospitalController.getAllDoctors);
router.get('/getallhospital', hospitalController.getAllHospital);
router.post('/addcontact', hospitalController.addcontact);


module.exports = router;