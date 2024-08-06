
import { Button, Grid, TextField } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { setActiveNote } from "../../store/report/reportSlice"

import { useState } from "react"




export const ReportPageSearch = () => {

  const dispatche =useDispatch()


  
  const [studentId, setStudentId] = useState('');
 

  const onInputChange = (event) => {
    setStudentId(event.target.value);
      };


const onSubmit= ( event) =>{
  event.preventDefault();
    dispatche(setActiveNote({ id: parseInt(studentId) }));
}
  return (

<form onSubmit={onSubmit} >
         <Grid container>
              

               <Grid item xs={'auto'} sx={{mt:6,mr:1,ml:3}}>
                   <TextField 
                   label="ID del estudiante"
                   type="text"
                   placeholder='documento del estudiante'
                   value={studentId}
                   onChange={onInputChange}
                   />
               </Grid>
                     <Grid container spacing={2} sx={{mb:2, mt:1,ml:3}}>
                       <Grid item xs={12} sm={6}>
                           <Button variant='contained' type="submit" 
                          
                           >
                             Buscar
                           </Button>
                
                      
                         </Grid>
                       
                   </Grid>
                             
         </Grid>
    </form>
  )
}
