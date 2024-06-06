import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { ReportRoutes } from "../Report/routes/ReportRoutes"


export const AppRouter = () => {
  
    return (
  < Routes >
  {/* login y registro */}
    < Route path="/auth/*" element ={< AuthRoutes />}/>
  {/* ReportCardaPP */}

    {/* < Route path="/*" element ={< ReportRoutes />}/> */}
    < Route path="/*" element ={< AuthRoutes />}/>


  </ Routes >
    
  )
}
