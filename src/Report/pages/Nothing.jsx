import { FeaturedPlayListRounded } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"



export const Nothing = () => {
  return (
    <Grid
    className=" animate__animated animate__fadeIn animate__faster"
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{minHeight:'calc(100vh - 100px)',backgroundColor:'primary.main', borderRadius: 6 }}
    >

        <Grid item xs={12}>
            <FeaturedPlayListRounded sx={{fontSize:100, color:'white'}}/>
        </Grid>

            <Grid item xs={12}>
            <Typography color="white" variant="h5"> 

                      No hay reporte de notas
             
              </Typography>          

        </Grid>
    </Grid>
  )
}