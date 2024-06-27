import { IconButton } from "@mui/material"
import { ReportLayout } from "../layout/ReportLayout"
import { Nothing } from "./Nothing"
import { ReportNotes } from "./ReportNotes"
import { AddOutlined } from "@mui/icons-material"




export const ReportPage = () => {
    
    return (
        
       <ReportLayout> 
       

< Nothing />

        {/* < ReportNotes /> */}

       <IconButton
        size="large" 
        sx={{
            color:'white',
            backgroundColor:'error.main',
            ':hover':{backgroundColor:'pink',opacity:0.7},
            position:'fixed',
            right:60,
            bottom:60} }
            >
            < AddOutlined sx={{fontSize:40 }} />
        </IconButton>
            
            </ReportLayout> 
    
    )
}
