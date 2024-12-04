import { Stack } from "@mui/material";

export default function NeurologyMain() {
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
                    <h2 style={{marginLeft:'3rem',fontWeight:'bold',marginTop:'2rem'}}>Neurology</h2>
                    <p style={{ width: '45rem', marginLeft: '3rem', textAlign: 'start',marginTop:'1rem' }}>
                    Neurology is a branch of medicine dealing with disorders of the nervous system. Neurology deals with the diagnosis and treatment of all categories of conditions and disease involving the central and peripheral nervous systems, including their coverings, blood vessels, and all effector tissue, such as muscle. You find the best of the neurologists in India, under affordable treatment options.
                    <br/><br/>
                    With GoMedii as your treatment partner, you will be given all the necessary help to get the best treatment done. You just have to drop in your queries and our team will contact you. We follow the most hassle free procedure to keep our patients in comfort.
                    <br/><br/>
                    During your first appointment with a neurologist, they’ll likely perform a physical exam and a neurological exam. A neurological exam will test muscle strength, reflexes, and coordination. Since different disorders can have similar symptoms, your neurologist may need more testing to make a diagnosis. Neurologists may recommend a variety of procedures to help diagnose or treat a condition.
                    </p>
                </Stack>
            </Stack>
        </>
    )
}