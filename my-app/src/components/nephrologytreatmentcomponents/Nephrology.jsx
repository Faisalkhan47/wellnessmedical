import { Box } from "@mui/material";
import { Link } from "react-router-dom";


export default function Nephrology() {
    return (
        <>
            <Box sx={{ mt: '2rem', ml: '4rem', backgroundColor: 'white', mr: '5rem', fontSize: '1.5rem', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',width: { xs: "70%", sm: "100%", md: "100%", xl: "100%", lg: "100%" } }}>
                <Link to="/treatments/category/nephrology" style={{ textDecoration: 'none' }}>
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
                    Nephrology
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
                        <Link to="/treatments/category/hydronephrosis_treatment" className="custom-link"style={{ color: 'inherit'}}>
                        Hydronephrosis Treatment (Pyeloplasty)</Link></p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "1.5rem" }}>
                        <Link to="/treatments/category/kidney_dialysis" className="custom-link" style={{ color: 'inherit' }}>
                        Kidney Dialysis
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "1.5rem" }}>
                        <Link to="/treatments/category/kidney_surgery" className="custom-link" style={{ color: 'inherit' }}>
                            Kidney Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/kidney_treatment_in_india" className="custom-link" style={{ color: 'inherit' }}>
                        Kidney Treatment in India
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/kidney_transplant" className="custom-link" style={{ color: 'inherit' }}>
                            Kidney Transplant
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/kidney_stones_treatment" className="custom-link" style={{ color: 'inherit' }}>
                            Kidney Stones Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/laparoscopic_kidney_transplant_patients" className="custom-link" style={{ color: 'inherit' }}>
                        Laparoscopic Kidney Transplant Patients (KTP)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/kidney_cyst_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Kidney Cyst Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/kidney_cancer_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Kidney Cancer Treatment
                        </Link>
                    </p>
                </Box>
            </Box>
        </>
    )
}