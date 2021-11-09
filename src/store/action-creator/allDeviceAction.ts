import { IInititalStateAllDevice, allDeviceType, allDeviceActionTypes } from '../../type/allDeviceType'

export const createStartStateAllDevie = (payload:IInititalStateAllDevice[]):allDeviceType => {
    return {type: allDeviceActionTypes.CREATE_STATE_ALL_DEVICE, payload}
}

export const handleChangeStatusDevice = (payload:IInititalStateAllDevice[]):allDeviceType => {
    return {type: allDeviceActionTypes.HANDLE_STATUS_DEVICE, payload}
}