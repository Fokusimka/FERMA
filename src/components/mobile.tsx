
import React from 'react';

import blueCircle from '../images/blueCircle.svg'
import greenCircle from '../images/greenCircle.svg'
import redCircle from '../images/redCircle.svg'
import mobileIcon from '../images/mobileIcon.svg'

import './mobile.css';

const mobile = () => {
    return (
        <>
            <img src={mobileIcon} className="mobileIcon" alt="mobileIcon" />

            <div className='blueCircle'>
                <img src={blueCircle} className="blueCircleIcon" alt="blueCircleIcon" />
            </div>
            <div className='greenCircle'>
                <img src={greenCircle} className="greenCircleIcon" alt="greenCircleIcon" />
            </div>
            <div className='redCircle'>
                <img src={redCircle} className="redCircleIcon" alt="redCircleIcon" />
            </div>

            <div className='blueCircleMini'>
                <img src={blueCircle} className="blueCircleIconMini" alt="blueCircleIconMini" />
            </div>
            <div className='greenCircleMini'>
                <img src={greenCircle} className="greenCircleIconMini" alt="greenCircleIconMini" />
            </div>
            <div className='redCircleMini'>
                <img src={redCircle} className="redCircleIconMini" alt="redCircleIconMini" />
            </div>
        </>
    )
}

export default mobile