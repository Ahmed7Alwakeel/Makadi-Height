import axios from 'axios'
import React, { useEffect, useState } from 'react'
import WeatherShown from './WeatherShown'

const Weather = () => {
    const [weather, setWeather] = useState({})
    useEffect(() => {
        const getWeather = async () => {
            const url = 'https://api.openweathermap.org/data/2.5/weather?lat=26.96546281915211&lon=33.883077697384714&appid=f1130b3524feefd0549671bf69edc578'
            const req = axios.get(url)
            const result = await req
            const data = result.data
            //convert Temp
            let k = data.main.temp;
            let c = k - 273.15
            setWeather({
                temp: Math.ceil(c),
                icon: data.weather[0].icon
            }
            )
        }
        getWeather()
    }, [])
    return (
        <>
            <WeatherShown temp={weather.temp} icon={weather.icon} />
        </>
    )
}

export default Weather
