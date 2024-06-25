
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'

import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/usefForm'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUser } from '../../store/auth/thunks'

const formData= { 
  email:'', 
  password:'',
  displayName:''
}

const formValidations = {
  // es un objeto que tiene los mismos nombre del campo del formualrio ,cuyo valor es un arreglo con 2 valores,es decir , tupla, primero es una condición y el segundo es el resultado de que se cumpla esa condición 
  email:[(value) =>value.includes('@'),'el correo debe contener el @' ],
  password:[(value) =>value.length >= 4,'la contraseña debe tener al menos 4 caracteres'],
  displayName:[(value) =>value.length >= 3,'el nombre debe tener al menos 3 caracteres']
}


export const RegisterPage = () => {

  const dispatche = useDispatch()

  const [formSubmitted,SetformSubmitted] = useState(false);

  const {status,errorMessage} =useSelector( stado =>stado.auth);
  const isChechingAuthentication  = useMemo(( )=> status === 'checking',[status])

  const {displayName,email,password,onInputChange,formState,
    displayNameValid,emailValid,passwordValid,isFormValid,createValidators
  }=useForm(formData,formValidations)

  
  const onSubmit=(event) => {
    event.preventDefault()
    SetformSubmitted(true)
    if(!isFormValid) return
    dispatche(startCreatingUser(formState)) // este formState, contiene el name ,password y displayName   necesarios para crear el nuevo usuario en fireBase
    console.log(formState);
    // const validationResults = createValidators(); // Llama a createValidators y guarda el resultado
    // console.log(validationResults);
    
  }
  return (
    
    <AuthLayout title='Registrar nuevo usuario'>

      {/* <h1>FormValid-campos válidos? {isFormValid? 'sí':'no'}</h1> */}

            <form onSubmit={onSubmit}>
                    <Grid container>

                    <Grid 
                    item xs={12} 
                    sx={{mt:2}} 
                    display={ errorMessage ? '': 'none'}
                   
                   >
                            <Alert severity='error'> {errorMessage} </Alert>
                                    
                          </Grid>

                          <Grid item xs={12} sx={{mt:2}} >
                              <TextField 
                              label="nombre competo"
                                 type="text"
                                  placeholder='escriba su nombre completo'
                                  fullWidth
                                  name='displayName'
                                  value={displayName}
                                   onChange={onInputChange}
                                   error={!!displayNameValid && formSubmitted}
                                helperText={displayNameValid }
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
                                   error={!!emailValid && formSubmitted }
                              helperText={emailValid }
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
                                   error={!!passwordValid && formSubmitted}
                                   helperText={passwordValid }
                                    />
                          </Grid>
                                <Grid container spacing={2} sx={{mb:2, mt:1}}>
                                  <Grid item xs={12} >
                                      <Button 
                                      variant='contained' 
                                      fullWidth 
                                      type='submit'
                                      disabled={isChechingAuthentication}
                                      >
                                        Crear Cuenta
                                      </Button>
                                    </Grid>
                                  
                              </Grid>

                          <Grid container position='row' justifyContent='center'>
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
