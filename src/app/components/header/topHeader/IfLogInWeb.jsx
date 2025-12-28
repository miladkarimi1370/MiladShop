"use client";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import { Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import NextLink from "next/link";
import { useState } from "react";
export default function IfLogInWeb({ personData }) {
    const [anchorEl, setAnchorEl] = useState(null);
    console.log(personData);
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

                <Tooltip title="داشبورد مدیریت">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar src={personData.customer_image} sx={{ width: 32, height: 32 }}>{personData.full_name.slice(0, 1)}</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >

                <MenuItem onClick={handleClose} sx={{ display: "flex", justifyContent: "space-between", color: "#000" }}>
                    <Typography variant="subtitle1" component={"span"} sx={{ fontSize: "12px" }}>حساب من</Typography>
                    <Avatar alt={personData.full_name} src={personData.customer_image} />

                </MenuItem>
                <MenuItem onClick={handleClose} >

                    <BookmarkBorderIcon fontSize="small" />
                    <Typography variant="subtitle1" component={"span"} sx={{ fontSize: "12px" }}>سفارشات </Typography>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="subtitle1" component={"span"} sx={{ fontSize: "12px" }}>اضافه کردن یک حساب دیگر </Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="subtitle1" component={"span"} sx={{ fontSize: "12px" }}>تنظیمات </Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="subtitle1" component={"span"} sx={{ fontSize: "12px" }}>خروج </Typography>
                </MenuItem>


            </Menu>

        </>
    )
}