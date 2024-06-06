import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { fireBaseAuth } from "./config";

const googleProvider= new  GoogleAuthProvider();

 export const signInWithGoogle=async  ( ) =>{

    try {
        const result= await signInWithPopup(fireBaseAuth,googleProvider)//pide 1ro autenticación(fireBaseAuth) y después cual es el proveedor( por medio de google) 
    // const credentials= GoogleAuthProvider.credentialFromResult(result);   
//    console.log(credentials);
const {uid,displayName,email,photoURL}= result.user;
return {
    ok: true,
    uid, displayName, email,photoURL
}
// console.log(uid,displayName,email,photoURL);

   
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