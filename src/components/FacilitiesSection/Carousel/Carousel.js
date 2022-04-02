import React, { useContext } from 'react'
import { img } from '../FacilitiesArrays'
import './Carousel.css'
import { indexContext } from '../../../context/indexContext';
const Carousel = () => {
    const { indexCont, setIndex } = useContext(indexContext);
    const changeIndexs = (index) => {
        setIndex(index)
    }
    return (
        <>
            <div className='row mt-3'>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                    <div className="carousel-indicators">
                        {img.map((image, index) => {
                            return (
                                <>
                                    <button key={index} type="button" data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to={index}
                                        onClick={() => { changeIndexs(index) }}
                                        className={`${index == indexCont ? 'active' : ""}`}
                                        aria-current={`${index == 0 ? 'true' : ""}`}
                                        aria-label={`Slide ${index + 1}`}>
                                    </button>
                                </>
                            )
                        })}
                    </div>
                    <div className="carousel-inner">
                        {img.map((image, index) => {
                            return (
                                <div key={index} className={`carousel-item ${index == indexCont ? 'active' : ""}`}>
                                    <img src={`${image}`} className="d-block " alt="..." />
                                </div>
                            )
                        })}
                    </div>
                    <button className="carousel-control-prev opacity-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    </button>
                    <button className="carousel-control-next opacity-0 " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    </button>
                </div>
            </div>
        </>
    )
}

export default Carousel

