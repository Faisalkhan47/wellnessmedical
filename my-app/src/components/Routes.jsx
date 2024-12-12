import * as React from 'react';
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar'; 
import Home from "./Home";
import About from './About';
import Treatments from './TreatmentsList';
import HospitalList from './HospitalList';
import ContactUs from './ContactUs';
import Footer from './Footer';
import HospitalDetails from './HospitalDetails';
import DoctorsList  from './DoctorsList';
import DoctorsDetails from './DoctorsDetails';
import BariaticSurgeryMain from './bariatictreatmentscomponents/BariaticSurgeryMain';
import GastricBalloonTreatment from './bariatictreatmentscomponents/GastricBalloonTreatment';
import BiliopancreaticDiversionwithDuodenalSwitchMain from './bariatictreatmentscomponents/BiliopancreaticDiversionwithDuodenalSwitch';
import PrimaryObesitySurgeryEndolumenal from './bariatictreatmentscomponents/PrimaryObesitySurgeryEndolumenal';
import GastricBandSurgery from './bariatictreatmentscomponents/GastricBandSurgery';
import GastricByPassSurgery from './bariatictreatmentscomponents/Gastricbypasssurgery';
import GastricSleeveTreatment from './bariatictreatmentscomponents/GastricSleeveTreatment';
import SleeveGastrectomy from './bariatictreatmentscomponents/SleeveGastrectomy';
import GastricPlication from './bariatictreatmentscomponents/GastricPlication';
import CardiologyMain from './cardiologytreatmentcomponents/CardiologyMain';
import MitralValveReplacement from './cardiologytreatmentcomponents/MitralValveReplacement';
import AbdominalAorticAneurysmRepair from './cardiologytreatmentcomponents/Aaarepair';
import CarotidEndarterectomy from './cardiologytreatmentcomponents/Carotid';
import SurgeryforTranspositionoftheGreatArteries from './cardiologytreatmentcomponents/SurgeryforTranspositionoftheGreatArteries';
import CoronaryAngioplasty from './cardiologytreatmentcomponents/CoronaryAngioplasty';
import IntraAorticBalloonPumpInsertion from './cardiologytreatmentcomponents/IntraAorticBalloon';
import HeartValveReplacement from './cardiologytreatmentcomponents/HeartValveReplacement';
import ImplantableCardioverterDefibrillator from './cardiologytreatmentcomponents/ImplantableCardioverterDefibrillator';
import Angiography from './cardiologytreatmentcomponents/Angiography';
import CardiologyTreatmentinIndia from './cardiologytreatmentcomponents/CardiologyTreatmentinIndia';
import DoubleValveReplacement from './cardiologytreatmentcomponents/DoubleValveReplacement';
import AngioplastywithStent from './cardiologytreatmentcomponents/AngioplastywithStent';
import OpenHeartSurgeryinIndia from './cardiologytreatmentcomponents/OpenHeartSurgeryinIndia';
import AorticValveReplacement from './cardiologytreatmentcomponents/AorticValveReplacement';
import ValveSurgeryInIndia from './cardiologytreatmentcomponents/ValveSurgeryInIndia';
import OpenHeartSurgery from './cardiologytreatmentcomponents/OpenHeartSurgery';
import PediatricCardiologyTreatmentInIndia from './cardiologytreatmentcomponents/PediatricCardiologyTreatmentInIndia';
import CoronaryArteryBypassGraft from './cardiologytreatmentcomponents/CoronaryArteryBypassGraft';
import PaediatricCardiacSurgeryInIndia from './cardiologytreatmentcomponents/PaediatricCardiacSurgeryInIndia';
import Angioplasty from './cardiologytreatmentcomponents/Angioplasty';
import AorticStenosisTreatment from './cardiologytreatmentcomponents/AorticStenosisTreatment';
import AorticValveRepair from './cardiologytreatmentcomponents/AorticValveRepair';
import AorticValveReplacementMechanical from './cardiologytreatmentcomponents/AorticValveReplacement(MechanicalImplant)';
import AorticValveReplacementAVR from './cardiologytreatmentcomponents/AorticValveReplacement(AVR)';
import CoronaryArteryAngiography from './cardiologytreatmentcomponents/CoronaryArteryAngiography(CAG)';
import PacemakerImplantation from './cardiologytreatmentcomponents/PacemakerImplantation';
import TranscatheterAorticValveImplantation from './cardiologytreatmentcomponents/TranscatheterAorticValveImplantation(TAVI)';
import VentricularSeptalDefectClosure from './cardiologytreatmentcomponents/VentricularSeptalDefectClosure';
import AtrialSeptalDefectClosure from './cardiologytreatmentcomponents/AtrialSeptalDefect(ASD)Closure';
import ImplantableCardioverterDefibrillatorImplantation from './cardiologytreatmentcomponents/ImplantableCardioverterDefibrillator(ICD)Implantation';
import HeartArrhythmiaCatheterAblation from './cardiologytreatmentcomponents/HeartArrhythmiaCatheterAblation';
import ElectrophysiologyStudy from './cardiologytreatmentcomponents/ElectrophysiologyStudy(EPS)';
import MitralValveRepair from './cardiologytreatmentcomponents/MitralValveRepair';
import DoubleValveReplacementSecond from './cardiologytreatmentcomponents/DoubleValveReplacement(DVR).';
import AtrioventricularSeptalDefectTreatment from './cardiologytreatmentcomponents/AtrioventricularSeptalDefect(ASD)Treatment';
import PercutaneousTransluminalCoronaryAngioplasty from './cardiologytreatmentcomponents/PercutaneousTransluminalCoronaryAngioplasty(PTCA)';
import PatentDuctusArteriosusClosure from './cardiologytreatmentcomponents/PatentDuctusArteriosus(PDA)Closure';
import MyocardialInfarctionTreatment from './cardiologytreatmentcomponents/MyocardialInfarctionTreatment..jsx';
import CardiacResynchronisationTherapyDeviceImplantation from './cardiologytreatmentcomponents/CardiacResynchronisationTherapy(CRT)DeviceImplantation';
import RightHeartCatheterization from './cardiologytreatmentcomponents/RightHeartCatheterization';
import HeartBiopsyTreatment from './cardiologytreatmentcomponents/HeartBiopsyTreatment';
import SurgeryforTetralogyofFallot from './cardiologytreatmentcomponents/SurgeryforTetralogyofFallot (TOF)';
import CardioversionTreatment from './cardiologytreatmentcomponents/CardioversionTreatment';
import MinimallyInvasiveDirectCoronaryArteryBypass from './cardiologytreatmentcomponents/MinimallyInvasiveDirectCoronaryArteryBypass(MIDCAB)';
import BentallProcedure from './cardiologytreatmentcomponents/BentallProcedure';
import CoronarAngiographyandLeftVentriculography from './cardiologytreatmentcomponents/CoronarAngiographyandLeftVentriculography';
import CardiothoracicSurgery from './cardiologytreatmentcomponents/CardiothoracicSurgery';
import CoronaryArteryDiseaseTreatment from './cardiologytreatmentcomponents/CoronaryArteryDisease(CAD)Treatment';
import AcuteDecompensatedHeartFailureTreatment from './cardiologytreatmentcomponents/AcuteDecompensatedHeartFailureTreatment';
import HeartTumorTreatment from './cardiologytreatmentcomponents/HeartTumorTreatment';
import AtrioventricularFistulaTreatment from './cardiologytreatmentcomponents/AtrioventricularFistulaTreatment';
import MyocarditisTreatment from './cardiologytreatmentcomponents/MyocarditisTreatment';
import PericarditisTreatment from './cardiologytreatmentcomponents/PericarditisTreatment';
import CoronaryStealTreatment from './cardiologytreatmentcomponents/CoronaryStealTreatment';
import EndocarditisTreatment from './cardiologytreatmentcomponents/EndocarditisTreatment';
import RenalDenervationTherapy from './cardiologytreatmentcomponents/RenalDenervationTherapy';
import AtherosclerosisTreatment from './cardiologytreatmentcomponents/AtherosclerosisTreatment';
import CryoablationforAtrialFibrillation from './cardiologytreatmentcomponents/CryoablationforAtrialFibrillation';
import RoemheldSyndrome from './cardiologytreatmentcomponents/RoemheldSyndrome';
import SpontaneousCoronaryArteryDissectionTreatment from './cardiologytreatmentcomponents/SpontaneousCoronaryArteryDissection(SCAD)Treatment';
import VentricularAneurysmTreatment from './cardiologytreatmentcomponents/VentricularAneurysmTreatment.';
import DiastolicHeartFailureTreatment from './cardiologytreatmentcomponents/DiastolicHeartFailureTreatment';
import DuroziezsDiseaseTreatment from './cardiologytreatmentcomponents/Duroziez\'sDiseaseTreatment';
import EisenmengersSyndromeTreatment from './Eisenmenger\'sSyndromeTreatment';
import GiantCellMyocarditisTreatment from './cardiologytreatmentcomponents/GiantCellMyocarditisTreatment';
import ShonesSyndromeTreatment from './cardiologytreatmentcomponents/Shone\'sSyndromeTreatment';
import TreatmentforMyocardialRupture from './cardiologytreatmentcomponents/TreatmentforMyocardialRupture';
import MyocardialBridgeTreatment from './cardiologytreatmentcomponents/MyocardialBridgeTreatment';
import TricuspidAtresiaTreatment from './cardiologytreatmentcomponents/TricuspidAtresiaTreatment';
import CardiacAmyloidosisTreatment from './cardiologytreatmentcomponents/CardiacAmyloidosisTreatment';
import CoxsackievirusInducedCardiomyopathyTreatment from './cardiologytreatmentcomponents/Coxsackievirus-InducedCardiomyopathyTreatment';
import EndocardialFibroelastosisTreatment from './cardiologytreatmentcomponents/EndocardialFibroelastosis(EFE)Treatment';
import HighOutputHeartFailureTreatment from './cardiologytreatmentcomponents/HighOutputHeartFailureTreatment';
import KeshanDiseaseTreatment from './cardiologytreatmentcomponents/KeshanDiseaseTreatment';
import KounisSyndromeTreatment from './cardiologytreatmentcomponents/KounisSyndromeTreatment';
import PancarditisTreatment from './cardiologytreatmentcomponents/PancarditisTreatment';
import FontanProcedure from './cardiologytreatmentcomponents/FontanProcedure';
import LeftVentricularAssistDeviceImplantation from './cardiologytreatmentcomponents/LeftVentricularAssistDevice(LVAD)Implantation';
import SurgeryforHypoplasticLeftHeartSyndrome from './cardiologytreatmentcomponents/SurgeryforHypoplasticLeftHeartSyndrome';
import GlennShunt from './cardiologytreatmentcomponents/GlennShunt';
import TotalAnomalousPulmonaryVenousConnectionSurgery from './cardiologytreatmentcomponents/TotalAnomalousPulmonaryVenousConnection(TAPVC)Surgery';
import TaussigShunt from './cardiologytreatmentcomponents/TaussigShunt(BTShunt)';
import SurgeryforCoarctationoftheAorta from './cardiologytreatmentcomponents/SurgeryforCoarctationoftheAorta';
import TricuspidValveRepair from './cardiologytreatmentcomponents/TricuspidValve(TV) Repair';
import BalloonMitralValvuloplasty from './cardiologytreatmentcomponents/BalloonMitralValvuloplasty';
import AortopulmonaryWindowRepair from './cardiologytreatmentcomponents/AortopulmonaryWindowRepair';
import BalloonPulmonaryValvuloplasty from './cardiologytreatmentcomponents/BalloonPulmonaryValvuloplasty';
import HypertensionTreatment from './cardiologytreatmentcomponents/HypertensionTreatment';
import PatentForamenOvaleClosure from './cardiologytreatmentcomponents/PatentForamenOvale(PFO)Closure';
import PulmonaryArteryBanding from './cardiologytreatmentcomponents/PulmonaryArteryBanding(PAB)';
import RastelliProcedure from './cardiologytreatmentcomponents/RastelliProcedure';
import SubaorticMembraneExcision from './cardiologytreatmentcomponents/SubaorticMembraneExcision';
import CardiacAsthmaTreatment from './cardiologytreatmentcomponents/CardiacAsthmaTreatment';
import HeartTransplant from './cardiologytreatmentcomponents/HeartTransplant';
import CoronaryArteryBypass from './cardiologytreatmentcomponents/CoronaryArteryBypass';
import CosmetologyMain from './cosmetologytreatmentcomponents/CosmetologyMain';
import ChemicalPeel from './cosmetologytreatmentcomponents/ChemicalPeel';
import LaserHairRemoval from './cosmetologytreatmentcomponents/LaserHairRemoval';
import LaserTattooRemoval from './cosmetologytreatmentcomponents/LaserTattooRemoval.jsx';
import LaserSkinResurfacing from './cosmetologytreatmentcomponents/LaserSkinResurfacing.jsx';
import IntensePulsedLightSkinTreatment from './cosmetologytreatmentcomponents/IntensePulsedLight(IPL)SkinTreatment.jsx';
import SkinTighteningTreatment from './cosmetologytreatmentcomponents/SkinTighteningTreatment.jsx';
import PlateletRichPlasmaFacialTreatment from './cosmetologytreatmentcomponents/PlateletRichPlasma(PRP)FacialTreatment.jsx';
import Microdermabrasion from './cosmetologytreatmentcomponents/Microdermabrasion.jsx';
import CelluliteTreatment from './cosmetologytreatmentcomponents/CelluliteTreatment.jsx';
import SkinLightening from './cosmetologytreatmentcomponents/SkinLightening.jsx';
import SkinNeedlingTreatment from './cosmetologytreatmentcomponents/SkinNeedlingTreatment.jsx';
import Carboxitherapy from './cosmetologytreatmentcomponents/Carboxitherapy.jsx';
import BlemishRemoval from './cosmetologytreatmentcomponents/BlemishRemoval.jsx';
import SkinToneAdjustment from './cosmetologytreatmentcomponents/SkinToneAdjustment.jsx';
import StemCellFacelift from './cosmetologytreatmentcomponents/StemCellFacelift.jsx';
import HandRejuvenation from './cosmetologytreatmentcomponents/HandRejuvenation.jsx';
import PoreReductionTreatment from './cosmetologytreatmentcomponents/PoreReductionTreatment.jsx';
import Photorejuvenation from './Photorejuvenation.jsx';
import IPLHairRemoval from './cosmetologytreatmentcomponents/IPLHairRemoval.jsx';
import EndocrinologyMain from './endocrinologycomponents/EndocrinologyMain.jsx';
import CongenitalAdrenalHyperplasiaTreatment from './endocrinologycomponents/CongenitalAdrenalHyperplasiaTreatment.jsx';
import HyperthyroidismTreatment from './endocrinologycomponents/HyperthyroidismTreatment.jsx';
import PolycysticOvarySyndromeTreatment from './endocrinologycomponents/PolycysticOvarySyndrome(PCOS)Treatment.jsx';
import GynecologyMain from './gynecologycomponents/GynecologyMain.jsx';
import BartholinsCystTreatment from './gynecologycomponents/BartholinsCystTreatment.jsx';
import Colposcopy from './gynecologycomponents/Colposcopy.jsx';
import Hymenoplasty from './gynecologycomponents/Hymenoplasty.jsx';
import BreastBiopsy from './gynecologycomponents/BreastBiopsy.jsx';
import CervicalCautery from './gynecologycomponents/CervicalCautery.jsx';
import EndometriosisTreatment from './gynecologycomponents/EndometriosisTreatment.jsx';
import DilationandCurettage from './gynecologycomponents/DilationandCurettage.jsx';
import Myomectomy from './gynecologycomponents/Myomectomy.jsx';
import FemaleSterilization from './gynecologycomponents/FemaleSterilization.jsx';
import OvarianCystRemoval from './gynecologycomponents/OvarianCystRemoval.jsx';
import Oophorectomy from './gynecologycomponents/Oophorectomy.jsx';
import ContraceptiveImplant from './gynecologycomponents/ContraceptiveImplant.jsx';
import CesareanSection from './gynecologycomponents/CesareanSection.jsx';
import TubalLigationReversal from './gynecologycomponents/TubalLigationReversal.jsx';
import Vaginoplasty from './gynecologycomponents/Vaginoplasty.jsx';
import EctopicPregnancySurgery from './gynecologycomponents/EctopicPregnancySurgery.jsx';
import GynecologicLaparoscopy from './gynecologycomponents/GynecologicLaparoscopy.jsx';
import PelvicFloorRepair from './gynecologycomponents/PelvicFloorRepair.jsx';
import LaparoscopySurgeryInIndia from './gynecologycomponents/LaparoscopySurgeryInIndia.jsx';
import Hysterectomy from './gynecologycomponents/Hysterectomy.jsx';
import CervicalConization from './gynecologycomponents/CervicalConization.jsx';
import EndometrialAblation from './gynecologycomponents/EndometrialAblation.jsx';
import OvarianTumorRemoval from './gynecologycomponents/OvarianTumorRemoval.jsx';
import CervicalBiopsy from './gynecologycomponents/CervicalBiopsy.jsx';
import UterineProlapseSurgery from './gynecologycomponents/UterineProlapseSurgery.jsx';
import CystoceleRepair from './gynecologycomponents/CystoceleRepair.jsx';
import IntrauterineDevicePlacement from './gynecologycomponents/IntrauterineDevice(IUD)Placement.jsx';
import VaginalVaultProlapseSurgery from './gynecologycomponents/VaginalVaultProlapseSurgery.jsx';
import EndometrialBiopsy from './gynecologycomponents/EndometrialBiopsy.jsx';
import HormoneReplacementTherapy from './gynecologycomponents/HormoneReplacementTherapy(HRT).jsx';
import Hysteroscopy from './gynecologycomponents/Hysteroscopy.jsx';
import VaginalChildbirth from './gynecologycomponents/VaginalChildbirth.jsx';
import PelvicAdhesiolysis from './gynecologycomponents/PelvicAdhesiolysis.jsx';
import CervicalPolypRemoval from './gynecologycomponents/CervicalPolypRemoval.jsx';
import VulvalBiopsy from './gynecologycomponents/VulvalBiopsy.jsx';
import AntenatalCare from './gynecologycomponents/AntenatalCare(ANC).jsx';
import PessaryPlacement from './gynecologycomponents/PessaryPlacement.jsx';
import FetalEchocardiography from './gynecologycomponents/FetalEchocardiography.jsx';
import IntrauterineDeviceRemoval from './gynecologycomponents/IntrauterineDevice(IUD)Removal.jsx';
import Vaginectomy from './gynecologycomponents/Vaginectomy.jsx';
import Hysterosonography from './gynecologycomponents/Hysterosonography.jsx';
import Hymenotomy from './gynecologycomponents/Hymenotomy.jsx';
import UterosacralNerveAblation from './gynecologycomponents/UterosacralNerveAblation.jsx';
import VulvalSkinTreatment from './gynecologycomponents/VulvalSkinTreatment.jsx';
import CervicalCerclage from './gynecologycomponents/CervicalCerclage.jsx';
import Amniocentesis from './gynecologycomponents/Amniocentesis.jsx';
import PelvicFloorElectricalStimulator from './gynecologycomponents/PelvicFloorElectricalStimulator.jsx';
import PresacralNeurectomy from './gynecologycomponents/PresacralNeurectomy.jsx';
import VaginismusTreatment from './gynecologycomponents/VaginismusTreatment.jsx';
import UrodynamicEvaluation from './gynecologycomponents/UrodynamicEvaluation.jsx';
import Vulvectomy from './gynecologycomponents/Vulvectomy.jsx';
import EpisiotomyRepair from './gynecologycomponents/EpisiotomyRepair.jsx';
import Cardiotocography from './gynecologycomponents/Cardiotocography(CTG).jsx';
import OvarianTranspositionSurgery from './gynecologycomponents/OvarianTranspositionSurgery.jsx';
import MolarPregnancyTreatment from './gynecologycomponents/MolarPregnancyTreatment.jsx';
import FetalSurgery from './gynecologycomponents/FetalSurgery.jsx';
import Microdochectomy from './gynecologycomponents/Microdochectomy.jsx';
import UterineArteryEmbolization from './gynecologycomponents/UterineArteryEmbolization(UAE).jsx';
import Robotichysterectomy from './gynecologycomponents/Robotichysterectomy.jsx';
import Vaginalhysterectomy from './gynecologycomponents/Vaginalhysterectomy.jsx';
import FibroidRemoval from './gynecologycomponents/FibroidRemoval.jsx';
import UterusTransplant from './gynecologycomponents/UterusTransplant.jsx';
import HydronephrosisTreatment from './nephrologytreatmentcomponents/HydronephrosisTreatment(Pyeloplasty).jsx';
import KidneyDialysis from './nephrologytreatmentcomponents/KidneyDialysis.jsx';
import KidneySurgery from './nephrologytreatmentcomponents/KidneySurgery.jsx';
import KidneyTreatmentinIndia from './nephrologytreatmentcomponents/KidneyTreatmentinIndia.jsx';
import KidneyTransplant from './nephrologytreatmentcomponents/KidneyTransplant.jsx';
import KidneyStonesTreatment from './nephrologytreatmentcomponents/KidneyStonesTreatment.jsx';
import LaparoscopicKidneyTransplantPatients from './nephrologytreatmentcomponents/LaparoscopicKidneyTransplantPatients(KTP).jsx';
import KidneyCystTreatment from './nephrologytreatmentcomponents/KidneyCystTreatment.jsx';
import KidneyCancerTreatment from './nephrologytreatmentcomponents/KidneyCancerTreatment.jsx';
import NephrologyMain from './nephrologytreatmentcomponents/NephrologyMain.jsx';
import NeurologyMain from './neurologycomponents/NeurologyMain.jsx';
import BellsPalsyTreatment from './neurologycomponents/Bell\'sPalsyTreatment.jsx';
import CaudaEquinaSyndromeTreatment from './neurologycomponents/CaudaEquinaSyndromeTreatment.jsx';
import EpilepsyTreatment from './neurologycomponents/EpilepsyTreatment.jsx';
import PediatricNeurologyTreatmentinIndia from './neurologycomponents/PediatricNeurologyTreatmentinIndia.jsx';
import NeurointerventionalRadiologyTreatmentinIndia from './neurologycomponents/NeurointerventionalRadiologyTreatmentinIndia.jsx';
import CerebralPalsyManagement from './neurologycomponents/CerebralPalsyManagement.jsx';
import MultipleSclerosisManagement from './neurologycomponents/MultipleSclerosis(MS)Management.jsx';
import ParkinsonsDiseaseTreatment from './neurologycomponents/Parkinson\'sDiseaseTreatment.jsx';
import MigraineTreatment from './neurologycomponents/MigraineTreatment.jsx';
import NeurologicalRehabilitation from './neurologycomponents/NeurologicalRehabilitation.jsx';
import DementiaManagement from './neurologycomponents/DementiaManagement.jsx';
import ChronicCerebrospinalVenousInsufficiencyTreatment from './neurologycomponents/ChronicCerebrospinalVenousInsufficiency(CCSVI)Treatment.jsx';
import VentriculoperitonealShunting from './neurologycomponents/VentriculoperitonealShunting(VP).jsx';
import PainManagement from './neurologycomponents/PainManagement.jsx';
import OncologyMain from './oncologycomponents/OncologyMain.jsx';
import AdrenalCancerTreatment from './oncologycomponents/AdrenalCancerTreatment.jsx';
import ProtonTreatmentTherapy from './oncologycomponents/ProtonTreatmentTherapy.jsx';
import PlasmacytomaTreatment from './oncologycomponents/PlasmacytomaTreatment.jsx';
import MixedGliomaTreatment from './oncologycomponents/MixedGliomaTreatment.jsx';
import GermCellTumorTreatment from './oncologycomponents/GermCellTumor(GCT)Treatment.jsx';
import BlastomaTreatment from './oncologycomponents/BlastomaTreatment.jsx';
import BileDuctCancerTreatment from './oncologycomponents/BileDuctCancerTreatment.jsx';
import PenileCancerTreatment from './oncologycomponents/PenileCancerTreatment.jsx';
import RegionalChemotherapy from './oncologycomponents/RegionalChemotherapy.jsx';
import LaryngealCancerTreatment from './oncologycomponents/LaryngealCancerTreatment.jsx';
import EndometrialCancerTreatment from './oncologycomponents/EndometrialCancerTreatment.jsx';
import StomachCancerTreatment from './oncologycomponents/StomachCancerTreatment.jsx';
import Radiotherapy from './oncologycomponents/Radiotherapy.jsx';
import ProstateCancerTreatment from './oncologycomponents/ProstateCancerTreatment.jsx';
import OvarianCancerTreatment from './oncologycomponents/OvarianCancerTreatment.jsx';
import StemCellTransplant from './oncologycomponents/StemCellTransplant.jsx';
import ThalassemiaTreatment from './oncologycomponents/ThalassemiaTreatment.jsx';
import SickleCellTreatment from './oncologycomponents/SickleCellTreatment.jsx';
import CancerTreatment from './oncologycomponents/CancerTreatment.jsx';
import AnalCancerTreatment from './oncologycomponents/AnalCancerTreatment.jsx';
import BloodCancerTreatmentinIndia from './oncologycomponents/BloodCancerTreatmentinIndia.jsx';
import AcuteLeukemiaTreatment from './oncologycomponents/AcuteLeukemiaTreatment.jsx';
import ChronicMyelogenousLeukemiaTreatmentinIndia from './oncologycomponents/ChronicMyelogenousLeukemiaTreatmentinIndia.jsx';
import BoneCancerTreatmentinIndia from './oncologycomponents/BoneCancerTreatmentinIndia.jsx';
import SurgicalOncologyTreatmentinIndia from './oncologycomponents/SurgicalOncologyTreatmentinIndia.jsx';
import RadiationOncologyTreatmentinIndia from './oncologycomponents/RadiationOncologyTreatmentinIndia.jsx';
import BreastCancerTreatment from './oncologycomponents/BreastCancerTreatment.jsx';
import Chemotherapy from './oncologycomponents/Chemotherapy.jsx';
import ChronicLeukemiaTreatment from './oncologycomponents/ChronicLeukemiaTreatment.jsx';
import ColonCancerTreatment from './oncologycomponents/ColonCancerTreatment.jsx';
import CyberKnifeTreatment from './oncologycomponents/CyberKnifeTreatment.jsx';
import SkinCancerTreatment from './oncologycomponents/SkinCancerTreatment.jsx';
import RhabdomyosarcomaTreatment from './oncologycomponents/RhabdomyosarcomaTreatment.jsx';
import CervicalCancerTreatment from './oncologycomponents/CervicalCancerTreatment.jsx';
import BladderCancerTreatment from './oncologycomponents/BladderCancerTreatment.jsx';
import LungCancerTreatment from './oncologycomponents/LungCancerTreatment.jsx';
import PancreaticCancerTreatment from './oncologycomponents/PancreaticCancerTreatment.jsx';
import KidneyCancerTreatments from './oncologycomponents/KidneyCancerTreatment.jsx';
import ThyroidCancerTreatment from './oncologycomponents/ThyroidCancerTreatment.jsx';
import VaginalCancerTreatment from './oncologycomponents/VaginalCancerTreatment.jsx';
import EsophagealCancerTreatment from './oncologycomponents/EsophagealCancerTreatment.jsx';
import GallbladderCancerTreatment from './oncologycomponents/GallbladderCancerTreatment.jsx';
import NonHodgkinLymphomasTreatment from './oncologycomponents/Non-HodgkinLymphomasTreatment.jsx';
import MultipleMyelomaTreatment from './oncologycomponents/MultipleMyelomaTreatment.jsx';
import HodgkinLymphomaTreatment from './oncologycomponents/HodgkinLymphomaTreatment.jsx';
import RadiosurgeryCancerTreatment from './oncologycomponents/RadiosurgeryCancerTreatment.jsx';
import HeadandNeckCancerTreatment from './oncologycomponents/HeadandNeckCancerTreatment.jsx';
import SmallIntestineCancerTreatment from './oncologycomponents/SmallIntestineCancerTreatment.jsx';
import GlioblastomaTreatment from './oncologycomponents/GlioblastomaTreatment.jsx';
import PrimaryBoneCancerTreatment from './oncologycomponents/PrimaryBoneCancerTreatment.jsx';
import SoftTissueSarcomaTreatment from './oncologycomponents/SoftTissueSarcomaTreatment.jsx';
import VulvarCancerTreatment from './oncologycomponents/VulvarCancerTreatment.jsx';
import MaleBreastCancerTreatment from './oncologycomponents/MaleBreastCancerTreatment.jsx';
import OralCancerTreatment from './oncologycomponents/OralCancerTreatment.jsx';
import SpinalCordTumorTreatment from './oncologycomponents/SpinalCordTumorTreatment.jsx';
import KaposisSarcomaTreatment from './oncologycomponents/Kaposi\'sSarcomaTreatment.jsx';
import SalivaryGlandCancerTreatment from './oncologycomponents/SalivaryGlandCancerTreatment.jsx';
import TeratomaTreatment from './oncologycomponents/TeratomaTreatment.jsx';
import ThymusCancerTreatment from './oncologycomponents/ThymusCancerTreatment.jsx';
import TreatmentofGastrointestinalCarcinoidTumors from './oncologycomponents/TreatmentofGastrointestinalCarcinoidTumors.jsx';
import TreatmentofGastrointestinalStromalTumors from './oncologycomponents/TreatmentofGastrointestinalStromalTumors.jsx';
import MyelodysplasticSyndromesTreatment from './oncologycomponents/MyelodysplasticSyndromesTreatment.jsx';
import NeuroblastomaTreatment from './oncologycomponents/NeuroblastomaTreatment.jsx';
import AllogeneicBoneMarrowTransplant from './oncologycomponents/AllogeneicBoneMarrowTransplant(BMT).jsx';
import HaploidenticalBoneMarrowTransplant from './oncologycomponents/HaploidenticalBoneMarrowTransplant.jsx';
import BoneMarrowTransplant from './oncologycomponents/BoneMarrowTransplant.jsx';
import CastlemanDiseaseTreatment from './oncologycomponents/CastlemanDiseaseTreatment.jsx';
import HyperthermicIntraperitonealChemotherapy from './oncologycomponents/HyperthermicIntraperitonealChemotherapy.jsx';
import IntraoperativeRadiationTherapy from './oncologycomponents/IntraoperativeRadiationTherapy.jsx';
import AutologousBoneMarrowTransplant from './oncologycomponents/AutologousBoneMarrowTransplant.jsx';
import MeningiomaTreatment from './oncologycomponents/MeningiomaTreatment.jsx';
import NasopharyngealCancerTreatment from './oncologycomponents/NasopharyngealCancerTreatment.jsx';
import RetinoblastomaTreatment from './oncologycomponents/RetinoblastomaTreatment.jsx';
import WaldenstromMacroglobulinemiaTreatment from './oncologycomponents/WaldenstromMacroglobulinemiaTreatment.jsx';
import BrainTumorTreatment from './oncologycomponents/BrainTumorTreatment.jsx';
import ColorectalCancerTreatment from './oncologycomponents/ColorectalCancerTreatment.jsx';
import Chemoradiotherapy from './oncologycomponents/Chemoradiotherapy.jsx';
import StemCellTreatmentForChronicTendinitis from './oncologycomponents/StemCellTreatmentForChronicTendinitis.jsx';
import CentralNervousSystemLymphomaTreatment from './oncologycomponents/CentralNervousSystem(CNS)LymphomaTreatment.jsx';
import TreatmentforParaneoplasticSyndromes from './oncologycomponents/TreatmentforParaneoplasticSyndromes.jsx';
import StemCellTreatmentForChronicBackPain from './oncologycomponents/StemCellTreatmentForChronicBackPain.jsx';
import ChondrosarcomaTreatment from './oncologycomponents/ChondrosarcomaTreatment.jsx';
import OsteoblastomaTreatment from './oncologycomponents/OsteoblastomaTreatment.jsx';
import ChondroblastomaTreatment from './oncologycomponents/ChondroblastomaTreatment.jsx';
import MicrocysticAdnexalCarcinomaTreatment from './oncologycomponents/MicrocysticAdnexalCarcinoma(MAC)Treatment.jsx';
import StemCellTreatmentForOsteoarthritis from './oncologycomponents/StemCellTreatmentForOsteoarthritis.jsx';
import AngiosarcomaTreatment from './oncologycomponents/AngiosarcomaTreatment.jsx';
import PleomorphicXanthoastrocytomaTreatment from './oncologycomponents/PleomorphicXanthoastrocytomaTreatment.jsx';
import GestationalTrophoblasticDiseaseTreatment from './oncologycomponents/GestationalTrophoblasticDisease(GTD)Treatment.jsx';
import OsteosarcomaTreatment from './oncologycomponents/OsteosarcomaTreatment.jsx';
import EpendymoblastomaTreatment from './oncologycomponents/EpendymoblastomaTreatment.jsx';
import GangliogliomaTreatment from './oncologycomponents/GangliogliomaTreatment.jsx';
import BrainstemGliomaTreatment from './oncologycomponents/BrainstemGliomaTreatment.jsx';
import TreatmentforCancerofUnknownPrimary from './oncologycomponents/TreatmentforCancerofUnknownPrimary(CUP).jsx';
import PineoblastomaTreatment from './oncologycomponents/PineoblastomaTreatment.jsx';
import PancoastTumorTreatment from './oncologycomponents/PancoastTumorTreatment.jsx';
import ChordomaTreatment from './oncologycomponents/ChordomaTreatment.jsx';
import ParanasalSinusandNasalCavityCancerTreatment from './oncologycomponents/ParanasalSinusandNasalCavityCancerTreatment.jsx';
import OligodendrogliomaTreatment from './oncologycomponents/OligodendrogliomaTreatment.jsx';
import MedulloblastomaTreatment from './oncologycomponents/MedulloblastomaTreatment.jsx';
import MalignantMesotheliomaTreatment from './oncologycomponents/MalignantMesotheliomaTreatment.jsx';
import EpendymomaTreatment from './oncologycomponents/EpendymomaTreatment.jsx';
import CraniopharyngiomaTreatment from './oncologycomponents/CraniopharyngiomaTreatment.jsx';
import MedulloepitheliomaTreatment from './oncologycomponents/MedulloepitheliomaTreatment.jsx';
import AstrocytomaTreatment from './oncologycomponents/AstrocytomaTreatment.jsx';
import DysembryoplasticNeuroepithelialTumorTreatment from './oncologycomponents/DysembryoplasticNeuroepithelialTumorTreatment.jsx';
import ChoroidPlexusTumorTreatment from './oncologycomponents/ChoroidPlexusTumorTreatment.jsx';
import BenignSoftTissueTumorTreatment from './oncologycomponents/BenignSoftTissueTumorTreatment.jsx';
import PancreaticIsletCellTumorTreatment from './oncologycomponents/PancreaticIsletCellTumorTreatment.jsx';
import UterineCancerTreatment from './oncologycomponents/UterineCancerTreatment.jsx';
import HyperthermiaTherapy from './oncologycomponents/HyperthermiaTherapy.jsx';
import SchwannomaTreatment from './oncologycomponents/SchwannomaTreatment.jsx';
import OrthopedicsMain from './Orthopedicscomponents/OrthopedicsMain.jsx';
import KneeReplacement from './Orthopedicscomponents/KneeReplacement.jsx';
import OsteomyelitisTreatment from './Orthopedicscomponents/OsteomyelitisTreatment.jsx';
import CoreDecompressionoftheHip from './Orthopedicscomponents/CoreDecompressionoftheHip.jsx';
import OsteomalaciaTreatment from './Orthopedicscomponents/OsteomalaciaTreatment.jsx';
import MuscleReconstruction from './Orthopedicscomponents/MuscleReconstruction.jsx';
import AvascularNecrosisTreatment from './Orthopedicscomponents/AvascularNecrosis(AVN)Treatment.jsx';
import TrappedNerveTreatment from './Orthopedicscomponents/TrappedNerveTreatment.jsx';
import LimbAmputation from './Orthopedicscomponents/LimbAmputation.jsx';
import FracturedShoulderTreatment from './Orthopedicscomponents/FracturedShoulderTreatment.jsx';
import CongenitalHipDislocationTreatment from './Orthopedicscomponents/CongenitalHipDislocationTreatment.jsx';
 import BakersCystTreatment from './Orthopedicscomponents/Baker\'sCystTreatment.jsx';
import JointInjection from './Orthopedicscomponents/JointInjection.jsx';
import MedialPatellofemoralLigamentSurgery from './Orthopedicscomponents/MPFL(MedialPatellofemoralLigament)Surgery.jsx';
import KneeCartilageSurgery from './Orthopedicscomponents/KneeCartilageSurgery.jsx';
import HipPainTreatment from './Orthopedicscomponents/HipPainTreatment.jsx';
import CoccydyniaTreatment from './Orthopedicscomponents/CoccydyniaTreatment.jsx';
import HandJointsSynovectomy from './Orthopedicscomponents/HandJointsSynovectomy.jsx';
import JumpersKneeTreatment from './Orthopedicscomponents/Jumper\'sKneeTreatment.jsx';
import TreatmentforAchillesTendinitis from './Orthopedicscomponents/TreatmentforAchillesTendinitis.jsx';
import ShoulderImpingementSyndromeTreatment from './Orthopedicscomponents/ShoulderImpingementSyndromeTreatment.jsx';
import ScaphoidFractureTreatments from './Orthopedicscomponents/ScaphoidFractureTreatments.jsx';
import CubitalTunnelSyndrome from './Orthopedicscomponents/CubitalTunnelSyndrome.jsx';
import AbscessDebridement from './Orthopedicscomponents/AbscessDebridement.jsx';
import KneeSprainTreatment from './Orthopedicscomponents/KneeSprainTreatment.jsx';
import MortonsNeuromaTreatment from './Orthopedicscomponents/Morton\'sNeuromaTreatment.jsx';
import DislocatedElbowTreatment from './Orthopedicscomponents/DislocatedElbowTreatment.jsx';
import DislocatedHipTreatment from './Orthopedicscomponents/DislocatedHipTreatment.jsx';
import HipSurgery from './Orthopedicscomponents/HipSurgery.jsx';
import HipArthroplasty from './Orthopedicscomponents/HipArthroplasty.jsx';
import ShoulderArthroplasty from './Orthopedicscomponents/ShoulderArthroplasty.jsx';
import ShoulderSurgery from './Orthopedicscomponents/ShoulderSurgery.jsx';
import PatellarDislocationTreatment from './Orthopedicscomponents/PatellarDislocationTreatment.jsx';
import OsteoporosisTreatment from './Orthopedicscomponents/OsteoporosisTreatment.jsx';
import FemurFractureTreatment from './Orthopedicscomponents/FemurFractureTreatment.jsx';
import SciaticaTreatment from './Orthopedicscomponents/SciaticaTreatment.jsx';
import CervicalFractureTreatment from './Orthopedicscomponents/CervicalFractureTreatment.jsx';
import SlapTearRepair from './Orthopedicscomponents/SlapTearRepair.jsx';
import AnkleFractureTreatment from './Orthopedicscomponents/AnkleFractureTreatment.jsx';
import LateralReleaseofthePatella from './Orthopedicscomponents/LateralReleaseofthePatella.jsx';
import ShoulderLigamentRepair from './Orthopedicscomponents/ShoulderLigamentRepair.jsx';
import UnilateralHipReplacement from './Orthopedicscomponents/UnilateralHipReplacement.jsx';
import AnteriorCervicalDiscectomyandFusion from './Orthopedicscomponents/AnteriorCervicalDiscectomyandFusion(ACDF).jsx';
import BunionSurgery from './Orthopedicscomponents/BunionSurgery.jsx';
import PediatricOrthopedicsTreatmentinIndia from './Orthopedicscomponents/PediatricOrthopedicsTreatmentinIndia.jsx';
import TraumaticOrthopedicSurgeryinIndia from './Orthopedicscomponents/TraumaticOrthopedicSurgeryinIndia.jsx';
import TotalKneeReplacementSurgeryinIndia from './Orthopedicscomponents/TotalKneeReplacementSurgeryinIndia.jsx';
import ArthroscopicSurgeryinIndia from './Orthopedicscomponents/ArthroscopicSurgeryinIndia.jsx';
import JointReplacementSurgeryInIndia from './Orthopedicscomponents/JointReplacementSurgeryInIndia.jsx';
import TotalKneeReplacement from './Orthopedicscomponents/TotalKneeReplacement(Bilateral).jsx';
import TotalKneeReplacementUni from './Orthopedicscomponents/TotalKneeReplacement(Uni).jsx';
import CarpalTunnelSyndromeSurgery from './Orthopedicscomponents/CarpalTunnelSyndromeSurgery.jsx';
import KneeLigamentSurgery from './Orthopedicscomponents/KneeLigamentSurgery(ACL).jsx';
import KneeSurgery from './Orthopedicscomponents/KneeSurgery.jsx';
import OsteoarthritisTreatment from './Orthopedicscomponents/OsteoarthritisTreatment.jsx';
import RotatorCuffSurgery from './Orthopedicscomponents/RotatorCuffSurgery.jsx';
import DupuytrensContractureTreatment from './Orthopedicscomponents/Dupuytren\'sContractureTreatment.jsx';
import ShoulderReplacement from './Orthopedicscomponents/ShoulderReplacement.jsx';
import MeniscusSurgery from './Orthopedicscomponents/MeniscusSurgery.jsx';
import ShoulderArthroscopy from './Orthopedicscomponents/ShoulderArthroscopy.jsx';
import MetatarsalPhalangealJointReplacement from './Orthopedicscomponents/MetatarsalPhalangealJointReplacement.jsx';
import TriggerFingerTreatment from './Orthopedicscomponents/TriggerFingerTreatment.jsx';
import AnkleArthroscopy from './Orthopedicscomponents/AnkleArthroscopy.jsx';
import AutologousChondrocyteImplantation from './Orthopedicscomponents/AutologousChondrocyteImplantation.jsx';
import TennisorGolfersElbow from './Orthopedicscomponents/TennisorGolfer\'sElbow.jsx';
import BoneFractureTreatment from './Orthopedicscomponents/BoneFractureTreatment.jsx';
import GanglionCystRemoval from './Orthopedicscomponents/GanglionCystRemoval.jsx';
import KneeLigamentSurgeryMCL from './Orthopedicscomponents/KneeLigamentSurgery(MCL).jsx';
import AchillesTendonRupture from './Orthopedicscomponents/AchillesTendonRupture.jsx';
import KneeFractureTreatment from './Orthopedicscomponents/KneeFractureTreatment.jsx';
import DeQuervainSyndromeTreatment from './Orthopedicscomponents/DeQuervainSyndromeTreatment.jsx';
import BenignBoneTumorRemoval from './Orthopedicscomponents/BenignBoneTumorRemoval.jsx';
import WristArthroscopy from './Orthopedicscomponents/WristArthroscopy.jsx';
import PesAnserineBursitisTreatment from './Orthopedicscomponents/PesAnserineBursitisTreatment.jsx';
import BoutonniereDeformityTreatment from './Orthopedicscomponents/BoutonniereDeformityTreatment.jsx';
import HandSurgery from './Orthopedicscomponents/HandSurgery.jsx';
import CervicalStrainTreatment from './Orthopedicscomponents/CervicalStrainTreatment.jsx';
import ElbowSprainTreatment from './Orthopedicscomponents/ElbowSprainTreatment.jsx';
import FootSurgery from './Orthopedicscomponents/FootSurgery.jsx';
import ToeJointReplacement from './Orthopedicscomponents/ToeJointReplacement.jsx';
import ArtificialLimbServices from './Orthopedicscomponents/ArtificialLimbServices.jsx';
import ToeImplant from './Orthopedicscomponents/ToeImplant.jsx';
import HammerClaworMalletToeTreatment from './Orthopedicscomponents/Hammer,Claw,orMalletToeTreatment.jsx';
import KirschnerWireRemoval from './Orthopedicscomponents/KirschnerWireRemoval.jsx';
import RicketsTreatment from './Orthopedicscomponents/RicketsTreatment.jsx';
import LegLengthDiscrepancyTreatment from './Orthopedicscomponents/LegLengthDiscrepancy(LLD)Treatment.jsx';
import Trochleoplasty from './Orthopedicscomponents/Trochleoplasty.jsx';
import ElbowReplacement from './Orthopedicscomponents/ElbowReplacement.jsx';
import AnkleReplacement from './Orthopedicscomponents/AnkleReplacement.jsx';
import UlnarNerveDecompression from './Orthopedicscomponents/UlnarNerveDecompression.jsx';
import ElbowArthroscopy from './Orthopedicscomponents/ElbowArthroscopy.jsx';
import ShoulderStabilization from './Orthopedicscomponents/ShoulderStabilization.jsx';
import KneeArthroplasty from './Orthopedicscomponents/KneeArthroplasty.jsx';
import FrozenShoulderTreatment from './Orthopedicscomponents/FrozenShoulderTreatment.jsx';
import DislocatedShoulderTreatment from './Orthopedicscomponents/DislocatedShoulderTreatment.jsx';
import KneecapStabilization from './Orthopedicscomponents/KneecapStabilization.jsx';
import RevisionJointSurgery from './Orthopedicscomponents/RevisionJointSurgery.jsx';
import ShoulderLabrumSurgery from './Orthopedicscomponents/ShoulderLabrumSurgery.jsx';
import SynoviumRemoval from './Orthopedicscomponents/SynoviumRemoval.jsx';
import AcromioclavicularJointRepair from './Orthopedicscomponents/AcromioclavicularJointRepair.jsx';
import ShoulderTendonReconstruction from './Orthopedicscomponents/ShoulderTendonReconstruction.jsx';
import FractureTreatment from './Orthopedicscomponents/FractureTreatment.jsx';
import ClubfootTreatment from './Orthopedicscomponents/ClubfootTreatment.jsx';
import ElbowSurgery from './Orthopedicscomponents/ElbowSurgery.jsx';
import HipFractureSurgery from './Orthopedicscomponents/HipFractureSurgery.jsx';
import OsteochondritisDissecansTreatment from './Orthopedicscomponents/OsteochondritisDissecansTreatment.jsx';
import PagetsDiseaseTreatment from './Orthopedicscomponents/Paget\'sDiseaseTreatment.jsx';
import ShoulderCapsularRelease from './Orthopedicscomponents/ShoulderCapsularRelease.jsx';
import ShoulderFractureTreatment from './Orthopedicscomponents/ShoulderFractureTreatment.jsx';
import ChondromaTreatment from './Orthopedicscomponents/ChondromaTreatment.jsx';
import CompartmentSyndromeTreatment from './Orthopedicscomponents/CompartmentSyndromeTreatment.jsx';
import OsteochondrosisTreatment from './Orthopedicscomponents/OsteochondrosisTreatment.jsx';
import BowLegsTreatment from './Orthopedicscomponents/BowLegsTreatment.jsx';
import ElbowPainTreatment from './Orthopedicscomponents/ElbowPainTreatment.jsx';
import LittleLeagueElbowTreatment from './Orthopedicscomponents/LittleLeagueElbowTreatment.jsx';
import OsteomaTreatment from './Orthopedicscomponents/OsteomaTreatment.jsx';
import SnappingHipTreatment from './Orthopedicscomponents/SnappingHipTreatment.jsx';
import OsteogenesisImperfectaTreatment from './Orthopedicscomponents/OsteogenesisImperfecta(OI)Treatment.jsx';
import TreatmentforOsgoodSchlatterDisease from './Orthopedicscomponents/TreatmentforOsgood-SchlatterDisease.jsx';
import WristInstabilityTreatment from './Orthopedicscomponents/WristInstabilityTreatment.jsx';
import MeniscusTransplant from './Orthopedicscomponents/MeniscusTransplant.jsx';
import IVFFertilityTreatmentMain from './IVF&FertilityTreatmentcomponents/IVF&FertilityTreatmentMain.jsx';
import TesticularSpermAspiration from './IVF&FertilityTreatmentcomponents/TesticularSpermAspiration(TESA).jsx';
import EmbryoTransfer from './IVF&FertilityTreatmentcomponents/EmbryoTransfer.jsx';
import MagneticActivatedCellSorting from './IVF&FertilityTreatmentcomponents/Magnetic-ActivatedCellSorting(MACS).jsx';
import DonorSperm from './IVF&FertilityTreatmentcomponents/DonorSperm.jsx';
import MicrosurgicalTesticularSpermExtraction from './IVF&FertilityTreatmentcomponents/MicrosurgicalTesticularSpermExtraction(Micro TESA).jsx';
import AssistedHatching from './IVF&FertilityTreatmentcomponents/AssistedHatching.jsx';
import PreimplantationGeneticDiagnosis from './IVF&FertilityTreatmentcomponents/PreimplantationGeneticDiagnosis(PGD).jsx';
import Hysterosalpingography from './IVF&FertilityTreatmentcomponents/Hysterosalpingography(HSG).jsx';
import BlastocystTransfer from './IVF&FertilityTreatmentcomponents/BlastocystTransfer.jsx';
import SpermCollection from './IVF&FertilityTreatmentcomponents/SpermCollection.jsx';
import IntracytoplasmicSpermInjection from './IVF&FertilityTreatmentcomponents/IntracytoplasmicSpermInjection(ICSI).jsx';
import IntracytoplasmicMorphologicallyselectedSpermInjection from './IVF&FertilityTreatmentcomponents/IntracytoplasmicMorphologicallyselectedSpermInjection.jsx';
import ReceptionofOocytesfromPartner from './IVF&FertilityTreatmentcomponents/ReceptionofOocytesfromPartner(ropa).jsx';
import TubalCannulation from './IVF&FertilityTreatmentcomponents/TubalCannulation.jsx';
import FertilityPreservation from './IVF&FertilityTreatmentcomponents/FertilityPreservation.jsx';
import EggRetrieval from './IVF&FertilityTreatmentcomponents/EggRetrieval.jsx';
import OvulationInduction from './IVF&FertilityTreatmentcomponents/OvulationInduction.jsx';
import RetrogradeEjaculationTreatment from './IVF&FertilityTreatmentcomponents/RetrogradeEjaculationTreatment.jsx';
import OvarianDrilling from './IVF&FertilityTreatmentcomponents/OvarianDrilling.jsx';
import IVFTreatmentinIndia from './IVF&FertilityTreatmentcomponents/IVFTreatmentinIndia.jsx';
import EmbryoTransferProducts from './IVF&FertilityTreatmentcomponents/EmbryoTransferProducts.jsx';
import MINIIVF from './IVF&FertilityTreatmentcomponents/MINIIVF.jsx';
import DonorEggs from './IVF&FertilityTreatmentcomponents/DonorEggs.jsx';
import GastroenterologyMain from './Gastroenterologycomponents/GastroenterologyMain.jsx';
import CholecystectomyTreatment from './Gastroenterologycomponents/CholecystectomyTreatment.jsx';
import ColonoscopyTreatment from './Gastroenterologycomponents/ColonoscopyTreatment.jsx';
import RoboticLiverTransplantSurgeryInIndia from './Gastroenterologycomponents/RoboticLiverTransplantSurgeryInIndia.jsx';
import CrohnsDiseaseTreatment from './Gastroenterologycomponents/Crohn\'sDiseaseTreatment.jsx';
import AppendixTreatmentInIndia from './Gastroenterologycomponents/AppendixTreatmentInIndia.jsx';
import PolypectomyTreatment from './Gastroenterologycomponents/PolypectomyTreatment.jsx';
import HerniaSurgeryinIndia from './Gastroenterologycomponents/HerniaSurgeryinIndia.jsx';
import HerniaRepair from './Gastroenterologycomponents/HerniaRepair.jsx';
import HiatalHerniaSurgery from './Gastroenterologycomponents/HiatalHerniaSurgery.jsx';
import EndoscopyTreatment from './Gastroenterologycomponents/EndoscopyTreatment.jsx';
import GastroscopyTreatment from './Gastroenterologycomponents/GastroscopyTreatment.jsx';
import LaparoscopicAntiRefluxSurgery from './Gastroenterologycomponents/LaparoscopicAnti-Reflux(GERD)Surgery.jsx';
import LiverBiopsy from './Gastroenterologycomponents/LiverBiopsy.jsx';
import EndoscopicRetrogradeCholangiopancreatography from './Gastroenterologycomponents/EndoscopicRetrogradeCholangiopancreatography(ERCP).jsx';
import PancreatectomyTreatment from './Gastroenterologycomponents/PancreatectomyTreatment.jsx';
import IrritableBowelSyndromeTreatment from './Gastroenterologycomponents/IrritableBowelSyndrome(IBS)Treatment.jsx';
import GallstonesTreatment from './Gastroenterologycomponents/GallstonesTreatment.jsx';
import LiverDiseaseEvaluation from './Gastroenterologycomponents/LiverDiseaseEvaluation.jsx';
import GastrointestinalPerforationRepair from './Gastroenterologycomponents/GastrointestinalPerforationRepair.jsx';
import Choledochotomy from './Gastroenterologycomponents/Choledochotomy.jsx';
import IntraAbdominalAdhesionsSurgery from './Gastroenterologycomponents/Intra-AbdominalAdhesionsSurgery.jsx';
import GastrointestinalTractBiopsy from './Gastroenterologycomponents/Gastrointestinal(GI)TractBiopsy.jsx';
import Sigmoidoscopy from './Gastroenterologycomponents/Sigmoidoscopy.jsx';
import Gastrostomy from './Gastroenterologycomponents/Gastrostomy.jsx';
import PepticUlcerTreatment from './Gastroenterologycomponents/PepticUlcerTreatment.jsx';
import Esophagoscopy from './Gastroenterologycomponents/Esophagoscopy.jsx';
import MeckelsDiverticulumSurgery from './Gastroenterologycomponents/Meckel\'sDiverticulumSurgery.jsx';
import HellerMyotomy from './Gastroenterologycomponents/HellerMyotomy.jsx';
import Gastroenterostomy from './Gastroenterologycomponents/Gastroenterostomy.jsx';
import Colostomy from './Gastroenterologycomponents/Colostomy.jsx';
import EsophagealManometry from './Gastroenterologycomponents/EsophagealManometry.jsx';
import SurgeryforCholecystitis from './Gastroenterologycomponents/SurgeryforCholecystitis.jsx';
import SurgeryforLiverCysts from './Gastroenterologycomponents/SurgeryforLiverCysts.jsx';
import PancreatitisTreatment from './Gastroenterologycomponents/PancreatitisTreatment.jsx';
import StomachCancerSurgery from './Gastroenterologycomponents/StomachCancerSurgery.jsx';
import LiverHemangiomaSurgery from './Gastroenterologycomponents/LiverHemangiomaSurgery.jsx';
import LiverCancerSurgery from './Gastroenterologycomponents/LiverCancerSurgery.jsx';
import EsophagealDiverticulaSurgery from './Gastroenterologycomponents/EsophagealDiverticulaSurgery.jsx';
import SurgeryforBenignLiverTumors from './Gastroenterologycomponents/SurgeryforBenignLiverTumors.jsx';
import BileDuctCancerSurgery from './Gastroenterologycomponents/BileDuctCancerSurgery.jsx';
import GastroesophagealRefluxDiseaseTreatment from './Gastroenterologycomponents/GastroesophagealRefluxDisease(GERD)Treatment.jsx';
import LiverTransarterialChemoEmbolization from './Gastroenterologycomponents/LiverTransarterialChemoEmbolization.jsx';
import EsophagealpHMonitoring from './Gastroenterologycomponents/EsophagealpHMonitoring.jsx';
import LiverCancerTreatment from './Gastroenterologycomponents/LiverCancerTreatment.jsx';
import LiverTransplant from './Gastroenterologycomponents/LiverTransplant.jsx';
import PancreasTransplant from './Gastroenterologycomponents/PancreasTransplant.jsx';
import PlasticCosmeticSurgeryMain from './Plastic&CosmeticSurgery/Plastic&CosmeticSurgeryMain.jsx';
import BreastLift from './Plastic&CosmeticSurgery/BreastLift.jsx';
import Facelift from './Plastic&CosmeticSurgery/Facelift.jsx';
import BreastReduction from './Plastic&CosmeticSurgery/BreastReduction.jsx';
import Abdominoplasty from './Plastic&CosmeticSurgery/Abdominoplasty.jsx';
import MaleBreastReduction from './Plastic&CosmeticSurgery/MaleBreastReduction.jsx';
import BreastReconstruction from './Plastic&CosmeticSurgery/BreastReconstruction.jsx';
import ArmLift from './Plastic&CosmeticSurgery/ArmLift.jsx';
import Liposuction from './Plastic&CosmeticSurgery/Liposuction.jsx';
import Otoplasty from './Plastic&CosmeticSurgery/Otoplasty.jsx';
import BreastImplants from './Plastic&CosmeticSurgery/BreastImplants.jsx';
import Rhinoplasty from './Plastic&CosmeticSurgery/Rhinoplasty.jsx';
import WrinkleTreatment from './Plastic&CosmeticSurgery/WrinkleTreatment.jsx';
import UrologyTreatmentMain from './UrologyTreatmentcomponents/UrologyTreatmentMain.jsx';
import Prostatectomy from './UrologyTreatmentcomponents/Prostatectomy.jsx';
import Vasectomy from './UrologyTreatmentcomponents/Vasectomy.jsx';
import Circumcision from './UrologyTreatmentcomponents/Circumcision.jsx';
import SpermRetrievalTreatmentInIndia from './UrologyTreatmentcomponents/SpermRetrievalTreatmentInIndia.jsx';
import PediatricUrologyTreatmentinIndia from './UrologyTreatmentcomponents/PediatricUrologyTreatmentinIndia.jsx';
import KidneyStonesTreatments from './UrologyTreatmentcomponents/KidneyStonesTreatment.jsx';
import TransurethralResectionoftheProstate from './UrologyTreatmentcomponents/TransurethralResectionoftheProstate(TURP).jsx';
import TesticularBiopsy from './UrologyTreatmentcomponents/TesticularBiopsy.jsx';
import ProstateBiopsy from './UrologyTreatmentcomponents/ProstateBiopsy.jsx';
import ErectileDysfunctionTreatment from './UrologyTreatmentcomponents/ErectileDysfunctionTreatment.jsx';
import UreteralStoneRemoval from './UrologyTreatmentcomponents/UreteralStoneRemoval.jsx';
import Cystoscopy from './UrologyTreatmentcomponents/Cystoscopy.jsx';
import LaserTreatmentforBPHEnlargedProstate from './UrologyTreatmentcomponents/LaserTreatmentforBPH(EnlargedProstate).jsx';
import InguinalOrchiectomy from './UrologyTreatmentcomponents/InguinalOrchiectomy.jsx';
import PeyroniesDiseaseTreatment from './UrologyTreatmentcomponents/Peyronie\'sDiseaseTreatment.jsx';
import Cystectomy from './UrologyTreatmentcomponents/Cystectomy.jsx';
import UrinaryIncontinenceTreatment from './UrologyTreatmentcomponents/UrinaryIncontinenceTreatment.jsx';
import UrethralSurgery from './UrologyTreatmentcomponents/UrethralSurgery.jsx';
import Varicocelectomy from './UrologyTreatmentcomponents/Varicocelectomy.jsx';
import BladderStoneRemoval from './UrologyTreatmentcomponents/BladderStoneRemoval.jsx';
import PenileProsthesis from './UrologyTreatmentcomponents/PenileProsthesis.jsx';
import ProstateUltrasound from './UrologyTreatmentcomponents/ProstateUltrasound.jsx';
import ProstateSurgery from './UrologyTreatmentcomponents/ProstateSurgery.jsx';
import BladderStoneRemovalBNI from './UrologyTreatmentcomponents/BladderStoneRemoval.jsx';
import UreteralReimplantationSurgery from './UrologyTreatmentcomponents/UreteralReimplantationSurgery.jsx';
import UrologyUltrasound from './UrologyTreatmentcomponents/UrologyUltrasound.jsx';
import PenisFrenuloplasty from './UrologyTreatmentcomponents/PenisFrenuloplasty.jsx';
import UndescendedTesticleSurgery from './UrologyTreatmentcomponents/UndescendedTesticleSurgery.jsx';
import Ureteroscopy from './UrologyTreatmentcomponents/Ureteroscopy.jsx';
import Urostomy from './UrologyTreatmentcomponents/Urostomy.jsx';
import GenitalWartTreatment from './UrologyTreatmentcomponents/GenitalWartTreatment.jsx';
import HypospadiasTreatment from './UrologyTreatmentcomponents/HypospadiasTreatment.jsx';
import Urinalysis from './UrologyTreatmentcomponents/Urinalysis.jsx';
import ErectileDysfunctionDiagnosis from './UrologyTreatmentcomponents/ErectileDysfunctionDiagnosis.jsx';
import IVUIntravenousUrography from './UrologyTreatmentcomponents/IVU(IntravenousUrography).jsx';
import SpermaticCordHydrocoleTreatment from './UrologyTreatmentcomponents/SpermaticCordHydrocoleTreatment.jsx';
import TesticularTumorRemoval from './UrologyTreatmentcomponents/TesticularTumorRemoval.jsx';
import Pyeloplasty from './UrologyTreatmentcomponents/Pyeloplasty.jsx';
import SimpleOrchiectomy from './UrologyTreatmentcomponents/SimpleOrchiectomy.jsx';
import VesicoureteralRefluxTreatment from './UrologyTreatmentcomponents/VesicoureteralReflux(VUR)Treatment.jsx';
import Penectomy from './UrologyTreatmentcomponents/Penectomy.jsx';
import UreteralStentPlacement from './UrologyTreatmentcomponents/UreteralStentPlacement.jsx';
import ColorectalMedicineMain from './ColorectalMedicinecomponents/ColorectalMedicineMain.jsx';
import EndoscopicMucosectomy from './ColorectalMedicinecomponents/EndoscopicMucosectomy.jsx';
import Proctoscopy from './ColorectalMedicinecomponents/Proctoscopy.jsx';
import Rectoscopy from './ColorectalMedicinecomponents/Rectoscopy.jsx';
import ProstateMassage from './ColorectalMedicinecomponents/ProstateMassage.jsx';
import CryptitisSurgery from './ColorectalMedicinecomponents/CryptitisSurgery.jsx';
import DiverticulitisTreatment from './ColorectalMedicinecomponents/DiverticulitisTreatment.jsx';
import AnorectalManometry from './ColorectalMedicinecomponents/AnorectalManometry.jsx';
import EndoscopicFullThicknessResection from './ColorectalMedicinecomponents/EndoscopicFull-ThicknessResection.jsx';
import EndoscopicSubmucosalDissection from './ColorectalMedicinecomponents/EndoscopicSubmucosalDissection(ESD).jsx';
import EarNoseandThroatMain from './Ear,NoseandThroat(ENT)components/EarNoseandThroat(ENT)Main.jsx';
import CochlearImplant from './Ear,NoseandThroat(ENT)components/CochlearImplant.jsx';
import Laryngectomy from './Ear,NoseandThroat(ENT)components/Laryngectomy.jsx';
import ParotidSurgery from './Ear,NoseandThroat(ENT)components/ParotidSurgery.jsx';
import Dacryocystorhinostomy from './Ear,NoseandThroat(ENT)components/Dacryocystorhinostomy.jsx';
import Myringotomy from './Ear,NoseandThroat(ENT)components/Myringotomy.jsx';
import Septoplasty from './Ear,NoseandThroat(ENT)components/Septoplasty.jsx';
import Uvulopalatopharyngoplasty from './Ear,NoseandThroat(ENT)components/Uvulopalatopharyngoplasty.jsx';
import BoneAnchoredHearingAid from './Ear,NoseandThroat(ENT)components/Bone-AnchoredHearingAid(BAHA).jsx';
import Thyroidectomy from './Ear,NoseandThroat(ENT)components/Thyroidectomy.jsx';
import Tonsillectomy from './Ear,NoseandThroat(ENT)components/Tonsillectomy.jsx';
import Myringoplasty from './Ear,NoseandThroat(ENT)components/Myringoplasty.jsx';
import SinusSurgery from './Ear,NoseandThroat(ENT)components/SinusSurgery.jsx';
import Tympanoplasty from './Ear,NoseandThroat(ENT)components/Tympanoplasty.jsx';
import Laryngoscopy from './Ear,NoseandThroat(ENT)components/Laryngoscopy.jsx';
import TurbinateSurgery from './Ear,NoseandThroat(ENT)components/TurbinateSurgery.jsx';
import Mastoidectomy from './Ear,NoseandThroat(ENT)components/Mastoidectomy.jsx';
import OssicularChainReconstruction from './Ear,NoseandThroat(ENT)components/OssicularChainReconstruction.jsx';
import SleepApneaSurgery from './Ear,NoseandThroat(ENT)components/SleepApneaSurgery.jsx';
import NasalPolypsRemoval from './Ear,NoseandThroat(ENT)components/NasalPolypsRemoval.jsx';
import Adenoidectomy from './Ear,NoseandThroat(ENT)components/Adenoidectomy.jsx';
import Audiometry from './Ear,NoseandThroat(ENT)components/Audiometry.jsx';
import ImpedenceAudiometry from './Ear,NoseandThroat(ENT)components/ImpedenceAudiometry.jsx';
import LaryngealSurgery from './Ear,NoseandThroat(ENT)components/LaryngealSurgery.jsx';
import NasalObstructionTreatment from './Ear,NoseandThroat(ENT)components/NasalObstructionTreatment.jsx';
import Stapedectomy from './Ear,NoseandThroat(ENT)components/Stapedectomy.jsx';
import NeckDissection from './Ear,NoseandThroat(ENT)components/NeckDissection.jsx';
import SalivaryGlandTumorRemoval from './Ear,NoseandThroat(ENT)components/SalivaryGlandTumorRemoval.jsx';
import Uvulopalatoplasty from './Ear,NoseandThroat(ENT)components/Uvulopalatoplasty.jsx';
import NoseFractureTreatment from './Ear,NoseandThroat(ENT)components/NoseFractureTreatment.jsx';
import SalivaryStonesTreatment from './Ear,NoseandThroat(ENT)components/SalivaryStonesTreatment.jsx';
import PediatricTongueTieSurgery from './Ear,NoseandThroat(ENT)components/PediatricTongue-TieSurgery.jsx';
import SubmandibularGlandSurgery from './Ear,NoseandThroat(ENT)components/SubmandibularGlandSurgery.jsx';
import DecorticationofVocalCords from './Ear,NoseandThroat(ENT)components/DecorticationofVocalCords.jsx';
import Nasopharyngolaryngoscopy from './Ear,NoseandThroat(ENT)components/Nasopharyngolaryngoscopy.jsx';
import Glossectomy from './Ear,NoseandThroat(ENT)components/Glossectomy.jsx';
import HearingAids from './Ear,NoseandThroat(ENT)components/HearingAids.jsx';
import VoiceRestorationSurgery from './Ear,NoseandThroat(ENT)components/VoiceRestorationSurgery.jsx';
import VascularMedicineMain from './VascularMedicinecomponents/VascularMedicineMain.jsx';
import AbdominalAorticAneurysmRepairs from './cardiologytreatmentcomponents/Aaarepair';
import Angioplastys from './VascularMedicinecomponents/Angioplasty.jsx';
import FemoralArteryBypassSurgery from './VascularMedicinecomponents/FemoralArteryBypassSurgery.jsx';
import ArteriovenousMalformationTreatment from './VascularMedicinecomponents/ArteriovenousMalformation(AVM)Treatment.jsx';
import AorticArchSurgery from './VascularMedicinecomponents/AorticArchSurgery.jsx';
import DeepVeinThrombosisTreatment from './VascularMedicinecomponents/DeepVeinThrombosis(DVT)Treatment.jsx';
import ArteriovenousFistulaforDialysis from './VascularMedicinecomponents/ArteriovenousFistulaforDialysis.jsx';
import PulmonaryEmbolismTreatment from './VascularMedicinecomponents/PulmonaryEmbolismTreatment.jsx';
import CarotidArteryDissectionTreatment from './VascularMedicinecomponents/CarotidArteryDissectionTreatment.jsx';
import PeripheralArteryAneurysmRepair from './VascularMedicinecomponents/PeripheralArteryAneurysmRepair.jsx';
import Atherectomy from './VascularMedicinecomponents/Atherectomy.jsx';
import StentInsertion from './VascularMedicinecomponents/StentInsertion.jsx';
import AortoiliacandAortofemoralBypassGraftSurgery from './VascularMedicinecomponents/AortoiliacandAortofemoralBypassGraftSurgery.jsx';
import Hemorrhoidectomy from './VascularMedicinecomponents/Hemorrhoidectomy.jsx';
import RadiofrequencyAblation from './VascularMedicinecomponents/RadiofrequencyAblation.jsx';
import Colectomy from './VascularMedicinecomponents/Colectomy.jsx';
import AnalAbscessDrainage from './VascularMedicinecomponents/AnalAbscessDrainage.jsx';
import RectoceleSurgery from './VascularMedicinecomponents/RectoceleSurgery.jsx';
import AnalCystRemoval from './VascularMedicinecomponents/AnalCystRemoval.jsx';
import AnalSphincterRepair from './VascularMedicinecomponents/AnalSphincterRepair.jsx';
import Anoscopy from './VascularMedicinecomponents/Anoscopy.jsx';
import RubberBandLigationforHemorrhoids from './VascularMedicinecomponents/RubberBandLigationforHemorrhoids.jsx';
import SmallBowelResection from './VascularMedicinecomponents/SmallBowelResection.jsx';
import Sphincterotomy from './VascularMedicinecomponents/Sphincterotomy.jsx';
import Ileostomy from './VascularMedicinecomponents/Ileostomy.jsx';
import DermatologyMain from './Dermatologycomponents/DermatologyMain.jsx';
import CutaneousHornRemoval from './Dermatologycomponents/CutaneousHornRemoval.jsx';
import NailFungusTreatment from './Dermatologycomponents/NailFungusTreatment.jsx';
import RosaceaTreatment from './Dermatologycomponents/RosaceaTreatment.jsx';
import HairandScalpTreatment from './Dermatologycomponents/HairandScalpTreatment.jsx';
import HirsutismTreatment from './Dermatologycomponents/HirsutismTreatment.jsx';
import HyperpigmentationTreatment from './Dermatologycomponents/HyperpigmentationTreatment.jsx';
import SkinGrafting from './Dermatologycomponents/SkinGrafting.jsx';
import SkinBiopsy from './Dermatologycomponents/SkinBiopsy.jsx';
import AcneTreatment from './Dermatologycomponents/AcneTreatment.jsx';
import PsoriasisTreatment from './Dermatologycomponents/PsoriasisTreatment.jsx';
import MiliaRemoval from './Dermatologycomponents/MiliaRemoval.jsx';
import MoleRemoval from './Dermatologycomponents/MoleRemoval.jsx';
import SkinTagRemoval from './Dermatologycomponents/SkinTag(Acrochordon)Removal.jsx';
import MoleandSkinLesionEvaluation from './Dermatologycomponents/MoleandSkinLesionEvaluation.jsx';
import PigmentationTreatment from './Dermatologycomponents/PigmentationTreatment.jsx';
import GeneralSurgeryMain from './GeneralSurgerycomponents/GeneralSurgeryMain.jsx';
import Mastectomy from './GeneralSurgerycomponents/Mastectomy.jsx';
import Nephrectomy from './GeneralSurgerycomponents/Nephrectomy.jsx';
import AnalFistulaSurgery from './GeneralSurgerycomponents/AnalFistulaSurgery.jsx';
import AnalFissureTreatment from './GeneralSurgerycomponents/AnalFissureTreatment.jsx';
import PilesSurgeryinIndia from './GeneralSurgerycomponents/PilesSurgeryinIndia.jsx';
import Splenectomy from './GeneralSurgerycomponents/Splenectomy.jsx';
import PediatricSurgeryinIndia from './GeneralSurgerycomponents/PediatricSurgeryinIndia.jsx';
import RoboticSurgeryinIndia from './GeneralSurgerycomponents/RoboticSurgeryinIndia.jsx';
import Adrenalectomy from './GeneralSurgerycomponents/Adrenalectomy.jsx';
import Appendectomy from './GeneralSurgerycomponents/Appendectomy.jsx';
import LiverResection from './GeneralSurgerycomponents/LiverResection.jsx';
import LymphNodesRemoval from './GeneralSurgerycomponents/LymphNodesRemoval.jsx';
import UmbilicalHerniaRepair from './GeneralSurgerycomponents/UmbilicalHerniaRepair.jsx';
import Gastrectomy from './GeneralSurgerycomponents/Gastrectomy.jsx';
import LymphNodeBiopsy from './GeneralSurgerycomponents/LymphNodeBiopsy.jsx';
import BreastLumpectomy from './GeneralSurgerycomponents/BreastLumpectomy.jsx';
import BreastTumorRemoval from './GeneralSurgerycomponents/BreastTumorRemoval.jsx';
import IncisionalHerniaRepair from './GeneralSurgerycomponents/IncisionalHerniaRepair.jsx';
import LipomaRemoval from './GeneralSurgerycomponents/LipomaRemoval.jsx';
import Laparotomy from './GeneralSurgerycomponents/Laparotomy.jsx';
import CystRemoval from './GeneralSurgerycomponents/CystRemoval.jsx';
import BreastAbscessDrainage from './GeneralSurgerycomponents/BreastAbscessDrainage.jsx';
import Pleurodesis from './GeneralSurgerycomponents/Pleurodesis.jsx';
import Tracheostomy from './GeneralSurgerycomponents/Tracheostomy.jsx';
import StereotacticRadiosurgery from './GeneralSurgerycomponents/StereotacticRadiosurgery.jsx';
import Omentectomy from './GeneralSurgerycomponents/Omentectomy.jsx';
import Thoracostomy from './GeneralSurgerycomponents/Thoracostomy.jsx';
import NeurosurgeryMain from './Neurosurgerycomponents/NeurosurgeryMain.jsx';



export default function MyRoutes() {
    return ( 
      <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/hospitals" element={<HospitalList />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/hospital/details/:hospitalid" element={<HospitalDetails/>}/>
          <Route path="/doctor/details/:doctorid" element={<DoctorsDetails/>}/>
          <Route path="/treatments/category/colposcopy" element={<Colposcopy/>}/>
          <Route path="/treatments/category/neurosurgery" element={<NeurosurgeryMain/>}/>
          <Route path="/treatments/category/thoracostomy" element={<Thoracostomy/>}/>
          <Route path="/treatments/category/omentectomy" element={<Omentectomy/>}/>
          <Route path="/treatments/category/stereotactic_radiosurgery" element={<StereotacticRadiosurgery/>}/>
          <Route path="/treatments/category/tracheostomy" element={<Tracheostomy/>}/>
          <Route path="/treatments/category/pleurodesis" element={<Pleurodesis/>}/>
          <Route path="/treatments/category/breast_abscess_drainage" element={<BreastAbscessDrainage/>}/>
          <Route path="/treatments/category/cyst_removal" element={<CystRemoval/>}/>
          <Route path="/treatments/category/laparotomy" element={<Laparotomy/>}/>
          <Route path="/treatments/category/lipoma_removal" element={<LipomaRemoval/>}/>
          <Route path="/treatments/category/incisional_hernia_repair" element={<IncisionalHerniaRepair/>}/>
          <Route path="/treatments/category/breast_tumor_removal" element={<BreastTumorRemoval/>}/>
          <Route path="/treatments/category/breast_lumpectomy" element={<BreastLumpectomy/>}/>
          <Route path="/treatments/category/lymph_node_biopsy" element={<LymphNodeBiopsy/>}/>
          <Route path="/treatments/category/gastrectomy" element={<Gastrectomy/>}/>
          <Route path="/treatments/category/umbilical_hernia_repair" element={<UmbilicalHerniaRepair/>}/>
          <Route path="/treatments/category/lymph_nodes_removal" element={<LymphNodesRemoval/>}/>
          <Route path="/treatments/category/liver_resection" element={<LiverResection/>}/>
          <Route path="/treatments/category/appendectomy" element={<Appendectomy/>}/>
          <Route path="/treatments/category/adrenalectomy" element={<Adrenalectomy/>}/>
          <Route path="/treatments/category/robotic_surgery_in_india" element={<RoboticSurgeryinIndia/>}/>
          <Route path="/treatments/category/pediatric_surgery_in_india" element={<PediatricSurgeryinIndia/>}/>
          <Route path="/treatments/category/splenectomy" element={<Splenectomy/>}/>
          <Route path="/treatments/category/piles_surgery_in_india" element={<PilesSurgeryinIndia/>}/>
          <Route path="/treatments/category/anal_fissure_treatment" element={<AnalFissureTreatment/>}/>
          <Route path="/treatments/category/anal_fistula_surgery" element={<AnalFistulaSurgery/>}/>
          <Route path="/treatments/category/ephrectomy" element={<Nephrectomy/>}/>
          <Route path="/treatments/category/mastectomy" element={<Mastectomy/>}/>
          <Route path="/treatments/category/general_surgery" element={<GeneralSurgeryMain/>}/>
          <Route path="/treatments/category/pigmentation_treatment" element={<PigmentationTreatment/>}/>
          <Route path="/treatments/category/mole_and_skin_lesion_evaluation" element={<MoleandSkinLesionEvaluation/>}/>
          <Route path="/treatments/category/skin_tag_removal" element={<SkinTagRemoval/>}/>
          <Route path="/treatments/category/mole_removal" element={<MoleRemoval/>}/>
          <Route path="/treatments/category/milia_removal" element={<MiliaRemoval/>}/>
          <Route path="/treatments/category/psoriasis_treatment" element={<PsoriasisTreatment/>}/>
          <Route path="/treatments/category/acne_treatment" element={<AcneTreatment/>}/>
          <Route path="/treatments/category/skin_biopsy" element={<SkinBiopsy/>}/>
          <Route path="/treatments/category/skin_grafting" element={<SkinGrafting/>}/>
          <Route path="/treatments/category/hyperpigmentation_treatment" element={<HyperpigmentationTreatment/>}/>
          <Route path="/treatments/category/hirsutism_treatment" element={<HirsutismTreatment/>}/>
          <Route path="/treatments/category/hair_and_scalp_treatment" element={<HairandScalpTreatment/>}/>
          <Route path="/treatments/category/rosacea_treatment" element={<RosaceaTreatment/>}/>
          <Route path="/treatments/category/nail_fungus_treatment" element={<NailFungusTreatment/>}/>
          <Route path="/treatments/category/cutaneous_horn_removal" element={<CutaneousHornRemoval/>}/>
          <Route path="/treatments/category/dermatology" element={<DermatologyMain/>}/>
          <Route path="/treatments/category/ileostomy" element={<Ileostomy/>}/>
          <Route path="/treatments/category/sphincterotomy" element={<Sphincterotomy/>}/>
          <Route path="/treatments/category/small_bowel_resection" element={<SmallBowelResection/>}/>
          <Route path="/treatments/category/rubber_band_ligation_for_hemorrhoids" element={<RubberBandLigationforHemorrhoids/>}/>
          <Route path="/treatments/category/anoscopy" element={<Anoscopy/>}/>
          <Route path="/treatments/category/anal_sphincter_repair" element={<AnalSphincterRepair/>}/>
          <Route path="/treatments/category/anal_cyst_removal" element={<AnalCystRemoval/>}/>
          <Route path="/treatments/category/rectocele_surgery" element={<RectoceleSurgery/>}/>
          <Route path="/treatments/category/anal_abscess_drainage" element={<AnalAbscessDrainage/>}/>
          <Route path="/treatments/category/colectomy" element={<Colectomy/>}/>
          <Route path="/treatments/category/radiofrequency_ablation" element={<RadiofrequencyAblation/>}/>
          <Route path="/treatments/category/hemorrhoidectomy" element={<Hemorrhoidectomy/>}/>
          <Route path="/treatments/category/aortoiliac_and_aortofemoral_bypass_graft_surgery" element={<AortoiliacandAortofemoralBypassGraftSurgery/>}/>
          <Route path="/treatments/category/stent_insertion" element={<StentInsertion/>}/>
          <Route path="/treatments/category/atherectomy" element={<Atherectomy/>}/>
          <Route path="/treatments/category/peripheral_artery_aneurysm_repair" element={<PeripheralArteryAneurysmRepair/>}/>
          <Route path="/treatments/category/carotid_artery_dissection_treatment" element={<CarotidArteryDissectionTreatment/>}/>
          <Route path="/treatments/category/pulmonary_embolism_treatment" element={<PulmonaryEmbolismTreatment/>}/>
          <Route path="/treatments/category/arteriovenous_fistula_for_dialysis" element={<ArteriovenousFistulaforDialysis/>}/>
          <Route path="/treatments/category/deep_vein_thrombosis_treatment" element={<DeepVeinThrombosisTreatment/>}/>
          <Route path="/treatments/category/aortic_arch_surgery" element={<AorticArchSurgery/>}/>
          <Route path="/treatments/category/arteriovenous_malformation_treatment" element={<ArteriovenousMalformationTreatment/>}/>
          <Route path="/treatments/category/femoral_artery_bypass_surgery" element={<FemoralArteryBypassSurgery/>}/>
          <Route path="/treatments/category/angioplasty" element={<Angioplastys/>}/>
          <Route path="/treatments/category/abdominal_aortic_aneurysm_repairs" element={<AbdominalAorticAneurysmRepairs/>}/>
          <Route path="/treatments/category/vascular_medicine" element={<VascularMedicineMain/>}/>
          <Route path="/treatments/category/voice_restoration_surgery" element={<VoiceRestorationSurgery/>}/>
          <Route path="/treatments/category/hearing_aids" element={<HearingAids/>}/>
          <Route path="/treatments/category/glossectomy" element={<Glossectomy/>}/>
          <Route path="/treatments/category/nasopharyngolaryngoscopy" element={<Nasopharyngolaryngoscopy/>}/>
          <Route path="/treatments/category/decortication_of_vocal_cords" element={<DecorticationofVocalCords/>}/>
          <Route path="/treatments/category/submandibular_gland_surgery" element={<SubmandibularGlandSurgery/>}/>
          <Route path="/treatments/category/pediatric_tongue_tie_surgery" element={<PediatricTongueTieSurgery/>}/>
          <Route path="/treatments/category/salivary_stones_treatment" element={<SalivaryStonesTreatment/>}/>
          <Route path="/treatments/category/nose_fracture_treatment" element={<NoseFractureTreatment/>}/>
          <Route path="/treatments/category/uvulopalatoplasty" element={<Uvulopalatoplasty/>}/>
          <Route path="/treatments/category/salivary_gland_tumor_removal" element={<SalivaryGlandTumorRemoval/>}/>
          <Route path="/treatments/category/neck_dissection" element={<NeckDissection/>}/>
          <Route path="/treatments/category/audiometry" element={<Audiometry/>}/>
          <Route path="/treatments/category/stapedectomy" element={<Stapedectomy/>}/>
          <Route path="/treatments/category/nasal_obstruction_treatment" element={<NasalObstructionTreatment/>}/>
          <Route path="/treatments/category/laryngeal_surgery" element={<LaryngealSurgery/>}/>
          <Route path="/treatments/category/impedence_audiometry" element={<ImpedenceAudiometry/>}/>
          <Route path="/treatments/category/adenoidectomy" element={<Adenoidectomy/>}/>
          <Route path="/treatments/category/nasal_polyps_removal" element={<NasalPolypsRemoval/>}/>
          <Route path="/treatments/category/sleep_apnea_surgery" element={<SleepApneaSurgery/>}/>
          <Route path="/treatments/category/ossicular_chain_reconstruction" element={<OssicularChainReconstruction/>}/>
          <Route path="/treatments/category/mastoidectomy" element={<Mastoidectomy/>}/>
          <Route path="/treatments/category/turbinate_surgery" element={<TurbinateSurgery/>}/>
          <Route path="/treatments/category/laryngoscopy" element={<Laryngoscopy/>}/>
          <Route path="/treatments/category/tympanoplasty" element={<Tympanoplasty/>}/>
          <Route path="/treatments/category/sinus_surgery" element={<SinusSurgery/>}/>
          <Route path="/treatments/category/myringoplasty" element={<Myringoplasty/>}/>
          <Route path="/treatments/category/tonsillectomy" element={<Tonsillectomy/>}/>
          <Route path="/treatments/category/thyroidectomy" element={<Thyroidectomy/>}/>
          <Route path="/treatments/category/bone_anchored_hearing_aid" element={<BoneAnchoredHearingAid/>}/>
          <Route path="/treatments/category/uvulopalatopharyngoplasty" element={<Uvulopalatopharyngoplasty/>}/>
          <Route path="/treatments/category/septoplasty" element={<Septoplasty/>}/>
          <Route path="/treatments/category/myringotomy" element={<Myringotomy/>}/>
          <Route path="/treatments/category/dacryocystorhinostomy" element={<Dacryocystorhinostomy/>}/>
          <Route path="/treatments/category/parotid_surgery" element={<ParotidSurgery/>}/>
          <Route path="/treatments/category/laryngectomy" element={<Laryngectomy/>}/>
          <Route path="/treatments/category/cochlear_implant" element={<CochlearImplant/>}/>
          <Route path="/treatments/category/ear_nose_and_throat" element={<EarNoseandThroatMain/>}/>
          <Route path="/treatments/category/arm_lift" element={<ArmLift/>}/>
          <Route path="/treatments/category/endoscopic_submucosal_dissection" element={<EndoscopicSubmucosalDissection/>}/>
          <Route path="/treatments/category/endoscopic_full_thickness_resection" element={<EndoscopicFullThicknessResection/>}/>
          <Route path="/treatments/category/anorectal_manometry" element={<AnorectalManometry/>}/>
          <Route path="/treatments/category/diverticulitis_treatment" element={<DiverticulitisTreatment/>}/>
          <Route path="/treatments/category/cryptitis_surgery" element={<CryptitisSurgery/>}/>
          <Route path="/treatments/category/prostate_massage" element={<ProstateMassage/>}/>
          <Route path="/treatments/category/rectoscopy" element={<Rectoscopy/>}/>
          <Route path="/treatments/category/proctoscopy" element={<Proctoscopy/>}/>
          <Route path="/treatments/category/endoscopic_mucosectomy" element={<EndoscopicMucosectomy/>}/>
          <Route path="/treatments/category/colorectal_medicine" element={<ColorectalMedicineMain/>}/>
          <Route path="/treatments/category/ureteral_stent_placement" element={<UreteralStentPlacement/>}/>
          <Route path="/treatments/category/penectomy" element={<Penectomy/>}/>
          <Route path="/treatments/category/vesicoureteral_reflux_treatment" element={<VesicoureteralRefluxTreatment/>}/>
          <Route path="/treatments/category/simple_orchiectomy" element={<SimpleOrchiectomy/>}/>
          <Route path="/treatments/category/pyeloplasty" element={<Pyeloplasty/>}/>
          <Route path="/treatments/category/testicular_tumor_removal" element={<TesticularTumorRemoval/>}/>
          <Route path="/treatments/category/spermatic_cord_hydrocole_treatment" element={<SpermaticCordHydrocoleTreatment/>}/>
          <Route path="/treatments/category/IVU_intravenous_urography" element={<IVUIntravenousUrography/>}/>
          <Route path="/treatments/category/erectile_dysfunction_diagnosis" element={<ErectileDysfunctionDiagnosis/>}/>
          <Route path="/treatments/category/urinalysis" element={<Urinalysis/>}/>
          <Route path="/treatments/category/hypospadias_treatment" element={<HypospadiasTreatment/>}/>
          <Route path="/treatments/category/genital_wart_treatment" element={<GenitalWartTreatment/>}/>
          <Route path="/treatments/category/urostomy" element={<Urostomy/>}/>
          <Route path="/treatments/category/ureteroscopy" element={<Ureteroscopy/>}/>
          <Route path="/treatments/category/undescended_testicle_surgery" element={<UndescendedTesticleSurgery/>}/>
          <Route path="/treatments/category/penis_frenuloplasty" element={<PenisFrenuloplasty/>}/>
          <Route path="/treatments/category/urology_ultrasound" element={<UrologyUltrasound/>}/>
          <Route path="/treatments/category/ureteral_reimplantation_surgery" element={<UreteralReimplantationSurgery/>}/>
          <Route path="/treatments/category/bladder_stone_removal_BNI" element={<BladderStoneRemovalBNI/>}/>
          <Route path="/treatments/category/prostate_surgery" element={<ProstateSurgery/>}/>
          <Route path="/treatments/category/prostate_ultrasound" element={<ProstateUltrasound/>}/>
          <Route path="/treatments/category/penile_prosthesis" element={<PenileProsthesis/>}/>
          <Route path="/treatments/category/bladder_stone_removal" element={<BladderStoneRemoval/>}/>
          <Route path="/treatments/category/varicocelectomy" element={<Varicocelectomy/>}/>
          <Route path="/treatments/category/urethral_surgery" element={<UrethralSurgery/>}/>
          <Route path="/treatments/category/urinary_incontinence_treatment" element={<UrinaryIncontinenceTreatment/>}/>
          <Route path="/treatments/category/cystectomy" element={<Cystectomy/>}/>
          <Route path="/treatments/category/peyronies_disease_treatment" element={<PeyroniesDiseaseTreatment/>}/>
          <Route path="/treatments/category/inguinal_orchiectomy" element={<InguinalOrchiectomy/>}/>
          <Route path="/treatments/category/laser_treatment_for_BPH_enlarged_prostate" element={<LaserTreatmentforBPHEnlargedProstate/>}/>
          <Route path="/treatments/category/cystoscopy" element={<Cystoscopy/>}/>
          <Route path="/treatments/category/ureteral_stone_removal" element={<UreteralStoneRemoval/>}/>
          <Route path="/treatments/category/erectile_dysfunction_treatment" element={<ErectileDysfunctionTreatment/>}/>
          <Route path="/treatments/category/prostate_biopsy" element={<ProstateBiopsy/>}/>
          <Route path="/treatments/category/testicular_biopsy" element={<TesticularBiopsy/>}/>
          <Route path="/treatments/category/transurethral_resection_of_the_prostate" element={<TransurethralResectionoftheProstate/>}/>
          <Route path="/treatments/kidney_stones_treatments" element={<KidneyStonesTreatments/>}/>
          <Route path="/treatments/category/pediatric_urology_treatment_in_india" element={<PediatricUrologyTreatmentinIndia/>}/>
          <Route path="/treatments/category/sperm_retrieval_treatment_in_india" element={<SpermRetrievalTreatmentInIndia/>}/>
          <Route path="/treatments/category/circumcision" element={<Circumcision/>}/>
          <Route path="/treatments/category/vasectomy" element={<Vasectomy/>}/>
          <Route path="/treatments/category/prostatectomy" element={<Prostatectomy/>}/>
          <Route path="/treatments/category/urology_treatment" element={<UrologyTreatmentMain/>}/>
          <Route path="/treatments/category/wrinkle_treatment" element={<WrinkleTreatment/>}/>
          <Route path="/treatments/category/rhinoplasty" element={<Rhinoplasty/>}/>
          <Route path="/treatments/category/breast_implants" element={<BreastImplants/>}/>
          <Route path="/treatments/category/otoplasty" element={<Otoplasty/>}/>
          <Route path="/treatments/category/liposuction" element={<Liposuction/>}/>
          <Route path="/treatments/category/breast_reconstruction" element={<BreastReconstruction/>}/>
          <Route path="/treatments/category/male_breast_reduction" element={<MaleBreastReduction/>}/>
          <Route path="/treatments/category/abdominoplasty" element={<Abdominoplasty/>}/>
          <Route path="/treatments/category/breast_reduction" element={<BreastReduction/>}/>
          <Route path="/treatments/category/breast_lift" element={<BreastLift/>}/>
          <Route path="/treatments/category/face_lift" element={<Facelift/>}/>
          <Route path="/treatments/category/plastic_cosmetic_surgery" element={<PlasticCosmeticSurgeryMain/>}/>
          <Route path="/treatments/category/liver_transplant" element={<LiverTransplant/>}/>
          <Route path="/treatments/category/pancreas_transplant" element={<PancreasTransplant/>}/>
          <Route path="/treatments/category/liver_cancer_treatment" element={<LiverCancerTreatment/>}/>
          <Route path="/treatments/category/esophageal_pH_monitoring" element={<EsophagealpHMonitoring/>}/>
          <Route path="/treatments/category/liver_transarterial_chemo_embolization" element={<LiverTransarterialChemoEmbolization/>}/>
          <Route path="/treatments/category/gastroesophageal_reflux_disease_treatment" element={<GastroesophagealRefluxDiseaseTreatment/>}/>
          <Route path="/treatments/category/bile_duct_cancer_surgery" element={<BileDuctCancerSurgery/>}/>
          <Route path="/treatments/category/surgery_for_benign_liver_tumors" element={<SurgeryforBenignLiverTumors/>}/> 
          <Route path="/treatments/category/esophageal_diverticula_surgery" element={<EsophagealDiverticulaSurgery/>}/>
          <Route path="/treatments/category/liver_cancer_surgery" element={<LiverCancerSurgery/>}/>
          <Route path="/treatments/category/liver_hemangioma_surgery" element={<LiverHemangiomaSurgery/>}/>
          <Route path="/treatments/category/stomach_cancer_surgery" element={<StomachCancerSurgery/>}/>
          <Route path="/treatments/category/pancreatitis_treatment" element={<PancreatitisTreatment/>}/>
          <Route path="/treatments/category/surgery_for_liver_cysts" element={<SurgeryforLiverCysts/>}/>
          <Route path="/treatments/category/surgery_for_cholecystitis" element={<SurgeryforCholecystitis/>}/>
          <Route path="/treatments/category/esophageal_manometry" element={<EsophagealManometry/>}/>
          <Route path="/treatments/category/colostomy" element={<Colostomy/>}/>
          <Route path="/treatments/category/gastroenterostomy" element={<Gastroenterostomy/>}/>
          <Route path="/treatments/category/heller_myotomy" element={<HellerMyotomy/>}/>
          <Route path="/treatments/category/meckels_diverticulum_surgery" element={<MeckelsDiverticulumSurgery/>}/>
          <Route path="/treatments/category/esophagoscopy" element={<Esophagoscopy/>}/>
          <Route path="/treatments/category/peptic_ulcer_treatment" element={<PepticUlcerTreatment/>}/>
          <Route path="/treatments/category/gastrostomy" element={<Gastrostomy/>}/>
          <Route path="/treatments/category/sigmoidoscopy" element={<Sigmoidoscopy/>}/>
          <Route path="/treatments/category/gastrointestinal_tract_biopsy" element={<GastrointestinalTractBiopsy/>}/>
          <Route path="/treatments/category/choledochotomy" element={<Choledochotomy/>}/>
          <Route path="/treatments/category/intra_abdominal_adhesions_surgery" element={<IntraAbdominalAdhesionsSurgery/>}/>
          <Route path="/treatments/category/gastrointestinal_perforation_repair" element={<GastrointestinalPerforationRepair/>}/>
          <Route path="/treatments/category/liver_disease_evaluation" element={<LiverDiseaseEvaluation/>}/>
          <Route path="/treatments/category/gallstones_treatment" element={<GallstonesTreatment/>}/>
          <Route path="/treatments/category/irritable_bowel_syndrome_treatment" element={<IrritableBowelSyndromeTreatment/>}/>
          <Route path="/treatments/category/pancreatectomy_treatment" element={<PancreatectomyTreatment/>}/>
          <Route path="/treatments/category/endoscopic_retrograde_cholangiopancreatography" element={<EndoscopicRetrogradeCholangiopancreatography/>}/>
          <Route path="/treatments/category/liver_biopsy" element={<LiverBiopsy/>}/>
          <Route path="/treatments/category/laparoscopic_anti_reflux_surgery" element={<LaparoscopicAntiRefluxSurgery/>}/>
          <Route path="/treatments/category/gastroscopy_treatment" element={<GastroscopyTreatment/>}/>
          <Route path="/treatments/category/endoscopy_treatment" element={<EndoscopyTreatment/>}/>
          <Route path="/treatments/category/hiatal_hernia_surgery" element={<HiatalHerniaSurgery/>}/>
          <Route path="/treatments/category/hernia_repair" element={<HerniaRepair/>}/>
          <Route path="/treatments/category/hernia_surgery_in_india" element={<HerniaSurgeryinIndia/>}/>
          <Route path="/treatments/category/polypectomy_treatment" element={<PolypectomyTreatment/>}/>
          <Route path="/treatments/category/appendix_treatment_in_india" element={<AppendixTreatmentInIndia/>}/>
          <Route path="/treatments/category/crohns_disease_treatment" element={<CrohnsDiseaseTreatment/>}/>
          <Route path="/treatments/category/robotic_liver_transplant_surgery_in_india" element={<RoboticLiverTransplantSurgeryInIndia/>}/>
          <Route path="/treatments/category/colonoscopy_treatment" element={<ColonoscopyTreatment/>}/>
          <Route path="/treatments/category/cholecystectomy_treatment" element={<CholecystectomyTreatment/>}/>
          <Route path="/treatments/category/gastroenterology" element={<GastroenterologyMain/>}/>
          <Route path="/treatments/category/donor_eggs" element={<DonorEggs/>}/>
          <Route path="/treatments/category/mini_IVF" element={<MINIIVF/>}/>
          <Route path="/treatments/category/embryo_transfer_products" element={<EmbryoTransferProducts/>}/>
          <Route path="/treatments/category/IVF_treatment_in_india" element={<IVFTreatmentinIndia/>}/>
          <Route path="/treatments/category/ovarian_drilling" element={<OvarianDrilling/>}/>
          <Route path="/treatments/category/retrograde_ejaculation_treatment" element={<RetrogradeEjaculationTreatment/>}/>
          <Route path="/treatments/category/ovulation_induction" element={<OvulationInduction/>}/>
          <Route path="/treatments/category/egg_retrieval" element={<EggRetrieval/>}/>
          <Route path="/treatments/category/fertility_preservation" element={<FertilityPreservation/>}/>
          <Route path="/treatments/category/tubal_cannulation" element={<TubalCannulation/>}/>
          <Route path="/treatments/category/reception_of_oocytes_from_partner" element={<ReceptionofOocytesfromPartner/>}/>
          <Route path="/treatments/category/intracytoplasmic_morphologicallyselected_sperm_njection" element={<IntracytoplasmicMorphologicallyselectedSpermInjection/>}/>
          <Route path="/treatments/category/intracytoplasmic_sperm_injection" element={<IntracytoplasmicSpermInjection/>}/>
          <Route path="/treatments/category/sperm_collection" element={<SpermCollection/>}/>
          <Route path="/treatments/category/blastocyst_transfer" element={<BlastocystTransfer/>}/>
          <Route path="/treatments/category/hysterosalpingography" element={<Hysterosalpingography/>}/>
          <Route path="/treatments/category/preimplantation_genetic_diagnosis" element={<PreimplantationGeneticDiagnosis/>}/>
          <Route path="/treatments/category/assisted_hatching" element={<AssistedHatching/>}/>
          <Route path="/treatments/category/microsurgical_testicular_sperm_extraction" element={<MicrosurgicalTesticularSpermExtraction/>}/>
          <Route path="/treatments/category/donor_sperm" element={<DonorSperm/>}/>
          <Route path="/treatments/category/magnetic_activated_cell_sorting" element={<MagneticActivatedCellSorting/>}/>
          <Route path="/treatments/category/embryo_transfer" element={<EmbryoTransfer/>}/>
          <Route path="/treatments/category/testicular_sperm_aspiration" element={<TesticularSpermAspiration/>}/>
          <Route path="/treatments/category/IVF_fertility_treatment" element={<IVFFertilityTreatmentMain/>}/>
          <Route path="/treatments/category/meniscus_transplant" element={<MeniscusTransplant/>}/>
          <Route path="/treatments/category/wrist_instability_treatment" element={<WristInstabilityTreatment/>}/>
          <Route path="/treatments/category/treatment_for_osgood_schlatter_disease" element={<TreatmentforOsgoodSchlatterDisease/>}/>
          <Route path="/treatments/category/osteogenesis_imperfecta_treatment" element={<OsteogenesisImperfectaTreatment/>}/>
          <Route path="/treatments/category/osteoma_treatment" element={<OsteomaTreatment/>}/>
          <Route path="/treatments/category/snapping_hip_treatment" element={<SnappingHipTreatment/>}/>
          <Route path="/treatments/category/little_league_elbow_treatment" element={<LittleLeagueElbowTreatment/>}/>
          <Route path="/treatments/category/elbow_pain_treatment" element={<ElbowPainTreatment/>}/>
          <Route path="/treatments/category/bow_legs_treatment" element={<BowLegsTreatment/>}/>
          <Route path="/treatments/category/osteochondrosis_treatment" element={<OsteochondrosisTreatment/>}/>
          <Route path="/treatments/category/compartment_syndrome_treatment" element={<CompartmentSyndromeTreatment/>}/>
          <Route path="/treatments/category/chondroma_treatment" element={<ChondromaTreatment/>}/>
          <Route path="/treatments/category/shoulder_fracture_treatment" element={<ShoulderFractureTreatment/>}/>
          <Route path="/treatments/category/shoulder_capsular_release" element={<ShoulderCapsularRelease/>}/>
          <Route path="/treatments/category/pagets_disease_treatment" element={<PagetsDiseaseTreatment/>}/>
          <Route path="/treatments/category/osteochondritis_dissecans_treatment" element={<OsteochondritisDissecansTreatment/>}/>
          <Route path="/treatments/category/hip_fracture_surgery" element={<HipFractureSurgery/>}/>
          <Route path="/treatments/category/elbow_surgery" element={<ElbowSurgery/>}/>
          <Route path="/treatments/category/clubfoot_treatment" element={<ClubfootTreatment/>}/>
          <Route path="/treatments/category/fracture_treatment" element={<FractureTreatment/>}/>
          <Route path="/treatments/category/shoulder_tendon_reconstruction" element={<ShoulderTendonReconstruction/>}/>
          <Route path="/treatments/category/acromioclavicular_joint_repair" element={<AcromioclavicularJointRepair/>}/>
          <Route path="/treatments/category/synovium_removal" element={<SynoviumRemoval/>}/>
          <Route path="/treatments/category/shoulder_labrum_surgery" element={<ShoulderLabrumSurgery/>}/>
          <Route path="/treatments/category/revision_joint_surgery" element={<RevisionJointSurgery/>}/>
          <Route path="/treatments/category/kneecap_stabilization" element={<KneecapStabilization/>}/>
          <Route path="/treatments/category/dislocated_shoulder_treatment" element={<DislocatedShoulderTreatment/>}/>
          <Route path="/treatments/category/frozen_shoulder_treatment" element={<FrozenShoulderTreatment/>}/>
          <Route path="/treatments/category/knee_arthroplasty" element={<KneeArthroplasty/>}/>
          <Route path="/treatments/category/shoulder_stabilization" element={<ShoulderStabilization/>}/>
          <Route path="/treatments/category/elbow_arthroscopy" element={<ElbowArthroscopy/>}/>
          <Route path="/treatments/category/ulnar_nerve_decompression" element={<UlnarNerveDecompression/>}/>
          <Route path="/treatments/category/ankle_replacement" element={<AnkleReplacement/>}/>
          <Route path="/treatments/category/elbow_replacement" element={<ElbowReplacement/>}/>
          <Route path="/treatments/category/trochleoplasty" element={<Trochleoplasty/>}/>
          <Route path="/treatments/category/leg_length_discrepancy_treatment" element={<LegLengthDiscrepancyTreatment/>}/>
          <Route path="/treatments/category/rickets_treatment" element={<RicketsTreatment/>}/>
          <Route path="/treatments/category/kirschner_wire_removal" element={<KirschnerWireRemoval/>}/>
          <Route path="/treatments/category/hammer_clawor_mallet_toe_treatment" element={<HammerClaworMalletToeTreatment/>}/>
          <Route path="/treatments/category/toe_implant" element={<ToeImplant/>}/>
          <Route path="/treatments/category/artificial_limb_services" element={<ArtificialLimbServices/>}/>
          <Route path="/treatments/category/toe_joint_replacement" element={<ToeJointReplacement/>}/>
          <Route path="/treatments/category/foot_surgery" element={<FootSurgery/>}/>
          <Route path="/treatments/category/elbow_sprain_treatment" element={<ElbowSprainTreatment/>}/>
          <Route path="/treatments/category/cervical_strain_treatment" element={<CervicalStrainTreatment/>}/>
          <Route path="/treatments/category/hand_surgery" element={<HandSurgery/>}/>
          <Route path="/treatments/category/boutonniere_deformity_treatment" element={<BoutonniereDeformityTreatment/>}/>
          <Route path="/treatments/category/pes_anserine_bursitis_treatment" element={<PesAnserineBursitisTreatment/>}/>
          <Route path="/treatments/category/wrist_arthroscopy" element={<WristArthroscopy/>}/>
          <Route path="/treatments/category/benign_bone_tumor_removal" element={<BenignBoneTumorRemoval/>}/>
          <Route path="/treatments/category/de_quervain_syndrome_treatment" element={<DeQuervainSyndromeTreatment/>}/>
          <Route path="/treatments/category/knee_fracture_treatment" element={<KneeFractureTreatment/>}/>
          <Route path="/treatments/category/achilles_tendon_rupture" element={<AchillesTendonRupture/>}/>
          <Route path="/treatments/category/knee_ligament_surgery_MCL" element={<KneeLigamentSurgeryMCL/>}/>
          <Route path="/treatments/category/ganglion_cyst_removal" element={<GanglionCystRemoval/>}/>
          <Route path="/treatments/category/bone_fracture_treatment" element={<BoneFractureTreatment/>}/>
          <Route path="/treatments/category/tennis_or_golfers_elbow" element={<TennisorGolfersElbow/>}/>
          <Route path="/treatments/category/autologous_chondrocyte_implantation" element={<AutologousChondrocyteImplantation/>}/>
          <Route path="/treatments/category/ankle_arthroscopy" element={<AnkleArthroscopy/>}/>
          <Route path="/treatments/category/trigger_finger_treatment" element={<TriggerFingerTreatment/>}/>
          <Route path="/treatments/category/metatarsal_phalangeal_joint_replacement" element={<MetatarsalPhalangealJointReplacement/>}/>
          <Route path="/treatments/category/shoulder_arthroscopy" element={<ShoulderArthroscopy/>}/>
          <Route path="/treatments/category/meniscus_surgery" element={<MeniscusSurgery/>}/>
          <Route path="/treatments/category/shoulder_replacement" element={<ShoulderReplacement/>}/>
          <Route path="/treatments/category/dupuytrens_contracture_treatment" element={<DupuytrensContractureTreatment/>}/>
          <Route path="/treatments/category/rotator_cuff_surgery" element={<RotatorCuffSurgery/>}/>
          <Route path="/treatments/category/osteoarthritis_treatment" element={<OsteoarthritisTreatment/>}/>
          <Route path="/treatments/category/knee_surgery" element={<KneeSurgery/>}/>
          <Route path="/treatments/category/knee_ligament_surgery" element={<KneeLigamentSurgery/>}/>
          <Route path="/treatments/category/carpal_tunnel_syndrome_surgery" element={<CarpalTunnelSyndromeSurgery/>}/>
          <Route path="/treatments/category/total_knee_replacement_Uni" element={<TotalKneeReplacementUni/>}/>
          <Route path="/treatments/category/total_knee_replacement" element={<TotalKneeReplacement/>}/>
          <Route path="/treatments/category/joint_replacement_surgery_in_india" element={<JointReplacementSurgeryInIndia/>}/>
          <Route path="/treatments/category/arthroscopic_surgery_in_india" element={<ArthroscopicSurgeryinIndia/>}/>
          <Route path="/treatments/category/total_knee_replacement_surgery_in_india" element={<TotalKneeReplacementSurgeryinIndia/>}/>
          <Route path="/treatments/category/traumatic_orthopedic_surgery_in_india" element={<TraumaticOrthopedicSurgeryinIndia/>}/>
          <Route path="/treatments/category/pediatric_orthopedics_treatment_in_india" element={<PediatricOrthopedicsTreatmentinIndia/>}/>
          <Route path="/treatments/category/bunion_surgery" element={<BunionSurgery/>}/>
          <Route path="/treatments/category/anterior_cervical_discectomy_and_fusion" element={<AnteriorCervicalDiscectomyandFusion/>}/>
          <Route path="/treatments/category/unilateral_hip_replacement" element={<UnilateralHipReplacement/>}/>
          <Route path="/treatments/category/shoulder_ligament_repair" element={<ShoulderLigamentRepair/>}/>
          <Route path="/treatments/category/lateral_release_of_the_patella" element={<LateralReleaseofthePatella/>}/>
          <Route path="/treatments/category/ankle_fracture_treatment" element={<AnkleFractureTreatment/>}/>
          <Route path="/treatments/category/cervical_fracture_treatment" element={<CervicalFractureTreatment/>}/>
          <Route path="/treatments/category/slap_tear_repair" element={<SlapTearRepair/>}/>
          <Route path="/treatments/category/sciatica_treatment" element={<SciaticaTreatment/>}/>
          <Route path="/treatments/category/femur_fracture_treatment" element={<FemurFractureTreatment/>}/>
          <Route path="/treatments/category/osteoporosis_treatment" element={<OsteoporosisTreatment/>}/>
          <Route path="/treatments/category/patellar_dislocation_treatment" element={<PatellarDislocationTreatment/>}/>
          <Route path="/treatments/category/shoulder_surgery" element={<ShoulderSurgery/>}/>
          <Route path="/treatments/category/shoulder_arthroplasty" element={<ShoulderArthroplasty/>}/>
          <Route path="/treatments/category/hip_arthroplasty" element={<HipArthroplasty/>}/>
          <Route path="/treatments/category/hip_surgery" element={<HipSurgery/>}/>
          <Route path="/treatments/category/dislocated_hip_treatment" element={<DislocatedHipTreatment/>}/>
          <Route path="/treatments/category/dislocated_elbow_treatment" element={<DislocatedElbowTreatment/>}/>
          <Route path="/treatments/category/mortons_neuroma_treatment" element={<MortonsNeuromaTreatment/>}/>
          <Route path="/treatments/category/knee_sprain_treatment" element={<KneeSprainTreatment/>}/>
          <Route path="/treatments/category/abscess_debridement" element={<AbscessDebridement/>}/>
          <Route path="/treatments/category/cubital_tunnel_syndrome" element={<CubitalTunnelSyndrome/>}/>
          <Route path="/treatments/category/scaphoid_fracture_treatments" element={<ScaphoidFractureTreatments/>}/>
          <Route path="/treatments/category/shoulder_impingement_syndrome_treatment" element={<ShoulderImpingementSyndromeTreatment/>}/>
          <Route path="/treatments/category/treatment_for_achilles_tendinitis" element={<TreatmentforAchillesTendinitis/>}/>
          <Route path="/treatments/category/jumpers_knee_treatment" element={<JumpersKneeTreatment/>}/>
          <Route path="/treatments/category/hand_joints_synovectomy" element={<HandJointsSynovectomy/>}/>
          <Route path="/treatments/category/coccydynia_treatment" element={<CoccydyniaTreatment/>}/>
          <Route path="/treatments/category/hip_pain_treatment" element={<HipPainTreatment/>}/>
          <Route path="/treatments/category/knee_cartilage_surgery" element={<KneeCartilageSurgery/>}/>
          <Route path="/treatments/category/medial_patellofemoral_ligament_surgery" element={<MedialPatellofemoralLigamentSurgery/>}/>
          <Route path="/treatments/category/joint_injection" element={<JointInjection/>}/>
          <Route path="/treatments/category/bakers_cyst_treatment" element={<BakersCystTreatment/>}/>
          <Route path="/treatments/category/congenital_hip_dislocation_treatment" element={<CongenitalHipDislocationTreatment/>}/>
          <Route path="/treatments/category/fractured_shoulder_treatment" element={<FracturedShoulderTreatment/>}/>
          <Route path="/treatments/category/limb_amputation" element={<LimbAmputation/>}/>
          <Route path="/treatments/category/trapped_nerve_treatment" element={<TrappedNerveTreatment/>}/>
          <Route path="/treatments/category/avascular_necrosis_treatment" element={<AvascularNecrosisTreatment/>}/>
          <Route path="/treatments/category/muscle_reconstruction" element={<MuscleReconstruction/>}/>
          <Route path="/treatments/category/osteomalacia_treatment" element={<OsteomalaciaTreatment/>}/>
          <Route path="/treatments/category/core_decompression_of_the_hip" element={<CoreDecompressionoftheHip/>}/>
          <Route path="/treatments/category/osteomyelitis_treatment" element={<OsteomyelitisTreatment/>}/>
          <Route path="/treatments/category/knee_replacement" element={<KneeReplacement/>}/>
          <Route path="/treatments/category/orthopedics" element={<OrthopedicsMain/>}/>
          <Route path="/treatments/category/schwannoma_treatment" element={<SchwannomaTreatment/>}/>
          <Route path="/treatments/category/hyperthermia_therapy" element={<HyperthermiaTherapy/>}/>
          <Route path="/treatments/category/uterine_cancer_treatment" element={<UterineCancerTreatment/>}/>
          <Route path="/treatments/category/pancreatic_sslet_cell_tumor_treatment" element={<PancreaticIsletCellTumorTreatment/>}/>
          <Route path="/treatments/category/benign_soft_tissue_tumor_treatment" element={<BenignSoftTissueTumorTreatment/>}/>
          <Route path="/treatments/category/choroid_plexus_tumor_treatment" element={<ChoroidPlexusTumorTreatment/>}/>
          <Route path="/treatments/category/dysembryoplastic_neuroepithelial_tumor_treatment" element={<DysembryoplasticNeuroepithelialTumorTreatment/>}/>
          <Route path="/treatments/category/astrocytoma_treatment" element={<AstrocytomaTreatment/>}/>
          <Route path="/treatments/category/medulloepithelioma_treatment" element={<MedulloepitheliomaTreatment/>}/>
          <Route path="/treatments/category/craniopharyngioma_treatment" element={<CraniopharyngiomaTreatment/>}/>
          <Route path="/treatments/category/ependymoma_treatment" element={<EpendymomaTreatment/>}/>
          <Route path="/treatments/category/malignant_mesothelioma_treatment" element={<MalignantMesotheliomaTreatment/>}/>
          <Route path="/treatments/category/medulloblastoma_treatment" element={<MedulloblastomaTreatment/>}/>
          <Route path="/treatments/category/oligodendroglioma_treatment" element={<OligodendrogliomaTreatment/>}/>
          <Route path="/treatments/category/paranasal_sinus_and_nasal_cavity_cancer_treatment" element={<ParanasalSinusandNasalCavityCancerTreatment/>}/>
          <Route path="/treatments/category/pancoast_tumor_treatment" element={<PancoastTumorTreatment/>}/>
          <Route path="/treatments/category/pineoblastoma_treatment" element={<PineoblastomaTreatment/>}/>
          <Route path="/treatments/category/chordoma_treatment" element={<ChordomaTreatment/>}/>
          <Route path="/treatments/category/treatment_for_cancer_of_unknown_primary" element={<TreatmentforCancerofUnknownPrimary/>}/>
          <Route path="/treatments/category/brainstem_glioma_treatment" element={<BrainstemGliomaTreatment/>}/>
          <Route path="/treatments/category/ganglioglioma_treatment" element={<GangliogliomaTreatment/>}/>
          <Route path="/treatments/category/ependymoblastoma_treatment" element={<EpendymoblastomaTreatment/>}/>
          <Route path="/treatments/category/osteosarcoma_treatment" element={<OsteosarcomaTreatment/>}/>
          <Route path="/treatments/category/gestational_trophoblastic_disease_treatment" element={<GestationalTrophoblasticDiseaseTreatment/>}/>
          <Route path="/treatments/category/pleomorphic_xanthoastrocytoma_treatment" element={<PleomorphicXanthoastrocytomaTreatment/>}/>
          <Route path="/treatments/category/angiosarcoma_treatment" element={<AngiosarcomaTreatment/>}/>
          <Route path="/treatments/category/stem_cell_treatment_for_osteoarthritis" element={<StemCellTreatmentForOsteoarthritis/>}/>
          <Route path="/treatments/category/microcystic_adnexal_carcinoma_treatment" element={<MicrocysticAdnexalCarcinomaTreatment/>}/>
          <Route path="/treatments/category/chondroblastoma_treatment" element={<ChondroblastomaTreatment/>}/>
          <Route path="/treatments/category/chondrosarcoma_treatment" element={<ChondrosarcomaTreatment/>}/>
          <Route path="/treatments/category/osteoblastoma_treatment" element={<OsteoblastomaTreatment/>}/>
          <Route path="/treatments/category/stem_cell_treatment_for_chronic_back_pain" element={<StemCellTreatmentForChronicBackPain/>}/>
          <Route path="/treatments/category/treatment_for_paraneoplastic_syndromes" element={<TreatmentforParaneoplasticSyndromes/>}/>
          <Route path="/treatments/category/chemoradiotherapy" element={<Chemoradiotherapy/>}/>
          <Route path="/treatments/category/central_nervous_system_lymphoma_treatment" element={<CentralNervousSystemLymphomaTreatment/>}/>
          <Route path="/treatments/category/stemCell_treatment_for_chronic_tendinitis" element={<StemCellTreatmentForChronicTendinitis/>}/>
          <Route path="/treatments/category/colorectal_cancer_treatment" element={<ColorectalCancerTreatment/>}/>
          <Route path="/treatments/category/brain_tumor_treatment" element={<BrainTumorTreatment/>}/>
          <Route path="/treatments/category/waldenstrom_macroglobulinemia_treatment" element={<WaldenstromMacroglobulinemiaTreatment/>}/>
          <Route path="/treatments/category/retinoblastoma_treatment" element={<RetinoblastomaTreatment/>}/>
          <Route path="/treatments/category/nasopharyngeal_cancer_treatment" element={<NasopharyngealCancerTreatment/>}/>
          <Route path="/treatments/category/meningioma_treatment" element={<MeningiomaTreatment/>}/>
          <Route path="/treatments/category/autologous_bone_marrow_transplant" element={<AutologousBoneMarrowTransplant/>}/>
          <Route path="/treatments/category/intraoperative_radiation_therapy" element={<IntraoperativeRadiationTherapy/>}/>
          <Route path="/treatments/category/hyperthermic_intraperitoneal_chemotherapy" element={<HyperthermicIntraperitonealChemotherapy/>}/>
          <Route path="/treatments/category/castleman_disease_treatment" element={<CastlemanDiseaseTreatment/>}/>
          <Route path="/treatments/category/bone_marrow_transplant" element={<BoneMarrowTransplant/>}/>
          <Route path="/treatments/category/haploidentical_bone_marrow_transplant" element={<HaploidenticalBoneMarrowTransplant/>}/>
          <Route path="/treatments/category/allogeneic_bone_marrow_transplant" element={<AllogeneicBoneMarrowTransplant/>}/>
          <Route path="/treatments/category/neuroblastoma_treatment" element={<NeuroblastomaTreatment/>}/>
          <Route path="/treatments/category/myelodysplastic_syndromes_treatment" element={<MyelodysplasticSyndromesTreatment/>}/>
          <Route path="/treatments/category/treatment_of_gastrointestinal_stromal_tumors" element={<TreatmentofGastrointestinalStromalTumors/>}/>
          <Route path="/treatments/category/treatment_of_gastrointestinal_carcinoid_tumors" element={<TreatmentofGastrointestinalCarcinoidTumors/>}/>
          <Route path="/treatments/category/thymus_cancer_treatment" element={<ThymusCancerTreatment/>}/>
          <Route path="/treatments/category/teratoma_treatment" element={<TeratomaTreatment/>}/>
          <Route path="/treatments/category/salivary_gland_cancer_treatment" element={<SalivaryGlandCancerTreatment/>}/>
          <Route path="/treatments/category/kaposis_sarcoma_treatment" element={<KaposisSarcomaTreatment/>}/>
          <Route path="/treatments/category/spinal_cord_tumor_treatment" element={<SpinalCordTumorTreatment/>}/>
          <Route path="/treatments/category/oral_cancer_treatment" element={<OralCancerTreatment/>}/>
          <Route path="/treatments/category/male_breast_cancer_treatment" element={<MaleBreastCancerTreatment/>}/>
          <Route path="/treatments/category/vulvar_cancer_treatment" element={<VulvarCancerTreatment/>}/>
          <Route path="/treatments/category/soft_tissue_sarcoma_treatment" element={<SoftTissueSarcomaTreatment/>}/>
          <Route path="/treatments/category/primary_bone_cancer_treatment" element={<PrimaryBoneCancerTreatment/>}/>
          <Route path="/treatments/category/glioblastoma_treatment" element={<GlioblastomaTreatment/>}/>
          <Route path="/treatments/category/small_intestine_cancer_treatment" element={<SmallIntestineCancerTreatment/>}/>
          <Route path="/treatments/category/head_and_neck_cancer_treatment" element={<HeadandNeckCancerTreatment/>}/>
          <Route path="/treatments/category/radiosurgery_cancer_treatment" element={<RadiosurgeryCancerTreatment/>}/>
          <Route path="/treatments/category/hodgkin_lymphoma_treatment" element={<HodgkinLymphomaTreatment/>}/>
          <Route path="/treatments/category/multiple_myeloma_treatment" element={<MultipleMyelomaTreatment/>}/>
          <Route path="/treatments/category/non_hodgkin_lymphomas_treatment" element={<NonHodgkinLymphomasTreatment/>}/>
          <Route path="/treatments/category/gallbladder_cancer_treatment" element={<GallbladderCancerTreatment/>}/>
          <Route path="/treatments/category/esophageal_cancer_treatment" element={<EsophagealCancerTreatment/>}/>
          <Route path="/treatments/category/vaginal_cancer_treatment" element={<VaginalCancerTreatment/>}/>
          <Route path="/treatments/category/thyroid_cancer_treatment" element={<ThyroidCancerTreatment/>}/>
          <Route path="/treatments/category/kidney_cancer_treatments" element={<KidneyCancerTreatments/>}/>
          <Route path="/treatments/category/pancreatic_cancer_treatment" element={<PancreaticCancerTreatment/>}/>
          <Route path="/treatments/category/lung_cancer_treatment" element={<LungCancerTreatment/>}/>
          <Route path="/treatments/category/bladder_cancer_treatment" element={<BladderCancerTreatment/>}/>
          <Route path="/treatments/category/cervical_cancer_treatment" element={<CervicalCancerTreatment/>}/>
          <Route path="/treatments/category/rhabdomyosarcoma_treatment" element={<RhabdomyosarcomaTreatment/>}/>
          <Route path="/treatments/category/colon_cancer_treatment" element={<ColonCancerTreatment/>}/>
          <Route path="/treatments/category/cyber_knife_treatment" element={<CyberKnifeTreatment/>}/>
          <Route path="/treatments/category/skin_cancer_treatment" element={<SkinCancerTreatment/>}/>
          <Route path="/treatments/category/chronic_leukemia_treatment" element={<ChronicLeukemiaTreatment/>}/>
          <Route path="/treatments/category/chemotherapy" element={<Chemotherapy/>}/>
          <Route path="/treatments/category/breast_cancer_treatment" element={<BreastCancerTreatment/>}/>
          <Route path="/treatments/category/radiation_oncology_treatment_in_india" element={<RadiationOncologyTreatmentinIndia/>}/>
          <Route path="/treatments/category/surgical_oncology_treatment_in_india" element={<SurgicalOncologyTreatmentinIndia/>}/>
          <Route path="/treatments/category/bone_cancer_treatment_in_india" element={<BoneCancerTreatmentinIndia/>}/>
          <Route path="/treatments/category/chronic_myelogenous_leukemia_treatment_in_india" element={<ChronicMyelogenousLeukemiaTreatmentinIndia/>}/>
          <Route path="/treatments/category/acute_leukemia_treatment" element={<AcuteLeukemiaTreatment/>}/>
          <Route path="/treatments/category/blood_cancer_treatment_in_india" element={<BloodCancerTreatmentinIndia/>}/>
          <Route path="/treatments/category/anal_cancer_treatment" element={<AnalCancerTreatment/>}/>
          <Route path="/treatments/category/cancer_treatment" element={<CancerTreatment/>}/>
          <Route path="/treatments/category/sickle_cell_treatment" element={<SickleCellTreatment/>}/>
          <Route path="/treatments/category/thalassemia_treatment" element={<ThalassemiaTreatment/>}/>
          <Route path="/treatments/category/stem_cell_transplant" element={<StemCellTransplant/>}/>
          <Route path="/treatments/category/ovarian_Cancer_treatment" element={<OvarianCancerTreatment/>}/>
          <Route path="/treatments/category/prostate_cancer_treatment" element={<ProstateCancerTreatment/>}/>
          <Route path="/treatments/category/radiotherapy" element={<Radiotherapy/>}/>
          <Route path="/treatments/category/stomach_cancer_treatment" element={<StomachCancerTreatment/>}/>
          <Route path="/treatments/category/endometrial_cancer_treatment" element={<EndometrialCancerTreatment/>}/>
          <Route path="/treatments/category/laryngeal_cancer_treatment" element={<LaryngealCancerTreatment/>}/>
          <Route path="/treatments/category/regional_chemotherapy" element={<RegionalChemotherapy/>}/>
          <Route path="/treatments/category/penile_cancer_treatment" element={<PenileCancerTreatment/>}/>
          <Route path="/treatments/category/bile_duct_cancer_treatment" element={<BileDuctCancerTreatment/>}/>
          <Route path="/treatments/category/blastoma_treatment" element={<BlastomaTreatment/>}/>
          <Route path="/treatments/category/germ_cell_tumor_treatment" element={<GermCellTumorTreatment/>}/>
          <Route path="/treatments/category/mixed_glioma_treatment" element={<MixedGliomaTreatment/>}/>
          <Route path="/treatments/category/plasmacytoma_treatment" element={<PlasmacytomaTreatment/>}/>
          <Route path="/treatments/category/proton_treatment_therapy" element={<ProtonTreatmentTherapy/>}/>
          <Route path="/treatments/category/adrenal_cancer_treatment" element={<AdrenalCancerTreatment/>}/>
          <Route path="/treatments/category/oncology" element={<OncologyMain/>}/>
          <Route path="/treatments/category/pain_management" element={<PainManagement/>}/>
          <Route path="/treatments/category/ventriculoperitoneal_shunting" element={<VentriculoperitonealShunting/>}/>
          <Route path="/treatments/category/chronic_cerebrospinal_venous_insufficiency_treatment" element={<ChronicCerebrospinalVenousInsufficiencyTreatment/>}/>
          <Route path="/treatments/category/dementia_management" element={<DementiaManagement/>}/>
          <Route path="/treatments/category/neurological_rehabilitation" element={<NeurologicalRehabilitation/>}/>
          <Route path="/treatments/category/migraine_treatment" element={<MigraineTreatment/>}/>
          <Route path="/treatments/category/parkinsons_disease_treatment" element={<ParkinsonsDiseaseTreatment/>}/>
          <Route path="/treatments/category/multiple_sclerosis_management" element={<MultipleSclerosisManagement/>}/>
          <Route path="/treatments/category/cerebral_palsy_management" element={<CerebralPalsyManagement/>}/>
          <Route path="/treatments/category/neurointerventional_radiology_treatment_in_india" element={<NeurointerventionalRadiologyTreatmentinIndia/>}/>
          <Route path="/treatments/category/pediatric_neurology_treatment_in_india" element={<PediatricNeurologyTreatmentinIndia/>}/>
          <Route path="/treatments/category/epilepsy_treatment" element={<EpilepsyTreatment/>}/>
          <Route path="/treatments/category/cauda_equina_syndrome_treatment" element={<CaudaEquinaSyndromeTreatment/>}/>
          <Route path="/treatments/category/bells_palsy_treatment" element={<BellsPalsyTreatment/>}/>
          <Route path="/treatments/category/nephrology" element={<NephrologyMain/>}/>
          <Route path="/treatments/category/neurology" element={<NeurologyMain/>}/>
          <Route path="/treatments/category/kidney_cancer_treatment" element={<KidneyCancerTreatment/>}/>
          <Route path="/treatments/category/kidney_cyst_treatment" element={<KidneyCystTreatment/>}/>
          <Route path="/treatments/category/laparoscopic_kidney_transplant_patients" element={<LaparoscopicKidneyTransplantPatients/>}/>
          <Route path="/treatments/category/kidney_stones_treatment" element={<KidneyStonesTreatment/>}/>
          <Route path="/treatments/category/kidney_transplant" element={<KidneyTransplant/>}/>
          <Route path="/treatments/category/kidney_treatment_in_india" element={<KidneyTreatmentinIndia/>}/>
          <Route path="/treatments/category/kidney_surgery" element={<KidneySurgery/>}/>
          <Route path="/treatments/category/kidney_dialysis" element={<KidneyDialysis/>}/>
          <Route path="/treatments/category/hydronephrosis_treatment" element={<HydronephrosisTreatment/>}/>
          <Route path="/treatments/category/uterus_transplant" element={<UterusTransplant/>}/>
          <Route path="/treatments/category/fibroid_removal" element={<FibroidRemoval/>}/>
          <Route path="/treatments/category/vaginal_hysterectomy" element={<Vaginalhysterectomy/>}/>
          <Route path="/treatments/category/robotichysterectomy" element={<Robotichysterectomy/>}/>
          <Route path="/treatments/category/uterine_artery_embolization" element={<UterineArteryEmbolization/>}/>
          <Route path="/treatments/category/microdochectomy" element={<Microdochectomy/>}/>
          <Route path="/treatments/category/fetal_surgery" element={<FetalSurgery/>}/>
          <Route path="/treatments/category/molar_pregnancy_treatment" element={<MolarPregnancyTreatment/>}/>
          <Route path="/treatments/category/ovarian_transposition_surgery" element={<OvarianTranspositionSurgery/>}/>
          <Route path="/treatments/category/cardiotocography" element={<Cardiotocography/>}/>
          <Route path="/treatments/category/episiotomy_repair" element={<EpisiotomyRepair/>}/>
          <Route path="/treatments/category/vulvectomy" element={<Vulvectomy/>}/>
          <Route path="/treatments/category/urodynamic_evaluation" element={<UrodynamicEvaluation/>}/>
          <Route path="/treatments/category/vaginismus_treatment" element={<VaginismusTreatment/>}/>
          <Route path="/treatments/category/presacral_neurectomy" element={<PresacralNeurectomy/>}/>
          <Route path="/treatments/category/pelvic_floor_electrical_stimulator" element={<PelvicFloorElectricalStimulator/>}/>
          <Route path="/treatments/category/amniocentesis" element={<Amniocentesis/>}/>
          <Route path="/treatments/category/cervical_cerclage" element={<CervicalCerclage/>}/>
          <Route path="/treatments/category/vulval_skin_treatment" element={<VulvalSkinTreatment/>}/>
          <Route path="/treatments/category/uterosacral_nerve_ablation" element={<UterosacralNerveAblation/>}/>
          <Route path="/treatments/category/hymenotomy" element={<Hymenotomy/>}/>
          <Route path="/treatments/category/hysterosonography" element={<Hysterosonography/>}/>
          <Route path="/treatments/category/vaginectomy" element={<Vaginectomy/>}/>
          <Route path="/treatments/category/intrauterine_device_removal" element={<IntrauterineDeviceRemoval/>}/>
          <Route path="/treatments/category/fetal_echocardiography" element={<FetalEchocardiography/>}/>
          <Route path="/treatments/category/pessary_placement" element={<PessaryPlacement/>}/>
          <Route path="/treatments/category/antenatal_care" element={<AntenatalCare/>}/>
          <Route path="/treatments/category/vulval_biopsy" element={<VulvalBiopsy/>}/>
          <Route path="/treatments/category/cervical_polyp_removal" element={<CervicalPolypRemoval/>}/>
          <Route path="/treatments/category/pelvic_adhesiolysis" element={<PelvicAdhesiolysis/>}/>
          <Route path="/treatments/category/vaginal_child_birth" element={<VaginalChildbirth/>}/>
          <Route path="/treatments/category/hysteroscopy" element={<Hysteroscopy/>}/>
          <Route path="/treatments/category/hormone_replacement_therapy" element={<HormoneReplacementTherapy/>}/>
          <Route path="/treatments/category/endometrial_biopsy" element={<EndometrialBiopsy/>}/>
          <Route path="/treatments/category/vaginal_vault_prolapse_surgery" element={<VaginalVaultProlapseSurgery/>}/>
          <Route path="/treatments/category/intrauterine_device_placement" element={<IntrauterineDevicePlacement/>}/>
          <Route path="/treatments/category/cystocele_repair" element={<CystoceleRepair/>}/>
          <Route path="/treatments/category/uterine_prolapse_surgery" element={<UterineProlapseSurgery/>}/>
          <Route path="/treatments/category/cervical_biopsy" element={<CervicalBiopsy/>}/>
          <Route path="/treatments/category/ovarian_tumor_removal" element={<OvarianTumorRemoval/>}/>
          <Route path="/treatments/category/endometrial_ablation" element={<EndometrialAblation/>}/>
          <Route path="/treatments/category/cervical_conization" element={<CervicalConization/>}/>
          <Route path="/treatments/category/hysterectomy" element={<Hysterectomy/>}/>
          <Route path="/treatments/category/laparoscopy_surgery_in_india" element={<LaparoscopySurgeryInIndia/>}/>
          <Route path="/treatments/category/pelvic_floor_repair" element={<PelvicFloorRepair/>}/>
          <Route path="/treatments/category/gynecologiclaparoscopy" element={<GynecologicLaparoscopy/>}/>
          <Route path="/treatments/category/ectopic_pregnancy_surgery" element={<EctopicPregnancySurgery/>}/>
          <Route path="/treatments/category/vaginoplasty" element={<Vaginoplasty/>}/>
          <Route path="/treatments/category/tubal_ligation_reversal" element={<TubalLigationReversal/>}/>
          <Route path="/treatments/category/cesarean_section" element={<CesareanSection/>}/>
          <Route path="/treatments/category/contraceptive_implant" element={<ContraceptiveImplant/>}/>
          <Route path="/treatments/category/oophorectomy" element={<Oophorectomy/>}/>
          <Route path="/treatments/category/ovarian_cyst_removal" element={<OvarianCystRemoval/>}/>
          <Route path="/treatments/category/female_sterilization" element={<FemaleSterilization/>}/>
          <Route path="/treatments/category/myomectomy" element={<Myomectomy/>}/>
          <Route path="/treatments/category/dilation_and_curettage" element={<DilationandCurettage/>}/>
          <Route path="/treatments/category/endometriosis_treatment" element={<EndometriosisTreatment/>}/>
          <Route path="/treatments/category/cervical_cautery" element={<CervicalCautery/>}/>
          <Route path="/treatments/category/breast_biopsy" element={<BreastBiopsy/>}/>
          <Route path="/treatments/category/hymenoplasty" element={<Hymenoplasty/>}/>
          <Route path="/treatments/category/bariatic_surgery" element={<BariaticSurgeryMain/>}/>
          <Route path="/treatments/category/bartholins_cyst_treatment" element={<BartholinsCystTreatment/>}/>
          <Route path="/treatments/category/gynecology" element={<GynecologyMain/>}/>
          <Route path="/treatments/category/polycystic_ovary_syndrome_treatment" element={<PolycysticOvarySyndromeTreatment/>}/>
          <Route path="/treatments/category/hyperthyroidism_treatment" element={<HyperthyroidismTreatment/>}/>
          <Route path="/treatments/category/congenital_adrenal_hyperplasia_treatment" element={<CongenitalAdrenalHyperplasiaTreatment/>}/>
          <Route path="/treatments/category/endocrinology" element={<EndocrinologyMain/>}/>
          <Route path="/treatments/category/IPL_hair_removal" element={<IPLHairRemoval/>}/>
          <Route path="/treatments/category/photorejuvenation" element={<Photorejuvenation/>}/>
          <Route path="/treatments/category/pore_reduction_treatment" element={<PoreReductionTreatment/>}/>
          <Route path="/treatments/category/hand_rejuvenation" element={<HandRejuvenation/>}/>
          <Route path="/treatments/category/stem_cell_face_lift" element={<StemCellFacelift/>}/>
          <Route path="/treatments/category/skin_tone_adjustment" element={<SkinToneAdjustment/>}/>
          <Route path="/treatments/category/blemish_removal" element={<BlemishRemoval/>}/>
          <Route path="/treatments/category/carboxitherapy" element={<Carboxitherapy/>}/>
          <Route path="/treatments/category/skin_needling_treatment" element={<SkinNeedlingTreatment/>}/>
          <Route path="/treatments/category/skin_lightening" element={<SkinLightening/>}/>
          <Route path="/treatments/category/cellulite_treatment" element={<CelluliteTreatment/>}/>
          <Route path="/treatments/category/microdermabrasion" element={<Microdermabrasion/>}/>
          <Route path="/treatments/category/platelet_rich_plasma_facial_treatment" element={<PlateletRichPlasmaFacialTreatment/>}/>
          <Route path="/treatments/category/skin_tightening_treatment" element={<SkinTighteningTreatment/>}/>
          <Route path="/treatments/category/intense_pulsed_light_skin_treatment" element={<IntensePulsedLightSkinTreatment/>}/>
          <Route path="/treatments/category/laser_skin_resurfacing" element={<LaserSkinResurfacing/>}/>
          <Route path="/treatments/category/laser_tattoo_removal" element={<LaserTattooRemoval/>}/>
          <Route path="/treatments/category/laser_hair_removal" element={<LaserHairRemoval/>}/>
          <Route path="/treatments/category/cosmetology" element={<CosmetologyMain/>}/>
          <Route path="/treatments/category/chemical_peel" element={<ChemicalPeel/>}/>
          <Route path="/treatments/category/coronary_artery_bypass" element={<CoronaryArteryBypass/>}/>
          <Route path="/treatments/category/heart_transplant" element={<HeartTransplant/>}/>
          <Route path="/treatments/category/cardiac_asthma_treatment" element={<CardiacAsthmaTreatment/>}/>
          <Route path="/treatments/category/subaortic_membrane_excision" element={<SubaorticMembraneExcision/>}/>
          <Route path="/treatments/category/rastelli_procedure" element={<RastelliProcedure/>}/>
          <Route path="/treatments/category/pulmonary_artery_banding" element={<PulmonaryArteryBanding/>}/>
          <Route path="/treatments/category/patent_foramen_ovale_closure" element={<PatentForamenOvaleClosure/>}/>
          <Route path="/treatments/category/hypertension_treatment" element={<HypertensionTreatment/>}/>
          <Route path="/treatments/category/balloon_pulmonary_valvuloplasty" element={<BalloonPulmonaryValvuloplasty/>}/>
          <Route path="/treatments/category/aortopulmonary_window_repair" element={<AortopulmonaryWindowRepair/>}/>
          <Route path="/treatments/category/balloon_mitral_valvuloplasty" element={<BalloonMitralValvuloplasty/>}/>
          <Route path="/treatments/category/tricuspid_valve_repair" element={<TricuspidValveRepair/>}/>
          <Route path="/treatments/category/surgery_for_coarctation_of_the_aorta" element={<SurgeryforCoarctationoftheAorta/>}/>
          <Route path="/treatments/category/taussig_shunt" element={<TaussigShunt/>}/>
          <Route path="/treatments/category/total_anomalous_pulmonary_venous_connection_surgery" element={<TotalAnomalousPulmonaryVenousConnectionSurgery/>}/>
          <Route path="/treatments/category/glenn_shunt" element={<GlennShunt/>}/>
          <Route path="/treatments/category/surgery_for_hypoplastic_left_heart_syndrome" element={<SurgeryforHypoplasticLeftHeartSyndrome/>}/>
          <Route path="/treatments/category/left_ventricular_assist_device_implantation" element={<LeftVentricularAssistDeviceImplantation/>}/>
          <Route path="/treatments/category/fontan_procedure" element={<FontanProcedure/>}/>
          <Route path="/treatments/category/pancarditis_treatment" element={<PancarditisTreatment/>}/>
          <Route path="/treatments/category/kounis_syndrome_treatment" element={<KounisSyndromeTreatment/>}/>
          <Route path="/treatments/category/keshan_disease_treatment" element={<KeshanDiseaseTreatment/>}/>
          <Route path="/treatments/category/high_output_heart_failure_treatment" element={<HighOutputHeartFailureTreatment/>}/>
          <Route path="/treatments/category/endocardial_fibroelastosis_treatment" element={<EndocardialFibroelastosisTreatment/>}/>
          <Route path="/treatments/category/coxsackievirus_induced_cardiomyopathy_treatment" element={<CoxsackievirusInducedCardiomyopathyTreatment/>}/>
          <Route path="/treatments/category/cardiac_amyloidosis_treatment" element={<CardiacAmyloidosisTreatment/>}/>
          <Route path="/treatments/category/tricuspid_atresia_treatment" element={<TricuspidAtresiaTreatment/>}/>
          <Route path="/treatments/category/myocardial_bridge_treatment" element={<MyocardialBridgeTreatment/>}/>
          <Route path="/treatments/category/treatment_for_myocardial_rupture" element={<TreatmentforMyocardialRupture/>}/>
          <Route path="/treatments/category/shones_syndrome_treatment" element={<ShonesSyndromeTreatment/>}/>
          <Route path="/treatments/category/giant_cell_myocarditis_treatment" element={<GiantCellMyocarditisTreatment/>}/>
          <Route path="/treatments/category/eisenmengers_syndrome_treatment" element={<EisenmengersSyndromeTreatment/>}/>
          <Route path="/treatments/category/duroziezs_disease_treatment" element={<DuroziezsDiseaseTreatment/>}/>
          <Route path="/treatments/category/diastolic_heart_failure_treatment" element={<DiastolicHeartFailureTreatment/>}/>
          <Route path="/treatments/category/ventricular_aneurysm_treatment" element={<VentricularAneurysmTreatment/>}/>
          <Route path="/treatments/category/spontaneous_coronary_artery_dissection_treatment" element={<SpontaneousCoronaryArteryDissectionTreatment/>}/>
          <Route path="/treatments/category/roemheld_syndrome" element={<RoemheldSyndrome/>}/>
          <Route path="/treatments/category/cryoablation_for_atrial_fibrillation" element={<CryoablationforAtrialFibrillation/>}/>
          <Route path="/treatments/category/atherosclerosis_treatment" element={<AtherosclerosisTreatment/>}/>
          <Route path="/treatments/category/renal_denervation_therapy" element={<RenalDenervationTherapy/>}/>
          <Route path="/treatments/category/endocarditis_treatment" element={<EndocarditisTreatment/>}/>
          <Route path="/treatments/category/coronary_steal_treatment" element={<CoronaryStealTreatment/>}/>
          <Route path="/treatments/category/pericarditis_treatment" element={<PericarditisTreatment/>}/>
          <Route path="/treatments/category/myocarditis_treatment" element={<MyocarditisTreatment/>}/>
          <Route path="/treatments/category/atrioventricular_fistula_treatment" element={<AtrioventricularFistulaTreatment/>}/>
          <Route path="/treatments/category/heart_tumor_treatment" element={<HeartTumorTreatment/>}/>
          <Route path="/treatments/category/acute_decompensated_heart_failure_treatment" element={<AcuteDecompensatedHeartFailureTreatment/>}/>
          <Route path="/treatments/category/coronary_artery_disease_treatment" element={<CoronaryArteryDiseaseTreatment/>}/>
          <Route path="/treatments/category/cardiothoracic_surgery" element={<CardiothoracicSurgery/>}/>
          <Route path="/treatments/category/coronar_angiography_and_left_ventriculography" element={<CoronarAngiographyandLeftVentriculography/>}/>
          <Route path="/treatments/category/bentall_procedure" element={<BentallProcedure/>}/>
          <Route path="/treatments/category/minimally_invasive_direct_coronary_artery_bypass" element={<MinimallyInvasiveDirectCoronaryArteryBypass/>}/>
          <Route path="/treatments/category/cardioversion_treatment" element={<CardioversionTreatment
          />}/>
          <Route path="/category/surgery_for_tetralogy_of_fallot" element={<SurgeryforTetralogyofFallot/>}/>
          <Route path="/treatments/category/heart_biopsy_treatment" element={<HeartBiopsyTreatment/>}/>
          <Route path="/treatments/category/right_heart_catheterization" element={<RightHeartCatheterization/>}/>
          <Route path="/treatments/category/cardiac_resynchronisation_therapy_device_implantation" element={<CardiacResynchronisationTherapyDeviceImplantation/>}/>
          <Route path="/treatments/category/myocardial_infarction_treatment" element={<MyocardialInfarctionTreatment/>}/>
          <Route path="/treatments/category/patent_ductus_arteriosus_closure" element={<PatentDuctusArteriosusClosure/>}/>
          <Route path="/treatments/category/percutaneous_transluminal_coronary_angioplasty" element={<PercutaneousTransluminalCoronaryAngioplasty/>}/>
          <Route path="/treatments/category/atrioventricular_septal_defect_treatment" element={<AtrioventricularSeptalDefectTreatment/>}/>
          <Route path="/treatments/category/double-valve-replacement" element={<DoubleValveReplacementSecond/>}/>
          <Route path="/treatments/category/mitral_valve_repair" element={<MitralValveRepair/>}/>
          <Route path="/treatments/category/electrophysiology_study" element={<ElectrophysiologyStudy/>}/>
          <Route path="/treatments/category/heart_arrhythmia_catheter_ablation" element={<HeartArrhythmiaCatheterAblation/>}/>
          <Route path="/treatments/category/implantable_cardioverter_defibrillator_implantation" element={<ImplantableCardioverterDefibrillatorImplantation/>}/>
          <Route path="/treatments/category/atrial_septal_defect_closure" element={<AtrialSeptalDefectClosure/>}/>
          <Route path="/treatments/category/transcatheter_aortic_valve_implantation" element={<TranscatheterAorticValveImplantation/>}/>
          <Route path="/treatments/category/pacemaker_implantation" element={<PacemakerImplantation/>}/>
          <Route path="/treatments/category/ventricular_septal_defect_closure" element={<VentricularSeptalDefectClosure/>}/>
          <Route path="/treatments/category/aortic_valve_replacement_AVR" element={<AorticValveReplacementAVR/>}/>
          <Route path="/treatments/category/coronary_artery_angiography" element={<CoronaryArteryAngiography/>}/>
          <Route path="/treatments/category/aortic_valve_replacement_mechanical" element={<AorticValveReplacementMechanical/>}/>
          <Route path="/treatments/category/aortic_valve_repair" element={<AorticValveRepair/>}/>
          <Route path="/treatments/category/aortic_stenosis_treatment" element={<AorticStenosisTreatment/>}/>
          <Route path="/treatments/category/angioplasty" element={<Angioplasty/>}/>
          <Route path="/treatments/category/paediatric_cardiac_surgery_in_india" element={<PaediatricCardiacSurgeryInIndia/>}/>
          <Route path="/treatments/category/coronary_artery_bypass_graft" element={<CoronaryArteryBypassGraft/>}/>
          <Route path="/treatments/category/pediatric_cardiology_treatment_in_india" element={<PediatricCardiologyTreatmentInIndia/>}/>
          <Route path="/treatments/category/open_heart_surgery_(Pediatric)" element={<OpenHeartSurgery/>}/>
          <Route path="/treatments/category/valve_surgery_in_india" element={<ValveSurgeryInIndia/>}/>
          <Route path="/treatments/category/aortic_valve_replacement" element={<AorticValveReplacement/>}/>
          <Route path="/treatments/category/gastric_balloon_treatment" element={<GastricBalloonTreatment/>}/>
          <Route path="/treatments/category/primary_obesity_surgery_endolumenal" element={<PrimaryObesitySurgeryEndolumenal/>}/>
          <Route path="/treatments/category/Gastric_band_surgery" element={<GastricBandSurgery/>}/>
          <Route path="/treatments/category/gastric_bypass_surgery" element={<GastricByPassSurgery/>}/>
          <Route path="/treatments/category/biliopancreatic_diversion_with_duodenal_switch_(BPD/DS)" element={<BiliopancreaticDiversionwithDuodenalSwitchMain/>}/>
          <Route path="/treatments/category/gastric_sleeve_treatment" element={<GastricSleeveTreatment/>}/>
          <Route path="/treatments/category/sleeve_gastrectomy" element={<SleeveGastrectomy/>}/>
          <Route path="/treatments/category/open_heart_surgery_in_india" element={<OpenHeartSurgeryinIndia/>}/>
          <Route path="/treatments/category/gastric_plication" element={<GastricPlication/>}/>
          <Route path="/treatments/category/mitral_valve_replacement" element={<MitralValveReplacement/>}/>
          <Route path="/treatments/category/carotid_endarterectomy" element={<CarotidEndarterectomy/>}/>
          <Route path="/treatments/category/cardiology" element={<CardiologyMain/>}/>
          <Route path="/treatments/category/implantable_cardioverter_defibrillator" element={<ImplantableCardioverterDefibrillator/>}/>
          <Route path="/treatments/category/heart_valve_replacement" element={<HeartValveReplacement/>}/>
          <Route path="/treatments/category/coronary_angioplasty" element={<CoronaryAngioplasty/>}/>
          <Route path="/treatments/category/angioplasty" element={<Angiography/>}/>
          <Route path="/treatments/category/angioplasty_with_stent" element={<AngioplastywithStent/>}/>
          <Route path="/treatments/category/double_valve_replacement" element={<DoubleValveReplacement/>}/>
          <Route path="/treatments/category/cardiology_treatment_in_india" element={<CardiologyTreatmentinIndia/>}/>
          <Route path="/treatments/category/intra_aortic_balloon_pump_insertion" element={<IntraAorticBalloonPumpInsertion/>}/>
          <Route path="/treatments/category/surgery_for_transposition_of_the_great_arteries" element={<SurgeryforTranspositionoftheGreatArteries/>}/>
          <Route path="/treatments/category/abdominal_aortic_aneurysm_repair" element={<AbdominalAorticAneurysmRepair/>}/>
          <Route path="/doctors" element={<DoctorsList/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </>
    );
  };
  
  