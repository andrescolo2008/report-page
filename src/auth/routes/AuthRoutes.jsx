import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { ReportPage } from "../../Report/pages/ReportPage"


export const AuthRoutes = () => {
  return (
   <Routes>
        <Route path="login" element={< LoginPage />} />
        <Route path="report" element={< ReportPage />} />
        <Route path="register" element={< RegisterPage />} />
    
     <Route path="/*" element= { <Navigate to="/auth/login"/>} />

    
   </Routes>
  )
}
