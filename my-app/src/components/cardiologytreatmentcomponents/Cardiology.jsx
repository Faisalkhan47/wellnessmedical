import { Box } from "@mui/material";
import { Link } from "react-router-dom";


export default function Cardiology() {

    return (
        <>
            <Box sx={{ marginTop: '1rem', marginLeft: '4rem', backgroundColor: 'white', marginRight: '5rem', fontSize: '1.5rem', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',width: { xs: "70%", sm: "100%", md: "100%", xl: "100%", lg: "100%" }}}>

                <Link to="/treatments/category/cardiology" style={{textDecoration:'none'}}>
                <Box
                        component="h2"
                        sx={{
                            color: 'rgb(151, 17, 20)',
                            marginTop: '2rem',
                            border: '3px solid black',
                            width: {xs:"70%",sm:"70%",md:'40%'},
                            marginLeft: { xs: '2rem', sm: '2rem', md: '16rem',lg:"23rem" },
                            textAlign:"center"
                        }}
                    >
                        Cardiology
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
                        <Link to="/treatments/category/mitral_valve_replacement" className="custom-link" style={{ color: 'inherit' }}>
                            Mitral Valve Replacement (MVR)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "1.5rem" }}>
                        <Link to="/treatments/category/abdominal_aortic_aneurysm_repair" className="custom-link" style={{ color: 'inherit' }}>
                            Abdominal Aortic Aneurysm Repair
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "1.5rem" }}>
                        <Link to="/treatments/category/carotid_endarterectomy" className="custom-link" style={{ color: 'inherit' }}>
                            Carotid Endarterectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/surgery_for_transposition_of_the_great_arteries" className="custom-link" style={{ color: 'inherit' }}>
                            Surgery for Transposition of the Great Arteries (TGA)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/coronary_angioplasty" className="custom-link" style={{ color: 'inherit' }}>
                            Coronary Angioplasty
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/intra_aortic_balloon_pump_insertion" className="custom-link" style={{ color: 'inherit' }}>
                            Intra-Aortic Balloon Pump Insertion
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/heart_valve_replacement" className="custom-link" style={{ color: 'inherit' }}>
                            Heart Valve Replacement
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/implantable_cardioverter_defibrillator" className="custom-link" style={{ color: 'inherit' }}>
                            Implantable Cardioverter Defibrillator (ICD)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/angioplasty" className="custom-link" style={{ color: 'inherit' }}>
                            Angiography
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/cardiology_treatment_in_india" className="custom-link" style={{ color: 'inherit' }}>
                        Cardiology Treatment in India
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/double_valve_replacement" className="custom-link" style={{ color: 'inherit' }}>
                        Double Valve Replacement (Tissue Implant)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/angioplasty_with_stent" className="custom-link" style={{ color: 'inherit' }}>
                        Angioplasty with Stent
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/open_heart_surgery_in_india" className="custom-link" style={{ color: 'inherit' }}>
                        Open Heart Surgery in India 
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/aortic_valve_replacement" className="custom-link" style={{ color: 'inherit' }}>
                        Aortic Valve Replacement (Tissue Implant) 
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/valve_surgery_in_india" className="custom-link" style={{ color: 'inherit' }}>
                        Valve Surgery In India 
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/open_heart_surgery_(Pediatric)" className="custom-link" style={{ color: 'inherit' }}>
                        Open Heart Surgery (Pediatric) 
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/pediatric_cardiology_treatment_in_india" className="custom-link" style={{ color: 'inherit' }}>
                        Pediatric Cardiology Treatment In India
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/coronary_artery_bypass_graft" className="custom-link" style={{ color: 'inherit' }}>
                        Coronary Artery Bypass Graft
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/angioplasty" className="custom-link" style={{ color: 'inherit' }}>Angioplasty
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/aortic_stenosis_treatment" className="custom-link" style={{ color: 'inherit' }}>Aortic Stenosis Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/aortic_valve_repair" className="custom-link" style={{ color: 'inherit' }}>Aortic Valve Repair
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/aortic_valve_replacement_mechanical" className="custom-link" style={{ color: 'inherit' }}>Aortic Valve Replacement (Mechanical Implant)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/aortic_valve_replacement_AVR" className="custom-link" style={{ color: 'inherit' }}>Aortic Valve Replacement (AVR)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/coronary_artery_angiography" className="custom-link" style={{ color: 'inherit' }}>Coronary Artery Angiography (CAG)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/pacemaker_implantation" className="custom-link" style={{ color: 'inherit' }}>Pacemaker Implantation
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/transcatheter_aortic_valve_implantation" className="custom-link" style={{ color: 'inherit' }}>
                        Transcatheter Aortic Valve Implantation (TAVI)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/ventricular_septal_defect_closure" className="custom-link" style={{ color: 'inherit' }}>
                        Ventricular Septal Defect (VSD) Closure</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/atrial_septal_defect_closure" className="custom-link" style={{ color: 'inherit' }}>
                        Atrial Septal Defect (ASD) Closure</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/implantable_cardioverter_defibrillator_implantation" className="custom-link" style={{ color: 'inherit' }}>
                        Implantable Cardioverter Defibrillator (ICD) Implantation</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/heart_arrhythmia_catheter_ablation" className="custom-link" style={{ color: 'inherit' }}>
                        Heart Arrhythmia Catheter Ablation</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/electrophysiology_study" className="custom-link" style={{ color: 'inherit' }}>
                        Electrophysiology Study (EPS)</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/mitral_valve_repair" className="custom-link" style={{ color: 'inherit' }}>
                        Mitral Valve Repair</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/double-valve-replacement" className="custom-link" style={{ color: 'inherit' }}>
                        Double Valve Replacement (DVR)</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/atrioventricular_septal_defect_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Atrioventricular Septal Defect (ASD) Treatment</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/percutaneous_transluminal_coronary_angioplasty" className="custom-link" style={{ color: 'inherit' }}>
                        Percutaneous Transluminal Coronary Angioplasty (PTCA)</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/patent_ductus_arteriosus_closure" className="custom-link" style={{ color: 'inherit' }}>
                        Patent Ductus Arteriosus (PDA) Closure</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/myocardial_infarction_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Myocardial Infarction Treatment</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/cardiac_resynchronisation_therapy_device_implantation" className="custom-link" style={{ color: 'inherit' }}>
                        Cardiac Resynchronisation Therapy (CRT) Device Implantation</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/right_heart_catheterization" className="custom-link" style={{ color: 'inherit' }}>
                        Right Heart Catheterization</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/heart_biopsy_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Heart Biopsy Treatment</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/category/surgery_for_tetralogy_of_fallot" className="custom-link" style={{ color: 'inherit' }}>
                        Surgery for Tetralogy of Fallot (TOF)</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/cardioversion_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Cardioversion Treatment</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/minimally_invasive_direct_coronary_artery_bypass" className="custom-link" style={{ color: 'inherit' }}>
                        Minimally Invasive Direct Coronary Artery Bypass (MIDCAB)</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/bentall_procedure" className="custom-link" style={{ color: 'inherit' }}>
                        Bentall Procedure</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/coronar_angiography_and_left_ventriculography" className="custom-link" style={{ color: 'inherit' }}>
                        Coronary Angiography and Left Ventriculography</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/cardiothoracic_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Cardiothoracic Surgery</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/coronary_artery_disease_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Coronary Artery Disease (CAD) Treatment</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/acute_decompensated_heart_failure_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Acute Decompensated Heart Failure Treatment</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/heart_tumor_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Heart Tumor Treatment</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/atrioventricular_fistula_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Atrioventricular Fistula Treatment</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/myocarditis_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Myocarditis Treatment</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/pericarditis_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Pericarditis Treatment</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/coronary_steal_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Coronary Steal Treatment</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/endocarditis_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Endocarditis Treatment</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/renal_denervation_therapy" className="custom-link" style={{ color: 'inherit' }}>
                        Renal Denervation Therapy</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/atherosclerosis_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Atherosclerosis Treatment</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/cryoablation_for_atrial_fibrillation" className="custom-link" style={{ color: 'inherit' }}>
                        Cryoablation for Atrial Fibrillation</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/roemheld_syndrome" className="custom-link" style={{ color: 'inherit' }}>
                        Roemheld Syndrome</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/spontaneous_coronary_artery_dissection_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Spontaneous Coronary Artery Dissection (SCAD) Treatment</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/ventricular_aneurysm_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Ventricular Aneurysm Treatment</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/diastolic_heart_failure_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Diastolic Heart Failure Treatment</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/eisenmengers_syndrome_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Eisenmenger's Syndrome Treatment</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/giant_cell_myocarditis_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Giant Cell Myocarditis Treatment</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/shones_syndrome_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Shone's Syndrome Treatment</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/treatment_for_myocardial_rupture" className="custom-link" style={{ color: 'inherit' }}>
                        Treatment for Myocardial Rupture</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/myocardial_bridge_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Myocardial Bridge Treatment</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/tricuspid_atresia_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Tricuspid Atresia Treatment</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/cardiac_amyloidosis_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Cardiac Amyloidosis Treatment</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/coxsackievirus_induced_cardiomyopathy_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Coxsackievirus-Induced Cardiomyopathy Treatment</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/endocardial_fibroelastosis_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Endocardial Fibroelastosis (EFE) Treatment</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/high_output_heart_failure_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        High Output Heart Failure Treatment</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/keshan_disease_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Keshan Disease Treatment</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/kounis_syndrome_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Kounis Syndrome Treatment</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/pancarditis_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Pericarditis Treatment</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/fontan_procedure" className="custom-link" style={{ color: 'inherit' }}>
                        Fontan Procedure</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/left_ventricular_assist_device_implantation" className="custom-link" style={{ color: 'inherit' }}>
                        Left Ventricular Assist Device (LVAD) Implantation</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/surgery_for_hypoplastic_left_heart_syndrome" className="custom-link" style={{ color: 'inherit' }}>
                        Surgery for Hypoplastic Left Heart Syndrome</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/glenn_shunt" className="custom-link" style={{ color: 'inherit' }}>
                        Glenn Shunt</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/total_anomalous_pulmonary_venous_connection_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Total Anomalous Pulmonary Venous Connection (TAPVC) Surgery</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/taussig_shunt" className="custom-link" style={{ color: 'inherit' }}>
                        Taussig Shunt (BT Shunt)</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/surgery_for_coarctation_of_the_aorta" className="custom-link" style={{ color: 'inherit' }}>
                        Surgery for Coarctation of the Aorta</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/tricuspid_valve_repair" className="custom-link" style={{ color: 'inherit' }}>
                        Tricuspid Valve (TV) Repair</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/balloon_mitral_valvuloplasty" className="custom-link" style={{ color: 'inherit' }}>
                        Balloon Mitral Valvuloplasty</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/aortopulmonary_window_repair" className="custom-link" style={{ color: 'inherit' }}>
                        Aortopulmonary Window Repair</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/balloon_pulmonary_valvuloplasty" className="custom-link" style={{ color: 'inherit' }}>
                        Balloon Pulmonary Valvuloplasty</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/hypertension_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Hypertension Treatment</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/patent_foramen_ovale_closure" className="custom-link" style={{ color: 'inherit' }}>
                        Patent Foramen Ovale (PFO) Closure</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/pulmonary_artery_banding" className="custom-link" style={{ color: 'inherit' }}>
                        Pulmonary Artery Banding (PAB)</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/rastelli_procedure" className="custom-link" style={{ color: 'inherit' }}>
                        Rastelli Procedure</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/subaortic_membrane_excision" className="custom-link" style={{ color: 'inherit' }}>
                        Subaortic Membrane Excision</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/cardiac_asthma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Cardiac Asthma Treatment</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/heart_transplant" className="custom-link" style={{ color: 'inherit' }}> 
                        Heart Transplant</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/coronary_artery_bypass" className="custom-link" style={{ color: 'inherit' }}> 
                        Coronary Artery Bypass</Link>
                    </p>
                </Box>
            </Box>
        </>
    )

}