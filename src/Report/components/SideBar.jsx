import { TurnedIn, TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { ReportPageSearch } from '../pages/ReportPageSearch'


export const SideBar = ({drawerWidth=100}) => {
  return (
    <Box
    component='nav'
    sx={{ width: 'auto', // Ajusta el ancho automáticamente al contenido
    display: { xs:'none',md:'block' },
    flexShrink: 0
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
                       Profesor  Andrés Correa
                        
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
