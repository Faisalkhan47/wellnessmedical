import { Stack } from "@mui/material";

export default function EarNoseandThroatMain() {
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
                    <h2 style={{marginLeft:'3rem',fontWeight:'bold',marginTop:'2rem'}}>Ear, Nose and Throat (ENT)</h2>
                    <p style={{ width: '45rem', marginLeft: '3rem', textAlign: 'start',marginTop:'1rem' }}>
                    Ear Nose and Throat (ENT) is the speciality which deals with the diagnosis, evaluation and management of diseases of head and neck and principally the ears, nose and throat.
                    <br/><br/>
                    Under this speciality we perform extremely delicate operations to restore hearing of the middle ear, open blocked airways, remove head, neck, and throat cancers, and rebuild these essential structures. This requires an additional five to eight years of intensive, post-graduate training beyond medical school.
                    <br/><br/>
                    One of the key areas of concern for ENT surgeons is helping patients cope with or recover from diseases that impair the senses of hearing and balance. They will also be concerned with the functional aspects of breathing, eating and speech. ENT surgeons also deal with cancers in this region of the body. Many will undertake plastic and reconstructive work on the face. At GoMedii you will find various surgeries taken care of with the best surgeons on board.
                    </p>
                </Stack>
            </Stack>
        </>
    )
}