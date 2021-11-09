import React from 'react'
import { useAction } from "../hook/useAction"
import { useTypesSelector } from "../hook/useTypedSelector"
import DeviceUserItem from "./checkBox/ChcekBox"
import styles from '../styles/deviceUser.module.css'

const DeviceUser:React.FC = () => {

    const { allDevice } = useTypesSelector(state => state.allDevice)
    const { data, loaded } = useTypesSelector(state => state.data)
    const { handleChangeStatusDevice, createStartStateAllDevie, defaultState } = useAction()

    React.useEffect(() =>{
        if (loaded) {
            
            const getAllDeviseData = (data:any) => {
                return data.data.o.map((device:any)=> {
                  const dayDataViews = device.o.map((day:any) => {
                    return {day: day.n, age: [...day.o]}
                  })
                  
                  return {name: device.n, data: [...dayDataViews], statusDevice: true}
                })
                
              }
            
              const deviceData = getAllDeviseData(data)
              createStartStateAllDevie(deviceData)
        }
    }, [data])

    const creatingItemDevice = (data:any, onChange:Function, callback:Function, callbabck2:Function) => {
        return data.map((device:any)=>{
            const name:string = device.name
            return <DeviceUserItem 
                        key={name}
                        name={name} 
                        defaultChecked={device.statusDevice}
                        onChange={()=>{
                            callback(onChange(name, data))
                            callbabck2()
                        }}
                    />
        })
      }

    const handleInputDevice = (id:string, devices:any) => {
        return devices.map((device:any) => {
            if (device.name === id ) {
                device.statusDevice = !device.statusDevice
            }
            return device
        })
    }

    return(
        <div className={styles.deviceUser}>
            {creatingItemDevice(allDevice, handleInputDevice, handleChangeStatusDevice, defaultState)}
        </div>
    )
}

export default DeviceUser