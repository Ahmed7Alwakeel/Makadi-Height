
import React, { useState } from 'react'
import Carousel from './Carousel/Carousel'
import Facilities from './Facilities/Facilities'
import './Facilities/Facilities.css'

const FacilitiesSection = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 ms-lg-5 mb-lg-5'>
                        <Facilities />
                    </div>
                    <div className='col-lg-5 mt-lg-5'>
                        <Carousel  />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FacilitiesSection

