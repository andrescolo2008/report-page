import { LogoutRounded, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { startLogOutUser } from "../../store/auth/thunks"
import { useDispatch } from "react-redux"



export const NavBar = ({anchoCajon}) => {
  

  const dispache= useDispatch() 

  const onLogOut = () => {
    dispache(startLogOutUser())
    console.log('loged out ');
    
  }
  
  return (
    <AppBar position="fixed" 
    sx={{
      width:{sm:`calc(100% - ${anchoCajon}px)`},
    ml:{sm:`${anchoCajon}px`}
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
               <Typography variant="h6" noWrap component='div'>Boletín-de-notas-App</Typography> 
               
                <IconButton 
                color="error"
                onClick={onLogOut}
                >
                    < LogoutRounded />
               
                </IconButton>
             </Grid>
            
        </Toolbar>
        
    </AppBar>
  )
}
