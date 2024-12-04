import { Box } from "@mui/material";
import { Link } from "react-router-dom";


export default function Orthopedics() {
    return (
        <>
            <Box sx={{ mt: '2rem', ml: '4rem', backgroundColor: 'white', mr: '5rem', fontSize: '1.5rem', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',width: { xs: "70%", sm: "100%", md: "100%", xl: "100%", lg: "100%" } }}>
                <Link to="/treatments/category/orthopedics" style={{ textDecoration: 'none' }}>
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
                        Orthopedics
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
                        <Link to="/treatments/category/knee_replacement" className="custom-link"style={{ color: 'inherit'}}>
                        Knee Replacement
                            </Link>
                        </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "1.5rem" }}>
                        <Link to="/treatments/category/osteomyelitis_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Osteomyelitis Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "1.5rem" }}>
                        <Link to="/treatments/category/core_decompression_of_the_hip" className="custom-link" style={{ color: 'inherit' }}>
                        Core Decompression of the Hip
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/osteomalacia_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Osteomalacia Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/muscle_reconstruction" className="custom-link" style={{ color: 'inherit' }}>
                        Muscle Reconstruction
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/avascular_necrosis_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Avascular Necrosis (AVN) Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/trapped_nerve_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Trapped Nerve Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/limb_amputation" className="custom-link" style={{ color: 'inherit' }}>
                        Limb Amputation
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/fractured_shoulder_treatment" className="custom-link" style={{ color: 'inherit' }}>
                       Fractured Shoulder Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/congenital_hip_dislocation_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Congenital Hip Dislocation Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/bakers_cyst_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Baker's Cyst Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/joint_injection" className="custom-link" style={{ color: 'inherit' }}>
                        Joint Injection
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/medial_patellofemoral_ligament_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        MPFL (Medial Patellofemoral Ligament) Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/knee_cartilage_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Knee Cartilage Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/hip_pain_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Hip Pain Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/coccydynia_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Coccydynia Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/hand_joints_synovectomy" className="custom-link" style={{ color: 'inherit' }}>
                        Hand Joints Synovectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/jumpers_knee_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Jumper's Knee Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/treatment_for_achilles_tendinitis" className="custom-link" style={{ color: 'inherit' }}>
                        Treatment for Achilles Tendinitis
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/shoulder_impingement_syndrome_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Shoulder Impingement Syndrome Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/scaphoid_fracture_treatments" className="custom-link" style={{ color: 'inherit' }}>
                        Scaphoid Fracture Treatments
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/cubital_tunnel_syndrome" className="custom-link" style={{ color: 'inherit' }}>
                        Cubital Tunnel Syndrome
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/abscess_debridement" className="custom-link" style={{ color: 'inherit' }}>
                        Abscess Debridement
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/knee_sprain_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Knee Sprain Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/mortons_neuroma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Morton's Neuroma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/dislocated_elbow_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Dislocated Elbow Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/dislocated_hip_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Dislocated Hip Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/hip_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Hip Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/hip_arthroplasty" className="custom-link" style={{ color: 'inherit' }}>
                        Hip Arthroplasty
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/shoulder_arthroplasty" className="custom-link" style={{ color: 'inherit' }}>
                        Shoulder Arthroplasty
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/shoulder_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Shoulder Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/patellar_dislocation_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Patellar Dislocation Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/femur_fracture_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Femur Fracture Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/sciatica_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Sciatica Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/cervical_fracture_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Cervical Fracture Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/slap_tear_repair" className="custom-link" style={{ color: 'inherit' }}>
                        Slap Tear Repair
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/ankle_fracture_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Ankle Fracture Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/lateral_release_of_the_patella" className="custom-link" style={{ color: 'inherit' }}>
                        Lateral Release of the Patella
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/shoulder_ligament_repair" className="custom-link" style={{ color: 'inherit' }}>
                        Shoulder Ligament Repair
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/unilateral_hip_replacement" className="custom-link" style={{ color: 'inherit' }}>
                        Unilateral Hip Replacement
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/anterior_cervical_discectomy_and_fusion" className="custom-link" style={{ color: 'inherit' }}>
                        Anterior Cervical Discectomy and Fusion (ACDF)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/bunion_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Bunion Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/pediatric_orthopedics_treatment_in_india" className="custom-link" style={{ color: 'inherit' }}>
                        Pediatric Orthopedics Treatment in India
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/traumatic_orthopedic_surgery_in_india" className="custom-link" style={{ color: 'inherit' }}>
                        Traumatic Orthopedic Surgery in India
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/total_knee_replacement_surgery_in_india" className="custom-link" style={{ color: 'inherit' }}>
                        Total Knee Replacement Surgery in India
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/arthroscopic_surgery_in_india" className="custom-link" style={{ color: 'inherit' }}>
                        Arthroscopic Surgery in India
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/joint_replacement_surgery_in_india" className="custom-link" style={{ color: 'inherit' }}>
                        Joint Replacement Surgery In India
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/total_knee_replacement" className="custom-link" style={{ color: 'inherit' }}>
                        Total Knee Replacement (Bilateral)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/total_knee_replacement_Uni" className="custom-link" style={{ color: 'inherit' }}>
                        Total Knee Replacement (Uni)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/carpal_tunnel_syndrome_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Carpal Tunnel Syndrome Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/knee_ligament_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Knee Ligament Surgery (ACL)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/knee_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Knee Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/osteoarthritis_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Osteoarthritis Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/rotator_cuff_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Rotator Cuff Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/dupuytrens_contracture_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Dupuytren's Contracture Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/shoulder_replacement" className="custom-link" style={{ color: 'inherit' }}>
                        Shoulder Replacement
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/meniscus_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Meniscus Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/shoulder_arthroscopy" className="custom-link" style={{ color: 'inherit' }}>
                        Shoulder Arthroscopy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/metatarsal_phalangeal_joint_replacement" className="custom-link" style={{ color: 'inherit' }}>
                        Metatarsal Phalangeal Joint Replacement
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/trigger_finger_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Trigger Finger Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/ankle_arthroscopy" className="custom-link" style={{ color: 'inherit' }}>
                        Ankle Arthroscopy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/autologous_chondrocyte_implantation" className="custom-link" style={{ color: 'inherit' }}>
                        Autologous Chondrocyte Implantation
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/tennis_or_golfers_elbow" className="custom-link" style={{ color: 'inherit' }}>
                        Tennis or Golfer's Elbow
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/bone_fracture_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Bone Fracture Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/ganglion_cyst_removal" className="custom-link" style={{ color: 'inherit' }}>
                        Ganglion Cyst Removal
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/knee_ligament_surgery_MCL" className="custom-link" style={{ color: 'inherit' }}>
                        Knee Ligament Surgery (MCL)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/achilles_tendon_rupture" className="custom-link" style={{ color: 'inherit' }}>
                        Achilles Tendon Rupture
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/knee_fracture_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Knee Fracture Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/de_quervain_syndrome_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        De Quervain Syndrome Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/benign_bone_tumor_removal" className="custom-link" style={{ color: 'inherit' }}>
                        Benign Bone Tumor Removal
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/wrist_arthroscopy" className="custom-link" style={{ color: 'inherit' }}>
                        Wrist Arthroscopy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/pes_anserine_bursitis_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Pes Anserine Bursitis Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/boutonniere_deformity_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Boutonniere Deformity Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/hand_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Hand Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/cervical_strain_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Cervical Strain Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/elbow_sprain_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Elbow Sprain Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/foot_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Foot Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/toe_joint_replacement" className="custom-link" style={{ color: 'inherit' }}>
                        Toe Joint Replacement
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/artificial_limb_services" className="custom-link" style={{ color: 'inherit' }}>
                        Artificial Limb Services
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/toe_implant" className="custom-link" style={{ color: 'inherit' }}>
                        Toe Implant
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/hammer_clawor_mallet_toe_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Hammer, Claw, or Mallet Toe Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/kirschner_wire_removal" className="custom-link" style={{ color: 'inherit' }}>
                        Kirschner Wire Removal
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/rickets_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Rickets Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/leg_length_discrepancy_treatment " className="custom-link" style={{ color: 'inherit' }}>
                        Leg Length Discrepancy (LLD) Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/trochleoplasty" className="custom-link" style={{ color: 'inherit' }}>
                        Trochleoplasty
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/toe_joint_replacement" className="custom-link" style={{ color: 'inherit' }}>
                        Ankle Fusion Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/toe_joint_replacement" className="custom-link" style={{ color: 'inherit' }}>
                        Tendon Repair
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/toe_joint_replacement" className="custom-link" style={{ color: 'inherit' }}>
                        Osteotomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/elbow_replacement" className="custom-link" style={{ color: 'inherit' }}>
                        Elbow Replacement
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/ankle_replacement" className="custom-link" style={{ color: 'inherit' }}>
                        Ankle Replacement
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/ulnar_nerve_decompression" className="custom-link" style={{ color: 'inherit' }}>
                        Ulnar Nerve Decompression
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/elbow_arthroscopy" className="custom-link" style={{ color: 'inherit' }}>
                        Elbow Arthroscopy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/shoulder_stabilization" className="custom-link" style={{ color: 'inherit' }}>
                        Shoulder Stabilization
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/knee_arthroplasty" className="custom-link" style={{ color: 'inherit' }}>
                        Knee Arthroplasty
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/frozen_shoulder_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Frozen Shoulder Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/dislocated_shoulder_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Dislocated Shoulder Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/kneecap_stabilization" className="custom-link" style={{ color: 'inherit' }}>
                        Kneecap Stabilization
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/revision_joint_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Revision Joint Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/shoulder_labrum_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Shoulder Labrum Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/synovium_removal" className="custom-link" style={{ color: 'inherit' }}>
                        Synovium Removal
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/acromioclavicular_joint_repair" className="custom-link" style={{ color: 'inherit' }}>
                        Acromioclavicular Joint Repair
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/shoulder_tendon_reconstruction" className="custom-link" style={{ color: 'inherit' }}>
                        Shoulder Tendon Reconstruction
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/fracture_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Fracture Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/clubfoot_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Clubfoot Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/elbow_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Elbow Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/hip_fracture_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Hip Fracture Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/osteochondritis_dissecans_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Osteochondritis Dissecans Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/pagets_disease_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Paget's Disease Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/shoulder_fracture_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Shoulder Fracture Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/chondroma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Chondroma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/compartment_syndrome_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Compartment Syndrome Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/osteochondrosis_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Osteochondrosis Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/bow_legs_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Bow Legs Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/elbow_pain_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Elbow Pain Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/little_league_elbow_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Little League Elbow Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/osteoma_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Osteoma Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/snapping_hip_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Snapping Hip Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/osteogenesis_imperfecta_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Osteogenesis Imperfecta (OI) Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/treatment_for_osgood_schlatter_disease" className="custom-link" style={{ color: 'inherit' }}>
                        Treatment for Osgood-Schlatter Disease
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/wrist_instability_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Wrist Instability Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/meniscus_transplant" className="custom-link" style={{ color: 'inherit' }}>
                        Meniscus Transplant
                        </Link>
                    </p>
                </Box>
            </Box>
        </>
    )
}