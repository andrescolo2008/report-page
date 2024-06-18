import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fireBaseAuth } from "../firebase/config"
import { login, logout } from "../store/auth/authSlice"

export const useCheckAuth = () => {

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

   return{
    status
   }
}
