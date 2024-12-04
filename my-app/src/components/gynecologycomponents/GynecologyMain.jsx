import { Stack } from "@mui/material";

export default function GynecologyMain() {
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
                    <h2 style={{marginLeft:'3rem',fontWeight:'bold',marginTop:'2rem'}}>Gynecology</h2>
                    <p style={{ width: '45rem', marginLeft: '3rem', textAlign: 'start',marginTop:'1rem' }}>
                    Gynecology is the medical science that deals with the female reproductive system. It deals with pregnancy and its associated procedures and complications, gynaecology also involves treating women who are not pregnant.
                    <br/><br/>
                    Gynecology comprises both medicine as well as surgical fields. While many of the gynaecological illnesses need hormonal and other pharmacological management, cancers, fibroids etc. require surgical removal.
                    <br/><br/>
                    Gynecologists use a range of diagnostic and therapeutic procedures. It is a task that requires great experience and our doctors are known for their expertise. You will be able to find the finest gynecologists for your treatments. What are you waiting for? Drop your query now!
                    </p>
                </Stack>
            </Stack>
        </>
    )
}