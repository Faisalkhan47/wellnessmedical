import { Box } from "@mui/material";
import { Link } from "react-router-dom";


export default function VascularMedicine() {
    return (
        <>
            <Box sx={{ mt: '2rem', ml: '4rem', backgroundColor: 'white', mr: '5rem', fontSize: '1.5rem', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',width: { xs: "70%", sm: "100%", md: "100%", xl: "100%", lg: "100%" } }}>
                <Link to="/treatments/category/vascular_medicine" style={{ textDecoration: 'none' }}>
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
                    Vascular Medicine
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
                        <Link to="/treatments/category/abdominal_aortic_aneurysm_repairs" className="custom-link"style={{ color: 'inherit'}}>
                        Abdominal Aortic Aneurysm Repair
                        </Link>
                        </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "1.5rem" }}>
                        <Link to="/treatments/category/angioplasty" className="custom-link" style={{ color: 'inherit' }}>
                        Angioplasty
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "1.5rem" }}>
                        <Link to="/treatments/category/femoral_artery_bypass_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Femoral Artery Bypass Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/arteriovenous_malformation_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Arteriovenous Malformation (AVM) Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/aortic_arch_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Aortic Arch Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/deep_vein_thrombosis_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Deep Vein Thrombosis (DVT) Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/arteriovenous_fistula_for_dialysis" className="custom-link" style={{ color: 'inherit' }}>
                        Arteriovenous Fistula for Dialysis
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/pulmonary_embolism_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Pulmonary Embolism Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/carotid_artery_dissection_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Carotid Artery Dissection Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/peripheral_artery_aneurysm_repair" className="custom-link" style={{ color: 'inherit' }}>
                        Peripheral Artery Aneurysm Repair
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/atherectomy" className="custom-link" style={{ color: 'inherit' }}>
                        Atherectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/stent_insertion" className="custom-link" style={{ color: 'inherit' }}>
                        Stent Insertion
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/aortoiliac_and_aortofemoral_bypass_graft_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Aortoiliac and Aortofemoral Bypass Graft Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/hemorrhoidectomy" className="custom-link" style={{ color: 'inherit' }}>
                        Hemorrhoidectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/radiofrequency_ablation" className="custom-link" style={{ color: 'inherit' }}>
                        Radiofrequency Ablation
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/colectomy" className="custom-link" style={{ color: 'inherit' }}>
                        Colectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/anal_abscess_drainage" className="custom-link" style={{ color: 'inherit' }}>
                        Anal Abscess Drainage
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/rectocele_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Rectocele Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/anal_cyst_removal" className="custom-link" style={{ color: 'inherit' }}>
                        Anal Cyst Removal
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/anal_sphincter_repair" className="custom-link" style={{ color: 'inherit' }}>
                        Anal Sphincter Repair
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/anoscopy" className="custom-link" style={{ color: 'inherit' }}>
                        Anoscopy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/rubber_band_ligation_for_hemorrhoids" className="custom-link" style={{ color: 'inherit' }}>
                        Rubber Band Ligation for Hemorrhoids
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/small_bowel_resection" className="custom-link" style={{ color: 'inherit' }}>
                        Small Bowel Resection
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/sphincterotomy" className="custom-link" style={{ color: 'inherit' }}>
                        Sphincterotomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/ileostomy" className="custom-link" style={{ color: 'inherit' }}>
                        Ileostomy
                        </Link>
                    </p>
                </Box>
            </Box>
        </>
    )
}