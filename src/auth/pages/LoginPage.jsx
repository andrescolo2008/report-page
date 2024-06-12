import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography} from "@mui/material"
import { Link as RouterLink} from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/usefForm"
import { checkingAuthentication, startGoogleSingIn, startLoginUser } from "../../store/auth/thunks"
import { useDispatch, useSelector } from "react-redux"
import { useMemo } from "react"



export const LoginPage = () => {

  const{status,errorMessage}= useSelector(state=> state.auth)


  
  const {email,password,onInputChange}=useForm({ 
    email:'', 
    password:''
  })
  
  const isAuthenticating= useMemo(() =>status === 'checking', [status])
  const dispatche=useDispatch()

const onSubmit= ( event) =>{
  event.preventDefault()
  // dispatche(checkingAuthentication())
  dispatche(startLoginUser({email,password}))
 
  
}

const onGoogleSignIn= ( ) =>{
  dispatche(startGoogleSingIn())
  console.log('GooglesignIn');
  
}
  
  return (

       // lo que este dentro de <AuthLayout > recibirà el  fondo de la login page y recuadro del login 
     
       <AuthLayout title="Ingresar">

                  <Grid 
                    item xs={12} 
                    sx={{mt:2}} 
                    display={ errorMessage ? '': 'none'}
                    >
                      <Alert severity='error'> {errorMessage} </Alert>
                                    
                  </Grid>
        
               <form onSubmit={onSubmit} >
                    <Grid container>
                          <Grid item xs={12} sx={{mt:2}} >
                              <TextField 
                              label="correo"
                                 type="email"
                                  placeholder='correo@gmail.com'
                                  fullWidth
                                  name="email"
                                  value={email}
                                  onChange={onInputChange}
                                  
                                    />
                          </Grid>
                          <Grid item xs={12} sx={{mt:2}}>
                              <TextField 
                              label="password"
                                 type="password"
                                  placeholder='password'
                                  fullWidth
                                  name="password"
                                  value={password}
                                  onChange={onInputChange}
                                  
                                    />
                          </Grid>
                                <Grid container spacing={2} sx={{mb:2, mt:1}}>
                                  <Grid item xs={12} sm={6}>
                                      <Button 
                                      type="submit" 
                                      variant='contained' 
                                      fullWidth 
                                      disabled={isAuthenticating}
                                      onClick={startLoginUser}
                                      >
                                        Login
                                      </Button>
                                    </Grid>

                                  <Grid item xs={12} sm={6}>
                                      <Button variant='contained'
                                       fullWidth 
                                       onClick={onGoogleSignIn}
                                       disabled={isAuthenticating}
                                       >
                                      <Google/>
                                       <Typography sx={{ml:1}}>  Google   </Typography> 
                                      </Button>
                                  </Grid>
                                  
                              </Grid>


                          <Grid   container direction='row' justifyContent='end'>
                           <Link component={RouterLink} color='inherit' to='/auth/register'>
                            Crear una cuenta 
                           
                           </Link>
                           
                          </Grid>

                          <Grid   container direction='row' justifyContent='center'>
                           <Link component={RouterLink} color='inherit' to='/report'>
                            ir a la pàgina de reportes( provisionalmente)
                           
                           </Link>
                           
                          </Grid>

                    </Grid>
               </form>
               </AuthLayout >
      
  )
}
