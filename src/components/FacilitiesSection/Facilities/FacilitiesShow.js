import { AiOutlineHome, } from 'react-icons/ai';
import { GiKidSlide, GiTreeSwing, GiMedicalDrip } from 'react-icons/gi';
import { BiHotel, BiSwim } from 'react-icons/bi';
import { facilitiesLeft, facilitiesRigt } from './../FacilitiesArrays'
import React, { useContext } from 'react'
import { indexContext } from '../../../context/indexContext';

const FacilitiesShow = () => {
    const { indexCont, setIndex } = useContext(indexContext);
    const changeIndex = (index) => {
        setIndex(index)

    }
    return (
        <>
            <div className='row title-color mb-md-5'>
                <div className='col-md-5 col-4 ms-3'>
                    <div className='row'>
                        {facilitiesLeft.map((facility, index) => {
                            return <div key={index}
                                className={`col-12 ms-md-3 d-flex align-items-center flex-column mb-md-4 mb-2 
                            ${index == 2 ? '' : 'custom-border-bottom'}`}>
                                {index == 0 ?
                                    <AiOutlineHome className='icon' /> : index == 1 ?
                                        <GiKidSlide className='icon' /> :
                                        <BiHotel className='icon' />
                                }
                                <h6 onClick={() => { changeIndex(index) }} className={index == indexCont ? 'text-dark' : ''} style={{ cursor: 'pointer' }}>{facility.header}</h6>
                                <p className='text-secondary m-0'>{facility.firstParagraph}</p>
                                <p className='text-secondary text-center'>{facility.secondParagraph}</p>
                            </div>
                        })}
                    </div>
                </div>
                <div className='col-1 mb-3 text-center vr-line  me-md-0 me-4 '></div>
                <div className='col-md-5 col-4 '>
                    <div className='row'>
                        {facilitiesRigt.map((facility, index) => {
                            return <div key={index}
                                className={`col-12 ms-md-3 d-flex align-items-center flex-column mb-md-4 mb-2 
                            ${index == 2 ? '' : 'custom-border-bottom'}`}>
                                {index == 0 ?
                                    <BiSwim className='icon' /> : index == 1 ?
                                        <GiTreeSwing className='icon' /> :
                                        <GiMedicalDrip className='icon' />
                                }
                                <h6 onClick={() => { changeIndex(index + 3) }} className={index + 3 == indexCont ? 'text-dark' : ''} style={{ cursor: 'pointer' }}>{facility.header}</h6>
                                <p className='text-secondary m-0'>{facility.firstParagraph}</p>
                                <p className='text-secondary text-center'>{facility.secondParagraph}</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FacilitiesShow

