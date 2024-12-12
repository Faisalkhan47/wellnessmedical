import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MailIcon from '@mui/icons-material/Mail';
import image from "./homelogo.svg"
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';
import TreatmentsIconButton from './TreatmentsIconButton';
import AboutIconButton from './AboutIconButton';
import HomeIconButton from './HomeIconButton';
import HospitalsIconButton from './HospitalIconButton';
import DoctorsIconButton from './DoctorsIconButton';
import TestimonialsIconButton from './TestimonialButtonIcon';
import BlogIconButton from './BlogIconButton';
import ContactUsIconButton from './ContactUsButtonIcon';
import { Button, useMediaQuery, useTheme } from '@mui/material';
import DrawerComp from './drawercomponents/DrawerComp';
import TranslateComp from '../translation/TranslateComp';

export default function Navbar() {

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('lg'));
    

    
    return (
        <>
            <Box position="fixed" sx={{ zIndex: '10', boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px", width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" }, backgroundColor: "rgb(255, 236, 236)", marginTop: "-11rem" }}>
              

                <Box sx={{ height: "3rem", display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: { xs: "3rem", sm: "4rem", md: "5rem", lg: "6rem", xg: "7rem" }, ml: "4em", }}>
                    <Box className="logo_image" sx={{ ml: "-3rem", width: { xs: "6em", sm: "5em", md: "6rem", lg: "10rem", xl: "12rem" }, height: { xs: "4em", sm: "6em", md: "6rem", lg: "8rem", xl: "10rem" }, mb: "6rem", display: { xs: "block", sm: "block" } }}>
                        <Link to="/"> <img src={image} style={{ height: "100%", width: "100%" }} alt="logo" />
                        </Link>
                    </Box>

                    <Box position="fixed" sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "2.8rem", mt: "0.5rem", marginLeft: { xs: "-3.5rem", sm: "-2rem", md: "-1rem", xl: "18rem", lg: "20rem" } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', border: '3px solid black', width: { xs: "17rem", sm: "22rem", md: "28rem", lg: "30rem", xl: '40rem' }, height: { xs: "2rem", sm: "2rem", md: "2rem", lg: "2rem", xl: "2rem" }, marginRight: '10px' }}>
                            <input
                                type="text"
                                placeholder="Search Hospitals, Doctors, Procedures"
                                style={{ flex: 1, height: '100%', fontSize: '14px', border: 'none', outline: 'none', paddingLeft: '10px' }}
                            />
                        </Box>
                        <Button sx={{ width: { xs: '6rem', sm: '7rem', md: '9rem', lg: "10rem", xl: "12rem" }, height: '2rem', fontSize: '20px', border: '3px solid black', color: 'black' }}>Search</Button >
                    </Box>

                    <Box
                        position="fixed"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "1rem",
                            marginBottom: { xs: "3rem", sm: "3rem", md: "6rem", lg: "8rem", xl: "8rem" },
                            marginLeft: { xs: "3rem", sm: "28rem", md: "35rem", lg: "70rem", xl: "70rem" },
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: { xs: '2rem', sm: "2rem", md: "-2rem", lg: "-2rem" } }}>
                            <IconButton sx={{ my: 0.4 }}>
                                <PhoneIcon />
                            </IconButton>
                            <Typography
                                variant="h6"
                                component="h2"
                                sx={{ fontSize: "1rem" }}
                            >
                                <Link
                                    to="tel:+919953367487"
                                    style={{ textDecoration: "none", color: "inherit" }}
                                >
                                    +919953367487
                                </Link>
                            </Typography>
                            <Typography
                                variant="h6"
                                component="span"
                                sx={{ fontSize: "1rem" }}
                            >
                                &nbsp;|
                            </Typography>
                            <IconButton>
                                <Link
                                    to="mailto:mohdhamid5686@gmail.com"
                                    style={{ textDecoration: "none", color: "inherit" }}
                                >
                                    <MailIcon />
                                </Link>
                            </IconButton>
                            <Typography
                                variant="h6"
                                component="span"
                                sx={{ fontSize: "1rem" }}
                            >
                                |
                            </Typography>
                            <IconButton>
                                <Link
                                    to="https://wa.me/9643486864"
                                    style={{ textDecoration: "none", color: "inherit" }}
                                >
                                    <WhatsAppIcon />
                                </Link>
                            </IconButton>
                        </Box>
                        <Box sx={{ marginLeft: { xs: "1rem", sm: "3rem", md: "3rem", lg: "4rem", xl: "4rem" }, marginTop: { xs: "1.6rem", sm: "1.6rem", md: "-1rem" } }}>
                        <TranslateComp/>
                        </Box>
                    </Box>

                </Box>
                <Box sx={{ flexGrow: 1, marginTop: "2rem", display: "flex", alignItems: "left", justifyContent: "left", backgroundColor: 'rgb(151, 17, 20)' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: '1rem', height: '3rem', paddingBottom: '1rem' }}>
                        {
                            isMatch ? (
                                <>
                                    <DrawerComp />
                                </>
                            ) : (
                                <>
                                    <Toolbar sx={{ display: 'flex', alignItems: 'center', ml: '1rem' }}>
                                        <Link to="/" className="text-link">
                                            <Typography variant="h6" component="div">
                                                <HomeIconButton />
                                            </Typography>
                                        </Link>
                                    </Toolbar>
                                    <Toolbar sx={{ display: 'flex', alignItems: 'center', ml: '1rem' }}>
                                        <Link to="/about" className="text-link">
                                            <Typography variant="h6" component="div">
                                                <AboutIconButton />
                                            </Typography>
                                        </Link>
                                    </Toolbar>
                                    <Toolbar sx={{ display: 'flex', alignItems: 'center', ml: '1rem' }}>
                                        <Link to="/treatments" className="text-link">
                                            <Typography variant="h6" component="div">
                                                <TreatmentsIconButton />
                                            </Typography>
                                        </Link>
                                    </Toolbar>
                                    <Toolbar sx={{ display: 'flex', alignItems: 'center', ml: '0.5rem' }}>
                                        <Link to="/hospitals" className="text-link">
                                            <Typography variant="h6" component="div">
                                                <HospitalsIconButton />
                                            </Typography>
                                        </Link>
                                    </Toolbar>
                                    <Toolbar sx={{ display: 'flex', alignItems: 'center', ml: '1.2rem' }}>
                                        <Link to="/doctors" className="text-link">
                                            <Typography variant="h6" component="div">
                                                <DoctorsIconButton />
                                            </Typography>
                                        </Link>
                                    </Toolbar>
                                    <Toolbar sx={{ display: 'flex', alignItems: 'center', ml: '0.8rem' }}>
                                        <Link to="/testimonials" className="text-link">
                                            <Typography variant="h6" component="div">
                                                <TestimonialsIconButton />
                                            </Typography>
                                        </Link>
                                    </Toolbar>
                                    <Toolbar sx={{ display: 'flex', alignItems: 'center', ml: '1.1rem' }}>
                                        <Link to="/blog" className="text-link">
                                            <Typography variant="h6" component="div">
                                                <BlogIconButton />
                                            </Typography>
                                        </Link>
                                    </Toolbar>
                                    <Toolbar sx={{ display: 'flex', alignItems: 'center', ml: '0.3rem' }}>
                                        <Link to="/contactus" className="text-link">
                                            <Typography variant="h6" component="div">
                                                <ContactUsIconButton />
                                            </Typography>
                                        </Link>
                                    </Toolbar>

                                </>
                            )
                        }
                    </Box>
                </Box>
            </Box>
        </>
    );
}
