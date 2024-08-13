
import { useDispatch, useSelector } from "react-redux"
import { ReportLayout } from "../layout/ReportLayout"
import { Nothing } from "./Nothing"
import { ReportNotes } from "./ReportNotes"
import { IconButton } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"
import { startNewNote } from "../../store/report/thunks"


export const ReportPage = () => {
    const {active} =useSelector(state=>state.report)

    return (
        
       <ReportLayout> 
       
                {active ? 
                < ReportNotes />
                      : 
                 < Nothing />  
                 
                }

        </ReportLayout> 
    
    )
}

