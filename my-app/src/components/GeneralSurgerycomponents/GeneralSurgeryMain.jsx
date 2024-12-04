import { Stack } from "@mui/material";

export default function GeneralSurgeryMain() {
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
                    <h2 style={{marginLeft:'3rem',fontWeight:'bold',marginTop:'2rem'}}>General Surgery</h2>
                    <p style={{ width: '45rem', marginLeft: '3rem', textAlign: 'start',marginTop:'1rem' }}>
                    General surgery is a surgical specialty that focuses on alimentary canal and abdominal contents including the esophagus, stomach, small intestine, large intestine, liver, pancreas, gallbladder, appendix and bile ducts, and often the thyroid gland. They also deal with diseases involving the skin, breast, soft tissue, trauma, peripheral artery disease and hernias and perform endoscopic procedures such as gastroscopy and colonoscopy.
                    <br/><br/>
                    <br/><br/>
                    </p>
                </Stack>
            </Stack>
        </>
    )
}