import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

function InfoBox({info}){
    let COLD_URL="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let HOT_URL="https://images.unsplash.com/photo-1652442808708-6511a4e51e8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxob3QlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    let RAIN_URL="https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnklMjBzZWFzb258ZW58MHx8MHx8fDA%3D";
    return(
        <div className='InfoBox'>
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <p>Temperature: {info.temp}&deg;C</p>
        <p>Humidity: {info.humidity}</p>
        <p>Min Temp: {info.tempMin}&deg;C</p>
        <p>Max Temp: {info.tempMax}&deg;C</p>
        <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}

export default InfoBox