import { Stack } from "@mui/material";

export default function NeurosurgeryMain() {
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
                    <h2 style={{marginLeft:'3rem',fontWeight:'bold',marginTop:'2rem'}}>Neurosurgery</h2>
                    <p style={{ width: '45rem', marginLeft: '3rem', textAlign: 'start',marginTop:'1rem' }}>
                    Neurosurgery, also known as neurological surgery, is a medical specialty that focuses on the diagnosis and treatment of the nervous system. This includes the brain, spinal cord, peripheral nervous system, and cerebrovascular system.
                    <br/><br/>
                    Neurosurgery is a technologically advanced surgical specialty that involves a variety of procedures, including: Computer-based neuronavigation, Spinal biomechanics and instrumentation, Gene therapy for brain tumors, and Catheter-driven endovascular techniques. 
                    <br/><br/>
                    Neurosurgeons must be proficient in interpreting a variety of imaging studies, including X-rays, CT scans, MRIs, and angiographies
                    <br/><br/>
                    IVF & Fertility Treatment is the process by which there is prevention of genetic problems and assistance with the conception of a child is possible. IVF is the most effective form of assisted reproductive technology. The procedure can be done using a couple's own eggs and sperm. IVF may involve eggs, sperm or embryos from a known or anonymous donor. In some cases, a gestational carrier, someone who has an embryo implanted in the uterus might be used.
                    <br/><br/>
                    Neurosurgery can be complex and may take several hours or more. The length of the procedure depends on the type of operation, whether a blood transfusion is needed, and whether the surgeon needs to change their approach during the procedure.
                    <br/><br/>
                    </p>
                </Stack>
            </Stack>
        </>
    )
}