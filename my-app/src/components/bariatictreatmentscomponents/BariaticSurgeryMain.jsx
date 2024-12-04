import { Stack } from "@mui/material";

export default function BariaticSurgeryMain() {
    return (
        <>
            <Stack sx={{marginTop:"11rem",}}>
                <Stack sx={{ marginTop: '4rem', color: 'rgb(20, 154, 137)', position: 'relative',backgroundColor:"rgb(231, 252, 255)" }}>
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
                    <h2 style={{marginLeft:'3rem',fontWeight:'bold',marginTop:'2rem'}}>Bariatric Surgery Treatment</h2>
                    <p style={{ width: '45rem', marginLeft: '3rem', textAlign: 'start',marginTop:'1rem' }}>
                        When the two Gastric bypass and other weight-loss surgeries are put together they are collectively known as Bariatric surgery. This involves making changes to your digestive system to help you lose weight.
                        <br/><br/>
                        It is done when diet and exercise haven't worked or when you have serious health problems because of your weight. Some procedures limit how much you can eat. Other procedures work by reducing the body's ability to absorb nutrients. Some procedures do both. While bariatric surgery can offer many benefits, all forms of weight-loss surgery are major procedures and you must consult our doctors. At GoMedii we have a set of brilliant doctors and hospitals for you to choose from. You must make permanent healthy changes to your diet and get regular exercise to help ensure the long-term success of bariatric surgery.
                        <br/><br/>
                        Bariatric surgery isn't for everyone who is severely overweight. You may need to meet certain medical guidelines to qualify for weight-loss surgery. You likely will have an extensive screening process to see if you qualify. You must also be willing to make permanent changes to lead a healthier lifestyle.
                    </p>
                </Stack>
            </Stack>
        </>
    )
}