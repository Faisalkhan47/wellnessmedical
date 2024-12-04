import { Box } from "@mui/material";
import { Link } from "react-router-dom";


export default function Gynecology() {
    return (
        <>
            <Box sx={{ marginTop: '2rem', marginLeft: '4rem', backgroundColor: 'white', marginRight: '5rem', fontSize: '1.5rem', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',width: { xs: "70%", sm: "100%", md: "100%", xl: "100%", lg: "100%" } }}>
                <Link to="/treatments/category/gynecology" style={{ textDecoration: 'none' }}>
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
                    Gynecology
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
                        <Link to="/treatments/category/bartholins_cyst_treatment" className="custom-link"style={{ color: 'inherit'}}>
                        Bartholin's Cyst Treatment</Link></p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "1.5rem" }}>
                        <Link to="/treatments/category/colposcopy" className="custom-link" style={{ color: 'inherit' }}>
                            Colposcopy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "1.5rem" }}>
                        <Link to="/treatments/category/hymenoplasty" className="custom-link" style={{ color: 'inherit' }}>
                            Hymenoplasty
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/breast_biopsy" className="custom-link" style={{ color: 'inherit' }}>
                        Breast Biopsy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/cervical_cautery" className="custom-link" style={{ color: 'inherit' }}>
                            Cervical Cautery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/endometriosis_treatment" className="custom-link" style={{ color: 'inherit' }}>
                            Endometriosis Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/dilation_and_curettage" className="custom-link" style={{ color: 'inherit' }}>
                        Dilation and Curettage
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/myomectomy" className="custom-link" style={{ color: 'inherit' }}>
                           Myomectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/female_sterilization" className="custom-link" style={{ color: 'inherit' }}>
                           Female Sterilization
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/ovarian_cyst_removal" className="custom-link" style={{ color: 'inherit' }}>
                        Ovarian Cyst Removal
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/oophorectomy" className="custom-link" style={{ color: 'inherit' }}>
                        Oophorectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/contraceptive_implant" className="custom-link" style={{ color: 'inherit' }}>
                        Contraceptive Implant
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/cesarean_section" className="custom-link" style={{ color: 'inherit' }}>
                        Cesarean Section
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/tubal_ligation_reversal" className="custom-link" style={{ color: 'inherit' }}>
                        Tubal Ligation Reversal
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/vaginoplasty" className="custom-link" style={{ color: 'inherit' }}>
                        Vaginoplasty
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/ectopic_pregnancy_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Ectopic Pregnancy Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/gynecologiclaparoscopy" className="custom-link" style={{ color: 'inherit' }}>
                        Gynecologic Laparoscopy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/pelvic_floor_repair" className="custom-link" style={{ color: 'inherit' }}>
                        Pelvic Floor Repair
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/laparoscopy_surgery_in_india" className="custom-link" style={{ color: 'inherit' }}>
                        Laparoscopy Surgery In India
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/hysterectomy" className="custom-link" style={{ color: 'inherit' }}>
                        Hysterectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/cervical_conization" className="custom-link" style={{ color: 'inherit' }}>
                        Cervical Conization
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/endometrial_ablation" className="custom-link" style={{ color: 'inherit' }}>
                        Endometrial Ablation
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/ovarian_tumor_removal" className="custom-link" style={{ color: 'inherit' }}>
                        Ovarian Tumor Removal
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/cervical_biopsy" className="custom-link" style={{ color: 'inherit' }}>
                        Cervical Biopsy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/cervical_biopsy" className="custom-link" style={{ color: 'inherit' }}>
                        Uterine Prolapse Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/cystocele_repair" className="custom-link" style={{ color: 'inherit' }}>
                        Cystocele Repair
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/intrauterine_device_placement" className="custom-link" style={{ color: 'inherit' }}>
                        Intrauterine Device (IUD) Placement
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/vaginal_vault_prolapse_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Vaginal Vault Prolapse Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/endometrial_biopsy" className="custom-link" style={{ color: 'inherit' }}>
                        Endometrial Biopsy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/hormone_replacement_therapy" className="custom-link" style={{ color: 'inherit' }}>
                        Hormone Replacement Therapy (HRT)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/hysteroscopy" className="custom-link" style={{ color: 'inherit' }}>
                        Hysteroscopy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/vaginal_child_birth" className="custom-link" style={{ color: 'inherit' }}>
                        Vaginal Child Birth
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/pelvic_adhesiolysis" className="custom-link" style={{ color: 'inherit' }}>
                        Pelvic Adhesiolysis
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/cervical_polyp_removal" className="custom-link" style={{ color: 'inherit' }}>
                        Cervical Polyp Removal
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/vulval_biopsy" className="custom-link" style={{ color: 'inherit' }}>
                        Vulval Biopsy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/antenatal_care" className="custom-link" style={{ color: 'inherit' }}>
                        Antenatal Care (ANC)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/pessary_placement" className="custom-link" style={{ color: 'inherit' }}>
                        Pessary Placement
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/fetal_echocardiography" className="custom-link" style={{ color: 'inherit' }}>
                        Fetal Echocardiography
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/intrauterine_device_removal" className="custom-link" style={{ color: 'inherit' }}>
                        Intrauterine Device (IUD) Removal
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/vaginectomy" className="custom-link" style={{ color: 'inherit' }}>
                        Vaginectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/hysterosonography" className="custom-link" style={{ color: 'inherit' }}>
                        Hysterosonography
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/hymenotomy" className="custom-link" style={{ color: 'inherit' }}>
                        Hymenotomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/uterosacral_nerve_ablation" className="custom-link" style={{ color: 'inherit' }}>
                        Uterosacral Nerve Ablation
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/vulval_skin_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Vulval Skin Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/cervical_cerclage" className="custom-link" style={{ color: 'inherit' }}>
                        Cervical Cerclage
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/amniocentesis" className="custom-link" style={{ color: 'inherit' }}>
                        Amniocentesis
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/pelvic_floor_electrical_stimulator" className="custom-link" style={{ color: 'inherit' }}>
                        Pelvic Floor Electrical Stimulator
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/presacral_neurectomy" className="custom-link" style={{ color: 'inherit' }}>
                        Presacral Neurectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/vaginismus_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Vaginismus Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/urodynamic_evaluation" className="custom-link" style={{ color: 'inherit' }}>
                        Urodynamic Evaluation
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/vulvectomy" className="custom-link" style={{ color: 'inherit' }}>
                        Vulvectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/episiotomy_repair" className="custom-link" style={{ color: 'inherit' }}>
                        Episiotomy Repair
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/cardiotocography" className="custom-link" style={{ color: 'inherit' }}>
                        Cardiotocography (CTG)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/ovarian_transposition_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Ovarian Transposition Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/molar_pregnancy_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Molar Pregnancy Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/fetal_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Fetal Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/microdochectomy" className="custom-link" style={{ color: 'inherit' }}>
                        Microdochectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/uterine_artery_embolization" className="custom-link" style={{ color: 'inherit' }}>
                        Uterine Artery Embolization (UAE)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/robotichysterectomy" className="custom-link" style={{ color: 'inherit' }}>
                        Robotic Hysterectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/vaginal_hysterectomy" className="custom-link" style={{ color: 'inherit' }}>
                        Vaginal Hysterectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/fibroid_removal" className="custom-link" style={{ color: 'inherit' }}>
                        Fibroid Removal
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/uterus_transplant" className="custom-link" style={{ color: 'inherit' }}>
                        Uterus Transplant
                        </Link>
                    </p>
                </Box>
            </Box>
        </>
    )
}