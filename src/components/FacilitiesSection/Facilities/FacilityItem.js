
import React, { useState } from 'react'

const FacilityItem = ({index, header, firstParagraph, secondParagraph }) => {
    const [active, setActive] = useState('')
    const indexs=[0,1,2]
    const changeStatus = () => {
        for(let i=0;i<indexs.length;i++){
            if(i==index){
                setActive('red')
            }else{setActive('')}
        }
        
    }
    return (
        <>
        <div key={index}>
        <h6 onClick={changeStatus} style={{ color: `${active}`,cursor:'pointer' }}>{header}</h6>
        </div>
            <p className='text-secondary m-0'>{firstParagraph}</p>
            <p className='text-secondary text-center'>{secondParagraph}</p>
        </>
    )
}

export default FacilityItem

