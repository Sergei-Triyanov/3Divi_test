import { IInitialStateDaysViews, daysViewsType, daysViewsTypes } from '../../type/daysViewsType'

const initialStateDaysViews:IInitialStateDaysViews = {
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


export const daysViewsReducer = (state:IInitialStateDaysViews = initialStateDaysViews, action:daysViewsType) => {
    switch (action.type) {
        case daysViewsTypes.CHANGE_DAYS_VIEWS:
            return { days: action.payload }
        case daysViewsTypes.DEFAULT_STATE:
            return { days: [...action.payload] }
        default:
            return state
    }
}