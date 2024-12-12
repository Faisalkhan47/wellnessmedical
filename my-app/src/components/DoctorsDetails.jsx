import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text">
            {isReadMore ? text.slice(0, 0) : text}
            <span
                onClick={toggleReadMore}
                className="read-or-hide"
                style={{ color: "Blue", fontSize: '1.4rem', cursor: 'pointer' }}
            >
                {isReadMore ? "▼Read More" : "▲Read Less"}
            </span>
        </p>
    );
};

export default function DoctorsDetails() {
    let [doctorDetails, setDoctorDetails] = useState()
    let params = useParams()
    console.log(params)
    let doctorid = params.doctorid

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/hospitals/getalldoctordetails/${doctorid}`);
                console.log("hello")
                console.log(response);
                setDoctorDetails(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [doctorid])


    if (doctorDetails) {
        return (
            <>
                <Box sx={{ marginTop: '11rem', width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" } }}>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" }, marginLeft: { xs: "1rem", sm: "0rem", md: '4rem' } }}>
                        <Box sx={{ marginTop: "4rem" }}>
                            <h2 style={{ color: 'rgb(77, 192, 125)', marginTop: '1.5rem' }}>{doctorDetails.doctorname}</h2>
                            <h6><b>Specialist: </b>{doctorDetails.specialist}</h6>
                            <h6><b>Experience: </b>{doctorDetails.experience}</h6>
                            <h6><b>Hospital: </b>{doctorDetails.hospital}
                            </h6>
                        </Box>
                        <Box
                            sx={{
                                flexShrink: '0',
                                marginRight: { md: '6rem' },
                                marginTop: '5rem',
                                width: { xs: '10rem', md: '16rem' },
                                height: { xs: '8rem', md: '11rem' }
                            }}
                        >
                            <img
                                src={doctorDetails.doctorimage}
                                alt=""
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </Box>

                    </Box>

                    <Box sx={{ width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" }, marginLeft: { xs: "1rem", md: '4rem' } }}>
                        <h2 style={{ color: 'rgb(77, 192, 125)' }}>{doctorDetails.doctorname2}</h2>
                        <p style={{ marginLeft: '1rem' }}>&#x2022; {doctorDetails.aboutdoctor1}</p>
                        <p style={{ marginLeft: '1rem', marginTop: '-1rem' }}>&#x2022; {doctorDetails.aboutdoctor2}</p>
                        <p style={{ marginLeft: '1rem', marginTop: '-1rem' }}>&#x2022; {doctorDetails.aboutdoctor3}</p>
                        <p style={{ marginLeft: '1rem', marginTop: '-1rem' }}>&#x2022; {doctorDetails.aboutdoctor4}</p>
                        <Box className="container" style={{ marginLeft: '1rem', marginTop: '-1rem' }}>
                            <ReadMore><p>&#x2022; {doctorDetails.aboutdoctor5}</p>
                                <p style={{ marginTop: '-1rem' }}>&#x2022; {doctorDetails.aboutdoctor6}</p>
                                <p style={{ marginTop: '-1rem' }}>{doctorDetails.aboutdoctor7}
                                </p>
                            </ReadMore>
                        </Box>
                    </Box>
                    <Box sx={{ width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" }, marginLeft: { xs: "1rem", md: '4rem' } }}>
                        <h2 style={{ color: 'rgb(77, 192, 125)' }}>Speciality Interest:</h2>
                        <p style={{ marginLeft: '2rem' }}>&#x2022; {doctorDetails.specialityint1}</p>
                        <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {doctorDetails.specialityint2}</p>
                        <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {doctorDetails.specialityint3}</p>
                        <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {doctorDetails.specialityint4}</p>
                        <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {doctorDetails.specialityint5}</p>
                        <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {doctorDetails.specialityint6}</p>
                        <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {doctorDetails.specialityint7}</p>
                    </Box>
                    <Box sx={{ width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" }, marginLeft: { xs: "1rem", md: '4rem' } }}>
                        <h2 style={{ color: 'rgb(77, 192, 125)' }}>List Of Treatments:</h2>
                        <p style={{ marginLeft: '2rem' }}>&#x2022; {doctorDetails.treatmentlist1}</p>
                        <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {doctorDetails.treatmentlist2}</p>
                        <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {doctorDetails.treatmentlist3}</p>
                        <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {doctorDetails.treatmentlist4}</p>
                        <Box className="container" sx={{ marginLeft: '1.2rem', marginTop: '-1rem' }}>
                            <ReadMore><p>&#x2022; {doctorDetails.treatmentlist5}</p>
                                <p style={{ marginTop: '-1rem' }}>&#x2022; {doctorDetails.treatmentlist6}</p>
                                <p style={{ marginTop: '-1rem' }}>&#x2022; {doctorDetails.treatmentlist7}</p>
                                <p style={{ marginTop: '-1rem' }}>&#x2022; {doctorDetails.treatmentlist8}</p>
                                <p style={{ marginTop: '-1rem' }}>&#x2022; {doctorDetails.treatmentlist9}</p>
                                <p style={{ marginTop: '-1rem' }}>&#x2022; {doctorDetails.treatmentlist10}</p>
                                <p style={{ marginTop: '-1rem' }}>&#x2022; {doctorDetails.treatmentlist12}</p>
                                <p style={{ marginTop: '-1rem' }}>&#x2022; {doctorDetails.treatmentlist13}</p>
                                <p style={{ marginTop: '-1rem' }}>&#x2022; {doctorDetails.treatmentlist14}</p>
                                <p style={{ marginTop: '-1rem' }}>&#x2022; {doctorDetails.treatmentlist15}</p>
                                <p style={{ marginTop: '-1rem' }}>&#x2022; {doctorDetails.treatmentlist16}</p>
                                <p style={{ marginTop: '-1rem' }}>&#x2022; {doctorDetails.treatmentlist17}</p>
                                <p style={{ marginTop: '-1rem' }}>&#x2022; {doctorDetails.treatmentlist18}</p>
                                <p style={{ marginTop: '-1rem' }}>&#x2022; {doctorDetails.treatmentlist19}</p>
                                <p style={{ marginTop: '-1rem' }}>&#x2022; {doctorDetails.treatmentlist20}</p>
                                <p style={{ marginTop: '-1rem' }}>&#x2022; {doctorDetails.treatmentlist21}</p>
                                <p style={{ marginTop: '-1rem' }}>&#x2022; {doctorDetails.treatmentlist22}</p>
                                <p style={{ marginTop: '-1rem' }}>&#x2022; {doctorDetails.treatmentlist23}</p>
                                <p style={{ marginTop: '-1rem' }}>&#x2022; {doctorDetails.treatmentlist24}</p>
                                <p style={{ marginTop: '-1rem' }}>&#x2022; {doctorDetails.treatmentlist25}</p>
                                <p style={{ marginTop: '-1rem' }}>&#x2022; {doctorDetails.treatmentlist26}</p>
                                <p style={{ marginTop: '-1rem' }}>&#x2022; {doctorDetails.treatmentlist27}</p>
                                <p style={{ marginTop: '-1rem' }}>&#x2022; {doctorDetails.treatmentlist28}</p>
                                <p style={{ marginTop: '-1rem' }}>&#x2022; {doctorDetails.treatmentlist29}</p>
                                <p style={{ marginTop: '-1rem' }}>&#x2022; {doctorDetails.treatmentlist30}</p>
                            </ReadMore>
                        </Box>
                    </Box>
                    <Box sx={{ width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" }, marginLeft: { xs: "1rem", md: '4rem' } }}>
                        <h2 style={{ color: 'rgb(77, 192, 125)' }}>Work Experience:</h2>
                        <p style={{ marginLeft: '2rem' }}>&#x2022; {doctorDetails.workexp1}</p>
                        <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {doctorDetails.workexp2}</p>
                        <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {doctorDetails.workexp3}</p>
                    </Box>
                    <Box sx={{ width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" }, marginLeft: { xs: "1rem", md: '4rem' } }}>
                        <h2 style={{ color: 'rgb(77, 192, 125)' }}>Professional Memberships:</h2>
                        <p style={{ marginLeft: '2rem' }}>&#x2022; {doctorDetails.professionalmemberships1}</p>
                        <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {doctorDetails.professionalmemberships2}</p>
                        <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {doctorDetails.professionalmemberships3}</p>
                        <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {doctorDetails.professionalmemberships4}</p>
                        <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {doctorDetails.professionalmemberships5}</p>
                        <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {doctorDetails.professionalmemberships6}</p>
                        <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {doctorDetails.professionalmemberships7}</p>
                    </Box>
                    <Box sx={{ width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" }, marginLeft: { xs: "1rem", md: '4rem' } }}>
                        <h2 style={{ color: 'rgb(77, 192, 125)' }}>Awards and Honors:</h2>
                        <p style={{ marginLeft: '2rem' }}>&#x2022; {doctorDetails.awardsandhonors1}</p>
                        <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {doctorDetails.awardsandhonors2}</p>
                        <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {doctorDetails.awardsandhonors3}</p>
                        <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {doctorDetails.awardsandhonors4}</p>
                        <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {doctorDetails.awardsandhonors5}</p>
                    </Box>
                    <Box sx={{ width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" }, marginLeft: { xs: "1rem", md: '4rem' } }}>
                        <h2 style={{ color: 'rgb(77, 192, 125)' }}>Research Experience:</h2>
                        <p style={{ marginLeft: '2rem' }}>&#x2022; {doctorDetails.researchexperience1}</p>
                        <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {doctorDetails.researchexperience2}</p>
                    </Box>
                    <Box sx={{ width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" }, marginLeft: { xs: "1rem", md: '4rem' } }}>
                        <h2 style={{ color: 'rgb(77, 192, 125)' }}>Education and Training:</h2>
                        <p style={{ marginLeft: '2rem' }}>&#x2022; {doctorDetails.educationandtraining1}</p>
                        <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {doctorDetails.educationandtraining2}</p>
                        <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {doctorDetails.educationandtraining3}</p>
                        <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {doctorDetails.educationandtraining4}</p>
                    </Box>
                </Box>
            </>
        )
    }
}