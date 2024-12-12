import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Checkbox, FormControlLabel, FormGroup, Grid, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';
import HospitalListDrawerComp from './drawercomponents/HospitalListDrawerComp';
import { motion } from "framer-motion";

export default function HospitalList() {
    const [hospitalList, setHospitalList] = useState([])

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('lg'));

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/hospitals/getallhospital')
                console.log(response.data);
                setHospitalList(response.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])
    return (
        <>
            <Box sx={{ display: "flex", alignItems: 'flex-start', justifyContent: "flex-start", marginTop: "11rem", width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" } }}>
                <Box sx={{ marginLeft: { xs: "0", lg: '1rem' }, marginTop: { xs: "6rem", sm: "6rem", md: "7rem", lg: '6rem' }, boxShadow: 'rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px', width: { xs: '6rem', lg: "12rem" }, backgroundColor: { xs: "black", sm: "black", md: 'black', lg: "white", xl: "white" } }}>
                    {
                        isMatch ? (<> <HospitalListDrawerComp /> </>) :
                            (
                                <FormGroup style={{ marginLeft: '1rem' }}>
                                    <h5 style={{ marginTop: '1rem', fontWeight: 'bold' }}>Filter by</h5>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Delhi" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Gurugram" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Lucknow" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Chennai" />
                                </FormGroup>
                            )
                    }
                </Box>

                <Box sx={{ flexGrow: 1, marginLeft: { xs: "0.5rem", lg: '3rem' }, marginTop: '5rem', marginBottom: "2rem", marginRight: '1rem' }}>
                    <Grid container spacing={3}>
                        {hospitalList.map((p) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                lg={4}
                                key={p.hospitalListid}
                                component={motion.div}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Card
                                    sx={{
                                        boxShadow: 'rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px',
                                    }}
                                >
                                    <Box
                                        component={motion.img}
                                        sx={{
                                            width: '100%',
                                            height: { lg: "16rem", xs: "15rem" },
                                        }}
                                        src={p.image}
                                        alt=""
                                        whileHover={{ scale: 1.05 }}
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h3"
                                            sx={{
                                                fontWeight: 'bold',
                                                fontSize: '1.5rem',
                                                color: 'blue',
                                                textDecoration: 'none',
                                            }}
                                        >
                                            <Link to={`/hospital/details/${p.detail}`}>{p.name}</Link>
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold', fontSize: '1.3rem' }}>
                                            {p.beds}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold', fontSize: '1.3rem' }}>
                                            {p.icubeds}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold', fontSize: '1.3rem' }}>
                                            {p.airportdistance}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

            </Box>
        </>
    )
}