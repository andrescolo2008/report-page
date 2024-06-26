import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
import { fireBaseAuth } from "./config";

const googleProvider= new  GoogleAuthProvider();

 export const signInWithGoogle=async  ( ) =>{

    try {
        const result= await signInWithPopup(fireBaseAuth,googleProvider)//pide 1ro autenticación(fireBaseAuth) y después cual es el proveedor( por medio de google) 
    // const credentials= GoogleAuthProvider.credentialFromResult(result);   
//    console.log(credentials);
const {uid,displayName,email,photoURL}= result.user;
console.log(uid,displayName,email,photoURL);
return {
    ok: true,
    uid, displayName, email,photoURL
}

   
} catch (error) {
    const errorCode=error.code;
    const errorMessage=error.message;

        return {
            ok: false,
            errorCode,
            errorMessage
        }
    } 

}

 export const registerUser= async ({displayName,email,password}) =>{

    try {
console.log({email,password,displayName});

       const resp = await createUserWithEmailAndPassword(fireBaseAuth,email,password);
        const {uid,photoURL} = resp.user
        

            //  TODO Actualizar el usuario en firebase
           await  updateProfile(fireBaseAuth.currentUser,{displayName})

        return { 
            ok:true,
            uid,photoURL,email,displayName
        }
        
    } catch (error) {
        
    const errorMessage='Este usuario ya existe, registre otro'
    console.log(error);
    
        return {
            ok: false,
            errorMessage
        }
    }
}

export const loginUser= async ({email,password,displayName}) =>{

    try {
        const resp = await signInWithEmailAndPassword(fireBaseAuth,email,password);
        
        const {uid,photoURL,displayName}= resp.user;
        // await  updateProfile(fireBaseAuth.currentUser,{displayName})

        


        console.log(uid,photoURL,displayName,password)
        
        return {
            ok: true,
            uid,displayName,email,photoURL,password,
            
        }
    } catch (error) {
        
        const errorCode=error.code;
        const errorMessage='el usuario o la contraseña no son válidas';
        console.log(errorMessage,email,password)
        return{
            ok: false,
            errorCode,
            errorMessage,
        }
    }

    

}

export const logOutUser= async () =>{

        return await fireBaseAuth.signOut();

}