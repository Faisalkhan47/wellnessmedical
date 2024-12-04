import { Stack } from "@mui/material";

export default function GastroenterologyMain() {
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
                    <h2 style={{marginLeft:'3rem',fontWeight:'bold',marginTop:'2rem'}}>Gastroenterology</h2>
                    <p style={{ width: '45rem', marginLeft: '3rem', textAlign: 'start',marginTop:'1rem' }}>
                    People around the world suffer from issues related to their stomach. This is the stream which deals with such conditions. Gastroenterology is the study of the normal function and diseases of the esophagus, stomach, small intestine, colon and rectum, pancreas, gallbladder, bile ducts and liver.
                    <br/><br/>
                    A gastroenterologist needs to have a detailed understanding of the normal physiology of all the above mentioned organs as well as motility through the intestines and gastrointestinal tract in order to maintain a healthy digestion, absorption of nutrients, removal of waste and metabolic processes.
                    <br/><br/>
                    Diseases affecting the gastrointestinal tract, which include the organs from mouth into anus, along the alimentary canal, are the focus of this speciality. Physicians practicing in this field are called gastroenterologists.
                    </p>
                </Stack>
            </Stack>
        </>
    )
}