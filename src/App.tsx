import React from 'react'
import './app.css'
import { useAction } from './hook/useAction'
import TotalViews from './component/TotalViews'
import DeviceUser from './component/DeviceUser'
import { useTypesSelector } from './hook/useTypedSelector'

function App() {
  const { getUserDataFetch,  } = useAction()
  const {loaded } = useTypesSelector(state => state.data)

  React.useEffect(()=>{
    getUserDataFetch()
  }, [])

  if (loaded) {
    return (
      <div className='app'> 
        <DeviceUser/>
        <TotalViews/>
      </div>  
    )
  }
  return <div>Loading...</div>
}
export default App;
