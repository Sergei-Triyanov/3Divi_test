import { combineReducers } from 'redux'
import { allDeviceReducer } from './allDeviceReducer'
import { dataUserVieReducer } from './dataUserVieReducer'
import { daysViewsReducer } from './daysViewsReducer'


export const rootReducer = combineReducers({
    data: dataUserVieReducer,
    days: daysViewsReducer,
    allDevice: allDeviceReducer,
})

export type RootState = ReturnType<typeof rootReducer>