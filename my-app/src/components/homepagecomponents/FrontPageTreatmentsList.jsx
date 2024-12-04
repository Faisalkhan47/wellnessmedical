import React, { useState, useEffect } from 'react';
import cardiacsurgery from './cardiacsurgery.svg';
import neurosurgery from "./neurosurgery.svg"
import spinesurgery from "./spinesurgery.svg"
import oncology from "./oncology.svg"
import orthopedics from "./orthopedics.svg"
import ivff from "./ivff.svg"
import kidneytransplant from "./kidneytransplant.svg"
import livertransplant from "./livertransplant.svg"
import bonemarrowsurgery from "./bonemarrowsurgery.svg"
import weightloss from "./weightloss.svg"
import { Link } from 'react-router-dom';

const treatments = [
  { name: "Cardiac Surgery", image: cardiacsurgery, link: "your-link-url" },
  { name: "Neuro Surgery", image: neurosurgery, link: "your-link-url" },
  { name: "Spine Surgery", image: spinesurgery, link: "your-link-url" },
  { name: "Oncology", image: oncology, link: "your-link-url" },
  { name: "Orthopedics", image: orthopedics, link: "your-link-url" },
  { name: "IVF", image: ivff, link: "your-link-url" },
  { name: "Kidney Transplant", image: kidneytransplant, link: "your-link-url" },
  { name: "Liver Transplant", image: livertransplant, link: "your-link-url" },
  { name: "Bone Marrow Transplant", image: bonemarrowsurgery, link: "your-link-url" },
  { name: "Weight Loss", image: weightloss, link: "your-link-url" },
];

export default function FrontPageTreatmentsList() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Update the state based on screen width
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); 
    };

    handleResize(); // Check initial screen size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {treatments.slice(0, isSmallScreen ? 4 : treatments.length).map((treatment, index) => (
        <Link to={treatment.link} style={{ textDecoration: 'none' }} key={index}>
          <div
            className="treatment-card"
            style={{
              boxShadow:
                'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
              transition: 'transform 0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img src={treatment.image} alt={treatment.name} width="90rem" />
            <h5 style={{ marginTop: '0.5rem', fontWeight: '900', color: 'black' }}>
              {treatment.name}
            </h5>
          </div>
        </Link>
      ))}
    </>
  );
}
