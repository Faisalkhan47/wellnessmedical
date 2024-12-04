import { Box } from "@mui/material";
import { Link } from "react-router-dom";


export default function Gastroenterology() {
    return (
        <>
            <Box sx={{ mt: '2rem', ml: '4rem', backgroundColor: 'white', mr: '5rem', fontSize: '1.5rem', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',width: { xs: "70%", sm: "100%", md: "100%", xl: "100%", lg: "100%" } }}>
                <Link to="/treatments/category/gastroenterology" style={{ textDecoration: 'none' }}>
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
                    Gastroenterology
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
                        <Link to="/treatments/category/cholecystectomy_treatment" className="custom-link"style={{ color: 'inherit'}}>
                        Cholecystectomy Treatment
                        </Link>
                        </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "1.5rem" }}>
                        <Link to="/treatments/category/colonoscopy_treatment" className="custom-link" style={{ color: 'inherit' }}>
                            Colonoscopy Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "1.5rem" }}>
                        <Link to="/treatments/category/robotic_liver_transplant_surgery_in_india" className="custom-link" style={{ color: 'inherit' }}>
                        Robotic Liver Transplant Surgery In India
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/crohns_disease_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Crohn's Disease Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/appendix_treatment_in_india" className="custom-link" style={{ color: 'inherit' }}>
                        Appendix Treatment In India
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/polypectomy_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Polypectomy Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/hernia_surgery_in_india" className="custom-link" style={{ color: 'inherit' }}>
                        Hernia surgery in India
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/hernia_repair" className="custom-link" style={{ color: 'inherit' }}>
                           Hernia Repair
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/hiatal_hernia_surgerystocyst_transfer" className="custom-link" style={{ color: 'inherit' }}>
                        Hiatal Hernia Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/endoscopy_treatment/treatments/category/sperm_collection" className="custom-link" style={{ color: 'inherit' }}>
                        Endoscopy Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/gastroscopy_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Gastroscopy Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/laparoscopic_anti_reflux_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Laparoscopic Anti-Reflux (GERD) Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/liver_biopsy" className="custom-link" style={{ color: 'inherit' }}>
                        Liver Biopsy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/endoscopic_retrograde_cholangiopancreatography" className="custom-link" style={{ color: 'inherit' }}>
                        Endoscopic Retrograde Cholangiopancreatography (ERCP)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/pancreatectomy_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Pancreatectomy Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/irritable_bowel_syndrome_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Irritable Bowel Syndrome (IBS) Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/gallstones_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Gallstones Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/liver_disease_evaluationaculation_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Liver Disease Evaluation
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/gastrointestinal_perforation_repair" className="custom-link" style={{ color: 'inherit' }}>
                        Gastrointestinal Perforation Repair
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/choledochotomy" className="custom-link" style={{ color: 'inherit' }}>
                        Choledochotomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/intra_abdominal_adhesions_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Intra-Abdominal Adhesions Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/gastrointestinal_tract_biopsy" className="custom-link" style={{ color: 'inherit' }}>
                        Gastrointestinal (GI) Tract Biopsy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/sigmoidoscopy" className="custom-link" style={{ color: 'inherit' }}>
                        Sigmoidoscopy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/peptic_ulcer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Peptic Ulcer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/esophagoscopy" className="custom-link" style={{ color: 'inherit' }}>
                        Esophagoscopy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/meckels_diverticulum_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Meckel's Diverticulum Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/heller_myotomy" className="custom-link" style={{ color: 'inherit' }}>
                        Heller Myotomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/gastroenterostomy" className="custom-link" style={{ color: 'inherit' }}>
                        Gastroenterostomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/colostomy" className="custom-link" style={{ color: 'inherit' }}>
                        Colostomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/esophageal_manometry" className="custom-link" style={{ color: 'inherit' }}>
                        Esophageal Manometry
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/surgery_for_cholecystitis" className="custom-link" style={{ color: 'inherit' }}>
                        Surgery for Cholecystitis
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/surgery_for_liver_cysts" className="custom-link" style={{ color: 'inherit' }}>
                        Surgery for Liver Cysts
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/pancreatitis_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Pancreatitis Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/stomach_cancer_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Stomach Cancer Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/liver_hemangioma_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Liver Hemangioma Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/liver_cancer_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Liver Cancer Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/esophageal_diverticula_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Esophageal Diverticula Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/surgery_for_benign_liver_tumors" className="custom-link" style={{ color: 'inherit' }}>
                        Surgery for Benign Liver Tumors
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/bile_duct_cancer_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Bile Duct Cancer Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/gastroesophageal_reflux_disease_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Gastroesophageal Reflux Disease (GERD) Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/liver_transarterial_chemo_embolization" className="custom-link" style={{ color: 'inherit' }}>
                        Liver Transarterial Chemo Embolization
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/esophageal_pH_monitoring" className="custom-link" style={{ color: 'inherit' }}>
                        Esophageal pH Monitoring
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/liver_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Liver Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="treatments/category/pancreas_transplant" className="custom-link" style={{ color: 'inherit' }}>
                        Pancreas Transplant
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/liver_transplant" className="custom-link" style={{ color: 'inherit' }}>
                        Liver Transplant
                        </Link>
                    </p>
                </Box>
            </Box>
        </>
    )
}