export interface IInitialStateDaysViews {
    days: [
        IInitDays,
        IInitDays,
        IInitDays,
        IInitDays,
        IInitDays,
        IInitDays,
        IInitDays,
    ]
}

export interface IInitDays {
    day: string,
    views:{
        undefined : number,
        young: number,
        senior: number,
        kid: number,
        adult: number 
    }
}

export enum daysViewsTypes {
    CHANGE_DAYS_VIEWS = 'CHANGE_DAYS_VIEWS',
    DEFAULT_STATE = 'DEFAULT_STATE'
}

interface IGhangeDaysViews {
    type: daysViewsTypes.CHANGE_DAYS_VIEWS,
    payload: IInitialStateDaysViews
}

interface IDefaultState {
    type: daysViewsTypes.DEFAULT_STATE,
    payload: any[]
}

export type daysViewsType = IGhangeDaysViews | IDefaultState
