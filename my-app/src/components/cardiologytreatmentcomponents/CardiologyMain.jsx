import { Box, Stack } from "@mui/material";
import Cardiology from './Cardiology.jpg'
export default function CardiologyMain() {
    return (
        <>
            <Stack sx={{ marginTop: "11rem", width: { xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" }, backgroundColor: "white" }}>
                <Stack sx={{ marginTop: '4rem', color: 'rgb(20, 154, 137)', position: 'relative', width: { xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" }, flexDirection: { xs: "column", md: 'row' } }}>
                <Box
                        sx={{
                            position: 'absolute',
                            top: { xs: "-3rem", sm: "-1rem", md: "3rem", lg: '3rem' },
                            right: { sm: "18rem", md: "-4rem", lg: '2rem' },
                            margin: '1rem',
                            width: { xs: '80%', sm: '80%', md: '25rem' },
                            height: 'auto',
                            objectFit: 'contain',
                        }}
                    >
                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                            src={Cardiology}
                            alt=""
                        />
                    </Box>
                    <Box
                        sx={{
                            marginTop: { xs: '13rem', sm: '13rem', md: '0rem' },
                            width: { xs: '100%', sm: '70%', md: '50%', lg: '60%', xl: '60%' },
                            marginLeft: { xs: '1rem', md: '3rem' },
                        }}
                    >
                    <h3 style={{fontWeight:'bold',marginTop:'2rem',color: 'black'}}>Cardiology</h3>
                    <p style={{ color: 'black', textAlign:"start",marginTop:'1rem' }}>
                    Cardiology is the medical specialty focused on diagnosing, treating, and preventing diseases of the heart and blood vessels, collectively known as cardiovascular diseases (CVD). The scope of cardiology includes a range of conditions such as coronary artery disease (CAD), heart failure, arrhythmias, valvular heart disease, hypertension, atherosclerosis, and congenital heart defects.
                        <br/><br/>
                        Coronary artery disease occurs when the arteries supplying blood to the heart become blocked or narrowed, leading to chest pain or heart attacks. Heart failure refers to the heart's inability to pump blood efficiently, causing fluid buildup and reduced oxygen supply. Arrhythmias are abnormal heart rhythms, which can be too fast, slow, or erratic, affecting the heart's efficiency. Valvular heart disease involves problems with the heart's valves, leading to improper blood flow. Hypertension, or high blood pressure, is a key risk factor for heart disease. Atherosclerosis involves the accumulation of fatty plaques in arteries, potentially leading to blockages.
                        <br/><br/>
                        Cardiologists use diagnostic tools like electrocardiograms (EKG), echocardiograms, and stress tests to assess heart health. Treatment may involve lifestyle changes, medications, surgical interventions, or other therapies aimed at managing and preventing cardiovascular conditions, improving patient outcomes, and enhancing quality of life.
                    </p>
                    </Box>
                </Stack>
            </Stack>
        </>
    )
}