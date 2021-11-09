import { Dispatch } from 'redux'
import { userAction, userActionTypes } from '../../type/dataUserype' 
import axios from 'axios'

export const getUserDataFetch = () => {
    return async (dispatch:Dispatch<userAction>) => {
        try {
            dispatch({type: userActionTypes.IS_LOADING_DATA, payload: true})
            const URL:string =  'https://analytics.3divi.ru/api/v2/statistics/user/2088/devices/dates/ages/?key=d3aa35bde5ef46899b91aca9c66e174e&b=2020/03/08%2012:00:00&e=2020/09/08%2012:00:00&tzo=0';
            const response:any = await axios.get(URL)
            dispatch({type: userActionTypes.GET_DATA_USER, payload: response.data})
        }
        catch(e) {
            dispatch({type: userActionTypes.IS_ERROR_DATA, payload: true})
        }
    }
}