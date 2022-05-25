import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { IlistTemPerH, IWeather, selectDayWeather } from '../../app/slice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core';
import { StepConnector, stepConnectorClasses, styled } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const EditStepper = styled(Stepper)(({ theme }) => ({
    '& .MuiStepIcon-root': {
        color: "#FFF",
        height: "30.31px",
        width: "30px",
    },
    '& .MuiStepIcon-root .Mui-active': {
        color: "#FFF"
    },
    '& .MuiStepConnector-line': {
        borderLeftWidth: "5px",
        BorderColor: "#FFF"
    },




}))

const useStyle = makeStyles({
    label: {
       
        color: "#FFFFFF",
        fontFamily: "Poppins",
        fontSize: "18px",
        fontWeight: 300,
        letterSpacing: "0",
        lineHeight: "27px",
        margin: 0,
    },
    labelTime: {
      
        color: "#FFFFFF",
        fontFamily: "Poppins",
        fontSize: "20px",
        fontWeight: 300,
        letterSpacing: "0",
        lineHeight: "30px",
        margin: 0,
    },
    labelTemp: {
       
        color: "#FFFFFF",
        fontFamily: "Poppins",
        fontSize: "40px",
        fontWeight: "bold",
        letterSpacing: "0",
        lineHeight: "60px",
        margin: 0,
        marginRight:"10px"
    },
    step: {

        margin: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        backgroundColor: "cream",
      
    },
    vStepper: {
        position: "relative"
    },
    circle: {
        backgroundColor: "#FFF",
        borderRadius: "100%",
        width: "30.31px",
        height: "30px",
        display: "inline-block",
    },
    line: {
        top: "23px",
        left: "12px",
        /*   height: 120px; */
        height: "100%",
       
        borderLeft: "5px solid #FFF",

        position: "absolute",
        
    },
    content:{
        marginLeft:" 20px",
        display: "inline-block"
    }

})

export default function StepperTemp() {


    const dataWeatherDay = useSelector(selectDayWeather);
    const [dataToDisplay, setDataToDisplay] = useState<IlistTemPerH[] | null>();

    const normalizeData = (data: IWeather | null): IlistTemPerH[] | null => {
        if (data !== null) {
            console.log("normalizeData", data.listTemPerH.filter((el: IlistTemPerH) =>
                moment(new Date(el.date)).format("YYYY-MM-DD") === moment(new Date()).format("YYYY-MM-DD")))


            return data.listTemPerH.filter((el: IlistTemPerH) => (
                moment(new Date(el.date)).format("YYYY-MM-DD") === moment(new Date()).format("YYYY-MM-DD")))

        } else {
            return null;
        }

    }

    useEffect(() => { setDataToDisplay(normalizeData(dataWeatherDay)) }, [dataWeatherDay])

    const style = useStyle();


    return (
        <>
            {dataToDisplay && dataToDisplay !== null ?
                <Box sx={{ marginTop: "40px",display:"flex",flexFlow:"column",alignItems:"center" }}>
                    <p className={style.label}>Now</p>
                    {dataToDisplay.map((step, index) => (
                        <>
                            <div className={style.step}>
                            <div className={style.content}>
                                    <p className={style.labelTemp}>{step.temp}</p>
                                </div>
                                <div className={style.vStepper}>
                                    <div className={style.circle}></div>
                                    <div className={style.line}></div>
                                </div>
                                <div className={style.content}>
                                    <p className={style.labelTime}>{moment(step.date).format("LT")}</p>
                                </div>
                                
                            </div>

                        </>


                    ))}
                    {/* <EditStepper orientation="vertical" >
                       

                            <Step active={false} key={step.temp}>
                                <StepLabel

                                >
                                    <p className={style.label}>{step.temp}</p>
                                </StepLabel>
                                <StepLabel

                                >
                                    <p className={style.label}>{step.temp}</p>
                                </StepLabel>

                            </Step>
                        ))}
                    </EditStepper> */}



                </Box> : null}

        </>

    );
}