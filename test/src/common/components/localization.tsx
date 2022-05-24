import { makeStyles } from '@material-ui/core';
import { Card, CardContent, IconButton } from '@mui/material';
import { IWeather, weatherCitySlice } from '../../app/slice';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';


const useStyle = makeStyles({

    labpropsDiv: {
        color: "#FFF",
        fontFamily: "Poppins",
        fontSize: "26px",
        fontWeight: 600,
        letterSpacing: "0",
        lineHeight: "39px",
    },
    content: {
        display: "flex",
        justifyContent: "center"
    }

});

function Localization() {
    const dispatch: AppDispatch = useDispatch();

    const style = useStyle();

    const [lat, setLat] = useState<Number>();
    const [lng, setLng] = useState<Number>();
    const [status, setStatus] = useState<String>("");
    const getLocation = () => {
        if (!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser');
        } else {
            setStatus('Locating...');
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus("")
                console.log("dati",position.coords.latitude,position.coords.latitude)
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
                dispatch(weatherCitySlice.actions.addCity(
                    {
                        label: "testAddCity",
                        "active": false,
                        "lat": String(position.coords.latitude),
                        "lon": String(position.coords.longitude)

                    }));

            }, () => {
                setStatus('Unable to retrieve your location');
            });
        }
    }

    return (

        <>

            <Card sx={{ width: 374, height: 140 }} style={{
                boxShadow: "5px 10px 20px 0 rgba(0,0,0,0.5)",
                borderRadius: "25px",
                background: "radial-gradient(circle, #5374E7 0%, #77B9F5 100%"
            }}>
                <CardContent className={style.content} >

                    <IconButton onClick={getLocation} style={{ backgroundColor: 'transparent' }} >
                        <AddLocationIcon fontSize={"large"} style={{ color: "#FFF" }} />
                        <p className={style.labpropsDiv}>Add localization</p>
                    </IconButton >
                </CardContent>

            </Card>
        </>
    );
}

export default Localization;