import { useState,useEffect} from 'react'
import './index.css'
import './App.css'
import SplashScreen from './Component/SplashScreen'
import HomePage from './Component/HomePage'
import NumberPage from './Component/NumberPage'

function App() {
  const [splash,setSplash]=useState(true);


  useEffect(()=>{
    const timer=setTimeout(()=>setSplash(false),3000);
    return ()=>clearTimeout(timer);
  },[])

  return (
    <>
      <div>
     {/*   {splash?<SplashScreen/>:<HomePage/>} */}
       <NumberPage/>
      </div>
    </>
  )
}

export default App
