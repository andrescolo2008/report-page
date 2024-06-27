import { TurnedIn, TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { ReportPageSearch } from '../pages/ReportPageSearch'
import { useSelector } from 'react-redux'


export const SideBar = ({drawerWidth=100}) => {
 
 const {displayName} =useSelector(state =>state.auth )

    return (
    <Box
    component='nav'
    sx={{ 
        width: {sm:drawerWidth}, // Ajusta el ancho automáticamente al contenido
    // display: { xs:'none',md:'block' },
    flexShrink: {sm:0}
    }}
    >
    
        <Drawer
        variant="permanent"
        open
        sx={{
            
            '&.MuiDrawer-paper':{boxSizing:'border-box', }
        }}

        >

                <Toolbar>
                    <Typography variant="h6" noWrap component='div'>  
                       
                    <h4> Profesor(a): {displayName ? displayName : 'Usuario no identificado'}</h4>
                       

                         </Typography>
                </Toolbar>

                < ReportPageSearch />

                    <Divider/>

           <List>
               {
                 ['Daniel Pèrez',].map(text=>(
                   <ListItem key={text} disablePadding>
                             <ListItemButton>
                                 <ListItemIcon>
                                     <TurnedInNot/>
                                 </ListItemIcon>
                                 <Grid container>
                                     <ListItemText primary={text} secondary={'identificación :'+' 2234556'}/>
                                 </Grid>
                                
                             </ListItemButton>
                   </ListItem>  
                   ))
               }
           </List>

        </Drawer>

    </Box>
  )
}

