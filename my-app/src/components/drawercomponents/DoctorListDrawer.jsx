import React, { useState } from "react";
import { Checkbox, Drawer, FormControlLabel, IconButton, List, ListItemButton, ListItemIcon } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
export default function DoctorListDrawer() {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} >
                <h5 style={{ marginTop: '3rem', fontWeight: 'bold', color: "black", marginLeft: '0.5rem' }}>Doctors By Location </h5>
                <List sx={{ width: "10rem", marginTop: "-0.5rem", backgroundColor: "white" }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Delhi" />
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Mumbai" />
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Lucknow" />
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Chennai" />
                        </ListItemIcon>
                    </ListItemButton>
                    <h5 style={{ marginTop: '1rem', fontWeight: 'bold' }}>Speciality</h5>
                    <ListItemButton>
                        <ListItemIcon>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Aesthetic And Reconstructive Surgery" />
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Allergy" />
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Anaesthesia" />
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Aesthetic And Reconstructive Surgery" />
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Audiology" />
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