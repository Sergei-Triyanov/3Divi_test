import * as userData from './userDataAction'
import * as daysViews from './daysViewsAction'
import * as allDevices from './allDeviceAction'


export default {
    ...userData,
    ...daysViews,
    ...allDevices
}