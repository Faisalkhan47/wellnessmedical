import { Box } from "@mui/material";
import { Link } from "react-router-dom";


export default function Cosmetology() {
    return (
        <>
            <Box sx={{ marginTop: '2rem', marginLeft: '4rem', backgroundColor: 'white', marginRight: '5rem', fontSize: '1.5rem', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',width: { xs: "70%", sm: "100%", md: "100%", xl: "100%", lg: "100%" } }}>
                <Link to="/treatments/category/cosmetology" style={{ textDecoration: 'none' }}>
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
                    Cosmetology
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
                        <Link to="/treatments/category/chemical_peel" className="custom-link" style={{ color: 'inherit'}}>
                            Chemical Peel</Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "1.5rem" }}>
                        <Link to="/treatments/category/laser_hair_removal" className="custom-link" style={{ color: 'inherit' }}>
                            Laser Hair Removal
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "1.5rem" }}>
                        <Link to="/treatments/category/laser_tattoo_removal" className="custom-link" style={{ color: 'inherit' }}>
                        Laser Tattoo Removal
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/laser_skin_resurfacing" className="custom-link" style={{ color: 'inherit' }}>
                        Laser Skin Resurfacing
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/intense_pulsed_light_skin_treatment" className="custom-link" style={{ color: 'inherit' }}>
                            Intense Pulsed Light (IPL) Skin Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem" }}>
                        <Link to="/treatments/category/skin_tightening_treatment" className="custom-link" style={{ color: 'inherit' }}>
                            Skin Tightening Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/platelet_rich_plasma_facial_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Platelet Rich Plasma (PRP) Facial Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/microdermabrasion" className="custom-link" style={{ color: 'inherit' }}>
                        Microdermabrasion
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/cellulite_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Cellulite Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/skin_lightening" className="custom-link" style={{ color: 'inherit' }}>
                        Skin Lightening
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/skin_needling_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Skin Needling Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/carboxitherapy" className="custom-link" style={{ color: 'inherit' }}>
                        Carboxitherapy
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/blemish_removal" className="custom-link" style={{ color: 'inherit' }}>
                        Blemish Removal
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/skin_tone_adjustment" className="custom-link" style={{ color: 'inherit' }}>
                        Skin Tone Adjustment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/stem_cell_face_lift" className="custom-link" style={{ color: 'inherit' }}>
                        Stem Cell Facelift
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/hand_rejuvenation" className="custom-link" style={{ color: 'inherit' }}>
                        Hand Rejuvenation
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/pore_reduction_treatment" className="custom-link" style={{ color: 'inherit' }}>
                        Pore Reduction Treatment
                        </Link>
                    </p>
                    <p style={{ marginLeft: "2.5rem", marginTop: "-1rem", marginBottom: '1.5rem' }}>
                        <Link to="/treatments/category/IPL_hair_removal" className="custom-link" style={{ color: 'inherit' }}>
                        IPL Hair Removal
                        </Link>
                    </p>
                </Box>
            </Box>
        </>
    )
}