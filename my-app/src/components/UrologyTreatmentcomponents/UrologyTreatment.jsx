import { Box } from "@mui/material";
import { Link } from "react-router-dom";


export default function UrologyTreatment() {
    return (
        <>
            <Box sx={{ mt: '2rem', ml: '4rem', backgroundColor: 'white', mr: '5rem', fontSize: '1.5rem', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',width: { xs: "70%", sm: "100%", md: "100%", xl: "100%", lg: "100%" } }}>
                <Link to="/treatments/category/urology_treatment" style={{ textDecoration: 'none' }}>
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
                    Urology Treatment
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
                        <Link to="/treatments/category/prostatectomy" className="custom-link"style={{ color: 'inherit'}}>
                        Prostatectomy
                        </Link>
                        </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "1.5rem" }}>
                        <Link to="/treatments/category/vasectomy" className="custom-link" style={{ color: 'inherit' }}>
                        Vasectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "1.5rem" }}>
                        <Link to="/treatments/category/circumcision" className="custom-link" style={{ color: 'inherit' }}>
                        Circumcision
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/sperm_retrieval_treatment_in_india" className="custom-link" style={{ color: 'inherit' }}>
                        Sperm Retrieval Treatment In India
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/pediatric_urology_treatment_in_india" className="custom-link" style={{ color: 'inherit' }}>
                        Pediatric Urology Treatment in India
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/kidney_stones_treatments" className="custom-link" style={{ color: 'inherit' }}>
                       Kidney Stones Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/transurethral_resection_of_the_prostate" className="custom-link" style={{ color: 'inherit' }}>
                        Transurethral Resection of the Prostate (TURP)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/testicular_biopsy" className="custom-link" style={{ color: 'inherit' }}>
                        Testicular Biopsy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/prostate_biopsy" className="custom-link" style={{ color: 'inherit' }}>
                        Prostate Biopsy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/erectile_dysfunction_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Erectile Dysfunction Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/ureteral_stone_removal" className="custom-link" style={{ color: 'inherit' }}>
                        Ureteral Stone Removal
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/cystoscopy" className="custom-link" style={{ color: 'inherit' }}>
                        Cystoscopy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/laser_treatment_for_BPH_enlarged_prostate" className="custom-link" style={{ color: 'inherit' }}>
                        Laser Treatment for BPH (Enlarged Prostate)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/inguinal_orchiectomy" className="custom-link" style={{ color: 'inherit' }}>
                        Inguinal Orchiectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/peyronies_disease_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Peyronie's Disease Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/cystectomy" className="custom-link" style={{ color: 'inherit' }}>
                        Cystectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/urinary_incontinence_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Urinary Incontinence Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/urethral_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Urethral Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/varicocelectomy" className="custom-link" style={{ color: 'inherit' }}>
                        Varicocelectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/bladder_stone_removal" className="custom-link" style={{ color: 'inherit' }}>
                        Bladder Stone Removal
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/penile_prosthesis" className="custom-link" style={{ color: 'inherit' }}>
                        Penile Prosthesis
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/prostate_ultrasound" className="custom-link" style={{ color: 'inherit' }}>
                        Prostate Ultrasound
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/prostate_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Prostate Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/bladder_stone_removal_BNI" className="custom-link" style={{ color: 'inherit' }}>
                        Bladder Neck Incision (BNI)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/ureteral_reimplantation_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Ureteral Reimplantation Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/urology_ultrasound" className="custom-link" style={{ color: 'inherit' }}>
                        Urology Ultrasound
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/penis_frenuloplasty" className="custom-link" style={{ color: 'inherit' }}>
                        Penis Frenuloplasty
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/undescended_testicle_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Undescended Testicle Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/ureteroscopy" className="custom-link" style={{ color: 'inherit' }}>
                        Ureteroscopy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/urostomy" className="custom-link" style={{ color: 'inherit' }}>
                        Urostomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/genital_wart_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Genital Wart Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/hypospadias_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Hypospadias Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/urinalysis" className="custom-link" style={{ color: 'inherit' }}>
                        Urinalysis
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/erectile_dysfunction_diagnosis" className="custom-link" style={{ color: 'inherit' }}>
                        Erectile Dysfunction Diagnosis
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/IVU_intravenous_urography" className="custom-link" style={{ color: 'inherit' }}>
                        IVU (Intravenous Urography)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/spermatic_cord_hydrocole_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Spermatic Cord Hydrocole Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/testicular_tumor_removal" className="custom-link" style={{ color: 'inherit' }}>
                        Testicular Tumor Removal
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/pyeloplasty" className="custom-link" style={{ color: 'inherit' }}>
                        Pyeloplasty
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/simple_orchiectomy" className="custom-link" style={{ color: 'inherit' }}>
                       Simple Orchiectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/vesicoureteral_reflux_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Vesicoureteral Reflux (VUR) Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/penectomy" className="custom-link" style={{ color: 'inherit' }}>
                        Penectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/ureteral_stent_placement" className="custom-link" style={{ color: 'inherit' }}>
                        Ureteral Stent Placement
                        </Link>
                    </p>
                </Box>
            </Box>
        </>
    )
}