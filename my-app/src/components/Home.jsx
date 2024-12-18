import { Box, styled } from "@mui/material";
import { Button, Carousel } from "antd";
import img1 from "./Carouselimages/img.jpg";
import img2 from "./Carouselimages/img2.jpg";
import img3 from "./Carouselimages/img3.jpg";
import img4 from "./Carouselimages/img4.jpg";
import img5 from "./Carouselimages/img5.jpg"
import img6 from "./Carouselimages/img6.jpg"
import DoctorsList from "./homepagecomponents/Doctorslist";
import HomePageHospitals from "./homepagecomponents/HomePageHospitals";
import CitiesList from "./homepagecomponents/CitiesList";
import FrontPageTreatmentsList from "./homepagecomponents/FrontPageTreatmentsList";
import GalleriaHomePage from "./homepagecomponents/GalleriaHomePage";
import HelpDesk from "./homepagecomponents/HelpDesk";
import rightarrow from './arrowright.svg'
import { Link } from "react-router-dom";
import TestimonialHomePage from "./homepagecomponents/TestimonialHomePage";
import LatestBlogs from "./homepagecomponents/LatestBlogs";
import { motion } from "framer-motion";

const AnimatedButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#007BFF',  // Blue color
  color: 'white',               // White text color
  '&:hover': {
    backgroundColor: '#0056b3', // Darker blue on hover
    animation: 'scaleUp 0.3s ease-in-out',
  },
  '@keyframes scaleUp': {
    '0%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(1.1)',  // Slightly larger at mid hover
    },
    '100%': {
      transform: 'scale(1)',  // Return to original size
    },
  },
}));

const styles = {
  height: '3rem',
  marginLeft: '1rem',
  animation: 'moveRight 2s infinite'
};

const keyframes = `
  @keyframes moveRight {
    0% { transform: translateX(0); }
    50% { transform: translateX(10px); }
    100% { transform: translateX(0); }
  }
`;

export default function Home() {
  return (
    <>
      <Box sx={{ width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" } }}>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "rgb(255, 236, 236)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            padding: { xs: "2rem", md: "4rem" },
            marginTop: '11rem'
          }}
        >

          <Box
            sx={{
              flex: 1,
              textAlign: "left",
              width: { xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" }
            }}
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ fontWeight: "bold" }}
            >
              Building a Legacy of Patient Centered Excellence
            </motion.h3>

            <motion.h5
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              style={{ marginTop: "2rem" }}
            >
              &#9989; Cutting-edge Medical Technology and Facilities
            </motion.h5>
            <motion.h5
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              style={{ marginTop: "1rem" }}
            >
              &#9989; Renowned for Specialized Medical Expertise
            </motion.h5>
            <motion.h5
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              style={{ marginTop: "1rem" }}
            >
              &#9989; Comprehensive Patient Care Services
            </motion.h5>
            <motion.h5
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              style={{ marginTop: "1rem" }}
            >
              &#9989; Commitment to Global Health Standards
            </motion.h5>
          </Box>

          <Box
            sx={{
              flex: 1,
              marginTop: '1rem',
              width: { xs: "100%", sm: "100%", md: "60%", lg: "60%", xl: "60%" },
              height: { xs: "auto", sm: "18rem", md: "22rem", lg: "22rem", xl: "22rem" }
            }}
          >
            <Carousel autoplay autoplaySpeed={3000} draggable dots>
              {[img1, img2, img5, img6, img3, img4].map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Carousel ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      maxHeight: "25rem", // To ensure the images don't overflow
                    }}
                  />
                </div>
              ))}
            </Carousel>
          </Box>

        </Box>

        <Box sx={{ marginTop: "0.2rem" }}>
          <div className="scroll-left" >
            <h4>
              1000+{" "}
              <span style={{ color: "black", marginRight: "3rem" }}>
                Patients{" "}
              </span>
              10000+
              <span style={{ color: "black", marginRight: "3rem" }}>
                Hospitals & Clinics
              </span>{" "}
              10+
              <span style={{ color: "black", marginRight: "3rem" }}>
                Languages
              </span>{" "}
              500+
              <span style={{ color: "black", marginRight: "3rem" }}>
                Doctors
              </span>{" "}
            </h4>
          </div>
        </Box>
        <Box>
          <h1 style={{ marginTop: '1rem', marginLeft: { sm: "1rem", md: "25rem", lg: "35rem" }, fontFamily: '"Poppins", sans-serif', fontWeight: 'bold' }}>Best Doctors For You</h1></Box>
        <Box sx={{ marginTop: "0.2rem", marginRight: "2rem", width: { xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" } }}>
          <DoctorsList />
        </Box>
        <Box sx={{ marginRight: { lg: "18rem" } }}>
          <h1 style={{ marginTop: '1rem', fontFamily: '"Poppins", sans-serif', fontWeight: 'bold' }}>Best Hospitals For You</h1></Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginTop: '1rem',
            width: '100%',
            columnGap: "1rem",
            marginLeft: { xs: "1rem", md: "8rem", lg: "5rem" }
          }}
        >
          <Box
            sx={{
              width: { xs: "93%", sm: "93%", md: "100%", lg: "100%", xl: "100%" },
              display: 'grid',
              gridTemplateColumns: { xs: "repeat(2, 2fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: 'repeat(3, 1fr)' },
              gap: '1rem'
            }}
          >
            <HomePageHospitals />
          </Box>
          <Box
            sx={{
              width: { xs: "18rem", lg: '18rem' },
              height: '30rem',
              boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px',
              marginRight: '10rem',
              display: { xs: "none", sm: "none", md: "block", lg: "block", xl: "block" },
              backgroundColor: "rgb(232, 251, 255)"
            }}>
            <CitiesList />
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "93%", sm: "93%", md: "93%", lg: "93%", xl: "93%" },
            marginTop: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Link to="/hospitals" style={{ textDecoration: 'none' }}>
            <AnimatedButton sx={{ fontSize: '1.5rem', padding: '12px 24px' }}>
              All Hospitals
            </AnimatedButton>
          </Link>
        </Box>
        <h1 style={{ marginTop: '2rem', fontFamily: '"Poppins", sans-serif', fontWeight: 'bold' }}>Treatments For You</h1>
        <Box
          sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' }, // Row for larger breakpoints
            width: '100%',
          }}
        >
          <Box
            sx={{
              marginTop: '1rem',
              marginLeft: { xs: "0.8rem", lg: '2rem' },
              marginBottom: '2rem',
              display: 'grid',
              gap: {
                xs: '0.1rem', // Smaller gap for xs screens
                sm: '0.1rem', // Slightly larger gap for sm screens
                md: '1rem',
              },
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)', // Single column for xs screens
                sm: 'repeat(2, 1fr)', // Two columns for sm screens
                md: 'repeat(3, 1fr)',
                lg: 'repeat(5, 1fr)',
              },
              marginRight: '1rem',
              columnGap: '1rem',
            }}
          >
            <FrontPageTreatmentsList />
          </Box>

          <Box
            sx={{
              marginTop: {
                xs: '1rem', // Adjusted spacing for better alignment below in smaller sizes
                sm: '1rem',
                md: '-10rem', // Align for medium screens
                lg: '0rem', // Align for large screens
              },
              display: 'block',
              textAlign: { xs: 'center', sm: 'center', md: 'left' }, // Centered for small screens
              marginBottom: '1rem'
            }}
          >
            <Link to="/treatments">
              <style>{keyframes}</style>
              <img style={styles} src={rightarrow} alt="Right Arrow" />
            </Link>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', lg: 'row' }, boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px', gap: '1rem', width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" } }}>
          <Box sx={{ marginLeft: { xs: '1rem', sm: '4rem', md: '10rem', lg: '2rem' }, marginBottom: { lg: '0', xs: '1rem' }, display: 'block', width: { xs: '100%', sm: '100%', md: '100%', lg: '30%' } }}>
            <GalleriaHomePage />
          </Box>
          <Box sx={{ marginTop: { xs: '1rem', lg: '0' }, marginLeft: { xs: '4rem', sm: '4rem', md: '8rem', lg: '0' }, marginRight: { md: '0', lg: '1rem' }, width: { xs: '93%', sm: '93%', md: '70%', lg: '70%' } }}>
            <HelpDesk />
          </Box>
        </Box>

        <Box>
          <h1 style={{ marginTop: "1rem", fontFamily: '"Poppins", sans-serif', fontWeight: 'bold' }}>Testimonial</h1>
          <TestimonialHomePage />
        </Box>
        <Box sx={{ marginRight: '12rem', width: { xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" } }}>
          <h1 style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 'bold', marginTop: '1rem' }}>Latest Articles</h1>
          <LatestBlogs />
        </Box>
      </Box>
    </>
  );
}
