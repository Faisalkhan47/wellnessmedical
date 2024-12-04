import { Stack } from "@mui/material";

export default function CardiologyMain() {
    return (
        <>
            <Stack >
                <Stack sx={{ marginTop: '14rem', color: 'rgb(20, 154, 137)', position: 'relative',backgroundColor:"rgb(231, 252, 255)" }}>
                    <img
                        style={{
                            height: '18rem',
                            width: '25rem',
                            position: 'absolute',
                            top: '4rem',
                            right: '7rem',
                            margin: '1rem'
                        }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-ogOa3REoeFYRVvLKb-sjgn6eYogGLh5Rg&s"
                        alt=""
                        srcSet=""
                    />
                    <h2 style={{marginLeft:'3rem',fontWeight:'bold',marginTop:'2rem'}}>Cardiology</h2>
                    <p style={{ width: '45rem', marginLeft: '3rem', textAlign:"start",marginTop:'1rem' }}>
                    Cardiology is used when the medical specialization is related to the heart. It is a stream that specializes in dealing with the disorders which take place in the human heart. This field looks into the diagnosis and treatments of various kinds of heart disorders such as heart failure, congenital heart defects, coronary artery disease, Electrophysiology, and valvular heart disease.
                        <br/><br/>
                        At GoMedii we cater to numerous patients under these categories. We have the best cardiologists in the top notch hospitals of the country and abroad. Cardiology in India to be specific is considered to be of great expertise. Our doctors are known for their experience and dedication all around the world.
                        <br/><br/>
                        Today Cardiology treatment in India has come up as a suitable option in order to get rid of any of the heart defects as the cost in India of any of the treatments is the best and that too at rates that are absolutely affordable. Because of these benefits of choosing in India, any of the treatments, many foreigners have come down here in order to solve their trouble with heart diseases.
                    </p>
                </Stack>
            </Stack>
        </>
    )
}