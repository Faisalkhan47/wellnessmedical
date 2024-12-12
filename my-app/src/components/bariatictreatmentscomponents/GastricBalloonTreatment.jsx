import { Box, Stack } from "@mui/material";
import gastricBalloonTreatment from './GastricBalloonTreatment.jpg'
export default function GastricBalloonTreatment() {
    return (
        <>
            <Stack sx={{marginTop: "11rem", width: { xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" }, backgroundColor: "white"}}>
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
                            src={gastricBalloonTreatment}
                            alt=""
                        />
                    </Box>
                    <Box sx={{marginTop: { xs: '13rem', sm: "13rem", md: '0rem' }, width: { xs: "100%", sm: "70%", md: "50%", lg: "60%", xl: "60%" },marginLeft: {xs:'1rem', md: '3rem'}}}>
                    <h3 style={{  fontWeight: 'bold', marginTop: '2rem',color: 'black' }}>Gastric Balloon Treatment</h3>
                    <p style={{  textAlign: 'start', marginTop: '1rem',color: 'black' }}>
                    Gastric balloon treatment is a non-surgical weight-loss option designed to help individuals achieve significant weight reduction. It involves the temporary placement of a balloon in the stomach to promote a feeling of fullness and facilitate portion control.
                    </p>
                    </Box>
                </Stack>
                <Stack sx={{ marginLeft: {xs:"1rem",md:'4rem'}, marginTop: '1rem',width: { xs: "100%", sm: "100%", md: "50%", lg: "60%", xl: "60%" }  }}>
                    <div>
                        <h3>About</h3>
                        <p>A gastric balloon is a soft, flexible device that is inserted into the stomach and filled with either gas or liquid. This procedure does not involve any incisions, making it a less invasive option compared to surgical interventions.</p>
                    </div>
                    <div>
                        <h3>Signs & Symptoms</h3>
                        <p>The reasons of going through gastric balloons can be:</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Nausea and Vomiting</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Abdominal Discomfort</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Acid Reflux or Indigestion</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Loss of Appetite</p>
                    </div>
                    <div>
                        <h3>Causes</h3>
                        <p>The causes are:</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Genetics</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Poor Diet</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Lack of Physical Activity</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Emotional and Psychological Factors</p>
                        <p style={{marginTop:"-1rem"}} >&#x2022; Medical Conditions</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Age and Metabolism Changes</p>
                    </div>
                    <div>
                        <h3>When to seek Medical Attention?</h3>
                        <p>An intragastric balloon may be an option for you if:</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Intense or persistent pain that doesn't improve with rest or medication can indicate complications such as balloon deflation, leakage, or other issues.</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; While mild nausea is common during the first few days, persistent vomiting (especially lasting more than a few days) or inability to keep fluids down can lead to dehydration, requiring medical attention.</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; A fever, particularly if it is high and persistent, could be a sign of infection or another serious complication like balloon rupture or infection of the stomach lining.</p>
                    </div>
                    <div>
                        <h3>Risk Factors</h3>
                        <p>Issues mentioned below can arise after Gastric Balloon Treatment:</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Obesity-Related Health Conditions</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Previous Stomach Surgeries</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Pregnancy or Planning to Become Pregnant</p>
                    </div>
                    <div>
                        <h3>Diagnostic & Test</h3>
                        <p>&#x2022; Chest X-rays</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Follow-Up Endoscopy </p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Ultrasound or CT Scan</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Monitoring for Complications</p>
                    </div>
                    <div>
                        <h3>Treatment Procedure</h3>
                        <p>The gastric balloon procedure is a non-surgical weight-loss treatment where a soft silicone balloon is inserted into the stomach via an endoscope. The balloon is inflated with saline to partially fill the stomach, reducing hunger and promoting portion control. The procedure takes about 20-30 minutes under sedation, and most patients can go home the same day. Afterward, patients follow a liquid diet initially, progressing to solid foods, while receiving ongoing nutritional and lifestyle support. The balloon remains in the stomach for about six months before being removed. Success depends on adopting healthy eating habits and regular physical activity.</p>
                        
                    </div>
                    <div>
                        <h3>Choosing the Right Procedure for You</h3>
                        <p>Health Status:</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Consider existing health conditions and their impact on surgical eligibility.</p>
                        <p style={{marginTop:"-1rem"}}>Lifestyle Preferences:</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Evaluate comfort with surgical vs. non-surgical approaches.</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Assess commitment to postoperative lifestyle changes.</p>
                        <p style={{marginTop:"-1rem"}}>Weight Loss Goals:</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Discuss weight loss expectations and long-term goals with healthcare professionals.</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Understand the potential benefits and limitations of each procedure.</p>
                        <p style={{marginTop:"-1rem"}}>Risk Tolerance:</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Assess individual tolerance for surgery-related risks.</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Consider the reversible nature of the gastric balloon.</p>
                    </div>
                    <div>
                        <h3>Outcome & Recovery</h3>
                        <p>&#x2022; Gradual Weight Loss</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Sustainable Lifestyle Changes</p>
                    </div>
                    <div>
                        <h3>Monitoring Progress</h3>
                        <p>&#x2022; Regular Follow-Ups</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Nutritional Monitoring</p>
                    </div>
                    <div>
                        <h3>Success Rate</h3>
                        <p>The success rate has many factors depending on it, like the stage of the condition, the age of the patient, and the complication of the procedure.</p>
                    </div>
                    <div>
                        <h3>Do’s & Don’ts</h3>
                        <p>Issues mentioned below can arise after Gastric Balloon Treatment:</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Avoid smoking</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Stick to the Post-Procedure Diet</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Eat fruits and vegetables</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Avoid skipping meals</p>
                    </div>
                    <div>
                        <h3>Common Questions About Gastric Balloon Treatment</h3>
                        <p>Is the gastric balloon placement painful?</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; No, the procedure is typically done under sedation, and patients may experience mild discomfort or nausea initially.</p>
                        <p style={{marginTop:"-1rem"}}>How long does the gastric balloon stay in the stomach?</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Balloons are usually left in place for about six months, but this can vary based on the specific type of balloon used.</p>
                        <p style={{marginTop:"-1rem"}}>What happens if the gastric balloon deflates?</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Deflation is rare but may require balloon removal. Regular check-ups help monitor and address any issues promptly.</p>
                        <p style={{marginTop:"-1rem"}}>Can the gastric balloon be adjusted?</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Some balloons are adjustable, allowing healthcare professionals to modify the volume during treatment.</p>
                        <p style={{marginTop:"-1rem"}}>Is there a specific diet to follow during gastric balloon treatment?</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Yes, individuals typically start with a liquid diet and gradually progress to soft foods. Nutrient-dense, small meals are emphasized.</p>
                    </div>
                    <div>
                        <h3>Myths and Facts About Gastric Balloons</h3>
                        <p>Myth: Gastric balloons are only for extremely obese individuals.</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Fact: Gastric balloons may be suitable for individuals with a BMI between 30 and 40 who have struggled with weight loss.</p>
                        <p style={{marginTop:"-1rem"}}>Myth: Gastric balloons cause permanent weight loss.</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Fact: Weight loss is temporary, and success depends on adopting long-term lifestyle changes.</p>
                        <p style={{marginTop:"-1rem"}}>Myth: Gastric balloons are extremely risky.</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Fact: While risks exist, complications are rare. Balloons are considered a low-risk, non-surgical option.</p>
                        <p style={{marginTop:"-1rem"}}>Myth: Gastric balloons are a shortcut to weight loss without effort.</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Fact: Successful outcomes require commitment to dietary and lifestyle changes, alongside the balloon.</p>
                        <p style={{marginTop:"-1rem"}}>Myth: Gastric balloons are only for cosmetic reasons.</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Fact: Gastric balloons address health issues associated with obesity, such as diabetes and hypertension.</p>
                        <p style={{marginTop:"-1rem"}}>Myth: Gastric balloons are a one-size-fits-all solution.</p>
                        <p style={{marginTop:"-1rem"}}>&#x2022; Fact: The suitability of a gastric balloon depends on individual health, preferences, and weight loss goals.</p>
                    </div>
                </Stack>
            </Stack>
        </>
    )
}