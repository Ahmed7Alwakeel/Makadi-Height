
import React from 'react'
const WeatherShown = ({ temp, icon }) => {
    return (
        <>
            <div >
                <img src={`http://openweathermap.org/img/w/${icon}.png`} className="h-25 me-lg-2 mb-lg-4" />
            </div>
            <div className="text-light mt-lg-3 me-lg-3  fs-6">
                <div className="nav__temp-circle "></div>
                <p>{temp}</p>
            </div>
        </>
    )
}

export default WeatherShown

