import { Box } from "@mui/material";
import { Link } from "react-router-dom";


export default function EarNoseandThroat() {
    return (
        <>
            <Box sx={{ mt: '2rem', ml: '4rem', backgroundColor: 'white', mr: '5rem', fontSize: '1.5rem', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',width: { xs: "70%", sm: "100%", md: "100%", xl: "100%", lg: "100%" } }}>
                <Link to="/treatments/category/ear_nose_and_throat" style={{ textDecoration: 'none' }}>
                <Box
                        component="h2"
                        sx={{
                            color: 'rgb(151, 17, 20)',
                            marginTop: '2rem',
                            border: '3px solid black',
                            width: {xs:"90%",sm:"90%",md:'40%'},
                            marginLeft: { xs: '1rem', sm: '2rem', md: '16rem',lg:"23rem" },
                            textAlign:"center"
                        }}
                    >
                    Ear, Nose and Throat (ENT)
                    </Box>
                </Link>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
                        gap: '1rem 2rem',
                        fontSize: '1.1rem'
                    }}
                >
                    <p style={{ marginLeft: "2.5rem", marginTop: "1.5rem" }}>
                        <Link to="/treatments/category/cochlear_implant" className="custom-link"style={{ color: 'inherit'}}>
                        Cochlear Implant
                        </Link>
                        </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "1.5rem" }}>
                        <Link to="/treatments/category/laryngectomy" className="custom-link" style={{ color: 'inherit' }}>
                        Laryngectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "1.5rem" }}>
                        <Link to="/treatments/category/parotid_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Parotid Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/dacryocystorhinostomy" className="custom-link" style={{ color: 'inherit' }}>
                        Dacryocystorhinostomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/myringotomy" className="custom-link" style={{ color: 'inherit' }}>
                        Myringotomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/septoplasty" className="custom-link" style={{ color: 'inherit' }}>
                        Septoplasty
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/uvulopalatopharyngoplasty" className="custom-link" style={{ color: 'inherit' }}>
                        Uvulopalatopharyngoplasty
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/bone_anchored_hearing_aid" className="custom-link" style={{ color: 'inherit' }}>
                        Bone-Anchored Hearing Aid (BAHA)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/thyroidectomy" className="custom-link" style={{ color: 'inherit' }}>
                       Thyroidectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/tonsillectomy" className="custom-link" style={{ color: 'inherit' }}>
                        Tonsillectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/myringoplasty" className="custom-link" style={{ color: 'inherit' }}>
                        Myringoplasty
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/sinus_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Sinus Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/tympanoplasty" className="custom-link" style={{ color: 'inherit' }}>
                        Tympanoplasty
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/laryngoscopy" className="custom-link" style={{ color: 'inherit' }}>
                        Laryngoscopy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/turbinate_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Turbinate Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/mastoidectomy" className="custom-link" style={{ color: 'inherit' }}>
                        Mastoidectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/ossicular_chain_reconstruction" className="custom-link" style={{ color: 'inherit' }}>
                        Ossicular Chain Reconstruction
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/sleep_apnea_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Sleep Apnea Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/nasal_polyps_removal" className="custom-link" style={{ color: 'inherit' }}>
                        Nasal Polyps Removal
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/adenoidectomy" className="custom-link" style={{ color: 'inherit' }}>
                        Adenoidectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/audiometry" className="custom-link" style={{ color: 'inherit' }}>
                        Audiometry
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/impedence_audiometry" className="custom-link" style={{ color: 'inherit' }}>
                        Impedence Audiometry
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/laryngeal_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Laryngeal Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/nasal_obstruction_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Nasal Obstruction Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/stapedectomy" className="custom-link" style={{ color: 'inherit' }}>
                        Stapedectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/neck_dissection" className="custom-link" style={{ color: 'inherit' }}>
                        Neck Dissection
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/salivary_gland_tumor_removal" className="custom-link" style={{ color: 'inherit' }}>
                        Salivary Gland Tumor Removal
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/uvulopalatoplasty" className="custom-link" style={{ color: 'inherit' }}>
                        Uvulopalatoplasty
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/nose_fracture_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Nose Fracture Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/laryngeal_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Peritonsillar Abscess (PTA) Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/salivary_stones_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Salivary Stones Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/pediatric_tongue_tie_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Pediatric Tongue-Tie Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/submandibular_gland_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Submandibular Gland Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/decortication_of_vocal_cords" className="custom-link" style={{ color: 'inherit' }}>
                        Decortication of Vocal Cords
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/nasopharyngolaryngoscopy" className="custom-link" style={{ color: 'inherit' }}>
                        Nasopharyngolaryngoscopy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/laryngeal_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Radiofrequency Tissue Reduction of Turbinates
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/glossectomy" className="custom-link" style={{ color: 'inherit' }}>
                        Glossectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/hearing_aids" className="custom-link" style={{ color: 'inherit' }}>
                        Hearing Aids
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/voice_restoration_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Voice Restoration Surgery
                        </Link>
                    </p>
                </Box>
            </Box>
        </>
    )
}