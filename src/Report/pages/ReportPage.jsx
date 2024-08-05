
import { useDispatch, useSelector } from "react-redux"
import { ReportLayout } from "../layout/ReportLayout"
import { Nothing } from "./Nothing"
import { ReportNotes } from "./ReportNotes"
import { IconButton } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"
import { startNewNote } from "../../store/report/thunks"


export const ReportPage = () => {
    const {active,isSaving} =useSelector(state=>state.report)

    const dispatch = useDispatch();

    const onClickNewNote = () => {
        
            dispatch(startNewNote());
        }
    
    return (
        
       <ReportLayout> 
       
                {active ? 
                < ReportNotes />
                      : 
                 < Nothing />  
                 
                }
<IconButton
onClick={onClickNewNote} 
disabled={isSaving}
size="large"
sx={{color: "white",
    backgroundColor:'error.main',
    ':hover':{backgroundColor:'error.main',opacity:'0.8'},
    position: 'fixed',
    right: 50,
    bottom: 50,
    borderRadius: '50%',
}}
>
    <AddOutlined sx={{fontSize:30}}/>
    
</IconButton>
        </ReportLayout> 
    
    )
}

