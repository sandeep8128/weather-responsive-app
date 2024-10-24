import React , {useEffect, useState} from 'react'
import axios from 'axios'
import './WeatherGet.css'

const WeatherGet = () => {
    const[weather,setWeather]=useState(null)
    const[city,setCity]=useState('New York')
    const apiKey ='acf859f777ea43c6ad554736242210';
    
    const getWeather = async () => {
        try{
            const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
            setWeather(response.data)
            console.log(response.data)
         }catch (error){
            console.error("error fecthing data:",error)
         }
        }
        useEffect(() => {
            getWeather()
        },[])
  return (
         
    <div className="weather-widget">
    <h2 className="location">{weather?.location.name}, {weather?.location.country}</h2>
    <div className="temperature">{weather?.current.temp_c}°C</div>
    <div className="condition">{weather?.current.condition.text}</div>
    <div className="condition">{weather?.current.humidity}</div>
    
    <input
        type="text"
        className="location-input"
        placeholder="Enter location"
        value={city}
        onChange={(e) => setCity(e.target.value)}
    />
    <button className="submit-button" onClick={getWeather}>
        Get Weather
    </button>
</div>
     

        
    
         )
}

export default WeatherGet
