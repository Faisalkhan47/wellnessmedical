import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import enquiryicon from './enquiryicon.svg'
import medicalcounselor from './counselormedical.svg'
import treatmentplanning from './treatmentplanning.svg'
import treatment from './treatment.svg'



export default function HelpDesk() {
  return (
    <>
      <Grid container spacing={4} justifyContent="center">
  {[
    {
      icon: enquiryicon,
      title: "Enquiry",
      description: "Drop Queries regarding your treatment concern and the team will contact.",
    },
    {
      icon: medicalcounselor,
      title: "Medical Counselor",
      description: "Trustful exchange of information & one-on-one assistance provided by our medical counselor.",
    },
    {
      icon: treatmentplanning,
      title: "Treatment Planning",
      description: "From ticketing to visa and selection of the most affordable packages in treatment planning.",
    },
    {
      icon: treatment,
      title: "Treatment",
      description: "Get the best care in the most reputed hospitals with experienced doctors in the country.",
    },
    {
      icon: treatment,
      title: "Treatment",
      description: "Get the best care in the most reputed hospitals with experienced doctors in the country.",
    },
    {
      icon: treatment,
      title: "Treatment",
      description: "Get the best care in the most reputed hospitals with experienced doctors in the country.",
    },
  ].map((card, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Card sx={{ maxWidth: 275, borderRadius: "25px", height: "13rem" }}>
        <CardActionArea>
          <img
            style={{ height: "5rem", width: "5rem", marginLeft: "6rem" }}
            src={card.icon}
            alt={`${card.title} Icon`}
          />
          <CardContent>
            <Typography
              sx={{ fontWeight: "bold", display: "flex", justifyContent: "center" }}
              gutterBottom
              variant="h5"
            >
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ color: "black" }}>
              {card.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  ))}
</Grid>
    </>
  );
}