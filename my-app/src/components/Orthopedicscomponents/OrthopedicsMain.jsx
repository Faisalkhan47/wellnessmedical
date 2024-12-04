import { Stack } from "@mui/material";

export default function OrthopedicsMain() {
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
                    <h2 style={{marginLeft:'3rem',fontWeight:'bold',marginTop:'2rem'}}>Orthopedics</h2>
                    <p style={{ width: '45rem', marginLeft: '3rem', textAlign: 'start',marginTop:'1rem' }}>
                    Orthopedics is a line of medical procedure that focuses on the diagnosis, correction, prevention, and treatment of patients with skeletal deformities disorders of the bones, joints, muscles, ligaments, tendons, nerves and skin.
                    <br/><br/>
                    These elements make up the musculoskeletal system. In India, you get the best treatment at a lower cost. Get the best doctor and a team of perfect healthcare solutions.
                    <br/><br/>
                    Orthopedic conditions could also be treated by your doctor or other medical specialists and healthcare providers. Several doctors from different medical specialties could also be involved within the treatment at an equivalent time. This approach is vital to manage the symptoms of an orthopedic condition, especially as many symptoms are chronic and alter over time.
                    </p>
                </Stack>
            </Stack>
        </>
    )
}