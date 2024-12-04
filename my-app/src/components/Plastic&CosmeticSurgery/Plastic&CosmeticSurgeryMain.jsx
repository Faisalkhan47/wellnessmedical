import { Stack } from "@mui/material";

export default function PlasticCosmeticSurgeryMain() {
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
                    <h2 style={{marginLeft:'3rem',fontWeight:'bold',marginTop:'2rem'}}>Plastic Cosmetic Surgery</h2>
                    <p style={{ width: '45rem', marginLeft: '3rem', textAlign: 'start',marginTop:'1rem' }}>
                    Plastic surgery is a surgical specialty involving the restoration, reconstruction, or alteration of the human body. It can be divided into two main categories: reconstructive surgery and cosmetic surgery.
                    <br/><br/>
                    Reconstructive surgery includes craniofacial surgery, hand surgery, microsurgery, and the treatment of burns. While reconstructive surgery aims to reconstruct a part of the body or improve its functioning, cosmetic (or aesthetic) surgery aims at improving the appearance of it.
                    <br/><br/>
                    <br/><br/>
                    </p>
                </Stack>
            </Stack>
        </>
    )
}