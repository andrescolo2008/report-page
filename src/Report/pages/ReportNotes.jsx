import { AddCircleOutlined, AddOutlined, FeaturedPlayListRounded } from "@mui/icons-material";
import { Button, Grid, IconButton, List, TextField, Typography } from "@mui/material";
import { startNewNote } from "../../store/report/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addNewEmptyNote } from "../../store/report/reportSlice";


export const ReportNotes = ({ drawerWidth = 200 }) => {
    const { active } = useSelector(state => state.report);

    // Suponiendo que estamos mostrando los detalles de un estudiante específico
    const dispatch = useDispatch();
    // const onClickNewNote = () => {
        
    //     dispatch(startNewNote());
    // }

    const [logro, setLogro] = useState('');
    const [grade, setGrade] = useState('');

    const onClickNewNote = () => {
        if (logro && grade) {
            dispatch(addNewEmptyNote({ 
                studentId: active.id, 
                logro, 
                grade: parseFloat(grade) 
            }));
            setLogro('');
            setGrade('');
            console.log('Update Active', active);
            
        }
    };

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

                    {active ? (
                        <>
                            <p>Identificación: {active.id}</p>
                            <p>Nombres y Apellidos: {active.studentName}</p>
                            <img src={active.studentPhotoURL} alt={active.studentName} width="100" />
                            <p>Curso: {active.course}</p>
                            <p>Asignaturas: {active.subject.join(', ')}</p>
                            <p>Logros y Calificaciones:</p>
                            <ul>
                                {active.body.map((logro, index) => (
                                    <li key={index}>{logro} : {active.grade[index]}</li>
                                ))}
                            </ul>

                            <TextField
                                label="Nuevo Logro"
                                value={logro}
                                onChange={(e) => setLogro(e.target.value)}
                                sx={{ mb: 2, width: '80%' }}
                            />
                            <TextField
                                label="Calificación"
                                value={grade}
                                onChange={(e) => setGrade(e.target.value)}
                                sx={{ mb: 2, width: '80%' }}
                                type="number"
                            />
                            <Button 
                                variant="contained" 
                                onClick={onClickNewNote}
                                disabled={!logro || !grade}
                            >
                                Agregar
                            </Button>
                        </>
                    ) : (
                        <p>No se ha encontrado al estudiante</p>
                    )}
                   
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
