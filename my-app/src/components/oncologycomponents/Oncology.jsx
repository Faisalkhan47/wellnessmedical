import { Box } from "@mui/material";
import { Link } from "react-router-dom";


export default function Oncology() {
    return (
        <>
            <Box sx={{ mt: '2rem', ml: '4rem', backgroundColor: 'white', mr: '5rem', fontSize: '1.5rem', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',width: { xs: "70%", sm: "100%", md: "100%", xl: "100%", lg: "100%" } }}>
                <Link to="/treatments/category/oncology" style={{ textDecoration: 'none' }}>
                <Box
                        component="h2"
                        sx={{
                            color: 'rgb(151, 17, 20)',
                            marginTop: '2rem',
                            border: '3px solid black',
                            width: {xs:"80%",sm:"75%",md:'40%'},
                            marginLeft: { xs: '1rem', sm: '2rem', md: '16rem',lg:"23rem" },
                            textAlign:"center"
                        }}
                    >
                    Oncology
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
                        <Link to="/treatments/category/adrenal_cancer_treatment" className="custom-link"style={{ color: 'inherit'}}>
                        Adrenal Cancer Treatment
                        </Link></p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "1.5rem" }}>
                        <Link to="/treatments/category/proton_treatment_therapy" className="custom-link" style={{ color: 'inherit' }}>
                        Proton Treatment Therapy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "1.5rem" }}>
                        <Link to="/treatments/category/plasmacytoma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Plasmacytoma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/mixed_glioma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Mixed Glioma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/germ_cell_tumor_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Germ Cell Tumor (GCT) Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/blastoma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Blastoma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/bile_duct_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Bile Duct Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/penile_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Penile Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/regional_chemotherapy" className="custom-link" style={{ color: 'inherit' }}>
                        Regional Chemotherapy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/laryngeal_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Laryngeal Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/endometrial_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>                      
                        Endometrial Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/stomach_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Stomach Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/radiotherapy" className="custom-link" style={{ color: 'inherit' }}>
                        Radiotherapy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/prostate_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Prostate Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/ovarian_Cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Ovarian Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/stem_cell_transplant" className="custom-link" style={{ color: 'inherit' }}>
                        Stem Cell Transplant
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/thalassemia_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Thalassemia Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/sickle_cell_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Sickle Cell Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/anal_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Anal Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/blood_cancer_treatment_in_india" className="custom-link" style={{ color: 'inherit' }}>
                        Blood Cancer Treatment in India
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/acute_leukemia_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Acute Leukemia Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/chronic_myelogenous_leukemia_treatment_in_india" className="custom-link" style={{ color: 'inherit' }}>
                        Chronic Myelogenous Leukemia Treatment in India
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/bone_cancer_treatment_in_india" className="custom-link" style={{ color: 'inherit' }}>
                        Bone Cancer Treatment in India
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/surgical_oncology_treatment_in_india" className="custom-link" style={{ color: 'inherit' }}>
                        Surgical Oncology Treatment in India
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/radiation_oncology_treatment_in_india" className="custom-link" style={{ color: 'inherit' }}>
                        Radiation Oncology Treatment in India
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/surgical_oncology_treatment_in_india" className="custom-link" style={{ color: 'inherit' }}>
                        Pediatric Oncology Treatment in India
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/breast_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Breast Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/chemotherapy" className="custom-link" style={{ color: 'inherit' }}>
                        Chemotherapy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/chronic_leukemia_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Chronic Leukemia Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/colon_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Colon Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/cyber_knife_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        CyberKnife Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/skin_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Skin Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/rhabdomyosarcoma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Rhabdomyosarcoma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/cervical_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Cervical Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/bladder_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Bladder Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/lung_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Lung Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/pancreatic_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Pancreatic Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/kidney_cancer_treatments" className="custom-link" style={{ color: 'inherit' }}>
                        Kidney Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/thyroid_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Thyroid Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/vaginal_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Vaginal Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/esophageal_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Esophageal Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/gallbladder_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Gallbladder Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/gallbladder_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Mohs Skin Cancer Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/non_hodgkin_lymphomas_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Non-Hodgkin Lymphomas Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/multiple_myeloma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Multiple Myeloma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/hodgkin_lymphoma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Hodgkin Lymphoma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/radiosurgery_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Radiosurgery Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/head_and_neck_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Head and Neck Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/small_intestine_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Small Intestine Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/glioblastoma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Glioblastoma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/primary_bone_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Primary Bone Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/soft_tissue_sarcoma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Soft Tissue Sarcoma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/vulvar_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Vulvar Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/male_breast_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Male Breast Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/oral_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Oral Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/spinal_cord_tumor_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Spinal Cord Tumor Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/kaposis_sarcoma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Kaposi's Sarcoma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/salivary_gland_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Salivary Gland Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/teratoma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Teratoma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/thymus_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Thymus Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/treatment_of_gastrointestinal_carcinoid_tumors" className="custom-link" style={{ color: 'inherit' }}>
                        Treatment of Gastrointestinal Carcinoid Tumors
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/treatment_of_gastrointestinal_stromal_tumors" className="custom-link" style={{ color: 'inherit' }}>
                        Treatment of Gastrointestinal Stromal Tumors
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/myelodysplastic_syndromes_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Myelodysplastic Syndromes Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/neuroblastoma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Neuroblastoma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/allogeneic_bone_marrow_transplant" className="custom-link" style={{ color: 'inherit' }}>
                        Allogeneic Bone Marrow Transplant (BMT)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/haploidentical_bone_marrow_transplant" className="custom-link" style={{ color: 'inherit' }}>
                        Haploidentical Bone Marrow Transplant
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/bone_marrow_transplant" className="custom-link" style={{ color: 'inherit' }}>
                        Bone Marrow Transplant
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/castleman_disease_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Castleman Disease Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/hyperthermic_intraperitoneal_chemotherapy" className="custom-link" style={{ color: 'inherit' }}>
                        Hyperthermic Intraperitoneal Chemotherapy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/intraoperative_radiation_therapy" className="custom-link" style={{ color: 'inherit' }}>
                        Intraoperative Radiation Therapy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/autologous_bone_marrow_transplant" className="custom-link" style={{ color: 'inherit' }}>
                        Autologous Bone Marrow Transplant
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/meningioma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Meningioma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/nasopharyngeal_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Nasopharyngeal Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/retinoblastoma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Retinoblastoma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/waldenstrom_macroglobulinemia_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Waldenstrom Macroglobulinemia Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/brain_tumor_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Brain Tumor Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/colorectal_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Colorectal Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/chemoradiotherapy" className="custom-link" style={{ color: 'inherit' }}>
                        Chemoradiotherapy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/stemCell_treatment_for_chronic_tendinitis" className="custom-link" style={{ color: 'inherit' }}>
                        Stem Cell Treatment For Chronic Tendinitis
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/central_nervous_system_lymphoma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Central Nervous System (CNS) Lymphoma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/treatment_for_paraneoplastic_syndromes" className="custom-link" style={{ color: 'inherit' }}>
                        Treatment for Paraneoplastic Syndromes
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/stem_cell_treatment_for_chronic_back_pain" className="custom-link" style={{ color: 'inherit' }}>
                        Stem Cell Treatment For Chronic Back Pain
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/osteoblastoma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Osteoblastoma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/chondrosarcoma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Chondrosarcoma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/chondroblastoma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Chondroblastoma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/microcystic_adnexal_carcinoma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Microcystic Adnexal Carcinoma (MAC) Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/stem_cell_treatment_for_osteoarthritis" className="custom-link" style={{ color: 'inherit' }}>
                        Stem Cell Treatment For Osteoarthritis
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/angiosarcoma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Angiosarcoma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/pleomorphic_xanthoastrocytoma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Pleomorphic Xanthoastrocytoma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/gestational_trophoblastic_disease_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Gestational Trophoblastic Disease (GTD) Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/osteosarcoma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Osteosarcoma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/ependymoblastoma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Ependymoblastoma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/ganglioglioma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Ganglioglioma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/brainstem_glioma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Brainstem Glioma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/treatment_for_cancer_of_unknown_primary" className="custom-link" style={{ color: 'inherit' }}>
                        Treatment for Cancer of Unknown Primary (CUP)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/pineoblastoma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Pineoblastoma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/pancoast_tumor_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Pancoast Tumor Treatment
                        </Link>
                    </p><p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/chordoma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Chordoma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/paranasal_sinus_and_nasal_cavity_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Paranasal Sinus and Nasal Cavity Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/oligodendroglioma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Oligodendroglioma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/medulloblastoma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Medulloblastoma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/malignant_mesothelioma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Malignant Mesothelioma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/ependymoma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Ependymoma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/craniopharyngioma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Craniopharyngioma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/medulloepithelioma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Medulloepithelioma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/astrocytoma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Astrocytoma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/dysembryoplastic_neuroepithelial_tumor_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Dysembryoplastic Neuroepithelial Tumor Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/choroid_plexus_tumor_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Choroid Plexus Tumor Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/benign_soft_tissue_tumor_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Benign Soft Tissue Tumor Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/pancreatic_sslet_cell_tumor_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Pancreatic Islet Cell Tumor Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/uterine_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Uterine Cancer Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/hyperthermia_therapy" className="custom-link" style={{ color: 'inherit' }}>
                        Hyperthermia Therapy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/schwannoma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Schwannoma Treatment
                        </Link>
                    </p>
                </Box>
            </Box>
        </>
    )
}