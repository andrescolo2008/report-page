import { Navigate, Route, Routes } from "react-router-dom"
import { useCheckAuth } from "../hooks"

import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { CheckingAuth } from "../UI/components/CheckingAuth"

import { ReportPage } from "../Report/pages/ReportPage"


export const AppRouter = () => {

  const {status }=useCheckAuth()

  if(status === 'checking'){
    return < CheckingAuth />
    }
    
    return (
      < Routes >

      {
      (status === 'authenticated') 
        ? 
        // < Route path="/*" element ={< ReportRoutes />}/>
        <Route path ='/*' element={< ReportPage />} />

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
