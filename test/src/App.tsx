import { makeStyles } from '@material-ui/core';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Box, Card, CardContent, InputAdornment, styled, Tab, Tabs, TextField, Typography } from '@mui/material';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getLastValuesWheater, IlistTemPerH, IWeather, selectAllWeatherCity } from './app/slice';
import { AppDispatch } from './app/store';
import CityWeather from './common/components/cityWeather';
import { mockCity } from './common/mockCity';


const CssTextField = styled(TextField)({

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: "none",
    },
  },
  '& .MuiInputLabel-root': {
    height: "28px",
    width: "144px",
    color: "#01175F",
    fontFamily: "Poppins",
    fontSize: "20px",
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: "30px",
    textAlign: "center",
  },
  '& .MuiInputBase-input': {
    height: "28px",
    width: "144px",
    color: "#01175F",
    fontFamily: "Poppins",
    fontSize: "20px",
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: "30px",
    textAlign: "center",
  },
  '& .MuiSvgIcon-root': {
    height: "24px",
    width: "24px",
    color: "#01175F",
  }
});

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
  cityLabel: {
    height: "36px",
    width: "98px",
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontSize: "26px",
    fontWeight: 600,
    letterSpacing: "0",
    lineHeight: "39px",
    margin: 0
  },
  dateLabel: {
    height: "36px",
    width: "84px",
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontSize: "15px",
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: "18px",
  },
  tempLabel: {

    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontSize: "50px",
    fontWeight: "bold",
    letterSpacing: 0,
    lineHeight: "76px",
    textAlign: "right",
    margin: 0
  },
  labelDiv: {

    color: "#01175F",
    fontFamily: "Poppins",
    fontSize: "26px",
    fontWeight: 600,
    letterSpacing: "0",
    lineHeight: "39px",
  },
  datpropsabprops: {

    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontSize: "50px",
    fontWeight: "bold",
    letterSpacing: 0,
    lineHeight: "76px",
    textAlign: "right",
    margin: 0
  },
  tempLabprops: {
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontSize: "26px",
    fontWeight: 600,
    letterSpacing: "0",
    lineHeight: "39px",
    margin: 0
  },
  thisMonthLabel: {
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontSize: "18px",
    letterSpacing: 0,
    lineHeight: "27px",
  },
  toolTip: {
    borderRadius: "0 25px 25px 0",
    background: "radial-gradient(circle, #5374E7 0%, #77B9F5 100%)",
    boxShadow: "5px 10px 20px 0 rgba(0,0,0,0.17)",
    height: "280px", width: "140px", position: "absolute", left: "10px", top: "90px",
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  labelToolTip: {
    color: "#01175F",
    fontFamily: "Poppins",
    fontSize: "50px",
    fontWeight: "bold",
    letterSpacing: 0,
    lineHeight: "76px",
    margin:0,
  },
  labelTempToolTip: {
    color: "#01175F",
    fontFamily: "Poppins",
    fontSize: "20px",
    fontWeight:500,
    letterSpacing: 0,
    lineHeight: "18px",
  },
  labelDescriptionToolTip: {
    color: "#01175F",
    fontFamily: "Poppins",
    fontSize: "20px",
    fontWeight:300,
    letterSpacing: 0,
    lineHeight: "18px",
  }

});



const AntTabs = styled(Tabs)({
  ".MuiButtonBase-root": { textTransform: "none", },
  '& .MuiTabs-indicator': {

  },
  '& .MuiTabs-flexContainer': {
    backgroundColor: "#FFFFFF",
    borderRadius: "35px 35px 0 0 ",
    width: "fit-content"
  },
  '& .MuiTab-textColorPrimary': {
    color: " #01175F",
  },
  '& .MuiButtonBase-root': {
    fontFamily: "Poppins",
    fontSize: "28px",
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: "42px",
  },
  '& .Mui-selected': {
    color: " #FFF !important",
    background: "radial-gradient(circle, #5374E7 0%, #77B9F5 100%)",
    borderRadius: "35px 35px 0 0"
  }
});

function TabPanel(props: TabPanelProps) {
  const { children, value, index, dataWeatherCity, activeCity, ...other } = props;
  const style = useStyle();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{
        display: "flex",
        overflowY: "auto",
        height: "80%",
        flexFlow: "column wrap",
        flex: "10%",
        alignItems: "center",
        background: "radial-gradient(circle, #5374E7 0%, #77B9F5 100%)"
      }}
      {...other}
    >
      {value === 0 ? (
        dataWeatherCity !== null && dataWeatherCity?.map((el: IWeather) =>
          el.listTemPerH.map((x: IlistTemPerH) => (
            <>
              <CardContent sx={{
                margin: "20px",
                display: "flex", flexFlow: "column wrap",
                alignItems: "center",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,0.1)",
                boxShadow: "5px 10px 20px 0 rgba(0,0,0,0.17)",
              }}>
                <p className={style.tempLabprops}>{moment(x.date).format("dddd")}</p>
                <p className={style.tempLabprops}>{moment(x.date).format("h:mm")}</p>
                <p className={style.datpropsabprops}>{x.temp}</p>
                <img style={{ height: "103px", width: "90px" }} src={`http://openweathermap.org/img/w/${el.icon}.png`}></img>

              </CardContent>
            </>
          ))

        )

      ) : <>
        <CardContent sx={{
          marginTop: "10px", display: "flex", flexFlow: "column wrap", alignItems: "center",
          height: "305px",
          width: "90%",
          borderRadius: "20px",
          backgroundColor: "rgba(255,255,255,0.1)",
          boxShadow: "5px 10px 20px 0 rgba(0,0,0,0.17)",
          justifyContent: "center"

        }}>
          {activeCity !== null ? <>
            <div >
              <p className={style.tempLabprops}>{activeCity.date}</p>
              <img style={{ height: "133px", width: "130px" }} src={`http://openweathermap.org/img/w/${activeCity.icon}.png`}></img>
            </div>
            <div >
              <p className={style.tempLabprops}>{activeCity.temp}</p>
              <p className={style.thisMonthLabel}>Wind: {activeCity.wind}</p>
              <p className={style.thisMonthLabel}>The high will be {activeCity.temp_max}, the low will be {activeCity.temp_min}.</p>
              <p className={style.thisMonthLabel}>Humidity: {activeCity.humidity}</p>
              <p className={style.thisMonthLabel}>Uv: {activeCity.uv}</p>
              <p className={style.thisMonthLabel}>Dew Point: {activeCity.dewPoint}</p>
            </div>

          </> : null}

        </CardContent></>}


    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  dataWeatherCity: IWeather[];
  activeCity: IWeather | null;
}


function App() {

  const dispatch: AppDispatch = useDispatch();

  const handleUpdateUser = async () => {
    mockCity.forEach(async (el) => {
      const resultAction = await dispatch(getLastValuesWheater(el.label))
      getLastValuesWheater.fulfilled.match(resultAction)
    })
  }

  useEffect(() => { handleUpdateUser() }, [])

  const dataWeatherCity = useSelector(selectAllWeatherCity)


  const style = useStyle();

  const [value, setValue] = useState(0);

  const [activeCity, setActiveCity] = useState<IWeather>();

  useEffect(() => {
    const valueFind = dataWeatherCity?.find((el: IWeather) => el.active === true);
    if (valueFind) setActiveCity(valueFind)
    console.log(dataWeatherCity)
  }, [dataWeatherCity])


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log("newValue", newValue)
    setValue(newValue);
  };

  return (

    <>

      <div style={{ display: "flex", flexWrap: "wrap", flexFlow: "row wrap", justifyContent: "space-around" }}>
        <Card sx={{ width: 916, height: 440 }} style={{
          flex: "50%",
          display: "flex", margin: "20px", boxShadow: "5px 10px 20px 0 rgba(0,0,0,0.5)",
          borderRadius: "25px",
          background: "radial-gradient(circle, #5374E7 0%, #77B9F5 100%",
        }}>
          <CardContent style={{width:"100%"}}>
            <div className={style.toolTip}>
              <p className={style.tempLabprops}>{activeCity?.temp}</p>
              <img style={{ height: "103px", width: "90px" }} src={`http://openweathermap.org/img/w/${activeCity?.icon}.png`}></img>
            </div>
            <div style={{width:"80%",float:"right",display:"flex",flexFlow:"column wrap",marginTop:"70px"}}>
            <p className={style.labelToolTip}>{activeCity?.name}</p>
            <p className={style.labelTempToolTip}>{activeCity?.date}</p>
            <p className={style.labelDescriptionToolTip}>{activeCity?.description}</p>
            </div>
          </CardContent>

        </Card>




        <div style={{ margin: "20px", flex: "25%", flexFlow: "column wrap", display: "flex", alignContent: "center", alignItems: "center" }}>
          <CssTextField InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AddBoxOutlinedIcon />
              </InputAdornment>
            )
          }}
            id="addCity" label="Aggiungi città" />


          {dataWeatherCity !== null && dataWeatherCity.map((el: any) => (
            <CityWeather {...el}></CityWeather>
          ))}


        </div>
      </div>


      <div style={{ display: "flex", flexFlow: "row wrap", justifyContent: "space-around", alignItems: "baseline" }}>
        <div >
          <p className={style.labelDiv}>Today</p>

          <Card sx={{ width: 302, height: 385 }} style={{
            boxShadow: "5px 10px 20px 0 rgba(0,0,0,0.5)",
            borderRadius: "25px",
            background: "radial-gradient(circle, #5374E7 0%, #77B9F5 100%",
          }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">

              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>

          </Card>
        </div>


        <div style={{
          boxShadow: "5px 10px 20px 0 rgba(0,0,0,0.5)",
          borderRadius: "35px",
          background: "radial-gradient(circle, #5374E7 0%, #77B9F5 100%)"

        }}>
          <Box sx={{ width: 664, height: 464 }} style={{ backgroundColor: "none", alignItems: "center" }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <AntTabs value={value} onChange={handleChange} >
                <Tab label="This week" id={`simple-tab-0`} value={0}/>
                <Tab label="This month" id={`simple-tab-1`} value={1} />
              </AntTabs>
            </Box>
            <TabPanel value={value} index={0} dataWeatherCity={dataWeatherCity || []} activeCity={activeCity || null}>

            </TabPanel>
           

          </Box>
        </div>




        <div  >
          <p className={style.labelDiv}>Search</p>
          <Card sx={{ width: 374, height: 140 }} style={{
            boxShadow: "5px 10px 20px 0 rgba(0,0,0,0.5)",
            borderRadius: "25px",
            background: "#FFF"
          }}>
            <CardContent>

            </CardContent>

          </Card>

          <p className={style.labelDiv}>Localization</p>
          <Card sx={{ width: 374, height: 140 }} style={{
            boxShadow: "5px 10px 20px 0 rgba(0,0,0,0.5)",
            borderRadius: "25px",
            background: "radial-gradient(circle, #5374E7 0%, #77B9F5 100%"
          }}>
            <CardContent>

            </CardContent>

          </Card>
        </div>
      </div >
    </>
  );
}

export default App;
