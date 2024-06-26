    

    import { createTheme } from "@mui/material";
    import { green, red } from "@mui/material/colors";
    
    export const purpleTheme =createTheme({
        palette:{
            primary:{
                main:'#262254'
            },
            secondary:{
                main:'#5438884'
            },
            error:{
                main:red.A400
            },
            tertiary:{
                main:green.A400
            }
        }
    })

