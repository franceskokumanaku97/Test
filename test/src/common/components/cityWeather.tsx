import { makeStyles } from '@material-ui/core';
import { Card, CardContent } from '@mui/material';
import { IWeather } from '../../app/slice';


const useStyle = makeStyles({
    root: {

    },

    activeCity: {
        background: "radial-gradient(circle, #011354 0%, #5B9FE3 100%)",
        boxShadow: "5px 10px 20px 0 rgba(0,0,0,0.17)",
        borderRadius: "25px",
        width: 374, height: 140, backgroundColor: "none", overflow: "none",
        margin: "10px"
    },
    inputCity: {
        background: "radial-gradient(circle, #011354 0%, #5B9FE3 100%)",
        width: 374, height: 140, backgroundColor: "none", overflow: "none",
        margin: "10px"
    },
    disabledCity: {
        background: "radial-gradient(circle, #464C64 0%, #99A9B9 100%)",
        width: 374, height: 140, backgroundColor: "none", overflow: "none",
        margin: "10px"

    },
    cityLabprops: {
        
        color: "#FFFFFF",
        fontFamily: "Poppins",
        fontSize: "26px",
        fontWeight: 600,
        letterSpacing: "0",
        lineHeight: "39px",
        margin: 0
    },
    datpropsabprops: {
        height: "36px",
        width: "84px",
        color: "#FFFFFF",
        fontFamily: "Poppins",
        fontSize: "15px",
        fontWeight: 500,
        letterSpacing: 0,
        lineHeight: "18px",
    },
    tempLabprops: {
        height: "71px",
        width: "74px",
        color: "#FFFFFF",
        fontFamily: "Poppins",
        fontSize: "50px",
        fontWeight: "bold",
        letterSpacing: 0,
        lineHeight: "76px",
        textAlign: "right",
        margin: 0
    },
    labpropsDiv: {
        height: "36px",
        width: "98px",
        color: "#01175F",
        fontFamily: "Poppins",
        fontSize: "26px",
        fontWeight: 600,
        letterSpacing: "0",
        lineHeight: "39px",
    }

});

function CityWeather(props: IWeather) {

    const style = useStyle();

    return (

        <>


            <Card style={{
                borderRadius: "25px", boxShadow: "5px 10px 20px 0 rgba(0,0,0,0.5)",
            }} className={props.active ? style.activeCity : style.disabledCity}>

                <CardContent style={{ display: "flex", justifyContent: "space-around" }}>

                    <div> <p className={style.cityLabprops}>
                        {props.name}
                    </p>
                        <p className={style.datpropsabprops}>
                            {props.date}
                        </p></div>
                    <div>
                        <img style={{ height: "103px", width: "90px" }} src={`http://openweathermap.org/img/w/${props.icon}.png`}></img>
                    </div>

                    <div >
                        <p className={style.tempLabprops}>
                            {props.temp}
                        </p>
                    </div>
                </CardContent>

            </Card>
        </>
    );
}

export default CityWeather;
