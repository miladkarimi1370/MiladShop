"use client";
import MenuIcon from '@mui/icons-material/Menu';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import NextLink from "next/link";
import Collapse from '@mui/material/Collapse';
import NoteAddRoundedIcon from '@mui/icons-material/NoteAddRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';



import { Box } from '@mui/system';
import { useState } from 'react';
import { Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';


export default function ShowMenuIcon() {
    const [open, setOpen] = useState(false);
    const [subMenuState, setSubMenuState] = useState({
        "subMenu1": false,
        "subMenu2": false,
        "subMenu3": false
    });

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    }

    const handleOpenSubMenu = (wichSubMenu) => {
        setSubMenuState((prevState) => ({
            ...prevState,
            [wichSubMenu]: !prevState[wichSubMenu]
        }))
    };
    const DrawerList = (
        <Box role="presentation" sx={{
            width: 350, height: "100vh", display: {
                sm: "block", md: "none"
            }
        }}>
            <List
                sx={{ width: '100%', maxWidth: 360, backgroundColor: "white", height: "60vh" }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader"
                        sx={{ backgroundColor: "#cecece" }}
                    >

                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: 0 }}>
                            <MenuIcon sx={{ color: "#000" }} />منوی راهنمای وبسایت </Box>
                    </ListSubheader>
                }
            >

                <ListItemButton
                    component={NextLink}
                    href='/'
                    sx={{

                        "&:hover": {
                            color: "grey",
                            transition: "all 0.4s"
                        }
                    }}
                >
                    <ListItemIcon sx={{ display: "flex", justifyContent: "center", alignItems: "start" }}>
                        <HomeRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="خانه" />
                </ListItemButton>
                <ListItemButton
                    component={NextLink}
                    href="/emall"
                    sx={{

                        "&:hover": {
                            color: "grey",
                            transition: "all 0.4s"
                        }
                    }}
                >
                    <ListItemIcon sx={{ display: "flex", justifyContent: "center", alignItems: "start" }}>
                        <LocalMallRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="فروشگاه" />
                </ListItemButton>
                {/* شروع اولین لیست آیتم به همراه collapse مربوط به خودش */}
                <ListItemButton
                    onClick={() => handleOpenSubMenu("subMenu1")}
                    href='/emall'
                    sx={{

                        "&:hover": {
                            color: "grey",
                            transition: "all 0.4s"
                        }
                    }}
                >
                    <ListItemIcon sx={{ display: "flex", justifyContent: "center", alignItems: "start" }}>
                        <CategoryRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="محصولات" />
                    {subMenuState.subMenu1 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={subMenuState.subMenu1} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>

                            </ListItemIcon>
                            <ListItemText primary="محصول شماره یک" />
                        </ListItemButton>
                    </List>
                </Collapse>
                {/* شروع اولین لیست آیتم به همراه collapse مربوط به خودش */}
                {/* شروع دومین لیست آیتم به همراه collapse مربوط به خودش */}
                <ListItemButton
                    onClick={() => handleOpenSubMenu("subMenu3")}

                    sx={{

                        "&:hover": {
                            color: "grey",
                            transition: "all 0.4s"
                        }
                    }}
                >
                    <ListItemIcon sx={{ display: "flex", justifyContent: "center", alignItems: "start" }}>
                        <NoteAddRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="بلاگ ها" />
                    {subMenuState.subMenu3 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={subMenuState.subMenu3} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>

                            </ListItemIcon>
                            <ListItemText primary="بلاگ محصولات" />
                        </ListItemButton>
                    </List>
                </Collapse>
                {/* شروع دومین لیست آیتم به همراه collapse مربوط به خودش */}
                {/* شروع سومین لیست آیتم به همراه collapse مربوط به خودش */}
                <ListItemButton
                    onClick={() => handleOpenSubMenu("subMenu2")}

                    sx={{

                        "&:hover": {
                            color: "grey",
                            transition: "all 0.4s"
                        }
                    }}
                >
                    <ListItemIcon sx={{ display: "flex", justifyContent: "center", alignItems: "start" }}>
                        <ShareRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="صفحات مختلف ما در دنیای وب" />
                    {subMenuState.subMenu2 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={subMenuState.subMenu2} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>

                            </ListItemIcon>
                            <ListItemText primary="صفحه اینستاگرام" />
                        </ListItemButton>
                    </List>
                </Collapse>

                {/* شروع سومین لیست آیتم به همراه collapse مربوط به خودش */}
            </List>
            {/* شروع قسمت لینک ورود به سایت و قسمت مورد علاقه ها */}


            <List
                sx={{ width: '100%', maxWidth: 360, backgroundColor: "white" }}
                component="nav"
            >
                <Divider variant="middle" component="li" />
                <ListItemButton
                    component={NextLink}
                    href='login'
                    sx={{

                        "&:hover": {
                            color: "grey",
                            transition: "all 0.4s"
                        }
                    }}
                >
                    <ListItemIcon sx={{ display: "flex", justifyContent: "center", alignItems: "start" }}>
                        <PersonRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="ورود / ثبت نام" />
                </ListItemButton>
                <ListItemButton
                    component={NextLink}
                    href=''
                    sx={{

                        "&:hover": {
                            color: "grey",
                            transition: "all 0.4s"
                        }
                    }}
                >
                    <ListItemIcon sx={{ display: "flex", justifyContent: "center", alignItems: "start" }}>
                        <FavoriteRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="پسندیده" />
                </ListItemButton>
                <Divider variant="middle" component="li" />
            </List>
            {/* پایان قسمت لینک ورود به سایت و قسمت مورد علاقه ها */}
            {/* شروع قسمت تماس از طریق تلفن  */}
            <List
                sx={{ width: '100%', maxWidth: 360, backgroundColor: "white" }}
                component="nav"
            >
                <Divider variant="middle" component="li" />

                <ListItemButton
                    component={NextLink}
                    href=''
                    sx={{

                        "&:hover": {
                            color: "grey",
                            transition: "all 0.4s"
                        }
                    }}
                >
                    <ListItemIcon sx={{ display: "flex", justifyContent: "center", alignItems: "start" }}>
                        <PhoneRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="تماس از طریق تلفن" />
                </ListItemButton>

                <Divider variant="middle" component="li" />
            </List>
            {/* پایان قسمت تماس از طریق تلفن  */}


        </Box>
    )

    return (
        <>
            <MenuIcon sx={{
                color: "white",
                marginInline: "1rem",
                "&:hover": {
                    color: "grey",
                    cursor: "pointer",
                    transition: "all 0.4s"
                }

            }}
                onClick={toggleDrawer(true)}
            />
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </>
    )
}