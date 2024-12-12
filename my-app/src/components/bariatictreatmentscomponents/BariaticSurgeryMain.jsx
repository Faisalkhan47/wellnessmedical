import { Box, Stack } from "@mui/material";
import BariatricSurgeryMain from './BariatricSurgeryMain.jpg'
export default function BariaticSurgeryMain() {
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
                            src={BariatricSurgeryMain}
                            alt="Bariatric Surgery Main"
                        />
                    </Box>

                    <Box
                        sx={{
                            marginTop: { xs: '13rem', sm: '13rem', md: '2rem' },
                            width: { xs: '100%', sm: '70%', md: '50%', lg: '60%', xl: '60%' },
                            marginLeft: { xs: '1rem', md: '3rem' },
                        }}
                    >
                        <h3 style={{ fontWeight: 'bold', color: 'black' }}>
                            Bariatric Surgery Treatment
                        </h3>
                        <p style={{ textAlign: 'start', marginTop: '1rem', color: 'black' }}>
                            Bariatric surgery is a medical procedure designed to help individuals with
                            severe obesity achieve substantial weight loss and improve overall health.
                            It is typically recommended for people who struggle to lose weight through
                            conventional methods like diet, exercise, or medication, especially if they
                            face serious health risks related to obesity, such as type 2 diabetes, high
                            blood pressure, or sleep apnea.
                            <br />
                            <br />
                            The procedure alters the digestive system to reduce food intake, nutrient
                            absorption, or both. Common types of bariatric surgery include gastric
                            bypass, which creates a smaller stomach pouch and reroutes part of the
                            small intestine to decrease calorie absorption, and sleeve gastrectomy,
                            which involves removing a large portion of the stomach to reduce appetite
                            and limit food intake. Other options, like adjustable gastric banding and
                            biliopancreatic diversion with duodenal switch, provide additional
                            alternatives based on individual needs.
                            <br />
                            <br />
                            Bariatric surgery offers significant health benefits, including long-term
                            weight loss, improvement in obesity-related conditions, enhanced mobility,
                            and better quality of life. However, it requires a strong commitment to
                            post-surgery lifestyle changes, including a healthy diet, regular exercise,
                            and lifelong medical follow-ups. While effective, the procedure carries
                            potential risks and should only be considered under professional medical
                            guidance.
                        </p>
                    </Box>

                </Stack>
            </Stack>
        </>
    )
}