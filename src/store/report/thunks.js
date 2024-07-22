import { collection, doc, setDoc,  } from "firebase/firestore/lite"
import { fireBaseDB } from "../../firebase/config"
import { addNewEmptyNote, addNewNoteToStudent, savingNewNote, setActiveNote } from "./reportSlice"

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

        console.log(uid);
        

        dispatch(addNewEmptyNote(newnNote))
        dispatch(setActiveNote(newnNote))
        //! dispatch(new Note)
        //! dispatch(activateNote)
    }

}