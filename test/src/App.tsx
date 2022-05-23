import { makeStyles } from '@material-ui/core';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Card, CardContent, InputAdornment, styled, TextField, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getLastValuesWheater, selectAllWeatherCity } from './app/slice';
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
  labelDiv: {
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

  return (

    <>

      <div style={{ display: "flex", flexWrap: "wrap", flexFlow: "row wrap", padding: "30px", justifyContent: "space-around" }}>
        <Card sx={{ width: 916, height: 440 }} style={{
          flex: "50%",
          display: "flex", margin: "20px", boxShadow: "5px 10px 20px 0 rgba(0,0,0,0.5)",
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

            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
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


      <div style={{ display: "flex", flexFlow: "row wrap", padding: "30px", justifyContent: "space-around", alignItems: "baseline" }}>
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

        <Card sx={{ width: 564, height: 464 }} style={{
          boxShadow: "5px 10px 20px 0 rgba(0,0,0,0.5)",
          borderRadius: "25px",
          background: "radial-gradient(circle, #5374E7 0%, #77B9F5 100%"
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


        <div  >
          <p className={style.labelDiv}>Localization</p>
          <Card sx={{ width: 374, height: 140 }} style={{
            boxShadow: "5px 10px 20px 0 rgba(0,0,0,0.5)",
            borderRadius: "25px",
            background: "radial-gradient(circle, #5374E7 0%, #77B9F5 100%"
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
      </div>
    </>
  );
}

export default App;
