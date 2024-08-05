import { collection, doc, setDoc,  } from "firebase/firestore/lite"
import { fireBaseDB } from "../../firebase/config"
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from "./reportSlice"
import { loadNotes } from "../../helpers/loadNotes"

 export const startNewNote= ( ) =>{
     
     return async( dispatch,getState )=>{
         
         dispatch(savingNewNote())
         //uid
         const {uid} = getState().auth
         
         const newnNote = {
             title:'',
             body:'',
             date: new Date().getTime(),
             //! aquí pudiera estar la clave para agregar logros y calificaciones para el estudiante
            }
            
            const newDoc=doc(collection(fireBaseDB, `${uid}/journal/notes`))
            
            const setDocResp = await setDoc(newDoc, newnNote)
            
            newnNote.id= newDoc.id
            
          
            
            setTimeout(() => {
            
            dispatch(addNewEmptyNote(newnNote))
            dispatch(setActiveNote(newnNote))
            
            
        }, 2000);
        //! dispatch(new Note)
        //! dispatch(activateNote)
    }

}

            export const  startLoadingNotes   = ( ) =>{

                return async( dispatch,getState ) =>{
                    const {uid}= getState().auth
                    
                   
                    if(!uid) throw new Error('El UID usuario no existe')
                       
                    const loadedNotes=  await  loadNotes(uid)

                      dispatch(setNotes(loadedNotes))
                      console.log(loadedNotes);
                      
                }
            }  