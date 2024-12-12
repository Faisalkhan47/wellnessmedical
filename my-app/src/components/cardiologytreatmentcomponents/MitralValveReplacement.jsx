import { Box, Stack } from "@mui/material";
import mitralValveReplacementMVR from './MitralValveReplacement(MVR).jpg'
export default function MitralValveReplacement() {
    return (
        <>
            <Stack sx={{ marginTop: "11rem", width: { xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" }, backgroundColor: "white" }}>
                <Stack sx={{ marginTop: '4rem', color: 'rgb(20, 154, 137)', position: 'relative', width: { xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" }, flexDirection: { xs: "column", md: 'row' } }}>
                    <Box
                        sx={{
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
                            src={mitralValveReplacementMVR}
                            alt=""
                        />
                    </Box>
                    <Box sx={{ marginTop: { xs: '13rem', sm: "13rem", md: '0rem' }, width: { xs: "100%", sm: "70%", md: "50%", lg: "60%", xl: "60%" }, marginLeft: { xs: '1rem', md: '3rem' } }}>
                        <h3 style={{ color: 'black', fontWeight: 'bold', marginTop: '2rem' }}>Mitral Valve Replacement (MVR)</h3>
                        <p style={{ color: 'black', textAlign: 'start', marginTop: '1rem' }}>
                            Mitral Valve Replacement is a surgical procedure aimed at replacing a damaged or malfunctioning mitral valve in the heart with a mechanical or bioprosthetic valve.
                            The mitral valve plays a crucial role in ensuring proper blood flow within the heart, preventing backward leakage of blood. Maintaining its function is vital for overall cardiac health.
                        </p>
                    </Box>
                </Stack>
                <Stack sx={{ marginLeft: { xs: "1rem", md: '4rem' }, marginTop: '1rem', width: { xs: "100%", sm: "100%", md: "50%", lg: "60%", xl: "60%" } }}>
                    <div>
                        <h3>About</h3>
                        <p> Mitral Valve Replacement is considered in cases of severe mitral valve dysfunction, often due to conditions such as valve stenosis or regurgitation, where repair is not feasible.</p>
                    </div>
                    <div>
                        <h3>Signs & Symptoms</h3>
                        <p>The reasons of going through Mitral Valve Replacement can be:</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Shortness of Breath</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Fatigue</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Chest Pain or Discomfort</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Decreased Exercise Tolerance</p>
                    </div>
                    <div>
                        <h3>Causes</h3>
                        <p>The causes are:</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Mitral Valve Prolapse</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Degenerative Valve Disease</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Infective Endocarditis</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Congenital Heart Defects</p>
                        <p style={{ marginTop: "-1rem" }} >&#x2022; Ischemic Heart Disease</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Trauma or Injury</p>
                    </div>
                    <div>
                        <h3>When to seek Medical Attention?</h3>
                        <p>Seeking timely medical attention for mitral valve dysfunction is critical to prevent complications. Below are guidelines for when to consult a healthcare provider:</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Difficulty breathing, especially during physical activity or while lying flat.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Unexplained tiredness or weakness that limits daily activities.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Symptoms that may indicate reduced blood flow to the brain.</p>
                    </div>
                    <div>
                        <h3>Risk Factors</h3>
                        <p>Issues mentioned below can arise after Mitral Valve Replacement:</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Age-related wear and tear can weaken or calcify the mitral valve, leading to dysfunction.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; A complication of untreated or inadequately treated streptococcal infections.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Structural abnormalities in the heart present from birth.</p>
                    </div>
                    <div>
                        <h3>Diagnostic & Test</h3>
                        <p>&#x2022; Medical History and Physical Examination</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Echocardiography (Echo)</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Electrocardiogram (ECG or EKG)</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Chest X-Ray</p>
                    </div>
                    <div>
                        <h3>Treatment Procedure</h3>
                        <p>Mitral Valve Replacement (MVR) involves replacing a diseased mitral valve with a mechanical or biological valve. The procedure is performed under general anesthesia through open-heart surgery or minimally invasive techniques. The surgeon makes an incision in the chest, accesses the heart, and removes the damaged valve. A mechanical valve (durable, requires lifelong blood thinners) or a biological valve (from animal or human tissue, with limited lifespan) is then implanted. The heart is restarted, and the incision is closed. Recovery includes hospitalization, rehabilitation, and regular follow-ups. Advanced cases may use transcatheter approaches (TMVR) for high-risk patients, avoiding open-heart surgery.</p>

                    </div>
                    <div>
                        <h3>Choosing the Right Procedure for You</h3>
                        <p>Mechanical Valve:</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Highly durable, lasting decades.</p>
                        <p style={{ marginTop: "-1rem" }}>Biological (Tissue) Valve</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Limited lifespan (10-20 years); may need replacement.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Older adults or those unable to tolerate anticoagulants.</p>
                        <p style={{ marginTop: "-1rem" }}>Open-Heart Surgery:</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Standard for most patients; provides direct access for comprehensive valve replacement.
                        </p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; The procedure can take 3 to 6 hours, depending on its complexity.</p>
                        <p style={{ marginTop: "-1rem" }}>Patient-Specific Considerations</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Younger patients may benefit from durable mechanical valves.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Tolerance for medications like anticoagulants and activity levels influence choice.
                        </p>
                    </div>
                    <div>
                        <h3>Outcome & Recovery</h3>
                        <p>MVR improves symptoms and heart function, with recovery involving hospitalization, rehabilitation, and regular follow-ups.</p>
                    </div>
                    <div>
                        <h3>Success Rate</h3>
                        <p>The success rate has many factors depending on it, like the stage of the condition, the age of the patient, and the complication of the procedure.</p>
                    </div>
                    <div>
                        <h3>Do’s & Don’ts</h3>
                        <p>Issues mentioned below can arise after Mitral Valve Replacement:</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Follow your doctor’s advice and attend all follow-up appointments.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Take prescribed medications, including anticoagulants if necessary, as directed.
                        </p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Don’t skip or stop medications, especially blood thinners, without consulting your doctor.
                        </p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Avoid smoking or exposure to secondhand smoke.
                        </p>
                    </div>
                    <div>
                        <h3>Common Questions About Mitral Valve Replacement (MVR)</h3>
                        <p>Is mitral valve replacement a major surgery?</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Yes, it is a major surgery performed under general anesthesia. Recovery typically involves a hospital stay and follow-up care.</p>
                        <p style={{ marginTop: "-1rem" }}>What are the types of valves used in mitral valve replacement?</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Mechanical and bioprosthetic (tissue) valves are commonly used. Each has benefits and considerations based on the patient’s needs.</p>
                        <p style={{ marginTop: "-1rem" }}>How long does a replaced mitral valve last?</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Mechanical valves can last a lifetime but require lifelong blood thinners. Tissue valves last 10–20 years and may not require long-term anticoagulation.</p>
                        <p style={{ marginTop: "-1rem" }}>What is the recovery time after mitral valve replacement?</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Recovery varies but typically takes 6–12 weeks. Minimally invasive approaches may have shorter recovery times.</p>
                        <p style={{ marginTop: "-1rem" }}>Can mitral valve replacement be done without open-heart surgery?</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; In some cases, transcatheter mitral valve replacement (TMVR) or minimally invasive techniques are options. These depend on patient suitability.</p>
                    </div>
                    <div>
                        <h3>Myths and Facts About Mitral Valve Replacement (MVR)</h3>
                        <p>Myth: Mitral valve replacement is only for elderly patients.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Fact: It is performed on patients of all ages based on their condition and overall health, not just age.</p>
                        <p style={{ marginTop: "-1rem" }}>Myth: Mechanical valves are always better than tissue valves.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Fact: Both options have advantages. Mechanical valves last longer but require blood thinners, while tissue valves may not.</p>
                        <p style={{ marginTop: "-1rem" }}>Myth: Mitral valve replacement requires a long hospital stay.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Fact: While traditional surgery involves a hospital stay, minimally invasive techniques may reduce hospitalization time.</p>
                        <p style={{ marginTop: "-1rem" }}>Myth: You can’t live a normal life after mitral valve replacement.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Fact: Most patients resume normal activities after recovery and enjoy improved quality of life.</p>
                        <p style={{ marginTop: "-1rem" }}>Myth: Surgery is the only treatment for mitral valve issues.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Fact: Depending on the condition, medications or mitral valve repair may be alternatives to replacement.</p>
                        <p style={{ marginTop: "-1rem" }}>Myth: Mitral valve replacement guarantees no further heart issues.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Fact: While it addresses mitral valve problems, ongoing care is crucial to monitor heart health and manage related conditions.</p>
                    </div>
                </Stack>
            </Stack>
        </>
    )
}