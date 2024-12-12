import React, { useState } from "react";
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
export default function DrawerComp() {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} >
            
                <List sx={{ width: "10rem",backgroundColor:"white",marginTop:"2rem" }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <Link to="/" style={{ textDecoration: "none",color:"black" }}>
                                <ListItemText primary="HOME" />
                            </Link>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <Link to="/about" style={{ textDecoration: "none",color:"black" }}>
                                <ListItemText primary="ABOUT" />
                            </Link>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <Link to="/treatments" style={{ textDecoration: "none",color:"black" }}>
                                <ListItemText primary="TREATMENTS" />
                            </Link>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <Link to="/hospitals" style={{ textDecoration: "none",color:"black" }}>
                                <ListItemText primary="HOSPITALS" />
                            </Link>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <Link to="/doctors" style={{ textDecoration: "none",color:"black" }}>
                                <ListItemText primary="DOCTORS" />
                            </Link>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <Link to="/testimonials" style={{ textDecoration: "none",color:"black" }}>
                                <ListItemText primary="TESTIMONIALS" />
                            </Link>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <Link to="/blog" style={{ textDecoration: "none",color:"black" }}>
                                <ListItemText primary="BLOG"/>
                            </Link>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <Link to="/contactus" style={{ textDecoration: "none",color:"black" }}>
                                <ListItemText primary="CONTACTUS" />
                            </Link>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{ color: 'white' }}>
                <MenuIcon />
            </IconButton>
        </>
    )
}