import { Box, Checkbox, FormControlLabel, FormGroup, Stack, Grid, useMediaQuery, useTheme, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DoctorListDrawer from "./drawercomponents/DoctorListDrawer";
import { motion } from 'framer-motion';


export default function DoctorsList() {

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('lg'));

    const [doctorList, setDoctorList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/hospitals/getalldoctors');
                console.log(response.data);
                setDoctorList(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <Box sx={{ display: "flex", alignItems: 'flex-start', justifyContent: "flex-start", marginTop: '11rem' }}>
                <Stack sx={{ marginTop: '7rem', marginLeft: { xs: '1rem', lg: "2rem" }, boxShadow: 'rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px', width: '18rem', backgroundColor: { xs: "black", sm: "black", md: 'black', lg: "white", xl: "white" } }}>
                    {
                        isMatch ? (
                            <DoctorListDrawer />
                        ) : (
                            <>
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
                            </>
                        )
                    }

                </Stack>



                <Grid
                    container
                    spacing={2}
                    sx={{ marginTop: '6rem', marginLeft: { xs: '0rem', lg: "2rem" }, width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" }, marginRight: { xs: "5rem" }, marginBottom: "2rem" }}
                >
                    {doctorList.map((di) => (
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            lg={6}
                            key={di.doctorListid}
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Box
                                sx={{
                                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                                    height: { xs: '8', sm: '8', md: "14rem", lg: '16rem' },
                                    width: { xs: '18rem', sm: '18rem', md: '30rem', lg: '34rem' },
                                    display: 'flex',
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    alignItems: { xs: 'center', sm: 'flex-start' },
                                    padding: '1rem',
                                    backgroundColor: '#fff',
                                    borderRadius: '8px',
                                    margin: '0 auto',
                                }}
                            >
                                <Box
                                    component="img"
                                    sx={{
                                        height: '10rem',
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                    }}
                                    src={di.doctorimage}
                                    alt="Doctor"
                                />
                                <Box
                                    sx={{
                                        marginLeft: { xs: 0, sm: '1rem',lg:"4rem" },
                                        marginTop: { xs: '1rem', sm: 0 },
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                        width: '100%',
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            margin: 0,
                                            fontSize: { xs: '1rem', sm: '1.25rem' },
                                            fontWeight: 'bold',
                                            color: '#333',
                                        }}
                                    >
                                        {di.doctorname}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            marginTop: '0.5rem',
                                            fontSize: { xs: '0.875rem', sm: '1rem' },
                                            color: '#555',
                                        }}
                                    >
                                        Specialist: {di.specialist}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            marginTop: '0.25rem',
                                            fontSize: { xs: '0.875rem', sm: '1rem' },
                                            color: '#555',
                                        }}
                                    >
                                        Experience: {di.experience}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            marginTop: '0.01rem',
                                            fontSize: { xs: '0.875rem', sm: '1rem' },
                                            color: '#555',
                                        }}
                                    >
                                        Hospital: {di.hospital}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            marginTop: '0.01rem',
                                            fontSize: { xs: '0.875rem', sm: '1rem' },
                                            color: '#555',
                                        }}
                                    >
                                        Gender: {di.gender}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            marginTop: '2rem',
                                            fontSize: { xs: '0.875rem', sm: '1rem' },
                                            color: 'blue',
                                            textAlign: { xs: 'center', sm: 'left' },
                                        }}
                                    >
                                        <Link
                                            to={`/doctor/details/${di.detail}`}
                                            style={{
                                                color: 'blue',
                                                textDecoration: 'none',
                                            }}
                                        >
                                            View Profile
                                        </Link>
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

            </Box>
        </>
    );
}
