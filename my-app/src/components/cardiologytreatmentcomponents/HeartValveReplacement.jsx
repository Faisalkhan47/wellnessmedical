import { Box, Stack } from "@mui/material";
import heartValveReplacement from './heartValveReplacement.jpg'

export default function HeartValveReplacement() {
    return (
        <>
            <Stack sx={{marginTop: "11rem", width: { xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" }, backgroundColor: "white"}}>
                <Stack sx={{ marginTop: '4rem',  position: 'relative', width: { xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" }, flexDirection: { xs: "column", md: 'row' }}}>
                <Box sx={{
                            position: 'absolute',
                            top: { xs: "-3rem", sm: "-1rem", md: "3rem", lg: '3rem' },
                            right: { sm: "18rem", md: "-4rem", lg: '2rem' },
                            margin: '1rem',
                            width: { xs: '80%', sm: '80%', md: '25rem' },
                            height: 'auto', 
                            objectFit: 'contain',
                        }}
                    >
                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                            src={heartValveReplacement}
                            alt=""
                        />
                    </Box>
                    <Box sx={{marginTop: { xs: '13rem', sm: "13rem", md: '0rem' }, width: { xs: "100%", sm: "70%", md: "50%", lg: "60%", xl: "60%" },marginLeft: {xs:'1rem', md: '3rem'}}}>
                    <h4 style={{fontWeight: 'bold', marginTop: '2rem' }}>
                    Heart Valve Replacement</h4>
                    <p style={{ textAlign: 'start', marginTop: '1rem' }}>
                    Heart valve replacement is a surgical procedure to replace a damaged heart valve with a mechanical or biological substitute. It restores normal blood flow and prevents complications like heart failure or blood clots. The surgery is performed when valves are narrowed or leaky, causing symptoms like fatigue or breathlessness. Recovery involves lifestyle adjustments and potential anticoagulant therapy.</p>
                    </Box>
                </Stack>
                <Stack sx={{ marginLeft: { xs: "1rem", md: '4rem' }, marginTop: '1rem', width: { xs: "100%", sm: "100%", md: "50%", lg: "60%", xl: "60%" }}}>
                    <div>
                        <h4>About</h4>
                        <p>Heart valve replacement is a procedure to replace damaged heart valves with mechanical or biological substitutes, restoring blood flow, relieving symptoms, and preventing complications like heart failure or blood clots.</p>
                    </div>
                    <div>
                        <h4>Signs & Symptoms</h4>
                        <p>The reasons of going through Heart valve replacement can be:</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Fatigue</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Shortness of breath</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Chest pain or discomfort</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Swelling in the legs, feet, or abdomen</p>
                    </div>
                    <div>
                        <h4>Causes</h4>
                        <p>The causes are:</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Radiation therapy</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Endocarditis</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Heart attack</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Cardiomyopathy</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Heart diseases</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Radiation therapy</p>
                    </div>
                    <div>
                        <h4>When to seek medical attention?</h4>
                        <p>You should seek medical attention if you experience symptoms that could indicate heart valve problems or other cardiac conditions. Here's why and what to look for in more detail:</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Occurs during physical activity or while resting, and worsens over time.</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; It may signal that the heart isn’t pumping blood efficiently due to valve dysfunction.</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Unusual tiredness or reduced stamina can indicate that the heart is working harder to pump blood, leading to decreased oxygen supply to the body.</p>
                    </div>
                    <div>
                        <h4>Risk Factors</h4>
                        <p>Issues mentioned below can arise after Heart Valve Problems:</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Blood Clots</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Bleeding</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Heart Failure</p>
                    </div>
                    <div>
                        <h4>Diagnostic & Test</h4>
                        <p>Cardiac Catheterization</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Cardiac MRI</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Chest X-Ray</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Cardiac MRI</p>
                    </div>
                    <div>
                        <h4>Treatment Procedure</h4>
                        <p>Treatment for heart valve problems depends on the severity of the condition. Medications are often prescribed to manage symptoms such as high blood pressure, fluid retention, or irregular heart rhythms. Minimally invasive procedures, like balloon valvuloplasty, can widen narrowed valves, while TAVR (Transcatheter Aortic Valve Replacement) allows for valve implantation via catheter. In more severe cases, surgery may be required, either to repair a damaged valve or replace it with a mechanical or biological prosthetic. After treatment, lifestyle changes and regular follow-up appointments are essential for monitoring recovery, preventing complications, and ensuring the long-term success of the procedure.</p>  
                    </div>
                    <div>
                        <h3>Choosing the Right Procedure for You</h3>
                        <p>Your Health:</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; If you have other health issues (e.g., diabetes, kidney disease), your doctor may opt for a procedure with fewer risks.</p>
                        <p style={{ marginTop: "-1rem" }}>Valve Repair vs. Replacement:</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022;  Repair is preferred if feasible, as it preserves the heart's natural valve function and reduces the need for long-term medication.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022;  Replacement may be necessary if repair isn't possible or if the valve is severely damaged.</p>
                        <p style={{ marginTop: "-1rem" }}>Surgical vs. Minimally Invasive Procedures:</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Traditional surgery may be needed for complex cases or when a prosthetic valve needs to be inserted.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Minimally invasive options, like TAVR, are suitable for elderly or high-risk patients who might not tolerate traditional surgery.</p>
                        <p style={{ marginTop: "-1rem" }}>Mechanical vs. Biological Valves:</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022;  Mechanical valves are durable but require lifelong blood thinners to prevent clots.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Biological valves are made from animal tissue and don’t require long-term anticoagulation, but they wear out over time.</p>
                    </div>
                    <div>
                        <h4>Outcome & Recovery</h4>
                        <p>Recovery involves rest, lifestyle changes, and regular check-ups, with most patients resuming normal activities after surgery.</p>
                    </div>
                    <div>
                        <h4>Success Rate</h4>
                        <p>The success rate has many factors depending on it, like the stage of the condition, the age of the patient, and the complication of the procedure.</p>
                    </div>
                    <div>
                        <h4>Do’s & Don’ts</h4>
                        <p>Issues mentioned below can arise after Heart Valve Replacement:</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Follow doctor’s instructions</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Exercise regularly</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Avoid smoking</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; void strenuous activities</p>
                    </div>
                    <div>
                        <h3>Common Questions About Heart Valve Replacement</h3>
                        <p>What is heart valve replacement surgery?</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Heart valve replacement surgery involves replacing a damaged or diseased valve in the heart with a new, either mechanical or biological, valve.</p>
                        <p style={{ marginTop: "-1rem" }}>Why would I need heart valve replacement?</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; If you have a damaged valve causing symptoms like shortness of breath, fatigue, chest pain, or fluid buildup, a replacement may be necessary to restore normal blood flow.</p>
                        <p style={{ marginTop: "-1rem" }}>What types of heart valves are used?</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Two main types of valves are used: mechanical valves (durable but require lifelong blood thinners) and biological valves (from animal tissue, do not require anticoagulants but wear out over time).</p>
                        <p style={{ marginTop: "-1rem" }}>What is the recovery time after surgery?</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Recovery varies but typically takes 6-12 weeks. You’ll need to gradually return to normal activities, with regular follow-ups to ensure proper healing.</p>
                        <p style={{ marginTop: "-1rem" }}>What are the risks of heart valve replacement surgery?</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Risks include infection, bleeding, blood clots, stroke, arrhythmias, and complications from anesthesia. These risks vary based on your overall health and the procedure type.</p>
                    </div>
                    <div>
                        <h3>Myths and Facts About Heart Valve Replacement</h3>
                        <p>Myth: Heart valve replacement is only for older adults.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Fact: Valve replacement can be necessary at any age due to conditions like congenital defects, rheumatic fever, or heart disease. It's not limited to older patients.</p>
                        <p style={{ marginTop: "-1rem" }}>Myth: After heart valve replacement, you can't live a normal life.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Fact: Most patients can return to a normal or near-normal lifestyle after recovery, including physical activity and daily routines, with proper care and follow-ups.</p>
                        <p style={{ marginTop: "-1rem" }}>Myth: You can’t have surgery if you have other health problems.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Fact: While pre-existing conditions like diabetes or high blood pressure may increase risks, many patients with these conditions successfully undergo valve replacement surgery with proper management.</p>
                        <p style={{ marginTop: "-1rem" }}>Myth: Mechanical valves last forever.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Fact: Mechanical valves are durable but typically last 20-30 years. However, they require lifelong use of blood thinners to prevent clots. Biological valves, although not as durable, don't require long-term anticoagulants.</p>
                        <p style={{ marginTop: "-1rem" }}>Myth: Surgery for heart valve replacement is always risky.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Fact: While surgery does carry risks, advancements in surgical techniques and medical care have made heart valve replacement safer, especially with minimally invasive procedures like TAVR (Transcatheter Aortic Valve Replacement).</p>
                        <p style={{ marginTop: "-1rem" }}>Myth: I can’t exercise after valve replacement surgery.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Fact: After recovery, patients are usually encouraged to engage in regular exercise, as it helps improve heart health. However, the intensity and type of exercise should be discussed with your doctor.</p>
                    </div>
                </Stack>
            </Stack>
        </>
    )
}