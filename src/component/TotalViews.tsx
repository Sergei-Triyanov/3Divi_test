import React from 'react'
import s from '../styles/totalViews.module.css'
import { useTypesSelector } from '../hook/useTypedSelector'
import { useAction } from '../hook/useAction'
import { getDay } from '../hook/useGetDayWord'
import CanvasViews from './canvas/CanvasViews'



const TotalViews:React.FC<{}> = () => {
    const { data } = useTypesSelector(state => state.data)
    const { loading } = useTypesSelector(state => state.data)
    const { heandleChangeDaysViews } = useAction()
    const days = {
        days: [    
            {'day': 'Sunday', 'views' : {'undefined': 0, 'kid' : 0, 'young' : 0, 'adult' : 0, 'senior' : 0,}, },
            {'day': 'Monday', 'views' : {'undefined': 0, 'kid' : 0, 'young' : 0, 'adult' : 0, 'senior' : 0,} },
            {'day': 'Tuesday', 'views' :{'undefined': 0, 'kid' : 0, 'young' : 0, 'adult' : 0, 'senior' : 0,}},
            {'day': 'Wednesday', 'views' : {'undefined': 0, 'kid' : 0, 'young' : 0, 'adult' : 0, 'senior' : 0,} },
            {'day': 'Thursday', 'views' : {'undefined': 0, 'kid' : 0, 'young' : 0, 'adult' : 0, 'senior' : 0,}},
            {'day': 'Friday', 'views' : {'undefined': 0, 'kid' : 0, 'young' : 0, 'adult' : 0, 'senior' : 0,} },
            {'day': 'Saturday', 'views' :{'undefined': 0, 'kid' : 0, 'young' : 0, 'adult' : 0, 'senior' : 0,} },
        ]
    }
    const { allDevice } = useTypesSelector(state => state.allDevice)

    React.useEffect(()=>{
        const filterActiveDevice = (device:any[], days:any[]) =>{
            const activeDeviceViewsDay = days.map((day:{day:string, views:{undefined: number, adult:string, kid:string, young:string, senior:string}})=>{
               device.map((data:{day:string, undefined: number, adult:string, kid:string, young:string, old:string}) => {
                   if (day.day === data.day) {
                       day.views.undefined = day.views.undefined + data.undefined
                       day.views.adult = day.views.adult + data.adult
                       day.views.kid = day.views.kid + data.kid
                       day.views.senior = day.views.senior + data.old
                       day.views.young = day.views.young + data.young  
                   }
               })
               return day
           })
           return heandleChangeDaysViews(activeDeviceViewsDay)
           }
           filterActiveDevice(activeDevice, days.days)
    }, [allDevice])

    if (loading) {
        return(
            <div className={s.totalViews}>
                <h1>Total Views: Age {`(by day of week)`}</h1>
                <div>Loading</div>
            </div>
        )
    }
    
    const createViewsData = (data:any[]) => {
        const filterDeviceData = data.filter((device:{name:string, data:any[], statusDevice:boolean})=> device.statusDevice !== false)
    
        let daysViews = filterDeviceData.map((device:{key:any, data:any[]})=>{
    
          const days = device.data.map((data:{day:string, age: any[]})=>{
            return {day: getDay(data.day), 'adult': data.age[0].v , 'kid': data.age[1].v, 'old': data.age[2].v, 'undefined': data.age[3].v, 'young': data.age[4].v, }
          })
    
          return days
        }).flat(1)
    
        return daysViews
    }

    const activeDevice = createViewsData(allDevice)

    return(
        <div className={s.totalViews}>
            <h1>Total Views: Age {`(by day of week)`}</h1>
            <CanvasViews/>
            <div className={s.infoIcon}>
            <svg height="12" viewBox="0 0 1792 1792" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z"/></svg>
            </div>
         </div>
    )
}

export default TotalViews;