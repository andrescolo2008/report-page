import { FeaturedPlayListRounded } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const ReportNotes = () => {
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

                      <p>Reporte Calificaciones</p>
              <br />

              <p>Daniel Perez</p>
              <p>Matemáticas : 4</p>
              <p>Fìsicia : 5</p>
              <p>Quíimca : 5</p>
            
              </Typography>          

        </Grid>
    </Grid>
  )
}