import { Box} from "@mui/material"
import { NavBar ,SideBar } from "../components";


const drawerWidth = 360;

export const ReportLayout = ({children}) => {
  return (
   

    <Box sx={{display:"flex"}}  className="animate__animated animate__fadeIn animate_slower" >
      {/* NavBar drawer width  */}
      {/* SideBar drawerWidth  */}
      < NavBar anchoCajon={drawerWidth} />
      <SideBar anchoCajon={drawerWidth} />
       
        <Box component={'main' }
        sx={{ flexGrow: 1, p: 3,ml:'50px' ,mt: '45px' }}
        //  sx={{flexGrow:1,p:3}} 
        
         >

        {children}
        </Box>

    </Box>
   

  )
}