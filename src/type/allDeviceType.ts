export interface IInititalStateAllDevice {
    allDevice: [
        {        
            name: string,
            data: [
                {
                    day: '',
                    age: [],
               }
            ],
            statusDevice: boolean,
    }
    ]
}

export enum allDeviceActionTypes {
    CREATE_STATE_ALL_DEVICE = 'CREATE_STATE_ALL_DEVICE',
    HANDLE_STATUS_DEVICE = 'HANDLE_STATUS_DEVICE'
}

interface ICreateStateAllDevice {
    type: allDeviceActionTypes.CREATE_STATE_ALL_DEVICE,
    payload: IInititalStateAllDevice[],
}

interface IHandleStateDevice {
    type: allDeviceActionTypes.HANDLE_STATUS_DEVICE,
    payload: IInititalStateAllDevice[],
}

export type allDeviceType = ICreateStateAllDevice | IHandleStateDevice