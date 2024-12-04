import { Box } from "@mui/material";
import { Link } from "react-router-dom";


export default function ColorectalMedicine() {
    return (
        <>
            <Box sx={{ mt: '2rem', ml: '4rem', backgroundColor: 'white', mr: '5rem', fontSize: '1.5rem', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',width: { xs: "70%", sm: "100%", md: "100%", xl: "100%", lg: "100%" } }}>
                <Link to="/treatments/category/colorectal_medicine" style={{ textDecoration: 'none' }}>
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
                    Colorectal Medicine
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
                        <Link to="/treatments/category/endoscopic_mucosectomy" className="custom-link"style={{ color: 'inherit'}}>
                        Endoscopic Mucosectomy
                        </Link>
                        </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "1.5rem" }}>
                        <Link to="/treatments/category/proctoscopy" className="custom-link" style={{ color: 'inherit' }}>
                        Proctoscopy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "1.5rem" }}>
                        <Link to="/treatments/category/rectoscopy" className="custom-link" style={{ color: 'inherit' }}>
                        Rectoscopy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/prostate_massage" className="custom-link" style={{ color: 'inherit' }}>
                        Prostate Massage
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/cryptitis_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Cryptitis Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/diverticulitis_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Diverticulitis Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/anorectal_manometry" className="custom-link" style={{ color: 'inherit' }}>
                        Anorectal Manometry
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/endoscopic_full_thickness_resection" className="custom-link" style={{ color: 'inherit' }}>
                        Endoscopic Full-Thickness Resection
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/endoscopic_submucosal_dissection" className="custom-link" style={{ color: 'inherit' }}>
                        Endoscopic Submucosal Dissection (ESD)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/sperm_collection" className="custom-link" style={{ color: 'inherit' }}>
                        Sperm Collection
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/intracytoplasmic_sperm_injection" className="custom-link" style={{ color: 'inherit' }}>
                        Intracytoplasmic Sperm Injection (ICSI)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/intracytoplasmic_morphologicallyselected_sperm_injection" className="custom-link" style={{ color: 'inherit' }}>
                        Intracytoplasmic Morphologically selected Sperm Injection
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/reception_of_oocytes_from_partner" className="custom-link" style={{ color: 'inherit' }}>
                        Reception of Oocytes from Partner (ropa)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/tubal_cannulation" className="custom-link" style={{ color: 'inherit' }}>
                        Tubal Cannulation
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/fertility_preservation" className="custom-link" style={{ color: 'inherit' }}>
                        Fertility Preservation
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/egg_retrieval" className="custom-link" style={{ color: 'inherit' }}>
                        Egg Retrieval
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/ovulation_induction" className="custom-link" style={{ color: 'inherit' }}>
                        Ovulation Induction
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/retrograde_ejaculation_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Retrograde Ejaculation Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/ovarian_drilling" className="custom-link" style={{ color: 'inherit' }}>
                        Ovarian Drilling
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/IVF_treatment_in_india" className="custom-link" style={{ color: 'inherit' }}>
                        IVF Treatment in India
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/embryo_transfer_products" className="custom-link" style={{ color: 'inherit' }}>
                        Embryo Transfer Products
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/mini_IVF" className="custom-link" style={{ color: 'inherit' }}>
                        MINI IVF
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/donor_eggs" className="custom-link" style={{ color: 'inherit' }}>
                        Donor Eggs
                        </Link>
                    </p>
                </Box>
            </Box>
        </>
    )
}