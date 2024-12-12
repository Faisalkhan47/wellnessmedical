import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import enquiryicon from './enquiryicon.svg';
import medicalcounselor from './counselormedical.svg';
import treatmentplanning from './treatmentplanning.svg';
import treatment from './treatment.svg';
import costestimates from './costestimates.svg';
import travelbackhappyandhealthy from './travelback.svg';
import { motion } from "framer-motion";



export default function HelpDesk() {
  return (
    <>
      <Grid container spacing={2} justifyContent="center">
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
            title: "Send your reports",
            description: "Send your medical reports to the team and they will consult to the doctors",
          },
          {
            icon: costestimates,
            title: "Cost Estimates",
            description: "Cost estimates forecast financial requirements for medical treatment.",
          },
          {
            icon: travelbackhappyandhealthy,
            title: "Travel back, stay well.",
            description: "Wishing you a safe journey, good health, and happiness throughout your travels.",
          },
        ].map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card sx={{ maxWidth: 275, borderRadius: "25px", height: "13rem" }}>
              <CardActionArea>
                <img
                  style={{ height: "5rem", width: "5rem", marginLeft: "6rem" }}
                  src={card.icon}
                  alt={`${card.title} Icon`}
                />
                <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  <Typography
                    sx={{ fontWeight: "bold", textAlign: "center" }}
                    gutterBottom
                    variant="h5"
                  >
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ color: "black", textAlign: "center" }}>
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </motion.div>
        </Grid>        
        ))}
      </Grid>
    </>
  );
}
