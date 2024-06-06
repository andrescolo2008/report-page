import { Button, Grid, Link, TextField, Typography } from "@mui/material"

import { Link as RouterLink} from "react-router-dom"


export const ReportPageSearch = () => {
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
                           <Button variant='contained' >
                             Buscar
                           </Button>
                           
                        <Grid item  justifyContent='center' container spacing={2} sx={{mb:2, mt:1,mr:1}}>
                           <Link component={RouterLink} color='inherit' to='/auth/login'>
                            Salir 
                          </Link>

                        </Grid>
                         </Grid>
                       
                   </Grid>
         </Grid>
    </form>
  )
}
