
import { logOutUser, loginUser, registerUser, signInWithGoogle } from '../../firebase/providers'
import{checkingCredentials, login, logout} from './authSlice'
 // cambiar el estado de  usuarios que ingresando la base de datos
 
 export const checkingAuthentication = (email,password ) =>{
    return async( dispatch)=>{
        dispatch(checkingCredentials())
    }
    
}

export const startGoogleSingIn = ( ) =>{
    return async( dispatch)=>{
        dispatch(checkingCredentials())
        const result= await signInWithGoogle()
        
        if(!result.ok) return dispatch(logout(result.errorMessage))
            
        dispatch(login(result))
       console.log(result);
       
       
       }
       
       }
       
       export const startCreatingUser=  ({displayName,email,password} ) =>{
           return async( dispatch)=>{

        dispatch(checkingCredentials())

        const {ok,uid,photoURL,errorMessage} = await registerUser({displayName,email,password})

            if(!ok) return dispatch(logout({errorMessage}))

                dispatch(login({uid,photoURL,email,displayName}) )
                
                console.log({uid,photoURL,errorMessage});
        }
    }

    export const startLoginUser=  ({email,password} ) =>{
        return async( dispatch)=>{

     dispatch(checkingCredentials())

     const result = await loginUser({email,password})

         if(!result.ok) return dispatch(logout(result.errorMessage))

            
             dispatch(login(result) )
             
             
             console.log(result);
 }
}

 export const startLogOutUser= ( ) =>{
    return async( dispatch)=>{
       
         await logOutUser()
         dispatch(logout())
    }
     
 
}