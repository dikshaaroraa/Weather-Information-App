import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import './SearchBox.css';
function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="435c06bacc063ea8e8b7ca52df86e2a7";
    let getWeatherInfo=async()=>{
        try{
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse=await response.json();
            let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feels_like:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description
        }
        console.log(result);
        return result;
        }
        catch(error){
            throw(error);
        }
    }
    
    let handleChange=(evt)=>{
        setCity(evt.target.value)
    }
    let handleSubmit=async(evt)=>{
        try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo=await getWeatherInfo();
        updateInfo(newInfo);
        }
         catch(error){
            setError(true);
        }
    }
    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
            <br></br>
            <br></br>
            <button variant="contained" type='submit'>Search</button>
            {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    )
}
export default SearchBox