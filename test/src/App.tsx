import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { mockCity } from './common/mockCity';


const useStyle = makeStyles({
  root: {

  },

  activeCity: {
    background: "radial-gradient(circle, #011354 0%, #5B9FE3 100%)",
    boxShadow: "5px 10px 20px 0 rgba(0,0,0,0.5)",
    borderRadius: "25px",
    width: 374, height: 140, backgroundColor: "none", overflow: "none",
    margin: "10px"
  },
  inputCity: {
    background: "radial-gradient(circle, #011354 0%, #5B9FE3 100%)",
    boxShadow: "5px 10px 20px 0 rgba(0,0,0,0.5)",
    borderRadius: "25px",
    width: 374, height: 140, backgroundColor: "none", overflow: "none",
    margin: "10px"
  },
  disabledCity: {
    background: "radial-gradient(circle, #464C64 0%, #99A9B9 100%)",
    boxShadow: "5px 10px 20px 0 rgba(0,0,0,0.5)",
    borderRadius: "25px",
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

  async function weatherData() {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Massa&APPID=ad796c22fe5052c58fa2c89e91c13b64`
    )
      .then((res) => res.json())
      .then((data) =>

        console.log("dati", data));


  }

  // async function weatherData(e) {
  //   e.preventDefault();
  //   if (form.city == "") {
  //     alert("Add values");
  //   } else {
  //     const data = await fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => data);

  //     setWeather({ data: data });
  //   }

  
  useEffect(() => {
    weatherData();
  }, [])

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
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>

        </Card>




        <div style={{ margin: "20px", flex: "25%", flexFlow: "column wrap", display: "flex", alignContent: "center", alignItems: "center" }}>
          <TextField style={{ width: "200px" }} id="outlined-basic" label="Outlined" variant="outlined" />

          <div style={{ height: "400px", margin: "20px", overflowY: "auto" }}>

            {mockCity.map((el: any) => (

              <Card style={{ borderRadius: "25px" }} className={el.active ? style.activeCity : style.disabledCity}>

                <CardContent style={{ display: "flex", justifyContent: "space-around" }}>

                  <div> <p className={style.cityLabel}>
                    {el.label}
                  </p></div>
                  <div>
                    <Typography variant="h5" component="div">
                      icona meteo
                    </Typography>
                  </div>



                  <div >
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      gradi
                    </Typography>
                  </div>
                </CardContent>

              </Card>


            ))}

          </div>
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
