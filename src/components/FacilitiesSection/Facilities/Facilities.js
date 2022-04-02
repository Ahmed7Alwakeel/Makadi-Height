
import React from 'react'
import FacilitiesHeader from './FacilitiesHeader';
import FacilitiesShow from './FacilitiesShow';

const Facilities = ({getIndex}) => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <FacilitiesHeader />
                        <FacilitiesShow getIndex={getIndex}/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Facilities

