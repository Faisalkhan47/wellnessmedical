import { Stack } from "@mui/material";

export default function NephrologyMain() {
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
                    <h2 style={{marginLeft:'3rem',fontWeight:'bold',marginTop:'2rem'}}>Nephrology</h2>
                    <p style={{ width: '45rem', marginLeft: '3rem', textAlign: 'start',marginTop:'1rem' }}>
                    Nephrology is the study of adult internal medicine and pediatric medicine that concerns the study of the kidneys. It is specifically normal kidney function and kidney disease, the preservation of kidney health, and the treatment of kidney disease, from diet and medication to renal replacement therapy.
                    <br/><br/>
                    When you book a consultation for any issue related to the Kidneys, you tend to be dealing with a nephrologist. Nephrologists are doctors who specialize in conditions that affect the kidney. Kidney issues are on the rise around the world, with millions of people each year undergoing treatments for kidney injury or chronic kidney disease (CKD).
                    <br/><br/>
                    Most people don't go to a nephrologist without a referral from their primary care doctor. Typically, seeing a nephrologist means that you have kidney-related symptoms from an unknown cause or that you have health issues only a renal specialist knows how to treat. We at GoMedii ensure our patients that they will be taken care of in the best way possible. Drop in your queries and know it for yourself!
                    </p>
                </Stack>
            </Stack>
        </>
    )
}