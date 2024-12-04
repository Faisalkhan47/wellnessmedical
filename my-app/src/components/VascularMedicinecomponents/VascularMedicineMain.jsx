import { Stack } from "@mui/material";

export default function VascularMedicineMain() {
    return (
        <>
            <Stack >
                <Stack sx={{ marginTop: '14rem', color: 'rgb(20, 154, 137)', position: 'relative',backgroundColor:"rgb(231, 252, 255)" }}>
                    <img
                        style={{
                            height: '18rem',
                            width: '25rem',
                            position: 'absolute',
                            top: '1rem',
                            right: '7rem',
                            margin: '1rem'
                        }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-ogOa3REoeFYRVvLKb-sjgn6eYogGLh5Rg&s"
                        alt=""
                        srcSet=""
                    />
                    <h2 style={{marginLeft:'3rem',fontWeight:'bold',marginTop:'2rem'}}>Vascular Medicine</h2>
                    <p style={{ width: '45rem', marginLeft: '3rem', textAlign: 'start',marginTop:'1rem' }}>
                    Vascular medicine specializes in the care of your circulatory system outside of your heart. This includes your arteries, veins, and lymphatic system: Arteries: Blood vessels that carry oxygenated blood away from the heart to the body
                    <br/><br/>
                    Vascular medicine focuses on the diagnosis and treatment of circulatory problems within the blood vessels, notably the arteries, veins, and lymphatic system.
                    <br/><br/>
                    Common diseases include peripheral artery disease, lymphedema, and carotid artery stenosis.
                    <br/><br/>
                    </p>
                </Stack>
            </Stack>
        </>
    )
}