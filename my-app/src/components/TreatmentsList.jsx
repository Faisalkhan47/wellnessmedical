import { Box, Stack, Typography } from "@mui/material";
import BariaticSurgery from "./bariatictreatmentscomponents/BariaticSurgery";
import Cardiology from "./cardiologytreatmentcomponents/Cardiology";
import Cosmetology from "./cosmetologytreatmentcomponents/Cosmetology";
import Endocrinology from "./endocrinologycomponents/Endocrinology";
import Gynecology from "./gynecologycomponents/Gynecology";
import Nephrology from "./nephrologytreatmentcomponents/Nephrology";
import Neurology from "./neurologycomponents/Neurology";
import Oncology from "./oncologycomponents/Oncology";
import Orthopedics from "./Orthopedicscomponents/Orthopedics";
import IVFFertilityTreatment from "./IVF&FertilityTreatmentcomponents/IVF&FertilityTreatment";
import Gastroenterology from "./Gastroenterologycomponents/Gastroenterology";
import PlasticCosmeticSurgery from "./Plastic&CosmeticSurgery/Plastic&CosmeticSurgery";
import UrologyTreatment from "./UrologyTreatmentcomponents/UrologyTreatment";
import ColorectalMedicine from "./ColorectalMedicinecomponents/ColorectalMedicine";
import EarNoseandThroat from "./Ear,NoseandThroat(ENT)components/EarNoseandThroat(ENT)";
import VascularMedicine from "./VascularMedicinecomponents/VascularMedicine";
import Dermatology from "./Dermatologycomponents/Dermatology";
import GeneralSurgery from "./GeneralSurgerycomponents/GeneralSurgery";
import Neurosurgery from "./Neurosurgerycomponents/Neurosurgery";
export default function Treatments() {
    return (
        <>
          <Box sx={{marginTop:"11rem",width: { xs: "100%", sm: "100%", md: "100%", xl: "95%", lg: "95%" }}}>
            <Stack className="treatmentBack" sx={{ marginBottom:"2rem" }}>
            <Typography
      variant="h4"
      component="h4"
      sx={{
        marginTop: {
          xs: "2rem",
          sm: "4rem",
          md: "5rem", 
          lg: "6rem", 
          xl: "6rem", 
        },
        textAlign:"center",
        fontFamily: '"Poppins", sans-serif',
        fontWeight:"bold"
      }}
    >
      Affordable and Accessible Treatments
    </Typography>
                <BariaticSurgery/>
                <Cardiology/>
                <Cosmetology/>
                <Endocrinology/>
                <Gynecology/>
                <Nephrology/>
                <Neurology/>
                <Oncology/>
                <Orthopedics/>
                <IVFFertilityTreatment/>
                <Gastroenterology/>
                <PlasticCosmeticSurgery/>
                <UrologyTreatment/>
                <ColorectalMedicine/>
                <EarNoseandThroat/>
                <VascularMedicine/>
                <Dermatology/>
                <GeneralSurgery/>
                <Neurosurgery/>
            </Stack>
            </Box>
        </>
    )
}