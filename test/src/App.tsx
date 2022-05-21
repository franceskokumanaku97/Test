import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';

function App() {

  return (
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

      <div style={{ display: "flex", margin: "20px", flex: "25%",justifyContent:"flex-end" }}>
        <Card sx={{ width: 374, height: 180 }} style={{
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


      <Card sx={{ width: 302, height: 385 }} style={{
        display: "flex", margin: "20px", flex: "25%", boxShadow: "5px 10px 20px 0 rgba(0,0,0,0.5)",
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

      <Card sx={{ width: 564, height: 464 }} style={{
        display: "flex", margin: "20px", flex: "25%", boxShadow: "5px 10px 20px 0 rgba(0,0,0,0.5)",
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

      <div style={{ display: "flex", margin: "20px", flex: "25%",justifyContent:"flex-end" }}>
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

  );
}

export default App;
