import { AddCircleOutlined, FeaturedPlayListRounded } from "@mui/icons-material";
import { Button, Grid, IconButton, List, TextField, Typography } from "@mui/material";
import { startNewNote } from "../../store/report/thunks";
import { useDispatch, useSelector } from "react-redux";

import { updateNote, deleteNote } from "../../store/report/reportSlice";
import { SideBarData } from "../components/SideBarData";

export const ReportNotes = ({ drawerWidth = 200 }) => {
    const dispatch = useDispatch();
    const { isSaving,active,notes } = useSelector(state => state.report);

   
    // Suponiendo que estamos mostrando los detalles de un estudiante específico



    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', borderRadius: 6 }}
            className="animate__animated animate__fadeIn animate__slover"
        >
            <Grid item xs={6}>
                <FeaturedPlayListRounded sx={{ fontSize: 100, color: 'white' }} />
            </Grid>

            <Grid item xs={12}>
                <Typography color="white" variant="h5">
                    <p>Reporte Calificaciones</p>
                    <br />

      {active &&   <p>Título de la nota: {active.title}</p>}
                    <List>
       {notes.map(note => (
          
          < SideBarData  key={note.id} {...note}/>
              
            ))}
        
        </List>
                   
                </Typography>
                
                
            </Grid>
        </Grid>
    );
};

//! agregar, modificar y/o quitar  logros con su respectiva calificación
//! promediar las calificaciones de cada logro 

// import { FeaturedPlayListRounded } from "@mui/icons-material"
// import { Grid, Typography } from "@mui/material"


// export const ReportNotes = (drawerWidth=200) => {
//   return (
//     <Grid
//     container
//     spacing={0}
//     direction="column"
//     alignItems="center"
//     justifyContent="center"
//     sx={{minHeight:'100vh',backgroundColor:'primary.main', borderRadius: 6 }}
//     className=" animate__animated animate__fadeIn animate__slover"
// >

//         <Grid item xs={6}>
//             <FeaturedPlayListRounded sx={{fontSize:100, color:'white'}}/>
//         </Grid>

//             <Grid item xs={12}>
//             <Typography color="white" variant="h5"> 

//                       <p>Reporte Calificaciones</p>
//               <br />

//               <p>Daniel Perez</p>
//               <p>Matemáticas : 4</p>
              
            
//               </Typography>          

//         </Grid>
//     </Grid>
//   )
// }
