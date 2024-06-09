
import { signInWithGoogle } from '../../firebase/providers'
import{checkingCredentials, login, logout} from './authSlice'
 // cambiar el estado de  usuarios que ingresando la base de datos
 
 export const checkingAuthentication = (email,password ) =>{
    return async( dispatch)=>{
        dispatch(checkingCredentials())
    }
    
}

export const startGoogleSingIn = (email,password ) =>{
    return async( dispatch)=>{
        dispatch(checkingCredentials())
       const result= await signInWithGoogle()

       if(!result.ok) return dispatch(logout(result.errorMessage))
       const{uid,displayName,email,photoURL}= result
       dispatch(login(uid,displayName,email,photoURL))
       console.log(uid,displayName,email,photoURL);
       

    }
    
}