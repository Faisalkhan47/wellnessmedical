import { Box } from "@mui/material";
import { Link } from "react-router-dom";


export default function Neurology() {
    return (
        <>
            <Box sx={{ mt: '2rem', ml: '4rem', backgroundColor: 'white', mr: '5rem', fontSize: '1.5rem', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',width: { xs: "70%", sm: "100%", md: "100%", xl: "100%", lg: "100%" } }}>
                <Link to="/treatments/category/neurology" style={{ textDecoration: 'none' }}>
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
                    Neurology
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
                        <Link to="/treatments/category/bells_palsy_treatment" className="custom-link"style={{ color: 'inherit'}}>
                        Bell's Palsy Treatment</Link></p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "1.5rem" }}>
                        <Link to="/treatments/category/cauda_equina_syndrome_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Cauda Equina Syndrome Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "1.5rem" }}>
                        <Link to="/treatments/category/epilepsy_treatment" className="custom-link" style={{ color: 'inherit' }}>
                            Epilepsy Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/pediatric_neurology_treatment_in_india" className="custom-link" style={{ color: 'inherit' }}>
                        Pediatric Neurology Treatment in India
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/neurointerventional_radiology_treatment_in_india" className="custom-link" style={{ color: 'inherit' }}>
                        Neurointerventional Radiology Treatment in India
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/cerebral_palsy_management" className="custom-link" style={{ color: 'inherit' }}>
                        Cerebral Palsy Management
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/multiple_sclerosis_management" className="custom-link" style={{ color: 'inherit' }}>
                        Multiple Sclerosis (MS) Management
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/kidney_cyst_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Parkinson's Disease Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/migraine_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Migraine Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/neurological_rehabilitation" className="custom-link" style={{ color: 'inherit' }}>
                        Neurological Rehabilitation
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/dementia_management" className="custom-link" style={{ color: 'inherit' }}>
                        Dementia Management
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/chronic_cerebrospinal_venous_insufficiency_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Chronic Cerebrospinal Venous Insufficiency (CCSVI) Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/ventriculoperitoneal_shunting" className="custom-link" style={{ color: 'inherit' }}>
                        Ventriculoperitoneal Shunting (VP)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/pain_management" className="custom-link" style={{ color: 'inherit' }}>
                        Pain Management
                        </Link>
                    </p>
                </Box>
            </Box>
        </>
    )
}