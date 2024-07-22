
import { Button, Grid, TextField } from "@mui/material"
import { useDispatch } from "react-redux"
import { startNewNote } from "../../store/report/thunks"




export const ReportPageSearch = () => {

  const dispatche =useDispatch()
const toReportNotes= ( ) =>{
dispatche(startNewNote())
}
 
  return (

<form >
         <Grid container>
              
               <Grid item xs={'auto'} sx={{mt:6,mr:1,ml:3}}>
                   <TextField 
                   label="documento"
                      type="number"
                       placeholder='documento del alumno'
                       
                         />
               </Grid>
                     <Grid container spacing={2} sx={{mb:2, mt:1,ml:3}}>
                       <Grid item xs={12} sm={6}>
                           <Button variant='contained' 
                           onClick={toReportNotes}
                           >
                             Buscar
                           </Button>
                           
                      
                         </Grid>
                       
                   </Grid>
         </Grid>
    </form>
  )
}
