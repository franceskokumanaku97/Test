import { makeStyles } from '@material-ui/core';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IlistTemPerH, IWeather, selectDayWeather } from '../../app/slice';


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
        height: "28px",
        width: "58px",
        color: "#FFFFFF",
        fontFamily: "Poppins",
        fontSize: "20px",
        fontWeight: 300,
        letterSpacing: "0",
        lineHeight: "30px",
        margin: 0,
        textAlign: "center"
    },
    labelTemp: {

        color: "#FFFFFF",
        fontFamily: "Poppins",
        fontSize: "40px",
        fontWeight: "bold",
        letterSpacing: "0",
        lineHeight: "60px",
        margin: 0,
        marginRight: "10px"
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
    content: {
        marginLeft: " 20px",
        display: "inline-block"
    }

})

export default function StepperTemp() {


    const dataWeatherDay = useSelector(selectDayWeather);
    const [dataToDisplay, setDataToDisplay] = useState<IlistTemPerH[] | null>();

    const normalizeData = (data: IWeather | null): IlistTemPerH[] | null => {
        if (data !== null) {



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
                <Box sx={{ marginTop: "40px", display: "flex", flexFlow: "column", alignItems: "center" }}>
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
                                    <p className={style.labelTime}>{moment(step.date).format("h a")}</p>
                                </div>

                            </div>

                        </>


                    ))}

                </Box> : null}

        </>

    );
}