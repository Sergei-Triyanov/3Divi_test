import React from 'react'
import styles from '../../styles/deviceInfo.module.css'

interface ICanvasInfo {
    data: {
        colors : string[],
        label : string[]
    }
}

const CanvasInfo:React.FC<ICanvasInfo> = ({ data }) => {
    return(
        <div className={styles.info}>
            {data.colors.map((color:string, index:number)=>{
                return(
                    <div key={color} className={styles.info__item}>
                        <div style={{backgroundColor:color, width: 30, height: 10}}></div>
                        <div>{data.label[index]}</div>
                    </div>
                )
            })}
        </div>
    )
}

function areEqual() {
    return true
}
export default React.memo(CanvasInfo, areEqual);