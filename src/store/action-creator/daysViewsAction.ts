import { daysViewsTypes, daysViewsType } from '../../type/daysViewsType'

export const heandleChangeDaysViews = (payload:any):daysViewsType => {
    return {type: daysViewsTypes.CHANGE_DAYS_VIEWS, payload}
}

export const defaultState = ():daysViewsType => {
    const defaultStateDaysViews:any[] = [    
        {'day': 'Sunday', 'views' : {'undefined': 0, 'young' : 0, 'old' : 0, 'kid' : 0, 'adult' : 0}, },
        {'day': 'Monday', 'views' : {'undefined': 0, 'young' : 0, 'old' : 0, 'kid' : 0, 'adult' : 0} },
        {'day': 'Tuesday', 'views' : {'undefined': 0, 'young' : 0, 'old' : 0, 'kid' : 0, 'adult' : 0} },
        {'day': 'Wednesday', 'views' : {'undefined': 0, 'young' : 0, 'old' : 0, 'kid' : 0, 'adult' : 0} },
        {'day': 'Thursday', 'views' : {'undefined': 0, 'young' : 0, 'old' : 0, 'kid' : 0, 'adult' : 0}},
        {'day': 'Friday', 'views' : {'undefined': 0, 'young' : 0, 'old' : 0, 'kid' : 0, 'adult' : 0} },
        {'day': 'Saturday', 'views' : {'undefined': 0, 'young' : 0, 'old' : 0, 'kid' : 0, 'adult' : 0} },
    ]
    return {type: daysViewsTypes.DEFAULT_STATE, payload: defaultStateDaysViews}
}