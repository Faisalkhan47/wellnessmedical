import { Box, Stack } from "@mui/material";
import gastricPlication from './gastricPlication.jpg'

export default function GastricPlication() {
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
                            src={gastricPlication}
                            alt=""
                        />
                    </Box>
                    <Box sx={{ marginTop: { xs: '13rem', sm: "13rem", md: '0rem' }, width: { xs: "100%", sm: "70%", md: "50%", lg: "60%", xl: "60%" }, marginLeft: { xs: '1rem', md: '3rem' } }}>
                    <h3 style={{ color: 'black', fontWeight: 'bold', marginTop: '2rem' }}>Gastric Plication</h3>
                    <p style={{ color: 'black', textAlign: 'start', marginTop: '1rem' }}>
                    Gastric plication is a restrictive bariatric surgery that involves folding and suturing the stomach to reduce its size, limiting food intake.
                    </p>
                    </Box>
                </Stack>
                <Stack sx={{ marginLeft: { xs: "1rem", md: '4rem' }, marginTop: '1rem', width: { xs: "100%", sm: "100%", md: "50%", lg: "60%", xl: "60%" } }}>
                <div>
                        <h3>About</h3>
                        <p> The surgery reduces stomach volume by folding and stitching, creating a tubular shape. This restriction aims to induce weight loss through portion control.</p>
                    </div>
                    <div>
                        <h3>Signs & Symptoms</h3>
                        <p>The reasons of going through Gastric Plication can be:</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Nausea and Vomiting</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Abdominal Bloating</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Reduced hunger</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Leakage from stomach folds</p>
                    </div>
                    <div>
                        <h3>Causes</h3>
                        <p>The causes are:</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Genetic Factors</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Diet and Overeating</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Physical Inactivity</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Access to high-calorie foods and portion sizes</p>
                        <p style={{ marginTop: "-1rem" }} >&#x2022; Sleep deprivation</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Anxiety</p>
                    </div>
                    <div>
                        <h3>When to seek medical attention?</h3>
                        <p>Early intervention can help prevent complications and ensure a smoother recovery. Here are some situations when you should seek medical attention after gastric plication:</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Unusual pain or tenderness in the abdomen, especially if it worsens over time.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Persistent or worsening abdominal pain not relieved by pain medication.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Shortness of breath, especially if it develops suddenly.</p>
                    </div>
                    <div>
                        <h3>Risk Factors</h3>
                        <p>Issues mentioned below can arise after Gastric Plication</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Heart disease or cardiovascular issues</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Diabetes</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Abdominal surgery history</p>
                    </div>
                    <div>
                        <h3>Diagnostic & Test</h3>
                        <p>&#x2022; Laboratory Tests</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Abdominal Ultrasound</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; X-rays or CT scans</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Electrocardiogram (ECG or EKG)</p>
                    </div>
                    <div>
                        <h3>Treatment Procedure</h3>
                        <p>Gastric plication is a minimally invasive weight-loss surgery where the surgeon folds the stomach inward to reduce its size, creating a smaller pouch. This limits food intake, helping patients feel full with less food. The procedure is performed laparoscopically, using small incisions and a camera for guidance. No stomach removal or bypass is involved, and the stomach is sutured to secure the folds. The procedure typically takes 1-2 hours and requires general anesthesia. Post-surgery, patients follow a strict diet, exercise regimen, and monitor their health to ensure long-term weight loss success and avoid complications like nutritional deficiencies.</p>
                    </div>
                    <div>
                        <h3>Choosing the Right Procedure for You</h3>
                        <p>Obesity-related health issues:</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; If you have severe obesity (BMI ≥40 or ≥35 with comorbidities like diabetes, hypertension, or sleep apnea), gastric plication may be an effective option. However, for individuals with significant gastrointestinal issues (e.g., GERD or ulcers), other procedures may be recommended.</p>
                        <p style={{ marginTop: "-1rem" }}>Long-term weight loss:</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Gastric plication is designed to reduce stomach capacity and help with long-term weight loss, but some patients may need more significant weight loss or faster results, in which case options like gastric bypass might be more suitable.</p>
                        <p style={{ marginTop: "-1rem" }}>Surgical risks:</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Consider the potential risks of each procedure. Gastric plication is less invasive than gastric bypass or sleeve gastrectomy, but it may not offer the same level of weight loss for all patients.</p>
                        <p style={{ marginTop: "-1rem" }}>SRecovery time:</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Gastric plication typically has a shorter recovery time compared to other bariatric surgeries. If you prefer a procedure with minimal scarring and quicker recovery, this may be a good option.</p>
                        <p style={{ marginTop: "-1rem" }}>Consultation:</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Discuss your options with a qualified bariatric surgeon who can assess your health, discuss all available weight-loss surgeries, and recommend the procedure that best suits your needs.</p>
                    </div>
                    <div>
                        <h3>Outcome & Recovery</h3>
                        <p>Gastric plication results in significant weight loss with proper diet, exercise, and long-term lifestyle changes.</p>
                    </div>
                    <div>
                        <h3>Success Rate</h3>
                        <p>The success rate has many factors depending on it, like the stage of the condition, the age of the patient, and the complication of the procedure.</p>
                    </div>
                    <div>
                        <h3>Do’s & Don’ts</h3>
                        <p>Issues mentioned below can arise after Gastric plication:</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Drink plenty of fluids</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Exercise regularly</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Don’t consume high-calorie, sugary foods</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Don’t LifDon’t drink with meals</p>
                    </div>
                    <div>
                        <h3>Common Questions About Gastric Plication</h3>
                        <p>How does gastric plication promote weight loss?</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Gastric plication reduces stomach volume by folding and suturing, limiting food intake and inducing weight loss through portion control.</p>
                        <p style={{ marginTop: "-1rem" }}>Is gastric plication reversible?</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Gastric plication is not easily reversible as it involves altering the structure of the stomach.</p>
                        <p style={{ marginTop: "-1rem" }}>What is the expected weight loss with gastric plication?</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Weight loss varies, and long-term data may be limited. Individuals may experience a significant reduction in excess weight.</p>
                        <p style={{ marginTop: "-1rem" }}>Can I eat normally after gastric plication?</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; While stomach capacity is reduced, individuals can eat normal foods in smaller portions, following dietary guidelines.</p>
                        <p style={{ marginTop: "-1rem" }}>Is gastric plication painful?</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Discomfort after surgery is common, but pain is generally manageable with medications.</p>
                    </div>
                    <div>
                        <h3>Myths and Facts About Gastric Plication</h3>
                        <p>Myth: Gastric plication is only for cosmetic weight loss.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Fact: Sleeve gastrectomy addresses obesity-related health issues, leading to improvements or resolution of conditions like diabetes and hypertension.</p>
                        <p style={{ marginTop: "-1rem" }}>Myth: Gastric plication is an easy way to lose weight without effort.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Fact: Successful outcomes require commitment to lifelong lifestyle changes, including dietary modifications and regular exercise.</p>
                        <p style={{ marginTop: "-1rem" }}>Myth: Gastric plication leads to constant malnutrition.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Fact: Gastric plication does not involve malabsorption, and nutritional deficiencies are less common with proper dietary guidance and supplementation.</p>
                        <p style={{ marginTop: "-1rem" }}>Myth: Gastric plication treatment is extremely risky and dangerous.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Fact: While all surgeries carry some risks, gastric plication is generally considered safe when performed by experienced surgeons in appropriate candidates</p>
                        <p style={{ marginTop: "-1rem" }}>Myth: I won't be able to enjoy food after gastric plication.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Fact: While portion sizes are reduced, individuals can still enjoy a variety of foods, albeit in smaller amounts, and often find a new appreciation for healthier options.</p>
                        <p style={{ marginTop: "-1rem" }}>Myth: Gastric plication is a last resort for only extremely obese individuals.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Fact: It is recommended for individuals with a BMI of 35 or higher, but those with a BMI between 30 and 35 with obesity-related health issues may also be considered.</p>
                    </div>
                </Stack>
            </Stack>
        </>
    )
}