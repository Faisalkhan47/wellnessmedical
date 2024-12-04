import * as React from 'react';
import { Box, Stack } from "@mui/material";
import aboutimage from "./aboutphoto.svg"

export default function About() {
    return (
        <>
            <Box sx={{ marginTop: "-4rem", width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" } }}>
                <Stack style={{ marginTop: "15rem",width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" } }}>
                    <Stack sx={{ marginTop: {xs:"-5rem",sm:"-5rem",md:"4rem",lg:"5rem",xl:'5rem'},width: { xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%" } }}>
                        <img src={aboutimage} style={{ height: "25rem", display: "flex", remalignItems: "center", justifyContent: "center" }} alt="logo" />
                    </Stack>
                    <Stack sx={{ mt: "2rem",width:{xs: "100%", sm: "100%", md: "100%", xl: "100%", lg: "100%"},marginTop:{xs:"-6rem",sm:"5rem",md:"2rem"} }}>
                        <div style={{ height: "3rem" }}>
                            <h1 style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "rgb(20, 13, 13)", fontFamily: '"Poppins", sans-serif', fontWeight: 'bold' }}>Best Medical Tourism Company in India</h1>
                    </div>
                        <Stack >
                            <h2 style={{ marginLeft: "2rem", marginTop: "3rem", }}>About Us!</h2>
                            <p className="container" style={{ fontSize: "20px", marginLeft: {xs:"3rem",md:"4rem",sm:"3rem",lg:"4rem",xl:"4rem"}, marginTop: "1rem"}}>
                                Wellness Health is a leading medical travel consultant company in India, working for many years we are dedicated to assisting foreign patients who seek medical treatment in the country. The company offers comprehensive packages that include both medical treatment and accommodation, ensuring a comfortable and stress-free experience for their clients. Wellness Health prioritizes providing high-quality healthcare services at affordable costs, coupled with excellent support and care throughout the entire process. Their commitment to delivering trouble-free medical travel solutions makes them a trusted partner for international patients seeking medical care in India.
                            </p>
                        </Stack>
                        <Stack>
                            <h2 style={{ marginLeft: "2rem", marginTop: "2rem" }}>The idea behind starting wellness.com</h2>

                            <p className="container" style={{ fontSize: "20px", marginLeft: {xs:"3rem",md:"4rem",sm:"3rem",lg:"4rem",xl:"4rem"} }}>
                                It is natural for anyone to experience illness or encounter serious medical issues at some point. When faced with such situations, people often wonder where they can find quality healthcare and experienced doctors, and how they can access these services. To address these concerns, we established wellness.com, creating a unified platform as a medical consultant company. Our mission is to gather and provide comprehensive information about Indian doctors and hospitals to patients seeking treatment in India. This initiative aims to simplify the process for international patients by offering them reliable resources and guidance, ensuring they rec eive the best possible care during their medical journey.For the past few years, wellness Health has been dedicated to providing the best medical facilities to its medical travelers, helping them improve their healthcare outcomes. Our goal is to ensure the well-being of our patients throughout their entire medical journey. From the moment they contact us to find a suitable doctor, through receiving top-quality treatment at their chosen healthcare destination, to their safe return home, we handle every detail. Patients only need to reach out to us, and we will manage the rest, ensuring a smooth and stress-free experience.
                            </p>
                        </Stack>
                        <Stack>
                            <h2 style={{ marginLeft: "2rem", marginTop: "2rem" }}>What makes us different from others?</h2>
                            <h3 style={{ marginLeft: "2rem", marginTop: "1rem" }}>Several factors distinguish wellness Health from other medical tourism companies:</h3>
                        
                            <p className="container" style={{ fontSize: "20px",marginLeft: {xs:"3rem",md:"4rem",sm:"3rem",lg:"4rem",xl:"4rem"}, marginTop: "0.5rem" }}>
                                <b> &#8227; Comprehensive Services:</b> We offer a complete package that includes medical treatment, accommodation, and travel arrangements, ensuring a hassle-free experience for our patients.
                            </p>
                            <p className="container" style={{ fontSize: "20px", marginLeft: {xs:"3rem",md:"4rem",sm:"3rem",lg:"4rem",xl:"4rem"}, marginTop: "0.5rem" }}>
                                <b> &#8227; Quality and Affordability:</b> We prioritize providing high-quality healthcare services at competitive prices, making top-tier medical treatment accessible to a wider range of patients.
                            </p>
                            <p className="container" style={{ fontSize: "20px", marginLeft: {xs:"3rem",md:"4rem",sm:"3rem",lg:"4rem",xl:"4rem"}, marginTop: "0.5rem" }}>
                                <b> &#8227; Experienced Network:</b>  Our extensive network of experienced doctors and renowned hospitals in India ensures that patients receive the best possible care.
                            </p>
                            <p className="container" style={{ fontSize: "20px", marginLeft: {xs:"3rem",md:"4rem",sm:"3rem",lg:"4rem",xl:"4rem"}, marginTop: "0.5rem" }}>
                                <b> &#8227; Personalized Care:</b>  We offer personalized attention to each patient, tailoring our services to meet their specific medical and logistical needs.
                            </p>
                            <p className="container" style={{ fontSize: "20px", marginLeft: {xs:"3rem",md:"4rem",sm:"3rem",lg:"4rem",xl:"4rem"}, marginTop: "0.5rem" }}>
                                <b> &#8227; Seamless Coordination:</b>  From initial consultation to post-treatment follow-up, we coordinate every aspect of the patient’s journey, ensuring smooth and efficient processes.
                            </p>
                            <p className="container" style={{ fontSize: "20px", marginLeft: {xs:"3rem",md:"4rem",sm:"3rem",lg:"4rem",xl:"4rem"}, marginTop: "0.5rem" }}>
                                <b> &#8227; Cultural Sensitivity:</b>  We understand the diverse cultural needs of international patients and provide services that respect and accommodate these differences.
                            </p>
                            <p className="container" style={{ fontSize: "20px", marginLeft: {xs:"3rem",md:"4rem",sm:"3rem",lg:"4rem",xl:"4rem"}, marginTop: "0.5rem" }}>
                                <b> &#8227; Trusted Expertise:</b>  With years of experience in medical travel consultancy, wellness Health has established itself as a reliable and trusted partner for patients seeking medical care in India.
                            </p>
                            <h3 style={{ marginLeft: "2rem", marginTop: "1rem" }}>These elements collectively set us apart, making wellness Health a preferred choice for medical travelers worldwide.</h3>
                        </Stack>
                        <Stack>
                            <h2 style={{ marginLeft: "2rem", marginTop: "2rem" }}>Wellness provides Second medical opinion:</h2>

                            <p className="container" style={{ fontSize: "20px", marginLeft: {xs:"3rem",md:"4rem",sm:"3rem",lg:"4rem",xl:"4rem"}, marginTop: "1rem"}}>
                                When anyone receives a diagnosis, it is natural to feel anxious. There is often a need to consult another doctor to clear doubts and gain reassurance. At wellness, we connect you with multiple doctors, providing you with all the information you need and addressing any uncertainties. We offer a comprehensive review of your diagnosis and treatment plan, helping you make informed and confident medical decisions. Our commitment is to support you through every step of your healthcare journey, ensuring you receive the best possible care and guidance.
                            </p>
                        </Stack>
                        <Stack>
                            <h2 style={{ marginLeft: "2rem", marginTop: "2rem" }}>Accommodation and Medical Visa Services:</h2>

                            <p className="container" style={{ fontSize: "20px", marginLeft: {xs:"3rem",md:"4rem",sm:"3rem",lg:"4rem",xl:"4rem"}, marginTop: "1rem" }}>
                                At wellness, we ensure a comfortable stay for our patients in India by offering a range of services to make their experience as smooth as possible. We provide local SIM cards, guidebooks, and on-demand local guides. We assist in selecting the right hotels to suit your preferences and budget.Moreover, we offer local translators who are available to help you not only with hospital visits and medical treatments but also with tourism activities. Our services extend to helping patients obtain medical visas, including providing visa invitation letters and guidance on the application process in their home countries. For eligible countries, we offer online visa application services for e-visas, making the process even more convenient.These additional services ensure that our patients have everything they need for a comfortable and worry-free stay in India, allowing them to focus solely on their health and recovery.Inbound Tourism:India is renowned not only for its excellent healthcare services but also for its rich heritage, vibrant culture, and fascinating travel destinations. At wellness, we believe in holistic healing, which includes experiencing the beauty and diversity of India. When you visit India for your treatment, we ensure you do not miss the incredible sights and experiences the country has to offer.We provide all the information and amenities you need to explore India’s top destinations, managing your complete itinerary to ensure a balanced experience of healthcare and tourism. From historical landmarks and cultural festivals to scenic landscapes and culinary delights, we help you heal from within by immersing you in the wonders of India. Your journey with us will be both a path to recovery and an unforgettable cultural adventure.
                            </p>
                        </Stack>
                        <Stack>
                            <h2 style={{ marginLeft: "2rem", marginTop: "2rem" }}>OUR SERVICES OFFERED</h2>

                            <p className="container" style={{ fontSize: "20px", marginLeft: {xs:"3rem",md:"4rem",sm:"3rem",lg:"4rem",xl:"4rem"}, marginTop: "0.5rem" }}>
                                <b>&#9642;</b> Top medical services at an affordable cost
                            </p>
                            <p className="container" style={{ fontSize: "20px", marginLeft: {xs:"3rem",md:"4rem",sm:"3rem",lg:"4rem",xl:"4rem"}, marginTop: "0.5rem" }}>
                                <b>&#9642;</b> Flight and accommodation booking
                            </p>
                            <p className="container" style={{ fontSize: "20px", marginLeft: {xs:"3rem",md:"4rem",sm:"3rem",lg:"4rem",xl:"4rem"}, marginTop: "0.5rem" }}>
                                <b>&#9642;</b> Translation services
                            </p>
                            <p className="container" style={{ fontSize: "20px", marginLeft: {xs:"3rem",md:"4rem",sm:"3rem",lg:"4rem",xl:"4rem"}, marginTop: "0.5rem" }}>
                                <b>&#9642;</b> Language competency with- English, Arabic, Russian, Bengali, Uzbeki, Spanish, French etc
                            </p>
                            <p className="container" style={{ fontSize: "20px", marginLeft: {xs:"3rem",md:"4rem",sm:"3rem",lg:"4rem",xl:"4rem"}, marginTop: "0.5rem" }}>
                                <b>&#9642;</b> Guest house with Kitchen included
                            </p>
                            <p className="container" style={{ fontSize: "20px", marginLeft: {xs:"3rem",md:"4rem",sm:"3rem",lg:"4rem",xl:"4rem"}, marginTop: "0.5rem" }}>
                                <b>&#9642;</b> Guest houses nearby to the hospitals
                            </p>
                            <p className="container" style={{ fontSize: "20px", marginLeft: {xs:"3rem",md:"4rem",sm:"3rem",lg:"4rem",xl:"4rem"}, marginTop: "0.5rem" }}>
                                <b>&#9642;</b> Helpful and polite attendants
                            </p>
                            <p className="container" style={{ fontSize: "20px", marginLeft: {xs:"3rem",md:"4rem",sm:"3rem",lg:"4rem",xl:"4rem"}, marginTop: "0.5rem" }}>
                                <b>&#9642;</b> In-house cab services are available
                            </p>
                            <p className="container" style={{ fontSize: "20px", marginLeft: {xs:"3rem",md:"4rem",sm:"3rem",lg:"4rem",xl:"4rem"}, marginTop: "0.5rem"}}>
                                <b>&#9642;</b> Affordable prices for long stay
                            </p>
                            <p className="container" style={{ fontSize: "20px", marginLeft: {xs:"3rem",md:"4rem",sm:"3rem",lg:"4rem",xl:"4rem"}, marginTop: "0.5rem" }}>
                                <b>&#9642;</b> Free Wi-Fi & legal SIM card
                            </p>
                            <p className="container" style={{ fontSize: "20px", marginLeft: {xs:"3rem",md:"4rem",sm:"3rem",lg:"4rem",xl:"4rem"}, marginTop: "0.5rem" }}>
                                <b>&#9642;</b> Concierge service
                            </p>
                            <p className="container" style={{ fontSize: "20px", marginLeft: {xs:"3rem",md:"4rem",sm:"3rem",lg:"4rem",xl:"4rem"}, marginTop: "0.5rem" }}>
                                <b>&#9642;</b> Visa assistance
                            </p>
                            <p className="container" style={{ fontSize: "20px", marginLeft: {xs:"3rem",md:"4rem",sm:"3rem",lg:"4rem",xl:"4rem"}, marginTop: "0.5rem" }}>
                                <b>&#9642;</b> Complimentary airport pick & drop
                            </p>
                            <p className="container" style={{ fontSize: "20px", marginLeft: {xs:"3rem",md:"4rem",sm:"3rem",lg:"4rem",xl:"4rem"}, marginTop: "0.5rem", marginBottom: "1rem" }}>
                                <b>&#9642;</b> Sightseeing
                            </p>
                        </Stack>

                    </Stack>
                </Stack>

            </Box>
        </>
    )
}

