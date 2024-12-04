import { Box } from "@mui/material";
import { Link } from "react-router-dom";


export default function BariaticSurgery() {
    return (
        <>
            <Box sx={{ marginTop: '1rem', marginLeft: '4rem', backgroundColor: 'white', marginRight: '5rem', fontSize: '1.5rem', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',width: { xs: "70%", sm: "100%", md: "100%", xl: "100%", lg: "100%" } }}>
                <Link to="/treatments/category/bariatic_surgery" style={{ textDecoration: 'none' }}>
                    <Box
                        component="h2"
                        sx={{
                            color: 'rgb(151, 17, 20)',
                            marginTop: '2rem',
                            border: '3px solid black',
                            width: {xs:"70%",sm:"70%",md:'40%'},
                            marginLeft: { xs: '2rem', sm: '3rem', md: '16rem',lg:"23rem" },
                            textAlign:"center"
                        }}
                    >
                        Bariatric Surgery
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
                        <Link to="/treatments/category/gastric_balloon_treatment" className="custom-link" style={{ color: 'inherit' }}>
                            Gastric Balloon Treatment</Link></p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "1.5rem" }}>
                        <Link to="/treatments/category/biliopancreatic_diversion_with_duodenal_switch_(BPD/DS)" className="custom-link" style={{ color: 'inherit' }}>
                            Biliopancreatic Diversion with Duodenal Switch (BPD/DS)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "1.5rem" }}>
                        <Link to="/treatments/category/primary_obesity_surgery_endolumenal" className="custom-link" style={{ color: 'inherit' }}>
                            Primary Obesity Surgery Endolumenal (POSE)
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/Gastric_band_surgery" className="custom-link" style={{ color: 'inherit' }}>
                            Gastric Band Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/gastric_bypass_surgery" className="custom-link" style={{ color: 'inherit' }}>
                            Gastric Bypass Surgery
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/gastric_sleeve_treatment" className="custom-link" style={{ color: 'inherit' }}>
                            Gastric Sleeve Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/sleeve_gastrectomy" className="custom-link" style={{ color: 'inherit' }}>
                            Sleeve Gastrectomy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/gastric_plication" className="custom-link" style={{ color: 'inherit' }}>
                            Gastric Plication
                        </Link>
                    </p>
                </Box>
            </Box>
        </>
    )
}