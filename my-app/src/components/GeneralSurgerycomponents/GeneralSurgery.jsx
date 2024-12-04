import { Box } from "@mui/material";
import { Link } from "react-router-dom";


export default function GeneralSurgery() {
    return (
        <>
            <Box sx={{ mt: '2rem', ml: '4rem', backgroundColor: 'white', mr: '5rem', fontSize: '1.5rem', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',width: { xs: "70%", sm: "100%", md: "100%", xl: "100%", lg: "100%" } }}>
                <Link to="/treatments/category/general_surgery" style={{ textDecoration: 'none' }}>
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
                    General Surgery
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
                        <Link to="/treatments/category/mastectomy" className="custom-link"style={{ color: 'inherit'}}>
                        Mastectomy
                        </Link>
                        </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "1.5rem" }}>
                        <Link to="/treatments/category/nephrectomy" className="custom-link" style={{ color: 'inherit' }}>
                        Nephrectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "1.5rem" }}>
                        <Link to="/treatments/category/anal_fistula_surgery" className="custom-link" style={{ color: 'inherit' }}>
                        Anal Fistula Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/anal_fissure_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Anal Fissure Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/piles_surgery_in_india" className="custom-link" style={{ color: 'inherit' }}>
                        Piles Surgery in India
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/splenectomy" className="custom-link" style={{ color: 'inherit' }}>
                        Splenectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/pediatric_surgery_in_india" className="custom-link" style={{ color: 'inherit' }}>
                        Pediatric surgery in India
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/robotic_surgery_in_india_biopsy" className="custom-link" style={{ color: 'inherit' }}>
                        Robotic Surgery in India
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/adrenalectomy" className="custom-link" style={{ color: 'inherit' }}>
                        Adrenalectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/appendectomy" className="custom-link" style={{ color: 'inherit' }}>
                        Appendectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/liver_resection" className="custom-link" style={{ color: 'inherit' }}>
                        Liver Resection
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/lymph_nodes_removal" className="custom-link" style={{ color: 'inherit' }}>
                        Lymph Nodes Removal
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/umbilical_hernia_repair" className="custom-link" style={{ color: 'inherit' }}>
                        Umbilical Hernia Repair
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/gastrectomy" className="custom-link" style={{ color: 'inherit' }}>
                        Gastrectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/lymph_node_biopsy" className="custom-link" style={{ color: 'inherit' }}>
                        Lymph Node Biopsy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/breast_lumpectomy" className="custom-link" style={{ color: 'inherit' }}>
                        Breast Lumpectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/breast_tumor_removal" className="custom-link" style={{ color: 'inherit' }}>
                        Breast Tumor Removal
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/incisional_hernia_repair" className="custom-link" style={{ color: 'inherit' }}>
                        Incisional Hernia Repair
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/lipoma_removal" className="custom-link" style={{ color: 'inherit' }}>
                        Lipoma Removal
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/laparotomy" className="custom-link" style={{ color: 'inherit' }}>
                        Laparotomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/cyst_removal" className="custom-link" style={{ color: 'inherit' }}>
                        Cyst Removal
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/breast_abscess_drainage" className="custom-link" style={{ color: 'inherit' }}>
                        Breast Abscess Drainage
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/pleurodesis" className="custom-link" style={{ color: 'inherit' }}>
                        Pleurodesis
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/tracheostomy" className="custom-link" style={{ color: 'inherit' }}>
                        Tracheostomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/stereotactic_radiosurgery " className="custom-link" style={{ color: 'inherit' }}>
                        Stereotactic Radiosurgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/omentectomy" className="custom-link" style={{ color: 'inherit' }}>
                        Omentectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/thoracostomy" className="custom-link" style={{ color: 'inherit' }}>
                        Thoracostomy
                        </Link>
                    </p>
                </Box>
            </Box>
        </>
    )
}