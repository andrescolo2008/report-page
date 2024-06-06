import { Navigate, Route, Routes } from "react-router-dom"
import { ReportPage } from "../pages/ReportPage"


export const ReportRoutes = () => {
  return (
   < Routes >  
   <Route path ='/' element={< ReportPage />} />
   <Route path ='/*' element={< Navigate to ="/auth/login" />} />
   </Routes >  
  )
}
