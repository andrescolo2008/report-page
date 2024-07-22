
// SideBar.jsx
import { Summarize, TurnedInNot } from '@mui/icons-material';
import { Box, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { ReportPageSearch } from '../pages/ReportPageSearch';
import { useSelector } from 'react-redux';
import { courses,students,subjects } from '../../store/report/student';



export const SideBar = ({ drawerWidth = 100 }) => {
    const { displayName } = useSelector(state => state.auth);
    const { active } = useSelector(state => state.report);

    return (
        <Box
            component='nav'
            sx={{
                width: { sm: drawerWidth },
                flexShrink: { sm: 0 }
            }}
        >
            <Drawer
                variant="permanent"
                open
                sx={{
                    '&.MuiDrawer-paper': { boxSizing: 'border-box' }
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component='div'>
                        <h4>Profesor(a): {displayName ? displayName : 'Usuario no identificado'}</h4>
                        <h4> Asignatura: Matemáticas</h4> 
                    </Typography>
                </Toolbar>

                <ReportPageSearch />

                <br />
                <br />
                <Divider />
                <br />

                {active && (
                    <List>
                        {students.map(student => (
                            <ListItem key={student.id} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={student.studentName} secondary={`Identificación: ${student.id}`} />
                                    </Grid>

                                    <IconButton
                                        size="large"
                                        sx={{
                                            color: 'white',
                                            backgroundColor: 'error.main',
                                            ':hover': { backgroundColor: 'pink', opacity: 0.7 },
                                            position: 'fixed',
                                            left: 200,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Summarize sx={{ fontSize: 20 }} />
                                        <span style={{ marginTop: 8, fontSize: 10 }}>reporte</span>
                                    </IconButton>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                )}
            </Drawer>
        </Box>
    );
};



// import { TurnedIn, TurnedInNot } from '@mui/icons-material'
// import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
// import { ReportPageSearch } from '../pages/ReportPageSearch'
// import { useSelector } from 'react-redux'


// export const SideBar = ({drawerWidth=100}) => {
 
//  const {displayName} =useSelector(state =>state.auth )

//     return (
//     <Box
//     component='nav'
//     sx={{ 
//         width: {sm:drawerWidth}, // Ajusta el ancho automáticamente al contenido
//     // display: { xs:'none',md:'block' },
//     flexShrink: {sm:0}
//     }}
//     >
    
//         <Drawer
//         variant="permanent"
//         open
//         sx={{
            
//             '&.MuiDrawer-paper':{boxSizing:'border-box', }
//         }}

//         >

//                 <Toolbar>
//                     <Typography variant="h6" noWrap component='div'>  
                       
//                     <h4> Profesor(a): {displayName ? displayName : 'Usuario no identificado'}</h4>
                       

//                          </Typography>
//                 </Toolbar>

//                 < ReportPageSearch />

//                     <br />
//                     <br />
//                     <Divider/>

//                     <br />
//            <List>
//                {
//                  ['Daniel Perez',].map(text=>(
//                    <ListItem key={text} disablePadding>
//                              <ListItemButton>
//                                  <ListItemIcon>
//                                      <TurnedInNot/>
//                                  </ListItemIcon>
//                                  <Grid container>
//                                      <ListItemText primary={text} secondary={'identificación :'+'10'}/>
//                                  </Grid>
                                
//                              </ListItemButton>
//                    </ListItem>  
//                    ))
//                }
//            </List>

//         </Drawer>

//     </Box>
//   )
// }

