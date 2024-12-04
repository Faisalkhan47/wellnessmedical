import { Stack } from "@mui/material";

export default function ColorectalMedicineMain() {
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
                    <h2 style={{marginLeft:'3rem',fontWeight:'bold',marginTop:'2rem'}}>Colorectal Medicine</h2>
                    <p style={{ width: '45rem', marginLeft: '3rem', textAlign: 'start',marginTop:'1rem' }}>
                    Those dealing with the surgery related recovery of the Colorectal region of the body are the stream of Colorectal Medicine.
                    <br/><br/>
                    Colorectal surgery is a field in medicine dealing with disorders of the rectum, anus, and colon. The field is also known as proctology, but this term is now used infrequently within medicine and is most often employed to identify practices relating to the anus and rectum in particular.
                    <br/><br/>
                    Often patients with cancer in the colon or rectum will need surgery. Usually this will be a bowel resection, which involves removing the affected part containing the cancer and then rejoining the bowel. In many cases, bowel cancer can be cured in this way with no need for further treatment.
                    <br/><br/>
                    In rare cases, more radical surgery may be needed. Some patients may also need chemotherapy or radiotherapy either before or after treatment for bowel cancer.
                    <br/><br/>
                    Cancer of the anus is rare and is treated primarily with radiotherapy. Surgery is reserved for cases which do not respond to treatment or recur. Contact GoMedii and see our best oncologist take care of your condition.
                    </p>
                </Stack>
            </Stack>
        </>
    )
}