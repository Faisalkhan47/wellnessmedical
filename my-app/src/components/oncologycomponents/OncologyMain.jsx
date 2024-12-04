import { Stack } from "@mui/material";

export default function OncologyMain() {
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
                    <h2 style={{marginLeft:'3rem',fontWeight:'bold',marginTop:'2rem'}}>Oncology</h2>
                    <p style={{ width: '45rem', marginLeft: '3rem', textAlign: 'start',marginTop:'1rem' }}>
                    Oncology is one of the most important of the medical science stream. It is the study of various cancer related issues in the human body. Oncologists provide medical care for a person diagnosed with cancer. The field of oncology has three major areas: medical, surgical, and radiation. Cancer treatments are an expensive affair.
                    <br/><br/>
                    At GoMedii our aim is to provide you the most accessible healthcare at the most affordable prices. You can always contact us for more information.
                    <br/><br/>
                    Most of our patients choose India not only because of the cheap and affordable facilities that are provided but also because of the quality and home-like care that they receive.
                    <br/><br/>
                    Once a diagnosis is made, the oncologist discusses the disease stage with the patient. Staging will dictate treatment of the cancer. Chemotherapy is defined as the destruction of cancer cells . The other therapy that may be used is radiation therapy.
                    <br/><br/>
                    Surgery is used to remove tumors. Hormone therapy is used to treat certain types of cancers, and monoclonal antibody treatments are gaining popularity. Research into cancer vaccines and immunotherapies is ongoing. Palliative care in oncology treats pain and other symptoms of cancer.
                    <br/><br/>
                    You may find different surgeries and treatments under Oncology, making it an option chosen by several medical tourists. We provide our best team of doctors who are specialized in their field of expertise.
                    </p>
                </Stack>
            </Stack>
        </>
    )
}