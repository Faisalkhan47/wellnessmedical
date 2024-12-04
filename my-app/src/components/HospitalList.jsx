import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Checkbox, FormControlLabel, FormGroup, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';
import HospitalListDrawerComp from './drawercomponents/HospitalListDrawerComp';



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
                <Box sx={{ marginLeft: '1rem', marginTop: { xs: "6rem", sm: "6rem", md: "7rem", lg: '6rem' }, boxShadow: 'rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px', width: '15rem', backgroundColor: { xs: "black", sm: "black", md: 'black', lg: "white", xl: "white" } }}>
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
                <Box sx={{ flexGrow: 1, marginLeft: '1rem', marginTop: '3.5rem', marginBottom: "2rem", marginRight: '1rem' }}>
                    {
                        hospitalList.map((p) =>
                            <Box sx={{ marginTop: '2rem', width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" } }} key={p.hospitalListid}>
                                <Card sx={{ boxShadow: 'rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px' }}>
                                        <Box
                                            component="img"
                                            sx={{
                                                width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" },
                                            }}
                                            src={p.image}
                                            alt=""
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
                                            <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
                                                <h5 style={{ fontWeight: 'bold' }}>About Hospital:</h5>
                                                <p style={{ marginLeft: '2rem' }}>&#x2022; {p.about1}</p>
                                                <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {p.about2}</p>
                                                <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {p.about3}</p>
                                                <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {p.about4}</p>
                                                <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {p.about5}</p>
                                            </Typography>
                                        </CardContent>
                                </Card>
                            </Box>
                        )
                    }
                </Box>
            </Box>
        </>
    )
}