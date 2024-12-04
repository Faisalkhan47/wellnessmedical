import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom"
import delhiIcon from '../svghomecities/delhiicon.svg'
import gurugramIcon from '../svghomecities/gurugramcity.svg'
import faridabadIcon from '../svghomecities/faridabad.svg'
import noidaIcon from '../svghomecities/noida.svg'
import chennaiIcon from '../svghomecities/chennai.svg'
import mumbaiIcon from '../svghomecities/mumbai.svg'

export default function CitiesList() {
  return (
    <>
      <Typography variant="h5" sx={{marginTop:'1rem',marginLeft:"1rem"}}> Explore by Cities</Typography>
     
      <Box
        sx={{
          marginLeft: "2rem",
          display: "flex",
          flexDirection: "column",
          marginTop: "2rem",
          gap: "2rem",
        }}
      >
        <Link to="/" underline="hover" variant="h5" style={{textDecoration:'none'}}>
         <img style={{maxHeight:'1.5rem',marginBottom:'0.5rem'}} src={delhiIcon} alt="" /> {"Delhi"}
        </Link>
        <Link to="#" underline="hover" variant="h5" style={{textDecoration:'none'}}>
         <img style={{maxHeight:'1.5rem',marginBottom:'0.5rem'}} src={gurugramIcon} alt="" /> {"Gurugram"}
        </Link>
        <Link to="#" underline="hover" variant="h5" style={{textDecoration:'none'}}>
         <img style={{maxHeight:'1.5rem',marginBottom:'0.5rem'}} src={faridabadIcon} alt="" /> {"Faridabad"}
        </Link>
        <Link to="#" underline="hover" variant="h5" style={{textDecoration:'none'}}>
         <img style={{maxHeight:'1.5rem',marginBottom:'0.5rem'}} src={noidaIcon} alt="" /> {"Noida"}
        </Link>
        <Link to="#" underline="hover" variant="h5" style={{textDecoration:'none'}}>
         <img style={{maxHeight:'1.5rem',marginBottom:'0.5rem'}} src={chennaiIcon} alt="" /> {"Chennai"}
        </Link>
        <Link to="#" underline="hover" variant="h5" style={{textDecoration:'none'}}>
         <img style={{maxHeight:'1.5rem',marginBottom:'0.5rem'}} src={mumbaiIcon} alt="" /> {"Mumbai"}
        </Link>
      </Box>
    </>
  );
}
