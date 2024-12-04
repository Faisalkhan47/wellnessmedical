import { Box, Checkbox, FormControlLabel, FormGroup, Stack } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function DoctorsList() {

    const [doctorList, setDoctorList] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/hospitals/getalldoctors')
                console.log(response.data);
                setDoctorList(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    return (
        <>
            <Box sx={{ display: "flex", alignItems: 'flex-start', justifyContent: "flex-start",marginTop:'11rem' }}>
                <Stack sx={{ marginTop: '7rem', marginLeft: '2rem', boxShadow: 'rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px', width: '18rem' }}>
                    <FormGroup style={{ marginLeft: '1rem' }}>
                        <h5 style={{ marginTop: '1rem', fontWeight: 'bold' }}>Doctors By Location</h5>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Delhi" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Mumbai" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Lucknow" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Chennai" />
                    </FormGroup>
                    <FormGroup style={{ marginLeft: '1rem' }}>
                        <h5 style={{ marginTop: '1rem', fontWeight: 'bold' }}>Speciality</h5>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Aesthetic And Reconstructive Surgery" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Allergy" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Anaesthesia" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Arthroscopy & Sports Injury" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Audiology" />
                    </FormGroup>
                </Stack>
                <Box
                    sx={{
                        marginTop: '7rem',
                        marginLeft: '3rem',
                        flexWrap: 'wrap',
                        maxWidth: '70rem',
                        gap: '0.5rem'
                    }}
                    direction="row"
                    spacing={2}
                >
                    {
                        doctorList.map((di) =>
                            <Box
                                sx={{
                                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                                    height: '14rem',
                                    width: '34rem',
                                    marginLeft: '0.5rem',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    padding: '1rem',
                                    backgroundColor: '#fff',
                                    borderRadius: '8px',
                                }} key={di.doctorListid}
                            >
                                <img
                                    style={{
                                        height: '10rem',
                                        width: '14rem',
                                        objectFit: 'cover',
                                    }}
                                    src={di.doctorimage}
                                    alt=""
                                />
                                <div
                                    style={{
                                        marginLeft: '1rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                    }}
                                >
                                    <h4
                                        style={{
                                            margin: '0',
                                            padding: '0',
                                            fontSize: '1.25rem',
                                            fontWeight: 'bold',
                                            color: '#333',
                                        }}
                                    >
                                        {di.doctorname}
                                    </h4>
                                    <h6
                                        style={{
                                            marginTop: '0.5rem',
                                            marginBottom: '0.25rem',
                                            fontSize: '1rem',
                                            color: '#555',
                                        }}
                                    >
                                        Specialist: {di.specialist}
                                    </h6>
                                    <h6
                                        style={{
                                            marginTop: '0.25rem',
                                            fontSize: '1rem',
                                            color: '#555',
                                        }}
                                    >
                                        Experience: {di.experience}
                                    </h6>
                                    <h6
                                        style={{
                                            marginTop: '0.01rem',
                                            fontSize: '1rem',
                                            color: '#555',
                                        }}
                                    >
                                        Hospital:  {di.hospital}
                                    </h6>
                                    <h6
                                        style={{
                                            marginTop: '0.01rem',
                                            fontSize: '1rem',
                                            color: '#555',
                                        }}
                                    >
                                        Gender: {di.gender}
                                    </h6>
                                    <h6
                                        style={{
                                            marginTop: '2rem',
                                            fontSize: '1rem',
                                            color: 'blue',
                                            marginLeft: '2rem',
                                        }}
                                    >
                                        <a
                                            href="/dr-balbir-singh"
                                            style={{
                                                color: 'blue',
                                                textDecoration: 'none',
                                            }}
                                        >
                                            View Profile
                                        </a>
                                    </h6>
                                </div>
                            </Box>
                        )
                    }
                </Box>
            </Box>
        </>

    )

}