import { Box, Stack } from "@mui/material";
import sleeveGastrectomy from './sleeveGastrectomy.jpg'
export default function SleeveGastrectomy() {
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
                            src={sleeveGastrectomy}
                            alt=""
                        />
                    </Box>
                    <Box sx={{ marginTop: { xs: '13rem', sm: "13rem", md: '0rem' }, width: { xs: "100%", sm: "70%", md: "50%", lg: "60%", xl: "60%" }, marginLeft: { xs: '1rem', md: '3rem' } }}>
                        <h3 style={{ color: 'black', fontWeight: 'bold', marginTop: '2rem' }}>Sleeve Gastrectomy</h3>
                        <p style={{ color: 'black', textAlign: 'start', marginTop: '1rem' }}>
                            Sleeve gastrectomy is a surgical weight loss procedure that involves the removal of a large portion of the stomach, creating a smaller, banana-shaped stomach pouch.
                        </p>
                    </Box>
                </Stack>
                <Stack sx={{ marginLeft: { xs: "1rem", md: '4rem' }, marginTop: '1rem', width: { xs: "100%", sm: "100%", md: "50%", lg: "60%", xl: "60%" } }}>
                    <div>
                        <h3>About</h3>
                        <p> The surgery reduces stomach size, limiting food intake and inducing weight loss through both restriction and hormonal changes that affect appetite.</p>
                    </div>
                    <div>
                        <h3>Signs & Symptoms</h3>
                        <p>The reasons of going through Sleeve Gastrectomy can be:</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Nausea and Vomiting</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Abdominal Bloating</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Decreased Appetite</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Constipation</p>
                    </div>
                    <div>
                        <h3>Causes</h3>
                        <p>The causes are:</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Failure of Other Weight-Loss Interventions</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Binge Eating or Overeating</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Genetic Predisposition</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Prevention of Progression in Diabetes</p>
                        <p style={{ marginTop: "-1rem" }} >&#x2022; Fatty liver disease (non-alcoholic steatohepatitis or NASH)</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Obstructive sleep apnea</p>
                    </div>
                    <div>
                        <h3>When to seek medical attention?</h3>
                        <p>Sleeve gastrectomy, certain signs and symptoms may indicate complications or issues that require immediate medical attention:</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Especially if the pain is persistent, worsening, or localized to a specific area, it could indicate a stomach leak, stricture, or bowel obstruction.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; A temperature above 101°F (38.5°C) may indicate an infection, either at the incision site or internally.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; This may signal a stricture, obstruction, or dehydration, requiring prompt treatment.
                        </p>
                    </div>
                    <div>
                        <h3>Risk Factors</h3>
                        <p>Issues mentioned below can arise after Sleeve Gastrectomy</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Bleeding</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Infection</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Blood Clots</p>
                    </div>
                    <div>
                        <h3>Diagnostic & Test</h3>
                        <p>&#x2022; Laboratory Tests</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Abdominal Ultrasound</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Cardiac and Pulmonary Evaluation</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Imaging Studies</p>
                    </div>
                    <div>
                        <h3>Treatment Procedure</h3>
                        <p>Sleeve gastrectomy is a laparoscopic weight-loss surgery in which approximately 75-80% of the stomach is removed, leaving a small, tube-shaped stomach (or "sleeve"). This reduces stomach capacity and lowers hunger by decreasing ghrelin hormone production. The procedure begins with small abdominal incisions, through which surgical tools and a camera are inserted. The surgeon staples and divides the stomach along its length, creating the sleeve and removing the excess portion. The remaining stomach is sealed with surgical staples. The surgery typically takes 1-2 hours, and patients are discharged within 1-3 days, followed by gradual diet progression and lifestyle adjustments.</p>
                    </div>
                    <div>
                        <h3>Choosing the Right Procedure for You</h3>
                        <p>Weight-Loss Goals:</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Sleeve gastrectomy is ideal for significant, gradual weight loss over time.</p>
                        <p style={{ marginTop: "-1rem" }}>Comorbid Conditions:</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Sleeve gastrectomy can improve conditions like diabetes and hypertension but may not be as effective as gastric bypass in resolving severe diabetes.</p>
                        <p style={{ marginTop: "-1rem" }}>Nutritional Impact:</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Sleeve gastrectomy has a lower risk of malabsorption compared to gastric bypass.</p>
                        <p style={{ marginTop: "-1rem" }}>Surgical Risks:</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Sleeve gastrectomy is less complex than gastric bypass but carries risks like leaks or strictures.
                        </p>
                        <p style={{ marginTop: "-1rem" }}>Lifestyle and Maintenance:</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Sleeve gastrectomy offers permanent results with fewer maintenance requirements.</p>
                    </div>
                    <div>
                        <h3>Outcome & Recovery</h3>
                        <p>Sleeve gastrectomy results in significant weight loss, improved health, with gradual recovery and lifestyle changes.</p>
                    </div>
                    <div>
                        <h3>Success Rate</h3>
                        <p>The success rate has many factors depending on it, like the stage of the condition, the age of the patient, and the complication of the procedure.</p>
                    </div>
                    <div>
                        <h3>Do’s & Don’ts</h3>
                        <p>Issues mentioned below can arise after Sleeve Gastrectomy:</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Take Supplements</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Eat Small, Frequent Meals</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Don’t Skip Meals</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Don’t Lift Heavy Weights Immediately</p>
                    </div>
                    <div>
                        <h3>Common Questions About Sleeve Gastrectomy</h3>
                        <p>How does sleeve gastrectomy promote weight loss?</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Sleeve gastrectomy reduces stomach size, limiting food intake and inducing weight loss through both restriction and hormonal changes affecting appetite.</p>
                        <p style={{ marginTop: "-1rem" }}>HIs sleeve gastrectomy reversible?</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; No, sleeve gastrectomy is not reversible as a significant portion of the stomach is permanently removed.</p>
                        <p style={{ marginTop: "-1rem" }}>What is the expected weight loss with sleeve gastrectomy?</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Weight loss varies, but individuals may lose a significant amount, often reaching or exceeding 50-60% of excess weight.</p>
                        <p style={{ marginTop: "-1rem" }}>Can I eat normally after sleeve gastrectomy?</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; While the stomach capacity is reduced, individuals can eat normal foods in smaller portions, following dietary guidelines.</p>
                        <p style={{ marginTop: "-1rem" }}>Is sleeve gastrectomy painful?</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Discomfort after surgery is common, but pain is generally manageable with medications.</p>
                    </div>
                    <div>
                        <h3>Myths and Facts About Sleeve Gastrectomy</h3>
                        <p>Myth: Sleeve gastrectomy is only for cosmetic weight loss.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Fact: Sleeve gastrectomy addresses obesity-related health issues, leading to improvements or resolution of conditions like diabetes and hypertension.</p>
                        <p style={{ marginTop: "-1rem" }}>Myth: Sleeve gastrectomy is an easy way to lose weight without effort.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Fact: Successful outcomes require commitment to lifelong lifestyle changes, including dietary modifications and regular exercise.</p>
                        <p style={{ marginTop: "-1rem" }}>Myth: Sleeve gastrectomy leads to constant malnutrition.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Fact: Sleeve gastrectomy does not involve malabsorption, and nutritional deficiencies are less common with proper dietary guidance and supplementation.</p>
                        <p style={{ marginTop: "-1rem" }}>Myth: Sleeve gastrectomy treatment is extremely risky and dangerous.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Fact: While all surgeries carry some risks, sleeve gastrectomy is generally considered safe when performed by experienced surgeons in appropriate candidates</p>
                        <p style={{ marginTop: "-1rem" }}>Myth: I won't be able to enjoy food after sleeve gastrectomy.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Fact: While portion sizes are reduced, individuals can still enjoy a variety of foods, albeit in smaller amounts, and often find a new appreciation for healthier options.</p>
                        <p style={{ marginTop: "-1rem" }}>Myth: Sleeve gastrectomy is a last resort for only extremely obese individuals.</p>
                        <p style={{ marginTop: "-1rem" }}>&#x2022; Fact: It is recommended for individuals with a BMI of 40 or higher, but those with a BMI between 35 and 40 with obesity-related health issues may also be considered.</p>
                    </div>
                </Stack>
            </Stack>
        </>
    )
}