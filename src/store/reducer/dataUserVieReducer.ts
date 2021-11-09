import { IInitalStateUserData, userAction, userActionTypes } from '../../type/dataUserype'

const initialStateUserData:IInitalStateUserData = {
    loading: false,
    loaded: false,
    error: false,
    data : {
        dt_format: '',
        data:{
            n: '',
            o: [{
                n : '',
                o : [{
                    n : '',
                    o : '',
                    v : ''
                }]
            }],
            ots: 0,
            otsd: 0,
            t: '',
            v: 0,
            vd: 0,
        }
    }
}

export const dataUserVieReducer = (state:IInitalStateUserData = initialStateUserData, action:userAction) => {

    switch (action.type) {
        case userActionTypes.IS_LOADING_DATA:
            return { ...state, loading: action.payload, }
        case userActionTypes.GET_DATA_USER:
            return { data: action.payload, loading: false, loaded: true }
        case userActionTypes.IS_ERROR_DATA:
            return { ...initialStateUserData, error: true }
        default:
            return state;
    }

}