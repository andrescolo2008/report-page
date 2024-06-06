
import { Button, Grid, Link, TextField, Typography } from '@mui/material'

import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/usefForm'

const formData= { 
  email:'edgarosp@gmail.com', 
  password:'123',
  displayName:'Edgar'
}

const formValidations = {
  // es un objeto que tiene los mismos nombre del campo del formualrio ,cuyo valor es un arreglo con 2 valores,es decir , tupla, primero es una condición y el segundo es el resultado de que se cumpla esa condición 
  email:[(value) =>value.includes('@'),'el correo debe contener el @' ],
  password:[(value) =>value.length >= 4,'la contraseña debe tener al menos 4 caracteres'],
  displayName:[(value) =>value.length >= 3,'el nombre debe tener al menos 3 caracteres']
}


export const RegisterPage = () => {
  const {displayName,email,password,onInputChange,formState,
    isDisplaynameValid,isEmailValid,isPasswordValid,isFormStateValid
  }=useForm(formData,formValidations)

  
  console.log(isDisplaynameValid);
  console.log(formState);
  
  const onSubmit=(event) => {
    event.preventDefault()
    // console.log(formState)
  }
  return (
    
    <AuthLayout title='Registrar nuevo usuario'>

            <form onSubmit={onSubmit}>
                    <Grid container>

                          <Grid item xs={12} sx={{mt:2}} >
                              <TextField 
                              label="nombre competo"
                                 type="text"
                                  placeholder='escriba su nombre completo'
                                  fullWidth
                                  name='displayName'
                                  value={displayName}
                                   onChange={onInputChange}
                                   error={!isDisplaynameValid }
                                helperText={isDisplaynameValid }
                                    />
                                    
                          </Grid>

                          <Grid item xs={12} sx={{mt:2}} >
                              <TextField 
                              label="correo"
                                 type="email"
                                  placeholder='correo electrónico'
                                  fullWidth
                                  name='email'
                                  value={email}
                                   onChange={onInputChange}
                                   error={!isEmailValid }
                                   helperText={isEmailValid }
                                    />

                              </Grid>

                          <Grid item xs={12} sx={{mt:2}}>
                              <TextField 
                              label="Contraseña"
                                 type="password"
                                  placeholder='Contraseña'
                                  fullWidth
                                  name='password'
                                  value={password}
                                   onChange={onInputChange}
                                   error={!isPasswordValid }
                                   helperText={isPasswordValid }
                                    />
                          </Grid>
                                <Grid container spacing={2} sx={{mb:2, mt:1}}>
                                  <Grid item xs={12} >
                                      <Button variant='contained' fullWidth type='submit'>
                                        Crear Cuenta
                                      </Button>
                                    </Grid>
                                  
                              </Grid>

                          <Grid container='row' justifyContent='center'>
                            <Typography sx={{mr:1}}> ¿Ya tienes una cuenta?  </Typography>
                           <Link component={RouterLink} color='inherit' to='/auth/login'>
                           Ingresar 
                           
                           </Link>
                           
                          </Grid>

                    </Grid>
               </form>

    </AuthLayout>
              
    
  )
}
