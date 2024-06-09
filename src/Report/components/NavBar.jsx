import { LogoutRounded, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"



export const NavBar = ({drawerWidthxxx=360}) => {
  return (
    <AppBar position="fixed" sx={{width:{sm:`calc(100% - ${drawerWidthxxx}px)`} ,
    ml:{sm:`${drawerWidthxxx}px`}
    }}>
        <Toolbar>

             <IconButton
             color="inherit"
             edge="start"
             sx={{mr:2,display:{sm:'none'}}}
             >
                    < MenuOutlined />
             </IconButton>

             <Grid container direction='row' justifyContent='space-between'
             alignItems='center' >
               <Typography variant="h6" noWrap component='div'>Report-Card-App</Typography> 
               
                <IconButton color="error">
                    < LogoutRounded />
               
                </IconButton>
             </Grid>
            
        </Toolbar>
        
    </AppBar>
  )
}