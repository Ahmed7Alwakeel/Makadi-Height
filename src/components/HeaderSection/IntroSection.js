
import React from 'react'

const IntroSection = () => {
    return (
        <>
            <div className="row mt-5">
                <div className='col-12 mt-5 mb-5 '></div>
                <div className="col-lg-2 mt-5 mb-lg-5 d-block "></div>
                <div className="col-lg-3 col-md-6 mb-lg-5 mt-5 me-md-4">
                    <img src={require("./img/DSC_51991.png")} className="mt-5 me-lg-5 bottom_img " />
                </div>
                <div className="col-lg-6 col-md-6 mt-lg-5 text-light ms-lg-5">
                    <h1 className="header__h1 mt-5 mb-0" >The place</h1>
                    <h1 className="header__h1 fw-bold">we call home</h1>
                    <p className="header__p w-75 mb-lg-4">Makadi Heights is a town built over 3.4 million square meters planned for development, with an elevation reaching 78 meters above sea level guaranteeing magnificent panoramic sea views residential units.
                     Envisioned as a comprehensive town.</p>
                    <button className="btn btn-light border-0 rounded-0 ms-lg-0 ms-2 me-2 mb-lg-5 mb-md-1 mb-5 ps-4 pe-4 ">Download Brochure</button>
                    <button className="btn btn-light border-0 rounded-0 ms-2 me-2 mb-5 ps-4 pe-4">Show Master plan </button>
                </div>
            </div>
        </>

    )
}

export default IntroSection

