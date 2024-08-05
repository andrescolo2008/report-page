
import { Button, Grid, TextField } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { setActiveNote } from "../../store/report/reportSlice"

import { useState } from "react"



export const ReportPageSearch = () => {

  const dispatche =useDispatch()


  
  const [noteTitle, setNoteTitle] = useState('');
  const {title,body}=useSelector(state => state.report)

  const onInputChange = (event) => {
    setNoteTitle(event.target.value);
      };


  const onClickNote= ( ) =>{
dispatche(setActiveNote({note:noteTitle}))
}
const onSubmit= ( event) =>{
  event.preventDefault()
  dispatche(setActiveNote({note:noteTitle}))
  console.log({note:noteTitle});
  
 
  
}
  return (

<form onSubmit={onSubmit} >
         <Grid container>
              

               <Grid item xs={'auto'} sx={{mt:6,mr:1,ml:3}}>
                   <TextField 
                   label="documento"
                   type="text"
                   placeholder='titulo'
                   value={noteTitle}
                   onChange={onInputChange}
                   />
               </Grid>
                     <Grid container spacing={2} sx={{mb:2, mt:1,ml:3}}>
                       <Grid item xs={12} sm={6}>
                           <Button variant='contained' 
                           onClick={onClickNote}
                           >
                             Buscar
                           </Button>
                
                      
                         </Grid>
                       
                   </Grid>
                             
         </Grid>
    </form>
  )
}
