import { Stack } from "@mui/material";

export default function DermatologyMain() {
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
                    <h2 style={{marginLeft:'3rem',fontWeight:'bold',marginTop:'2rem'}}>Dermatology</h2>
                    <p style={{ width: '45rem', marginLeft: '3rem', textAlign: 'start',marginTop:'1rem' }}>
                    Dermatology is a medical department that specializes in skin and skin diseases. It is about research and diagnosis of common skin disorders. Cancer, cosmetic conditions, and aging of the skin, oils, hair, nails, and oral and genital membranes are all aspects of dermatology. The subspecialties of the dermatology field include dermatopathology, involved in skin pathology; immunodermatology, which specializes in treating skin diseases caused by the immune system, including lupus, bullous pemphigoid, and pemphigus Vulgaris; Mohs surgery, which involves removing implants from the skin without damaging healthy cells; and pediatric dermatology, in which dermatologists may treat infants, genetic skin diseases, and children. A specialist in the field of dermatology is a dermatologist. A dermatologist may be involved in treatment or surgery. Dermatologists may prescribe a series of procedures, many of which are cosmetic.
                    <br/><br/>
                    These include cosmetic injections, hair removal or transplantation, intralesional therapy, laser treatment, photodynamic treatment, phototherapy, tattoo removal, tumescent liposuction, radiation treatment, and vitiligo surgery.
                    <br/><br/>
                    </p>
                </Stack>
            </Stack>
        </>
    )
}