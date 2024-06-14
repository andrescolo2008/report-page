import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { ReportRoutes } from "../Report/routes/ReportRoutes"
import { useDispatch, useSelector } from "react-redux"
import { CheckingAuth } from "../UI/components/CheckingAuth"
import { useEffect } from "react"
import { fireBaseAuth } from "../firebase/config"
import { onAuthStateChanged } from "firebase/auth"
import { login, logout } from "../store/auth/authSlice"
import { ReportPage } from "../Report/pages/ReportPage"



export const AppRouter = () => {

  // mientras el status sea checking ,solamente va a mostrar el círculo de carga 
  const {status} = useSelector(state => state.auth)

  const dispache = useDispatch()

   useEffect(() => {
    // observable función que emite 
   onAuthStateChanged(fireBaseAuth,async(user) =>{ 
      if(!user) return dispache(logout())

        const {uid,email,displayName,photoURL} = user;
          dispache(login({uid,email,displayName,photoURL}))      
     })
    
   }, [])
   

  if(status === 'checking'){
    return < CheckingAuth />
    }
    
    return (
      < Routes >

      {
      (status === 'authenticated') 
        ? 
        // < Route path="/*" element ={< ReportRoutes />}/>
        <Route path ='/report' element={< ReportPage />} />

        :
        < Route path="/auth/*" element ={< AuthRoutes />}/>
 
      }

    < Route path="/*" element ={ < Navigate  to='/auth/login' /> } />
    {/* < Route path="/*" element ={ < Navigate  to='/report' /> } /> */}
        
  {/* login y registro */}
  
  {/* ReportCardaPP */}

    

  </ Routes >
    
  )
}
