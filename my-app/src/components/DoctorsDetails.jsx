import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


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

export default function DoctorsDetails() {
    let [doctorDetails, setDoctorDetails] = useState()
  let params = useParams()
  console.log(params)
  let doctorid = params.doctorid

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/hospitals/getalldoctordetails/${doctorid}`);
        console.log("hello")
        console.log(response.data);
        setDoctorDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [doctorid])


  if(doctorDetails){
    return (
        <>
            <Box sx={{ marginTop: '11rem', width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" } }}>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" }, marginLeft: { xs: "1rem", sm: "0rem", md: '4rem' } }}>
                    <Box sx={{ marginTop: "4rem" }}>
                        <h2 style={{ color: 'rgb(77, 192, 125)', marginTop: '1.5rem' }}>Dr Balbir Singh</h2>
                        <h6><b>Specialist: </b>Neurosurgery</h6>
                        <h6><b>Experience: </b>22+ years of experience</h6>
                        <h6><b>Hospital: </b>Fortis Memorial Research Institute (FMRI)
                        </h6>
                    </Box>
                    <Box
                        sx={{
                            flexShrink: '0',
                            marginRight: { md: '6rem' },
                            marginTop: '5rem',
                            width: { xs: '10rem', md: '16rem' },
                            height: { xs: '8rem', md: '11rem' }
                        }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1612276529731-4b21494e6d71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Dr Balbir Singh"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </Box>

                </Box>

                <Box sx={{ width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" }, marginLeft: { xs: "1rem", md: '4rem' } }}>
                    <h2 style={{ color: 'rgb(77, 192, 125)' }}>Dr Balbir Singh</h2>
                    <p style={{ marginLeft: '1rem' }}>&#x2022; Dr Sandeep Vaishya is one of the top Neurosurgeons in India.</p>
                    <p style={{ marginLeft: '1rem', marginTop: '-1rem' }}>&#x2022; He has 22+ years of experience in the field & has been associated with some of the best hospitals in India.</p>
                    <p style={{ marginLeft: '1rem', marginTop: '-1rem' }}>&#x2022; Dr. Vaishya has completed his MBBS & MS from the well-known G R Medical College, Gwalior. Following which he did his MCh at the prestigious AIIMS, Delhi.</p>
                    <p style={{ marginLeft: '1rem', marginTop: '-1rem' }}>&#x2022; He is an awardee of the Sundt Fellowship at Mayo Clinic, USA.</p>
                    <Box className="container" style={{ marginLeft: '1rem', marginTop: '-1rem' }}>
                        <ReadMore><p>&#x2022; He is one of the leading surgeons in the world for brachial plexus Injuries and in South Asia for Gamma Knife Surgery.</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; He did several successful surgeries in the field of neurosurgery.</p>
                            <p style={{ marginTop: '-1rem' }}>Dr. Vaishya’s treatment for Hydrocephalus was also featured in the popular Netflix documentary Rooting for Roona.
                            </p>
                        </ReadMore>
                    </Box>
                </Box>
                <Box sx={{ width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" }, marginLeft: { xs: "1rem", md: '4rem' } }}>
                    <h2 style={{ color: 'rgb(77, 192, 125)' }}>Speciality Interest:</h2>
                    <p style={{ marginLeft: '2rem' }}>&#x2022; Neurosurgery</p>
                    <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; Intracranial Brain Tumour Surgery</p>
                    <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; Deep Brain Stimulation Surgery
                    </p>
                    <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; Minimally Invasive brain surgery
                    </p>
                    <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; Image Guided Neurosurgery
                    </p>
                    <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; Brachial Plexus surgery</p>
                    <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; Image Guided Spine Surgery</p>
                </Box>
                <Box sx={{ width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" }, marginLeft: { xs: "1rem", md: '4rem' } }}>
                    <h2 style={{ color: 'rgb(77, 192, 125)' }}>List Of Treatments:</h2>
                    <p style={{ marginLeft: '2rem' }}>&#x2022; Carotid Endarterectomy</p>
                    <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; Cerebral or Brain Aneurysm Treatment</p>
                    <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; Endovascular Coiling</p>
                    <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; Surgical Clipping</p>
                    <Box className="container" sx={{ marginLeft: '1.2rem', marginTop: '-1rem' }}>
                        <ReadMore><p>&#x2022; Temporal Lobectomy</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Lesionectomy</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Hemispherectomy</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Corpus Callosotomy</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Vagus Nerve Stimulation</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Multiple Subpial Transections MST</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Microvascular Decompression MVD</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Percutaneous Balloon Compression (PBC)</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Stereotactic Radio Surgery</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Percutaneous Steriotactic Treatment – PSR</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Radiofrequency Rhizotomy – Neurotomy</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Brain Tumor Surgery</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Pineal Region Tumors Treatment</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Gliomas Treatment</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Meningioma</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Schwannomas</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Metastatic Tumors Treatment</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Chemotherapy</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Radiotherapy</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; VP Shunting</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Ventriculostomy</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Skull Base Surgery</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Sleep Disorders</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Restless Leg Syndrome Treatment</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Narcolepsy Treatment</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Headache</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Multiple Sclerosis Treatment</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Chronic Cerebro Spinal Venous Insufficiency Treatment</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Liberation Treatment</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Sensory Ataxia Treatment</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Vitrectomy</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Diabetic Retinopathy</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Retinoblastoma</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Intacs Corneal Implants</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Strabismus Surgery – Eye Muscle Surgery</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Phacoemulsification</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Cataract Implant Surgery</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Extracapsular Cataract Extraction</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Small Incision Cataract Surgery</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Occuloplasty</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Intraocular Implants (IOLs)</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Pterygium Removal Surgery</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Cosmetic Eye Surgery
                            </p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Squint Surgery
                            </p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Photorefractive Keratectomy</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Retinal Detachment Surgery</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Anterior Cervical Discectomy</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Cervical Corpectomy</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Foraminotomy</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Kyphoplasty</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Laminoplasty</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Laminotomy</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Lumbar Laminectomy for Spine</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Micro Discectomy</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Minimally Invasive Anterior Cervical</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Discectomy</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Minimally Invasive Spine Surgery</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Nucleoplasty</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Posterior Cervical Discectomy</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Revision Spine Surgery</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Spinal Fusion Surgery</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Spinal Laminectomy</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Total Disc Replacement</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Vertebroplasty</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Multiple Sclerosis</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Anterior Cervical Corpectomy Spine Surgery</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Anterior Transoral Approach To Upper</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Cervical Spine</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Artificial Spine Lumbar Disc Replacement</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Cervical Spine Surgery</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Endoscopic Micro Discectomy MED</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Micro Lumbar Discectomy Mld</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; PLIF Posterior Lumbar Interbody Fusion</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Reconstruction Of Traumatic Cervical</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Spine With Vascular Fibular Graft</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Spinal Disc Replacement</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Spinal Endoscopic Surgery</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Stabilization Of Traumatic Spine</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Spine Tumour Surgery
                            </p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Cervical Disc Replacement Surgery</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Scoliosis Spine Surgery</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Spine Decompression Surgery</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Surgery for Spina Bifida</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Craniotomy Surgery</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Vertebroplasty</p>
                            <p style={{ marginTop: '-1rem' }}>&#x2022; Vertebroplasty</p>
                        </ReadMore>
                    </Box>
                </Box>
                <Box sx={{ width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" }, marginLeft: { xs: "1rem", md: '4rem' } }}>
                    <h2 style={{ color: 'rgb(77, 192, 125)' }}>Work Experience:</h2>
                    <p style={{ marginLeft: '2rem' }}>&#x2022; Director Fortis Memorial Research Institute, Gurgaon</p>
                    <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; Senior Consultant Max Super Specialty Hospital, Gurgaon</p>
                    <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; Professor All India Institute of Medical Sciences,Delhi</p>
                </Box>
                <Box sx={{ width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" }, marginLeft: { xs: "1rem", md: '4rem' } }}>
                    <h2 style={{ color: 'rgb(77, 192, 125)' }}>Professional Memberships:</h2>
                    <p style={{ marginLeft: '2rem' }}>&#x2022; Secretary, World Spinal Column Society</p>
                    <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; Member of spine committee & World Federation of Neurosurgical Society</p>
                    <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; Secretary – Section Editor for World Neurosurgery & World Neurosurgery X
                        Middle East Spine Society</p>
                    <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; Treasurer- The Neuromodulation society and founding member</p>
                    <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; Past President, Indian Society for Stereotactic  and Functional Neurosurgery</p>
                    <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; Past President, Indian Society for Peripheral Nerve Surgery</p>
                    <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; Section Editor for World Neurosurgery & World Neurosurgery X</p>
                </Box>
                <Box sx={{ width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" }, marginLeft: { xs: "1rem", md: '4rem' } }}>
                    <h2 style={{ color: 'rgb(77, 192, 125)' }}>Awards and Honors:</h2>
                    <p style={{ marginLeft: '2rem' }}>&#x2022; Herbert Krause Medal for Best Paper in Neuro-Oncology (NSI 2001)</p>
                    <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; Sundt Fellowship by Mayo Clinic, USA</p>
                    <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; Life Membership Award by Mayo Alumni Association</p>
                    <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; Gold Medal in Medical School</p>
                    <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; Dr. Majeed Memorial Oration Karachi, Pakistan (2008)</p>
                </Box>
                <Box sx={{ width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" }, marginLeft: { xs: "1rem", md: '4rem' } }}>
                    <h2 style={{ color: 'rgb(77, 192, 125)' }}>Research Experience:</h2>
                    <p style={{ marginLeft: '2rem' }}>&#x2022; Has contributed more than 100 papers and chapters in peer reviewed medical journals and textbooks</p>
                    <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; Has delivered more than 200 guest lectures in India and abroad</p>
                </Box>
                <Box sx={{ width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" }, marginLeft: { xs: "1rem", md: '4rem' } }}>
                    <h2 style={{ color: 'rgb(77, 192, 125)' }}>Education and Training:</h2>
                    <p style={{ marginLeft: '2rem' }}>&#x2022; MBBS, G R Medical College, Gwalior</p>
                    <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; MS, G R Medical College, Gwalior</p>
                    <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; MCh, AIIMS, New Delhi</p>
                    <p style={{ marginLeft: '2rem', marginTop: '-1rem' }}>&#x2022; Fellowship, USA</p>
                </Box>
            </Box>
        </>
    )
 }
}