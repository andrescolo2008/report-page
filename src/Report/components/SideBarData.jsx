import { TurnedInNot } from '@mui/icons-material'
import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useMemo } from 'react'


export const SideBarData = ({title='',body,id}) => {
   
    const shortTitle= useMemo(() =>{
         return title.length >17 ? 
            title.substring(0,17) +'...' 
            :
            title }
    , 
    [title])

  return (
      <List>
     
            
                <ListItem  disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <TurnedInNot />
                        </ListItemIcon>
                        <Grid container>
                            <ListItemText primary={shortTitle} 
                            secondary={`cont:${body}`} />
                        </Grid>

                    </ListItemButton>
                </ListItem>
           
        
        </List>
  )
}

// {students.map(student => (
//     <ListItem key={student.id} disablePadding>
//         <ListItemButton>
//             <ListItemIcon>
//                 <TurnedInNot />
//             </ListItemIcon>
//             <Grid container>
//                 <ListItemText primary={student.studentName} secondary={`Identificación: ${student.id}`} />
//             </Grid>

//             <IconButton
//                 size="large"
//                 sx={{
//                     color: 'white',
//                     backgroundColor: 'error.main',
//                     ':hover': { backgroundColor: 'pink', opacity: 0.7 },
//                     position: 'fixed',
//                     left: 200,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                 }}
//             >
//                 <Summarize sx={{ fontSize: 20 }} />
//                 <span style={{ marginTop: 8, fontSize: 10 }}>reporte</span>
//             </IconButton>
//         </ListItemButton>
//     </ListItem>
// ))}