import { Stack } from "@mui/material";

export default function CosmetologyMain() {
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
                    <h2 style={{marginLeft:'3rem',fontWeight:'bold',marginTop:'2rem'}}>Cosmetology</h2>
                    <p style={{ width: '45rem', marginLeft: '3rem', textAlign: 'start',marginTop:'1rem' }}>
                    Cosmetology is the study and application of various beauty treatments. This might include hair styling, skin care, cosmetics, manicures/pedicures, and permanent or non-permanent hair removal. Cosmetologists deal with a wide range of beauty treatments or specialize in a specific area, and there are plenty of qualified cosmetologists like hair color specialists, skin care consultants, while others move into more technical professions like aesthetics.
                        <br/><br/>
                        India has been one of the countries with a great number of people coming from all over the world, to get their cosmetic surgeries done in India. We at GoMedii are providing you with the finest of the cosmetologists!
                        <br/><br/>
                        Get your skin treatments with the best cosmetologist in the country. You will experience the best treatments in India.
                        <br/><br/>
                        The art of cosmetology and beauty culture dates back to the Ice age. The haircutting and styling were practiced and implements were shaped from sharpened flints, oyster shells, or bone. It is also said that the early modern humans decorated themselves with natural pigments found in plants and fruits. Book your Consultations now!
                    </p>
                </Stack>
            </Stack>
        </>
    )
}