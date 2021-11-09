import React from "react";
import { useTypesSelector } from "../../hook/useTypedSelector";
import { IInitDays } from '../../type/daysViewsType'
import CanvasItem from "./CanvasItem";
import CanvasInfo from "./CanvasInfo";

const CanvasViews:React.FC = () => {

    const { days } = useTypesSelector(state => state.days)
    const getMaxViewsDays = (days:[IInitDays]) => {
        let maxViews = 0;

        for (let i = 0; i < days.length; i++) {
            let sumDayViews = 0;
            let day = days[i]

            sumDayViews = day.views.adult + day.views.kid + day.views.senior + day.views.undefined + day.views.young
            

            if(maxViews < sumDayViews ) {
                maxViews = sumDayViews
            }
        }
        return maxViews
    }

    const maxViews = getMaxViewsDays(days)

    const filterDataStepFormat = (data:number):number => {
        const dataString = data.toString()
        switch (dataString.length) {
            case 0:
            case 1:
                return data
            case 2:
                return Math.ceil(data / 10) * 10
            default:
                return Math.ceil(data / (10**(dataString.length - 2))) * (10 ** (dataString.length - 2))
        }

    }

    const getStepData = (data:number) => {
        filterDataStepFormat(maxViews)
        const step =  filterDataStepFormat(data) / 4
        return step
    }
    const stepLabelDataY = getStepData(maxViews)
    const generateDataLabelY = (step:number):string[] => {
        let labelsData = ['0']
        for (let i = 1; i < 5; i++) {
            labelsData.push((Math.ceil(i*step)).toString())
        }

        return labelsData
    }
    

    const creatingLabelsX = (days:any[]) => {
        return days.map((day:{day:string, key:any})=> day.day)
    }

    const creatingData = (data:any[]) => {

        return data.map((d:{views:{undefined: number, kid : number, young : number, adult : number, senior : number,}})=>{

                return [d.views.undefined, d.views.kid, d.views.young, d.views.adult, d.views.senior]

        })
    }

    const colors = ['#b4b4b4', '#1fa01b', '#65a2ff', '#004ab9', '#b90000',]

    const canvas = {
        width: 570,
        height: 250,
        row : {
            maxViews: maxViews,
            labelX: [...creatingLabelsX(days)],
            data: creatingData(days),
            colors: colors
        },
        colum : {
            labelY: generateDataLabelY(stepLabelDataY)
        } 
    }
    const creatingInfoCanvasLabel = (data:any[]) => {
        return Object.keys(data[0].views)
    }
    const dataInfo = {
        colors: colors,
        label: creatingInfoCanvasLabel(days)
    }
  

    return(
        <>
            <CanvasItem canvas={canvas} />
            <CanvasInfo data={dataInfo}/>
        </>
    )

}

export default CanvasViews;