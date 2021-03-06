import React from 'react'
import styles from '../../styles/checkboxItem.module.css'

interface IDeviceUserItem {
    name: string,
    defaultChecked: boolean,
    onChange: Function,
}

const DeviceUserItem:React.FC<IDeviceUserItem> = ({ name, defaultChecked, onChange }) => {
    return( 
        <div className={styles.checkbox} onClick={()=>{
            onChange()
        }}>
            <div>
                <input type="checkbox" id={`${name}`} defaultChecked={defaultChecked}/>
                <label htmlFor={`${name}`}>{name}</label>
            </div>
            <div style={defaultChecked ? {opacity:'1'} : {opacity:'0'}}>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="24px" height="24px" viewBox="0 0 1248.000000 1280.000000"
                preserveAspectRatio="xMidYMid meet">
                    <g className={styles.svg} transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                    fill="#e5e5e5" stroke="none">
                    <path d="M10990 12794 c-148 -18 -348 -78 -471 -139 -171 -87 -363 -246 -469
                    -390 -25 -33 -1255 -1609 -2733 -3503 -1740 -2227 -2693 -3440 -2700 -3435
                    -55 33 -2153 1554 -2234 1620 -244 198 -479 321 -738 389 -135 35 -374 45
                    -519 20 -558 -95 -991 -521 -1103 -1084 -12 -61 -17 -136 -17 -252 -1 -179 18
                    -297 71 -444 36 -101 125 -270 181 -346 27 -36 462 -535 967 -1110 1869 -2125
                    2583 -2940 3089 -3522 l519 -597 27 37 c153 212 7390 10657 7431 10725 317
                    525 223 1224 -222 1653 -251 241 -556 370 -899 378 -80 3 -161 2 -180 0z"/>
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default DeviceUserItem;