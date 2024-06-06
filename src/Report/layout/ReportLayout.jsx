import { Box} from "@mui/material"
import { NavBar ,SideBar } from "../components";


const drawerWidth = 100;

export const ReportLayout = ({children,title=''}) => {
  return (
  
    
    <Box sx={{display:"flex"}}>
      {/* NavBar drawer width  */}
      {/* SideBar drawerWidth  */}
      < NavBar anchoCajon={drawerWidth} />
      <SideBar anchoCajon={drawerWidth} />
        <Box component={'main'} sx={{flexGrow:1,p:3}} >

        {children}
        </Box>

    </Box>

  )
}