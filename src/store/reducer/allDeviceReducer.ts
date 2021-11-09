import { IInititalStateAllDevice, allDeviceType, allDeviceActionTypes } from '../../type/allDeviceType'

const initialStateAllDevice:IInititalStateAllDevice = {
    allDevice : [
        {name: '', data: [{day: '', age: []}], statusDevice: false}
    ]
}

export const allDeviceReducer = (state = initialStateAllDevice, action:allDeviceType) => {
    switch (action.type) {
        case allDeviceActionTypes.CREATE_STATE_ALL_DEVICE:
            return {allDevice: [...action.payload]}
        case allDeviceActionTypes.HANDLE_STATUS_DEVICE:
            return {allDevice: [...action.payload]}
        default:
            return state
    }
}