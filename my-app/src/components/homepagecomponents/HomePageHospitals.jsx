import React from 'react';
import { Card } from 'primereact/card';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

const hospitalsData = [
  {
    name: "Indraprastha Apollo Hospital",
    location: "Delhi, India",
    image: "https://i.imghippo.com/files/yilp8986A.webp",
    link: "http://your-link-here.com"
  },
  {
    name: "Medanta–The Medicity",
    location: "Gurugram, India",
    image: "https://i.imghippo.com/files/jiQR8871lhw.jpg",
    link: "http://your-link-here.com"
  },
  {
    name: "Fortis Hospital",
    location: "Gurugram, India",
    image: "https://i.imghippo.com/files/FS6786DxU.jpg",
    link: "http://your-link-here.com"
  },
  {
    name: "Artemis Hospital",
    location: "Gurugram, India",
    image: "https://i.imghippo.com/files/JSZ4540BtE.jpg",
    link: "http://your-link-here.com"
  },
  {
    name: "BLK-Max Hospital",
    location: "Delhi, India",
    image: "https://i.imghippo.com/files/zZfe9789Sg.jpg",
    link: "http://your-link-here.com"
  },
  {
    name: "Manipal Hospital",
    location: "Delhi, India",
    image: "https://i.imghippo.com/files/jjZE2384CsM.jpg",
    link: "http://your-link-here.com"
  },
];

export default function HomePageHospitals() {

  return (
    <>
      {hospitalsData.slice(0, window.innerWidth >= 960 ? 6 : 4).map((hospital, index) => (
        <Link to={hospital.link} key={index} style={{ textDecoration: 'none' }}>
          <Box
            className="card flex justify-content-center animated-card"
            sx={{
              boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
            }}
          >
            <Card
              title=""
              subTitle=""
              header={<img alt="Hospital" src={hospital.image} style={{ width: '100%', borderRadius: '8px' }} />}
            >
              <h4 style={{ textAlign: "center", marginTop: "0.5rem" }}>
                {hospital.name}
              </h4>
              <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
                <p>{hospital.location}</p>
              </div>
            </Card>
          </Box>
        </Link>
      ))}
    </>
  );
}
