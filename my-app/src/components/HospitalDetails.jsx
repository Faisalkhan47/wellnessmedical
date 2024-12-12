import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Neurologist from './Neurologist.svg';
import spine from './spine.svg';
import Gynecologist from "./Gynecologist.svg"
import Nephrologist from "./Nephrologist.svg"
import cardiology from './cardiology.svg'
import Pulmonologist from './Pulmonologist.svg'
import Urologist from './Urologist.svg'
import ENT from './ENT.svg'
import Gastrologist from './Gastrologist.svg'
import Liversurgeon from './Liversurgeon.svg'
import BMT from './BMT.svg'
import Endocrinology from './Endocrinology.svg'
import KneeReplacementSurgery from './KneeReplacementSurgery.svg'
import LungCancerSurgery from './LungCancerSurgery.svg'
import Hysterectomy from './Hysterectomy.svg'
import Angioplasty from './Angioplasty.svg'
import Blepharoplasty from './Blepharoplasty.svg'
import Breastliftsurgery from './Breastliftsurgery.svg'
import Cardiacablation from './Cardiacablation.svg'
import Colporrhaphy from './Colporrhaphy.svg'
import Decompressivecraniectomy from './Decompressivecraniectomy.svg'
import Dilationandcurettage from './Dilationandcurettage.svg'
import ExploratoryLaparotomy from './ExploratoryLaparotomy.svg'
import Fistulotomy from './Fistulotomy.svg'
import Gastrectomy from './Gastrectomy.svg'
import Glaucomasurgery from './Glaucomasurgery.svg'
import Hearttransplant from './Hearttransplant.svg'
import HipReplacementSurgery from './HipReplacementSurgery.svg'
import Hysteroscopy from './Hysteroscopy.svg'
import Jejunostomy from './Jejunostomy.svg'
import Lipomaremovalsurgery from './Lipomaremovalsurgery.svg'
import Lumpectomy from './Lumpectomy.svg'
import Mastoidectomy from './Mastoidectomy.svg'
import Myomectomy from './Myomectomy.svg'
import Nephrostomy from './Nephrostomy.svg'
import BreastCancerSurgery from './BreastCancerSurgery.svg'
import IVF from './IVF.svg'
import LiverTransplantSurgery from './LiverTransplantSurgery.svg'
import Breastreconstruction from './Breastreconstruction.svg'
import CoronaryAngiography from './CoronaryAngiography.svg'
import DeepBrainStimulation from './DeepBrainStimulation.svg'
import Discectomy from './Discectomy.svg'
import ExtracorporealShockWaveLithotripsy from './ExtracorporealShockWaveLithotripsy.svg'
import FunctionalEndoscopicSinusSurgery from './FunctionalEndoscopicSinusSurgery.svg'
import Gastropexy from './Gastropexy.svg'
import Hemipelvectomy from './Hemipelvectomy.svg'
import Hydrocelesurgery from './Hydrocelesurgery.svg'
import Inguinalherniasurgery from './Inguinalherniasurgery.svg'
import LASIK from './LASIK.svg'
import Liposuction from './Liposuction.svg'
import MinimallyinvasiveASDsurgery from './MinimallyinvasiveASDsurgery.svg'
import Myringotomy from './Myringotomy.svg'
import Nissenfundoplication from './Nissenfundoplication.svg'
import ShoulderArthroscopy from './ShoulderArthroscopy.svg'
import ProstateCancerSurgery from './ProstateCancerSurgery.svg'
import Cervicalcancersurgery from './Cervicalcancersurgery.svg'
import Cystoscopy from './Cystoscopy.svg'
import { Link, useParams } from "react-router-dom";
import axios from "axios";


const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 0) : text}
      <span
        onClick={toggleReadMore}
        className="read-or-hide"
        style={{ color: "Blue", fontSize: '1.4rem', cursor: 'pointer' }}
      >
        {isReadMore ? "▼Read More" : "▲Read Less"}
      </span>
    </p>
  );
};


export default function HospitalDetails() {

  let [hospitalDetails, setHospitalDetails] = useState()
  let params = useParams()
  console.log(params)
  let hospitalid = params.hospitalid

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/hospitals/getallhospitaldetails/${hospitalid}`);
        console.log("hello")
        console.log(response.data);
        setHospitalDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [hospitalid])


  if (hospitalDetails) {

    return (
      <>


        <Box sx={{ marginTop: "11rem", width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" } }}>

          <Box
            sx={{
              width: { xs: "90%", lg: "60%" },
              mx: "auto",
            }}
          >

            <div id="carouselExample" className="carousel slide mt-2">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={hospitalDetails.image1}
                    alt="Hospital 1"
                    className="d-block w-100"
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      maxWidth: { xs: "90%", sm: "80%", lg: "60%" },
                      maxHeight: "25rem",
                      marginTop: "5rem",
                      objectFit: "cover"
                    }}
                    
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={hospitalDetails.image2}
                    alt="Hospital 2"
                    className="d-block w-100"
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      maxWidth: { xs: "90%", sm: "80%", lg: "60%" },
                      maxHeight: "25rem",
                      marginTop: "5rem",
                      objectFit: "cover"
                    }}
                    
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={hospitalDetails.image3}
                    alt="Hospital 3"
                    className="d-block w-100"
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      maxWidth: { xs: "90%", sm: "80%", lg: "60%" },
                      maxHeight: "25rem",
                      marginTop: "5rem",
                      objectFit: "cover"
                    }}
                    
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </Box>
          <Box sx={{ width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" } }}>
            <h1 style={{ marginTop: '1rem' }}>{hospitalDetails.hospitalname}</h1>
            <Box sx={{ height: '19rem', width: { xs: "100%", sm: "100%", md: "100%", xl: "57rem", lg: "57rem" }, backgroundColor: 'rgb(54, 69, 79)', marginLeft: { xs: "0.5rem", sm: "0.5rem", md: "3rem", lg: '19rem' } }}>
              <h6 style={{ color: 'white', marginLeft: '1rem' }}>{hospitalDetails.beds}</h6>
              <h6 style={{ color: 'white', marginLeft: '1rem' }}>{hospitalDetails.icubeds}</h6>
              <h6 style={{ color: 'white', marginLeft: '1rem' }}>{hospitalDetails.airportdistance}</h6>
              <h6 style={{ color: 'white', marginLeft: '1rem' }}>CGHS Hospital</h6>
              <h6 style={{ color: 'white', marginLeft: '1rem' }}>OTS</h6>
              <h6 style={{ color: 'white', marginLeft: '1rem' }}>NABH Accredited</h6>
              <h6 style={{ color: 'white', marginLeft: '1rem' }}>Private Hospital</h6>
              <h6 style={{ color: 'white', marginLeft: '1rem' }}>NABL Accredited</h6>
              <h6 style={{ color: 'white', marginLeft: '1rem' }}>Allopathic Hospital</h6>
              <h6 style={{ color: 'white', marginLeft: '1rem' }}>Timings: Mon - Sat (10:00 AM - 05:00 PM)
              </h6>
              <h6 style={{ color: 'white', marginLeft: '1rem' }}>24x7 Emergency</h6>
            </Box>
            <Box sx={{ width: { xs: "100%", sm: "100%", md: "100%", xl: "60%", lg: "100%" }, marginLeft: { xs: "0.5rem", sm: "0.5rem", md: "3rem", lg: '19rem' } }}>
              <h2 style={{ marginTop: '1rem' }}>Brief about Hospital:</h2>
              <p style={{ marginLeft: '2rem' }}>&#x2022; {hospitalDetails.about1}</p>
              <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {hospitalDetails.about2}</p>
              <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {hospitalDetails.about3}</p>
              <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; {hospitalDetails.about4}</p>
              <Box className="container" style={{ marginLeft: '1.2rem', marginTop: '-1rem' }}>
                <ReadMore>&#x2022; {hospitalDetails.about5}
                  <p >&#x2022; {hospitalDetails.about6}</p>
                  <p style={{ marginTop: "-1rem" }}>&#x2022; {hospitalDetails.about7}</p>
                  <p style={{ marginTop: "-1rem" }}>&#x2022; {hospitalDetails.about8}</p>
                </ReadMore>
              </Box>
              <h4 style={{ fontWeight: 'bold', marginLeft: '1rem' }}>Area Of Excellence:</h4>
              <Box sx={{ display: 'grid', flexDirection: 'row', gap: '1rem', gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: "repeat(2, 1fr)", lg: 'repeat(4, 1fr)' }, marginLeft: '1rem', marginTop: '1rem', }}>
                <Link to="https://example.com" style={{ border: '3px solid black', width: '12rem', color: 'blue', fontWeight: 'bold', height: '2rem', textDecoration: 'none' }}>&nbsp; Anaesthesiology</Link>
                <Link to="https://example.com" style={{ border: '3px solid black', width: '12rem', color: 'blue', fontWeight: 'bold', height: '2rem', textDecoration: 'none' }}>&nbsp; Andrology</Link>
                <Link to="https://example.com" style={{ border: '3px solid black', width: '12rem', color: 'blue', fontWeight: 'bold', height: '2rem', textDecoration: 'none' }}>&nbsp; Ayurveda</Link>
                <Link to="https://example.com" style={{ border: '3px solid black', width: '12rem', color: 'blue', fontWeight: 'bold', height: '2rem', textDecoration: 'none' }}>&nbsp; Bariatrics</Link>
                <Link to="https://example.com" style={{ border: '3px solid black', width: '12rem', color: 'blue', fontWeight: 'bold', height: '2rem', textDecoration: 'none' }}>&nbsp; Cardiology</Link>
                <Link to="https://example.com" style={{ border: '3px solid black', width: '12rem', color: 'blue', fontWeight: 'bold', height: '2rem', textDecoration: 'none' }}>&nbsp; Dentistry</Link>
                <Link to="https://example.com" style={{ border: '3px solid black', width: '12rem', color: 'blue', fontWeight: 'bold', height: '2rem', textDecoration: 'none' }}>&nbsp; Dermatology</Link>
                <Link to="https://example.com" style={{ border: '3px solid black', width: '12rem', color: 'blue', fontWeight: 'bold', height: '2rem', textDecoration: 'none' }}>&nbsp; Endocrinology</Link>
                <Link to="https://example.com" style={{ border: '3px solid black', width: '12rem', color: 'blue', fontWeight: 'bold', height: '2rem', textDecoration: 'none' }}>&nbsp; ENT</Link>
                <Link to="https://example.com" style={{ border: '3px solid black', width: '12rem', color: 'blue', fontWeight: 'bold', height: '2rem', textDecoration: 'none' }}>&nbsp;  Gastroenterology</Link>
                <Link to="https://example.com" style={{ border: '3px solid black', width: '12rem', color: 'blue', fontWeight: 'bold', height: '2rem', textDecoration: 'none' }}>&nbsp;  General Surgery</Link>
                <Link to="https://example.com" style={{ border: '3px solid black', width: '12rem', color: 'blue', fontWeight: 'bold', height: '2rem', textDecoration: 'none' }}>&nbsp;  Hematology</Link>
                <Link to="https://example.com" style={{ border: '3px solid black', width: '12rem', color: 'blue', fontWeight: 'bold', height: '2rem', textDecoration: 'none' }}>&nbsp;  Dermatology</Link>
                <Link to="https://example.com" style={{ border: '3px solid black', width: '12rem', color: 'blue', fontWeight: 'bold', height: '2rem', textDecoration: 'none' }}>&nbsp; Dentistry</Link>
                <Link to="https://example.com" style={{ border: '3px solid black', width: '12rem', color: 'blue', fontWeight: 'bold', height: '2rem', textDecoration: 'none' }}>&nbsp;  Neurology</Link>
                <Link to="https://example.com" style={{ border: '3px solid black', width: '12rem', color: 'blue', fontWeight: 'bold', height: '2rem', textDecoration: 'none' }}>&nbsp;  Neurosurgery</Link>
                <Link to="https://example.com" style={{ border: '3px solid black', width: '12rem', color: 'blue', fontWeight: 'bold', height: '2rem', textDecoration: 'none' }}>&nbsp;  Pediatrics</Link>
                <Link to="https://example.com" style={{ border: '3px solid black', width: '12rem', color: 'blue', fontWeight: 'bold', height: '2rem', textDecoration: 'none' }}>&nbsp;  Physical Medicine</Link>
                <Link to="https://example.com" style={{ border: '3px solid black', width: '12rem', color: 'blue', fontWeight: 'bold', height: '2rem', textDecoration: 'none' }}>&nbsp;  Obstetric & Gynaecology</Link>
                <Link to="https://example.com" style={{ border: '3px solid black', width: '12rem', color: 'blue', fontWeight: 'bold', height: '2rem', textDecoration: 'none' }}>&nbsp;  Proctology</Link>
                <Link to="https://example.com" style={{ border: '3px solid black', width: '12rem', color: 'blue', fontWeight: 'bold', height: '2rem', textDecoration: 'none' }}>&nbsp; Plastic & Cosmetic </Link>
                <Link to="https://example.com" style={{ border: '3px solid black', width: '12rem', color: 'blue', fontWeight: 'bold', height: '2rem', textDecoration: 'none' }}>&nbsp; Reconstructive Surgery </Link>
                <Link to="https://example.com" style={{ border: '3px solid black', width: '12rem', color: 'blue', fontWeight: 'bold', height: '2rem', textDecoration: 'none' }}>&nbsp; Urology </Link>
                <Link to="https://example.com" style={{ border: '3px solid black', width: '12rem', color: 'blue', fontWeight: 'bold', height: '2rem', textDecoration: 'none' }}>&nbsp; Radiology </Link>
                <Link to="https://example.com" style={{ border: '3px solid black', width: '12rem', color: 'blue', fontWeight: 'bold', height: '2rem', textDecoration: 'none' }}>&nbsp; Laparoscopic Surgery </Link>
                <Link to="https://example.com" style={{ border: '3px solid black', width: '12rem', color: 'blue', fontWeight: 'bold', height: '2rem', textDecoration: 'none' }}>&nbsp; General Surgery </Link>
                <Link to="https://example.com" style={{ border: '3px solid black', width: '12rem', color: 'blue', fontWeight: 'bold', height: '2rem', textDecoration: 'none' }}>&nbsp; Hepatology</Link>
                <Link to="https://example.com" style={{ border: '3px solid black', width: '12rem', color: 'blue', fontWeight: 'bold', height: '2rem', textDecoration: 'none' }}>&nbsp; Ophthalmology</Link>
              </Box>
              <h4 style={{ fontWeight: 'bold', marginLeft: '1rem', marginTop: '1rem' }}>Location & Address:
              </h4>
              <Box>
                <p style={{ marginLeft: '1.3rem' }}>&#x2022; <b>{hospitalDetails.locationandaddress1}</b>
                </p>
                <p style={{ marginLeft: '1.3rem', marginTop: '-1rem' }}>&#x2022; <b>{hospitalDetails.locationandaddress2}</b>
                </p>
                <p style={{ marginLeft: '1.3rem', marginTop: '-1rem' }}>&#x2022; <b>{hospitalDetails.locationandaddress3}</b>
                </p>
                <p style={{ marginLeft: '1.3rem', marginTop: '-1rem' }}>&#x2022; {hospitalDetails.locationandaddress4}
                </p>
                <p style={{ marginLeft: '1.3rem', marginTop: '-1rem' }}>&#x2022; <b>{hospitalDetails.locationandaddress5}</b>
                </p>
                <p style={{ marginLeft: '1.3rem', marginTop: '-1rem' }}>&#x2022; {hospitalDetails.locationandaddress6}
                </p>
                <p style={{ marginLeft: '1.3rem', marginTop: '-1rem' }}>&#x2022; {hospitalDetails.locationandaddress7}
                </p>
                <p style={{ marginLeft: '1.3rem', marginTop: '-1rem' }}>&#x2022; {hospitalDetails.locationandaddress8}
                </p>
              </Box>
              <h4 style={{ fontWeight: 'bold', marginLeft: '1rem', marginTop: '1rem' }}>Facilities:
              </h4>
              <Box sx={{ width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" } }}>
                <p style={{ marginLeft: '1.3rem', }}>&#x2022; <b>COMFORT DURING STAY:</b> TV in room, Private rooms, Free Wifi, Phone in Room, Mobility accessible rooms, Family accommodation, Laundry, Welcome Package, Safe in the room, Nursery / Nanny services, Dry cleaning, Personal assistance / Concierge, Religious facilities, Fitness centre, Spa and wellness, Beauty salon, Café, Business centre services, Shop, Dedicated smoking areas, Special offer for group stays, Parking available
                </p>
                <p style={{ marginLeft: '1.3rem', marginTop: '-1rem' }}>&#x2022; <b>MONEY MATTERS:</b> Health insurance coordination, Medical travel insurance, Foreign currency exchange, ATM, Credit Card, Debit Card, Netbanking
                </p>
                <p style={{ marginLeft: '1.3rem', marginTop: '-1rem' }}>&#x2022; <b>FOOD:</b> Diet on Request, Restaurant, International Cuisine
                </p>
                <p style={{ marginLeft: '1.3rem', marginTop: '-1rem' }}>&#x2022; <b>TREATMENT RELATED:</b> Medical records transfer, Online doctor consultation, Rehabilitation, Pharmacy, Document legalisation, Post operative followup
                </p>
                <p style={{ marginLeft: '1.3rem', marginTop: '-1rem' }}>&#x2022; <b>LANGUAGE:</b>  Interpreter, Translation services
                </p>
                <p style={{ marginLeft: '1.3rem', marginTop: '-1rem' }}>&#x2022; <b>TRANSPORTATION:</b> Airport pickup, Local tourism options, Local transportation booking, Visa / Travel office, Car Hire, Private driver / Limousine services, Shopping trip organisation, Air ambulance
                </p>
              </Box>
              <h4 style={{ fontWeight: 'bold', marginLeft: '1rem', marginTop: '1rem' }}>Doctors By Department
              </h4>
              <Box
                sx={{
                  display: 'grid',
                  flexDirection: 'row',
                  gap: '1rem',
                  gridTemplateColumns: {
                    sm: 'repeat(1, 1fr)',
                    lg: 'repeat(3, 1fr)'
                  },
                  marginLeft: '1rem',
                  marginTop: '2rem'
                }}
              >

                <Link to="/" style={{ textDecoration: 'none', fontSize: '1.25rem', fontWeight: '500', marginTop: '-1rem' }}>
                  <img
                    style={{ maxHeight: '1.5rem', marginBottom: '0.5rem', marginLeft: '1rem' }}
                    src={Neurologist}
                    alt=""
                  />
                  <span style={{ marginLeft: '0.5rem' }}>Neurologist in Medanta</span>
                </Link>

                <Link to="/" style={{ textDecoration: 'none', fontSize: '1.25rem', fontWeight: '500', marginTop: '-1rem' }}>
                  <img
                    style={{ maxHeight: '1.5rem', marginBottom: '0.5rem', marginLeft: '1rem' }}
                    src={spine}
                    alt=""
                  />
                  <span style={{ marginLeft: '0.5rem' }}>Spine Surgeon in Medanta</span>
                </Link>
                <Link to="/" style={{ textDecoration: 'none', fontSize: '1.25rem', fontWeight: '500', marginTop: '-1rem' }}>
                  <img
                    style={{ maxHeight: '1.5rem', marginBottom: '0.5rem', marginLeft: '1rem' }}
                    src={Gynecologist}
                    alt=""
                  />
                  <span style={{ marginLeft: '0.5rem' }}>Gynecologist in Medanta</span>
                </Link>
                <Link to="/" style={{ textDecoration: 'none', fontSize: '1.25rem', fontWeight: '500', marginTop: '-1rem' }}>
                  <img
                    style={{ maxHeight: '1.5rem', marginBottom: '0.5rem', marginLeft: '1rem' }}
                    src={Nephrologist}
                    alt=""
                  />
                  <span style={{ marginLeft: '0.5rem' }}>Nephrologist in Medanta</span>
                </Link>
                <Link to="/" style={{ textDecoration: 'none', fontSize: '1.25rem', fontWeight: '500', marginTop: '-1rem' }}>
                  <img
                    style={{ maxHeight: '1.5rem', marginBottom: '0.5rem', marginLeft: '1rem' }}
                    src={cardiology}
                    alt=""
                  />
                  <span style={{ marginLeft: '0.5rem' }}>Cardiologist in Medanta</span>
                </Link>
                <Link to="/" style={{ textDecoration: 'none', fontSize: '1.25rem', fontWeight: '500', marginTop: '-1rem' }}>
                  <img
                    style={{ maxHeight: '1.5rem', marginBottom: '0.5rem', marginLeft: '1rem' }}
                    src={Pulmonologist}
                    alt=""
                  />
                  <span style={{ marginLeft: '0.5rem' }}>Pulmonologist in Medanta</span>
                </Link>
                <Link to="/" style={{ textDecoration: 'none', fontSize: '1.25rem', fontWeight: '500', marginTop: '-1rem' }}>
                  <img
                    style={{ maxHeight: '1.5rem', marginBottom: '0.5rem', marginLeft: '1rem' }}
                    src={Urologist}
                    alt=""
                  />
                  <span style={{ marginLeft: '0.5rem' }}>Urologist in Medanta</span>
                </Link>
                <Link to="/" style={{ textDecoration: 'none', fontSize: '1.25rem', fontWeight: '500', marginTop: '-1rem' }}>
                  <img
                    style={{ maxHeight: '1.5rem', marginBottom: '0.5rem', marginLeft: '1rem' }}
                    src={ENT}
                    alt=""
                  />
                  <span style={{ marginLeft: '0.5rem' }}>ENT Doctors in Medanta</span>
                </Link>
                <Link to="/" style={{ textDecoration: 'none', fontSize: '1.25rem', fontWeight: '500', marginTop: '-1rem' }}>
                  <img
                    style={{ maxHeight: '1.5rem', marginBottom: '0.5rem', marginLeft: '1rem' }}
                    src={Gastrologist}
                    alt=""
                  />
                  <span style={{ marginLeft: '0.5rem' }}>Gastrologist in Medanta</span>
                </Link>
                <Link to="/" style={{ textDecoration: 'none', fontSize: '1.25rem', fontWeight: '500', marginTop: '-1rem' }}>
                  <img
                    style={{ maxHeight: '1.5rem', marginBottom: '0.5rem', marginLeft: '1rem' }}
                    src={Liversurgeon}
                    alt=""
                  />
                  <span style={{ marginLeft: '0.5rem' }}>Liver Surgeon in Medanta
                  </span>
                </Link>
                <Link to="/" style={{ textDecoration: 'none', fontSize: '1.25rem', fontWeight: '500', marginTop: '-1rem' }}>
                  <img
                    style={{ maxHeight: '1.5rem', marginBottom: '0.5rem', marginLeft: '1rem' }}
                    src={BMT}
                    alt=""
                  />
                  <span style={{ marginLeft: '0.5rem' }}>BMT Doctor in Medanta
                  </span>
                </Link>
                <Link to="/" style={{ textDecoration: 'none', fontSize: '1.25rem', fontWeight: '500', marginTop: '-1rem' }}>
                  <img
                    style={{ maxHeight: '1.5rem', marginBottom: '0.5rem', marginLeft: '1rem' }}
                    src={Endocrinology}
                    alt=""
                  />
                  <span style={{ marginLeft: '0.5rem' }}>Endocrinology in Medanta
                  </span>
                </Link>
                <Link to="/" style={{ textDecoration: 'none', fontSize: '1.25rem', fontWeight: '500', marginTop: '-1rem' }}>
                  <img
                    style={{ maxHeight: '1.5rem', marginBottom: '0.5rem', marginLeft: '1rem' }}
                    src={Endocrinology}
                    alt=""
                  />
                  <span style={{ marginLeft: '0.5rem' }}>Endocrinology in Medanta
                  </span>
                </Link>
                <Link to="/" style={{ textDecoration: 'none', fontSize: '1.25rem', fontWeight: '500', marginTop: '-1rem' }}>
                  <img
                    style={{ maxHeight: '1.5rem', marginBottom: '0.5rem', marginLeft: '1rem' }}
                    src={Endocrinology}
                    alt=""
                  />
                  <span style={{ marginLeft: '0.5rem' }}>Endocrinology in Medanta
                  </span>
                </Link>
                <Link to="/" style={{ textDecoration: 'none', fontSize: '1.25rem', fontWeight: '500', marginTop: '-1rem' }}>
                  <img
                    style={{ maxHeight: '1.5rem', marginBottom: '0.5rem', marginLeft: '1rem' }}
                    src={Endocrinology}
                    alt=""
                  />
                  <span style={{ marginLeft: '0.5rem' }}>Endocrinology in Medanta
                  </span>
                </Link>
                <Link to="/" style={{ textDecoration: 'none', fontSize: '1.25rem', fontWeight: '500', marginTop: '-1rem' }}>
                  <img
                    style={{ maxHeight: '1.5rem', marginBottom: '0.5rem', marginLeft: '1rem' }}
                    src={Endocrinology}
                    alt=""
                  />
                  <span style={{ marginLeft: '0.5rem' }}>Endocrinology in Medanta
                  </span>
                </Link>
              </Box>
              <h4 style={{ fontWeight: 'bold', marginLeft: '1rem', marginTop: '1rem' }}>Top Doctors
              </h4>
              <Box sx={{ boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px', display: 'grid', flexDirection: 'row', gridTemplateColumns: { sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", xl: 'repeat(3, 1fr)' }, marginTop: '1rem', width: { xs: "80%", sm: "80%", md: "90%", xl: "100%", lg: "100%" } }}>
                <Link style={{ marginLeft: '1rem', marginTop: '0.5rem', marginRight: '0.7rem', boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px', height: ' 14rem', textDecoration: 'none' }} to="https://example.com">
                  <img style={{ height: '10rem', width: '72%', marginLeft: '1.8rem' }} src={hospitalDetails.doctorimage1} alt="" />
                  <h5 style={{ display: 'flex', align: 'center', justifyContent: 'center', marginTop: '0.8rem', color: 'seagreen' }}>{hospitalDetails.doctor1}</h5>
                  <h6 style={{ display: 'flex', align: 'center', justifyContent: 'center', color: 'seagreen' }}>{hospitalDetails.doctorexp1}</h6>
                </Link>
                <Link style={{ marginLeft: '1rem', marginTop: '0.5rem', marginRight: '0.7rem', boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px', height: ' 14rem', textDecoration: 'none' }} to="https://example.com">
                  <img style={{ height: '10rem', width: '72%', marginLeft: '1.8rem' }} src={hospitalDetails.doctorimage2} alt="" />
                  <h5 style={{ display: 'flex', align: 'center', justifyContent: 'center', marginTop: '0.8rem', color: 'seagreen' }}>{hospitalDetails.doctor2}</h5>
                  <h6 style={{ display: 'flex', align: 'center', justifyContent: 'center', color: 'seagreen' }}>{hospitalDetails.doctorexp2}</h6>
                </Link>
                <Link style={{ marginLeft: '1rem', marginTop: '0.5rem', marginRight: '0.7rem', boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px', height: ' 14rem', textDecoration: 'none' }} to="https://example.com">
                  <img style={{ height: '10rem', width: '72%', marginLeft: '1.8rem' }} src={hospitalDetails.doctorimage3} alt="" />
                  <h5 style={{ display: 'flex', align: 'center', justifyContent: 'center', marginTop: '0.8rem', color: 'seagreen' }}>{hospitalDetails.doctor3}</h5>
                  <h6 style={{ display: 'flex', align: 'center', justifyContent: 'center', color: 'seagreen' }}>{hospitalDetails.doctorexp3}</h6>
                </Link>
                <Link style={{ marginLeft: '1rem', marginTop: '0.5rem', marginRight: '0.7rem', boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px', height: ' 14rem', textDecoration: 'none' }} to="https://example.com">
                  <img style={{ height: '10rem', width: '72%', marginLeft: '1.8rem' }} src={hospitalDetails.doctorimage4} alt="" />
                  <h5 style={{ display: 'flex', align: 'center', justifyContent: 'center', marginTop: '0.8rem', color: 'seagreen' }}>{hospitalDetails.doctor4}</h5>
                  <h6 style={{ display: 'flex', align: 'center', justifyContent: 'center', color: 'seagreen' }}>{hospitalDetails.doctorexp4}</h6>
                </Link>
                <Link style={{ marginLeft: '1rem', marginTop: '0.5rem', marginRight: '0.7rem', boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px', height: ' 14rem', textDecoration: 'none' }} to="https://example.com">
                  <img style={{ height: '10rem', width: '72%', marginLeft: '1.8rem' }} src={hospitalDetails.doctorimage5} alt="" />
                  <h5 style={{ display: 'flex', align: 'center', justifyContent: 'center', marginTop: '0.8rem', color: 'seagreen' }}>{hospitalDetails.doctor5}</h5>
                  <h6 style={{ display: 'flex', align: 'center', justifyContent: 'center', color: 'seagreen' }}>{hospitalDetails.doctorexp5}</h6>
                </Link>
                <Link style={{ marginLeft: '1rem', marginTop: '0.5rem', marginRight: '0.7rem', boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px', height: ' 14rem', textDecoration: 'none' }} to="https://example.com">
                  <img style={{ height: '10rem', width: '72%', marginLeft: '1.8rem' }} src={hospitalDetails.doctorimage6} alt="" />
                  <h5 style={{ display: 'flex', align: 'center', justifyContent: 'center', marginTop: '0.8rem', color: 'seagreen' }}>{hospitalDetails.doctor6}</h5>
                  <h6 style={{ display: 'flex', align: 'center', justifyContent: 'center', color: 'seagreen' }}>{hospitalDetails.doctorexp6}</h6>
                </Link>
                <Link style={{ marginLeft: '1rem', marginTop: '0.5rem', marginRight: '0.7rem', boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px', height: ' 14rem', textDecoration: 'none' }} to="https://example.com">
                  <img style={{ height: '10rem', width: '72%', marginLeft: '1.8rem' }} src={hospitalDetails.doctorimage7} alt="" />
                  <h5 style={{ display: 'flex', align: 'center', justifyContent: 'center', marginTop: '0.8rem', color: 'seagreen' }}>{hospitalDetails.doctor7}</h5>
                  <h6 style={{ display: 'flex', align: 'center', justifyContent: 'center', color: 'seagreen' }}>{hospitalDetails.doctorexp7}</h6>
                </Link>
                <Link style={{ marginLeft: '1rem', marginTop: '0.5rem', marginRight: '0.7rem', boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px', height: ' 14rem', textDecoration: 'none' }} to="https://example.com">
                  <img style={{ height: '10rem', width: '72%', marginLeft: '1.8rem' }} src={hospitalDetails.doctorimage8} alt="" />
                  <h5 style={{ display: 'flex', align: 'center', justifyContent: 'center', marginTop: '0.8rem', color: 'seagreen' }}>{hospitalDetails.doctor8}</h5>
                  <h6 style={{ display: 'flex', align: 'center', justifyContent: 'center', color: 'seagreen' }}>{hospitalDetails.doctorexp8}</h6>
                </Link>
                <Link style={{ marginLeft: '1rem', marginTop: '0.5rem', marginRight: '0.7rem', boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px', height: ' 14rem', textDecoration: 'none' }} to="https://example.com">
                  <img style={{ height: '10rem', width: '72%', marginLeft: '1.8rem' }} src={hospitalDetails.doctorimage9} alt="" />
                  <h5 style={{ display: 'flex', align: 'center', justifyContent: 'center', marginTop: '0.8rem', color: 'seagreen' }}>{hospitalDetails.doctor9}</h5>
                  <h6 style={{ display: 'flex', align: 'center', justifyContent: 'center', color: 'seagreen' }}>{hospitalDetails.doctorexp9}</h6>
                </Link>
                <Link style={{ marginLeft: '1rem', marginTop: '0.5rem', marginRight: '0.7rem', boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px', height: ' 14rem', textDecoration: 'none' }} to="https://example.com">
                  <img style={{ height: '10rem', width: '72%', marginLeft: '1.8rem' }} src={hospitalDetails.doctorimage10} alt="" />
                  <h5 style={{ display: 'flex', align: 'center', justifyContent: 'center', marginTop: '0.8rem', color: 'seagreen' }}>{hospitalDetails.doctor10}</h5>
                  <h6 style={{ display: 'flex', align: 'center', justifyContent: 'center', color: 'seagreen' }}>{hospitalDetails.doctorexp10}</h6>
                </Link>
                <Link style={{ marginLeft: '1rem', marginTop: '0.5rem', marginRight: '0.7rem', boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px', height: ' 14rem', textDecoration: 'none' }} to="https://example.com">
                  <img style={{ height: '10rem', width: '72%', marginLeft: '1.8rem' }} src={hospitalDetails.doctorimage11} alt="" />
                  <h5 style={{ display: 'flex', align: 'center', justifyContent: 'center', marginTop: '0.8rem', color: 'seagreen' }}>{hospitalDetails.doctor11}</h5>
                  <h6 style={{ display: 'flex', align: 'center', justifyContent: 'center', color: 'seagreen' }}>{hospitalDetails.doctorexp11}</h6>
                </Link>
                <Link style={{ marginLeft: '1rem', marginTop: '0.5rem', marginRight: '0.7rem', boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px', height: ' 14rem', textDecoration: 'none' }} to="https://example.com">
                  <img style={{ height: '10rem', width: '72%', marginLeft: '1.8rem' }} src={hospitalDetails.doctorimage12} alt="" />
                  <h5 style={{ display: 'flex', align: 'center', justifyContent: 'center', marginTop: '0.8rem', color: 'seagreen' }}>{hospitalDetails.doctor12}</h5>
                  <h6 style={{ display: 'flex', align: 'center', justifyContent: 'center', color: 'seagreen' }}>{hospitalDetails.doctorexp12}</h6>
                </Link>
              </Box>
              <h4 style={{ fontWeight: 'bold', marginLeft: '1rem', marginTop: '1rem' }}>Procedures
              </h4>
              <Box sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" }, display: 'grid', flexDirection: 'row', gridTemplateColumns: { sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }, marginTop: '1rem', marginBottom: '1rem' }}>
                <Link to="your-link-url" style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}>
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Center content horizontally
                      justifyContent: 'center', // Center content vertically
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{
                        width: '6rem',
                        height: '6rem',
                        objectFit: 'cover', // Ensures the image scales nicely
                      }}
                      src={KneeReplacementSurgery}
                      alt="Knee Replacement Surgery"
                    />
                    <h6
                      style={{
                        marginTop: '1rem', // Adjust spacing as needed
                        color: 'white',
                        textAlign: 'center', // Ensure text is centered
                      }}
                    >
                      Knee Replacement Surgery
                    </h6>
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{
                    textDecoration: 'none',
                    marginLeft: '1rem',
                    marginTop: '0.7rem',
                    marginRight: '0.7rem',
                  }}
                >
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Ensure horizontal alignment
                      justifyContent: 'center', // Ensure vertical alignment
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{
                        width: '6rem',
                        height: '6rem',
                        objectFit: 'cover', // Ensures proper image scaling
                      }}
                      src={LungCancerSurgery}
                      alt="Lung Cancer Surgery"
                    />
                    <h6
                      style={{
                        marginTop: '1rem', // Adjust spacing between the image and text
                        color: 'white',
                        textAlign: 'center', // Ensure text is centered
                      }}
                    >
                      Lung Cancer Surgery
                    </h6>
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{
                    textDecoration: 'none',
                    marginLeft: '1rem',
                    marginTop: '0.7rem',
                    marginRight: '0.7rem',
                  }}
                >
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Ensure horizontal centering
                      justifyContent: 'center', // Ensure vertical centering
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{
                        width: '6rem',
                        height: '6rem',
                        objectFit: 'cover', // Ensures image scales properly
                      }}
                      src={Hysterectomy}
                      alt="Hysterectomy"
                    />
                    <h6
                      style={{
                        marginTop: '1rem', // Adjust spacing between image and text
                        color: 'white',
                        textAlign: 'center', // Center text horizontally
                      }}
                    >
                      Hysterectomy
                    </h6>
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{
                    textDecoration: 'none',
                    marginLeft: '1rem',
                    marginTop: '0.7rem',
                    marginRight: '0.7rem',
                  }}
                >
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Ensure horizontal alignment
                      justifyContent: 'center', // Ensure vertical alignment
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{
                        width: '6rem',
                        height: '6rem',
                        objectFit: 'cover', // Ensures proper image scaling
                      }}
                      src={Angioplasty}
                      alt="Angioplasty"
                    />
                    <h6
                      style={{
                        marginTop: '1rem', // Adjust spacing between image and text
                        color: 'white',
                        textAlign: 'center', // Center text horizontally
                      }}
                    >
                      Angioplasty
                    </h6>
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{
                    textDecoration: 'none',
                    marginLeft: '1rem',
                    marginTop: '0.7rem',
                    marginRight: '0.7rem',
                  }}
                >
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Horizontal centering
                      justifyContent: 'center', // Vertical centering
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{
                        width: '6rem',
                        height: '6rem',
                        objectFit: 'cover', // Ensures the image scales properly
                      }}
                      src={Blepharoplasty}
                      alt="Blepharoplasty"
                    />
                    <h6
                      style={{
                        marginTop: '1rem', // Adjust spacing between image and text
                        color: 'white',
                        textAlign: 'center', // Center text horizontally
                      }}
                    >
                      Blepharoplasty
                    </h6>
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{
                    textDecoration: 'none',
                    marginLeft: '1rem',
                    marginTop: '0.7rem',
                    marginRight: '0.7rem',
                  }}
                >
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Correctly centers content horizontally
                      justifyContent: 'center', // Correctly centers content vertically
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{
                        width: '6rem',
                        height: '6rem',
                        objectFit: 'cover', // Ensures the image scales properly
                      }}
                      src={Breastliftsurgery}
                      alt="Breast lift surgery"
                    />
                    <h6
                      style={{
                        marginTop: '1rem', // Adjust spacing between image and text
                        color: 'white',
                        textAlign: 'center', // Center text horizontally
                      }}
                    >
                      Breast Lift Surgery
                    </h6>
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{
                    textDecoration: 'none',
                    marginLeft: '1rem',
                    marginTop: '0.7rem',
                    marginRight: '0.7rem',
                  }}
                >
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Horizontal centering
                      justifyContent: 'center', // Vertical centering
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{
                        width: '6rem',
                        height: '6rem',
                        objectFit: 'cover', // Ensures the image scales properly
                      }}
                      src={Cardiacablation}
                      alt="Cardiac Ablation"
                    />
                    <h6
                      style={{
                        marginTop: '1rem', // Adjust spacing between image and text
                        color: 'white',
                        textAlign: 'center', // Center text horizontally
                      }}
                    >
                      Cardiac Ablation
                    </h6>
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{
                    textDecoration: 'none',
                    marginLeft: '1rem',
                    marginTop: '0.7rem',
                    marginRight: '0.7rem',
                  }}
                >
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Centers content horizontally
                      justifyContent: 'center', // Centers content vertically
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{
                        width: '6rem',
                        height: '6rem',
                        objectFit: 'cover', // Ensures proper scaling of the image
                      }}
                      src={Colporrhaphy}
                      alt="Colporrhaphy"
                    />
                    <h6
                      style={{
                        marginTop: '1rem', // Adjusted for consistent spacing
                        color: 'white',
                        textAlign: 'center', // Centers the text horizontally
                      }}
                    >
                      Colporrhaphy
                    </h6>
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{
                    textDecoration: 'none',
                    marginLeft: '1rem',
                    marginTop: '0.7rem',
                    marginRight: '0.7rem',
                  }}
                >
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Horizontal centering
                      justifyContent: 'center', // Vertical centering
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{
                        width: '6rem',
                        height: '6rem',
                        objectFit: 'cover', // Ensures proper scaling of the image
                      }}
                      src={Decompressivecraniectomy}
                      alt="Decompressive Craniectomy"
                    />
                    <h6
                      style={{
                        marginTop: '1rem', // Adjusted for consistent spacing
                        color: 'white',
                        textAlign: 'center', // Centers the text horizontally
                      }}
                    >
                      Decompressive Craniectomy
                    </h6>
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{
                    textDecoration: 'none',
                    marginLeft: '1rem',
                    marginTop: '0.7rem',
                    marginRight: '0.7rem',
                  }}
                >
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Corrected to align items properly
                      justifyContent: 'center', // Corrected to ensure center alignment
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{
                        width: '6rem',
                        height: '6rem',
                        objectFit: 'cover', // Ensure the image is properly scaled
                      }}
                      src={Dilationandcurettage}
                      alt="Dilation and Curettage"
                    />
                    <h6
                      style={{
                        marginTop: '1rem', // Adjusted for consistent spacing
                        color: 'white',
                        textAlign: 'center', // Ensure the text is centered
                      }}
                    >
                      Dilation and Curettage
                    </h6>
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{
                    textDecoration: 'none',
                    marginLeft: '1rem',
                    marginTop: '0.7rem',
                    marginRight: '0.7rem',
                  }}
                >
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Corrected alignment property to align items
                      justifyContent: 'center', // Corrected to ensure center alignment
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{
                        width: '6rem',
                        height: '6rem',
                        objectFit: 'cover', // Ensures the image is properly scaled and doesn't get distorted
                      }}
                      src={ExploratoryLaparotomy}
                      alt="Exploratory Laparotomy"
                    />
                    <h6
                      style={{
                        marginTop: '1rem', // Adjusted spacing for better balance
                        color: 'white',
                        textAlign: 'center', // Ensures the text is centered
                      }}
                    >
                      Exploratory Laparotomy
                    </h6>
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{
                    textDecoration: 'none',
                    marginLeft: '1rem',
                    marginTop: '0.7rem',
                    marginRight: '0.7rem',
                  }}
                >
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Corrected alignment property to align items
                      justifyContent: 'center', // Ensures center alignment
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{
                        width: '6rem',
                        height: '6rem',
                        objectFit: 'cover', // Ensures the image is properly scaled and doesn't get distorted
                      }}
                      src={Fistulotomy}
                      alt="Fistulotomy"
                    />
                    <h6
                      style={{
                        marginTop: '1rem', // Adjusted spacing for better balance
                        color: 'white',
                        textAlign: 'center', // Ensures the text is centered
                      }}
                    >
                      Fistulotomy
                    </h6>
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{
                    textDecoration: 'none',
                    marginLeft: '1rem',
                    marginTop: '0.7rem',
                    marginRight: '0.7rem',
                  }}
                >
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Corrected alignment property to align items
                      justifyContent: 'center', // Ensures center alignment
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{
                        width: '6rem',
                        height: '6rem',
                        objectFit: 'cover', // Ensures the image is properly scaled and doesn't get distorted
                      }}
                      src={Gastrectomy}
                      alt="Gastrectomy"
                    />
                    <h6
                      style={{
                        marginTop: '1.5rem', // Adjusted spacing for better balance
                        color: 'white',
                        textAlign: 'center', // Ensures the text is centered
                      }}
                    >
                      Gastrectomy
                    </h6>
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{
                    textDecoration: 'none',
                    marginLeft: '1rem',
                    marginTop: '0.7rem',
                    marginRight: '0.7rem',
                  }}
                >
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Corrected alignment property
                      justifyContent: 'center', // Ensures content is centered
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{
                        width: '6rem',
                        height: '6rem',
                        objectFit: 'cover', // Ensures the image maintains its aspect ratio
                      }}
                      src={Glaucomasurgery}
                      alt="Glaucoma Surgery"
                    />
                    <h6
                      style={{
                        marginTop: '1.5rem', // Adjusted spacing for visual balance
                        color: 'white',
                        textAlign: 'center', // Centers the text
                      }}
                    >
                      Glaucoma Surgery
                    </h6>
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{
                    textDecoration: 'none',
                    marginLeft: '1rem',
                    marginTop: '0.7rem',
                    marginRight: '0.7rem',
                  }}
                >
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Corrected alignment property
                      justifyContent: 'center', // Ensures content is centered
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{
                        width: '6rem',
                        height: '6rem',
                        objectFit: 'cover', // Ensures the image maintains its aspect ratio
                      }}
                      src={Hearttransplant}
                      alt="Heart Transplant"
                    />
                    <h6
                      style={{
                        marginTop: '1.5rem', // Adjusted spacing for visual balance
                        color: 'white',
                        textAlign: 'center', // Centers the text
                      }}
                    >
                      Heart Transplant
                    </h6>
                  </Box>
                </Link>

                <Link to="your-link-url" style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}>
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Corrected alignment
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img style={{ width: '6rem', height: '6rem' }} src={HipReplacementSurgery} alt="Hip Replacement Surgery" />
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Hip Replacement Surgery</h6>
                  </Box>
                </Link>

                <Link to="your-link-url" style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}>
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Corrected alignment
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img style={{ width: '6rem', height: '6rem' }} src={Hysteroscopy} alt="Hysteroscopy" />
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Hysteroscopy</h6>
                  </Box>
                </Link>

                <Link to="your-link-url" style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}>
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Corrected alignment
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img style={{ width: '6rem', height: '6rem' }} src={Jejunostomy} alt="Jejunostomy" />
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Jejunostomy</h6>
                  </Box>
                </Link>

                <Link to="your-link-url" style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}>
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Corrected alignment property
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img style={{ width: '6rem', height: '6rem' }} src={spine} alt="Laminectomy" /> {/* Added alt text */}
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Laminectomy</h6>
                  </Box>
                </Link>

                <Link to="your-link-url" style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}>
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Corrected to alignItems instead of 'align'
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img style={{ width: '6rem', height: '6rem' }} src={Lipomaremovalsurgery} alt="Lipoma removal surgery" /> {/* Added alt text */}
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Lipoma removal surgery</h6>
                  </Box>
                </Link>

                <Link to="your-link-url" style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}>
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Corrected 'align' to 'alignItems'
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img style={{ width: '6rem', height: '6rem' }} src={Lumpectomy} alt="Lumpectomy" /> {/* Added alt text */}
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Lumpectomy</h6>
                  </Box>
                </Link>

                <Link to="your-link-url" style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}>
                  <Box
                    sx={{
                      boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Changed 'align' to 'alignItems' to properly align the content
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img style={{ width: "6rem", height: '6rem' }} src={Mastoidectomy} alt="Mastoidectomy" />
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Mastoidectomy</h6>
                  </Box>
                </Link>

                <Link to="your-link-url" style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}>
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Fixed the 'align' property to 'alignItems'
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img style={{ width: "6rem", height: '6rem' }} src={Myomectomy} alt="Myomectomy" /> {/* Added alt text for accessibility */}
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Myomectomy</h6>
                  </Box>
                </Link>

                <Link to="your-link-url" style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}>
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Changed 'align' to 'alignItems' to fix alignment
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img style={{ width: "6rem", height: '6rem' }} src={Nephrostomy} alt="Nephrostomy" /> {/* Added alt text */}
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Nephrostomy</h6>
                  </Box>
                </Link>

                <Link to="your-link-url" style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}>
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Fixed 'align' to 'alignItems'
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img style={{ width: "6rem", height: '6rem' }} src={BreastCancerSurgery} alt="Breast Cancer Surgery" /> {/* Added alt text for accessibility */}
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Breast Cancer Surgery</h6>
                  </Box>
                </Link>

                <Link to="your-link-url" style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}>
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Fixed 'align' to 'alignItems'
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img style={{ width: "6rem", height: '6rem' }} src={IVF} alt="IVF" /> {/* Added alt text for accessibility */}
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>IVF</h6>
                  </Box>
                </Link>

                <Link to="your-link-url" style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}>
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Fixed 'align' to 'alignItems'
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img style={{ width: "6rem", height: '6rem' }} src={LiverTransplantSurgery} alt="Liver Transplant Surgery" /> {/* Added alt text for accessibility */}
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Liver Transplant Surgery</h6>
                  </Box>
                </Link>

                <Link to="your-link-url" style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}>
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Fixed 'align' to 'alignItems'
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img style={{ width: "6rem", height: '6rem' }} src={Breastliftsurgery} alt="Breast Augmentation" /> {/* Added alt text for accessibility */}
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Breast Augmentation</h6> {/* Fixed the text to match the image */}
                  </Box>
                </Link>

                <Link to="your-link-url" style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}>
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Fixed 'align' to 'alignItems'
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img style={{ width: "6rem", height: '6rem' }} src={Breastreconstruction} alt="Breast Reconstruction" /> {/* Added alt text for accessibility */}
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Breast Reconstruction</h6>
                  </Box>
                </Link>

                <Link to="your-link-url" style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}>
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Fixed 'align' to 'alignItems'
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img style={{ width: "6rem", height: '6rem' }} src={Glaucomasurgery} alt="Glaucoma Surgery" /> {/* Added alt text */}
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Glaucoma Surgery</h6> {/* Corrected text to match the image */}
                  </Box>
                </Link>

                <Link to="your-link-url" style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}>
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Fixed 'align' to 'alignItems'
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img style={{ width: "6rem", height: '6rem' }} src={CoronaryAngiography} alt="Coronary Angiography" /> {/* Added alt text */}
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Coronary Angiography</h6> {/* Corrected text formatting */}
                  </Box>
                </Link>

                <Link to="your-link-url" style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}>
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Fixed 'align' to 'alignItems'
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img style={{ width: "6rem", height: '6rem' }} src={DeepBrainStimulation} alt="Deep Brain Stimulation" /> {/* Added alt text */}
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Deep Brain Stimulation</h6>
                  </Box>
                </Link>

                <Link to="your-link-url" style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}>
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Corrected 'align' to 'alignItems'
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{ width: "6rem", height: '6rem' }}
                      src={ExtracorporealShockWaveLithotripsy}
                      alt="Extracorporeal Shock Wave Lithotripsy" // Added alt text for accessibility
                    />
                    <h6 style={{ marginTop: '2rem', color: 'white', fontSize: '0.9rem' }}>
                      Extracorporeal Shock Wave Lithotripsy
                    </h6>
                  </Box>
                </Link>

                <Link to="your-link-url" style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}>
                  <Box
                    sx={{
                      boxShadow:
                        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Corrected 'align' to 'alignItems'
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{ width: "6rem", height: '6rem' }}
                      src={Discectomy}
                      alt="Discectomy" // Added alt text for accessibility
                    />
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Discectomy</h6>
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}
                >
                  <Box
                    sx={{
                      boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Corrected to alignItems instead of align
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{ width: '6rem', height: '6rem' }}
                      src={FunctionalEndoscopicSinusSurgery}
                      alt="Functional Endoscopic Sinus Surgery"
                    />
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Functional Endoscopic Sinus Surgery</h6>
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}
                >
                  <Box
                    sx={{
                      boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Fixed to alignItems instead of align
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{ width: '6rem', height: '6rem' }}
                      src={Hemipelvectomy}
                      alt="Hemipelvectomy Surgery" // Added descriptive alt text
                    />
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Hemipelvectomy</h6>
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}
                >
                  <Box
                    sx={{
                      boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Corrected to alignItems instead of align
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{ width: '6rem', height: '6rem' }}
                      src={Gastropexy}
                      alt="Gastropexy Surgery" // Added descriptive alt text
                    />
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Gastropexy</h6>
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}
                >
                  <Box
                    sx={{
                      boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Corrected to alignItems
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{ width: '6rem', height: '6rem' }}
                      src={Hydrocelesurgery}
                      alt="Hydrocele Surgery" // Added descriptive alt text
                    />
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Hydrocele Surgery</h6>
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}
                >
                  <Box
                    sx={{
                      boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Corrected to alignItems
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{ width: '6rem', height: '6rem' }}
                      src={Inguinalherniasurgery}
                      alt="Inguinal Hernia Surgery" // Added descriptive alt text
                    />
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Inguinal Hernia Surgery</h6>
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}
                >
                  <Box
                    sx={{
                      boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Corrected to alignItems
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{ width: '6rem', height: '6rem' }}
                      src={Urologist}
                      alt="Kidney Transplant Surgery" // Added descriptive alt text
                    />
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Kidney Transplant Surgery</h6>
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}
                >
                  <Box
                    sx={{
                      boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Corrected align to alignItems
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{ width: '6rem', height: '6rem' }}
                      src={LASIK}
                      alt="LASIK Surgery" // Added alt description for accessibility
                    />
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>LASIK</h6>
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}
                >
                  <Box
                    sx={{
                      boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Corrected 'align' to 'alignItems'
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{ width: '6rem', height: '6rem' }}
                      src={Myringotomy}
                      alt="Myringotomy" // Added alt text for better accessibility
                    />
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Myringotomy</h6>
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}
                >
                  <Box
                    sx={{
                      boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Corrected 'align' to 'alignItems'
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{ width: '6rem', height: '6rem' }}
                      src={MinimallyinvasiveASDsurgery}
                      alt="Minimally Invasive ASD Surgery" // Added descriptive alt text for accessibility
                    />
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Minimally Invasive ASD Surgery</h6>
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}
                >
                  <Box
                    sx={{
                      boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Corrected 'align' to 'alignItems'
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{ width: '6rem', height: '6rem' }}
                      src={Liposuction}
                      alt="Liposuction" // Added descriptive alt text for accessibility
                    />
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Liposuction</h6>
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}
                >
                  <Box
                    sx={{
                      boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Corrected 'align' to 'alignItems'
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{ width: '6rem', height: '6rem' }}
                      src={Nissenfundoplication}
                      alt="Nissen Fundoplication" // Added descriptive alt text
                    />
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Nissen Fundoplication</h6>
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}
                >
                  <Box
                    sx={{
                      boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Corrected from 'align' to 'alignItems'
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{ width: '6rem', height: '6rem' }}
                      src={ShoulderArthroscopy}
                      alt="Shoulder Arthroscopy" // Added descriptive alt text for accessibility
                    />
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Shoulder Arthroscopy</h6>
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}
                >
                  <Box
                    sx={{
                      boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Corrected from 'align' to 'alignItems'
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{ width: '6rem', height: '6rem' }}
                      src={cardiology}
                      alt="Heart Bypass Surgery" // Added descriptive alt text for accessibility
                    />
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Heart Bypass Surgery</h6>
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}
                >
                  <Box
                    sx={{
                      boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Corrected from 'align' to 'alignItems'
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{ width: '6rem', height: '6rem' }}
                      src={Gynecologist}
                      alt="Ovarian Cyst Removal Surgery" // Added descriptive alt text for accessibility
                    />
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Ovarian Cyst Removal Surgery</h6> {/* Corrected typo 'Oletian' to 'Ovarian' */}
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}
                >
                  <Box
                    sx={{
                      boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Corrected from 'align' to 'alignItems'
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{ width: '6rem', height: '6rem' }}
                      src={ProstateCancerSurgery}
                      alt="Prostate Cancer Surgery" // Added descriptive alt text for accessibility
                    />
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Prostate Cancer Surgery</h6>
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}
                >
                  <Box
                    sx={{
                      boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Corrected 'align' to 'alignItems'
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{ width: '6rem', height: '6rem' }}
                      src={Cervicalcancersurgery}
                      alt="Cervical Cancer Surgery" // Added descriptive alt text
                    />
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Cervical Cancer Surgery</h6>
                  </Box>
                </Link>

                <Link
                  to="your-link-url"
                  style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '0.7rem', marginRight: '0.7rem' }}
                >
                  <Box
                    sx={{
                      boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      height: '11rem',
                      alignItems: 'center', // Corrected 'align' to 'alignItems'
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      backgroundColor: 'rgb(151, 17, 20)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.backgroundColor = 'rgb(255, 236, 236)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgb(151, 17, 20)';
                    }}
                  >
                    <img
                      style={{ width: '6rem', height: '6rem' }}
                      src={Cystoscopy}
                      alt="Cystoscopy" // Added descriptive alt text
                    />
                    <h6 style={{ marginTop: '2rem', color: 'white' }}>Cystoscopy</h6>
                  </Box>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box >
      </>
    )
  }
}