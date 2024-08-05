
// SideBar.jsx
import { Summarize, TurnedInNot } from '@mui/icons-material';
import { Box, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { ReportPageSearch } from '../pages/ReportPageSearch';
import { useSelector } from 'react-redux';

import { SideBarData } from './SideBarData';



export const SideBar = ({ drawerWidth = 100 }) => {
    const { displayName } = useSelector(state => state.auth);
    const { active,notes } = useSelector(state => state.report);

    return (
        <Box
            component='nav'
            sx={{
                width: { sm: drawerWidth },
                flexShrink: { sm: 0 }
            }}
        >
            <Drawer
                variant="permanent"
                open
                sx={{
                    '&.MuiDrawer-paper': { boxSizing: 'border-box' }
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component='div'>
                        <h4>Profesor(a): {displayName ? displayName : 'Usuario no identificado'}</h4>
                        <h4> Asignatura: Matemáticas</h4> 
                    </Typography>
                </Toolbar>

                <ReportPageSearch />

                <br />
                <br />
                <Divider />
                <br />
                <List>
      {active && notes.map(note => (
          
          < SideBarData  key={note.id} {...note}/>
              
            ))}
        
        </List>
              
            </Drawer>
        </Box>
    );
};

