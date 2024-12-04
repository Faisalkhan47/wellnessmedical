import { Stack } from "@mui/material";

export default function UrologyTreatmentMain() {
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
                    <h2 style={{marginLeft:'3rem',fontWeight:'bold',marginTop:'2rem'}}>Urology Treatment</h2>
                    <p style={{ width: '45rem', marginLeft: '3rem', textAlign: 'start',marginTop:'1rem' }}>
                    Urology is a part of health care that deals with diseases of the male and female urinary tract (kidneys, ureters, bladder and urethra). It also deals with the male organs that are able to make babies (penis, testes, scrotum, prostate, etc.). Since health problems in these body parts can happen to everyone, urologic health is important.
                    <br/><br/>
                    Urology is known as a surgical specialty. Besides surgery, a urologist is a doctor with wisdom of internal medicine, pediatrics, gynecology and other parts of health care. This is because a urologist encounters a wide range of clinical problems.
                    <br/><br/>
                    If you have a problem with urologic health you might see a urologist. You might also see a person on the urologist's care team.
                    <br/><br/>
                    </p>
                </Stack>
            </Stack>
        </>
    )
}