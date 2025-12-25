"use client";
import FullscreenRoundedIcon from '@mui/icons-material/FullscreenRounded';
import { Box, Dialog, IconButton, Slide, Typography } from '@mui/material';

import React, { useState } from 'react';


const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function FullScreenPicture({ srcOfImg }) {

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <IconButton sx={{ display: "flex", position: "absolute", top: "10px", left: "20px" }}
                onClick={handleClickOpen}
            >
                <FullscreenRoundedIcon />
            </IconButton>
            <Box sx={{ position: "relative", backgroundColor: "rebeccapurple" }}>
                <Dialog
                    fullScreen
                    open={open}
                    onClose={handleClose}

                    slots={{
                        transition: Transition,
                    }}

                >
                    <Box
                        component={"img"}
                        src={srcOfImg}
                        sx={{ width: "100%", height: "100%", objectFit: "contain", backgroundColor: "#000" }}

                    />
                    <Box sx={{ width: "100%", height: "8vh",  position: "absolute", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Typography variant="caption" sx={{ color: "red", backgroundColor : "black", borderRadius : "10px",width: "60%", height: "auto", py : 2, textAlign : "center" , fontSize : "16px" }}>برای خروج از فول اسکرین روی کلید ESC بزنید</Typography>

                    </Box>
                </Dialog>

            </Box>
        </>
    )
}