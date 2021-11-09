export interface IInitalStateUserData {
    loading: boolean,
    loaded: boolean,
    error: boolean,
    data: IdataServer,
}

interface IdataServer {
    data: {
        n: string,
        o: any[],
        ots: number,
        otsd: number,
        t: string,
        v: number,
        vd: number,
    },
    dt_format: string,
}

export enum userActionTypes{
    IS_LOADING_DATA = 'IS_LOADING_DATA',
    IS_ERROR_DATA = 'IS_ERROR_DATA',
    GET_DATA_USER = 'GET_DATA_USER',
}

interface IIsLoadingData {
    type: userActionTypes.IS_LOADING_DATA,
    payload: boolean
}

interface IIsErrorData {
    type: userActionTypes.IS_ERROR_DATA,
    payload: boolean
}

interface IGetDataUser {
    type: userActionTypes.GET_DATA_USER,
    payload: [key:IdataServer]
}

export type userAction =  IIsLoadingData | IIsErrorData | IGetDataUser