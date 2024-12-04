const Hospital = require('./hospitalList.model');
const contact = require('./contact.model')
const HospitalDetails = require('./hospitalDetails.model');
const DoctorsList = require('./doctorlist.model');
const DoctorsDetails = require('./doctordetails.model')


 async function addHospital (req, res) {
    const {name,beds,icubeds,airportdistance,about1,about2,about3,about4,about5,image,detail} = req.body;
    try {
        const newHospitalList = new Hospital({
            name,
            beds,
            icubeds,
            airportdistance,
            about1,
            about2,
            about3,
            about4,
            about5,
            image,
            detail
        })
        const savedHospital = await newHospitalList.save();
        res.status(201).json(savedHospital);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
 }
 
 async function getAllHospital(req,res) {
    try {
        let hospitals;
        if(req.query.category)
       hospitals = await Hospital.find({category:req.query.category});
       else
       hospitals = await Hospital.find();
     res.json(hospitals);
    } catch (error) {
        res.status(500).json({message : error.message})
    }
 }



 async function addcontact (req, res) {
    const {name,address,no} = req.body;
    try {
        const newContactList = new contact({
            name,
            address,
            no
        })

        const savedContact = await newContactList.save();
        res.status(201).json(savedContact);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
 }

 async function addHospitalDetails (req, res) {
    const {image1,image2,image3,image4,hospitalname,beds,icubeds,airportdistance,about1,about2,about3,about4,about5,about6,about7,about8,locationandaddress1,locationandaddress2,locationandaddress3,locationandaddress4,locationandaddress5,locationandaddress6,locationandaddress7,locationandaddress8,doctor1,doctor2,doctor3,doctor4,doctor5,doctor6,doctor7,doctor8,doctor9,doctor10,doctor11,doctor12,doctorimage1,doctorimage2,doctorimage3,doctorimage4,doctorimage5,doctorimage6,doctorimage7,doctorimage8,doctorimage9,doctorimage10,doctorimage11,doctorimage12,doctorexp1,doctorexp2,doctorexp3,doctorexp4,doctorexp5,doctorexp6,doctorexp7,doctorexp8,doctorexp9,doctorexp10,doctorexp11,doctorexp12
    } = req.body;
    try {
        const newHospitalDetails = new HospitalDetails({
            image1,
            image2,
            image3,
            image4,
            hospitalname,
            beds,
            icubeds,
            airportdistance,
            about1,
            about2,
            about3,
            about4,
            about5,
            about6,
            about7,
            about8,
            locationandaddress1,
            locationandaddress2,
            locationandaddress3,
            locationandaddress4,
            locationandaddress5,
            locationandaddress6,
            locationandaddress7,
            locationandaddress8,
            doctor1,
            doctor2,
            doctor3,
            doctor4,
            doctor5,
            doctor6,
            doctor7,
            doctor8,
            doctor9,
            doctor10,
            doctor11,
            doctor12,
            doctorimage1,
            doctorimage2,
            doctorimage3,
            doctorimage4,
            doctorimage5,
            doctorimage6,
            doctorimage7,
            doctorimage8,
            doctorimage9,
            doctorimage10,
            doctorimage11,
            doctorimage12,
            doctorexp1,
            doctorexp2,
            doctorexp3,
            doctorexp4,
            doctorexp5,
            doctorexp6,
            doctorexp7,
            doctorexp8,
            doctorexp9,
            doctorexp10,
            doctorexp11,
            doctorexp12
        })
        const savedHospitalDetails = await newHospitalDetails.save();
        res.status(201).json(savedHospitalDetails);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
 }
 async function getAllHospitalDetails(req,res) {
    try {  
        const hospitaldetails = await HospitalDetails.findById(req.params.hospitalid);
        res.json(hospitaldetails);
      
    } catch (error) {
        res.status(500).json({message : error.message})
    }
 }

 async function addDoctors (req, res) {
    const {doctorname,specialist,experience,hospital,gender,doctorimage} = req.body;
    try {
        const newDoctorsList = new DoctorsList({
            doctorimage,
            doctorname,
            specialist,
            experience,
            hospital,
            gender
        })

        const savedDoctorsList = await newDoctorsList.save();
        res.status(201).json(savedDoctorsList);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
 }

 async function getAllDoctors(req,res) {
    try {
        const doctorslist = await DoctorsList.find();
        res.json(doctorslist);
    } catch (error) {
        res.status(500).json({message : error.message})
    }
 }

 async function addDoctorDetails (req, res) {
    const {doctorimage,doctorname,specialist,experience,hospital,doctorname2,aboutdoctor1,aboutdoctor2,aboutdoctor3,aboutdoctor4,aboutdoctor5,aboutdoctor6,aboutdoctor7,specialityint1,specialityint2,specialityint3,specialityint4,specialityint5,specialityint6,specialityint7,treatmentlist1,treatmentlist2,treatmentlist3,treatmentlist4,treatmentlist5,treatmentlist6,treatmentlist7,treatmentlist8,treatmentlist9,treatmentlist10,treatmentlist11,treatmentlist12,treatmentlist13,treatmentlist14,treatmentlist15,treatmentlist16,treatmentlist17,treatmentlist18,treatmentlist19,treatmentlist20,treatmentlist21,treatmentlist22,treatmentlist23,treatmentlist24,treatmentlist25,treatmentlist26,treatmentlist27,treatmentlist28,treatmentlist29,treatmentlist30,workexp1,workexp2,workexp3,professionalmemberships1,professionalmemberships2,professionalmemberships3,professionalmemberships4,professionalmemberships5,
    professionalmemberships6,professionalmemberships7,awardsandhonors1,awardsandhonors2,awardsandhonors3,awardsandhonors4,awardsandhonors5,researchexperience1,researchexperience2,educationandtraining1,educationandtraining2,educationandtraining3,educationandtraining4
    } = req.body;
    try {
        const newDoctorDetails = new DoctorsDetails({
            doctorimage,
            doctorname,
            specialist,
            experience,
            hospital,
            doctorname2,
            aboutdoctor1,
            aboutdoctor2,
            aboutdoctor3,
            aboutdoctor4,
            aboutdoctor5,
            aboutdoctor6,
            aboutdoctor7,
            specialityint1,
            specialityint2,
            specialityint3,
            specialityint4,
            specialityint5,
            specialityint6,
            specialityint7,
            treatmentlist1,
            treatmentlist2,
            treatmentlist3,
            treatmentlist4,
            treatmentlist5,
            treatmentlist6,
            treatmentlist7,
            treatmentlist8,
            treatmentlist9,
            treatmentlist10,
            treatmentlist11,
            treatmentlist12,
            treatmentlist13,
            treatmentlist14,
            treatmentlist15,
            treatmentlist16,
            treatmentlist17,
            treatmentlist18,
            treatmentlist19,
            treatmentlist20,
            treatmentlist21,
            treatmentlist22,
            treatmentlist23,
            treatmentlist24,
            treatmentlist25,
            treatmentlist26,
            treatmentlist27,
            treatmentlist28,
            treatmentlist29,
            treatmentlist30,
            workexp1,
            workexp2,
            workexp3,
            professionalmemberships1,
            professionalmemberships2,
            professionalmemberships3,
            professionalmemberships4,
            professionalmemberships5,
            professionalmemberships6,
            professionalmemberships7,
            awardsandhonors1,
            awardsandhonors2,
            awardsandhonors3,
            awardsandhonors4,
            awardsandhonors5,
            researchexperience1,
            researchexperience2,
            educationandtraining1,
            educationandtraining2,
            educationandtraining3,
            educationandtraining4
        })
        const savedDoctorDetails = await newDoctorDetails.save();
        res.status(201).json(savedDoctorDetails);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
 }
 async function getAllDoctorDetails(req,res) {
    try {  
        const doctordetails = await DoctorsDetail.findById(req.params.doctorid);
        res.json(doctordetails);
      
    } catch (error) {
        res.status(500).json({message : error.message})
    }
 }
module.exports = { addHospital,addcontact,getAllHospital,addHospitalDetails,getAllHospitalDetails,addDoctors,getAllDoctors,addDoctorDetails,getAllDoctorDetails };
