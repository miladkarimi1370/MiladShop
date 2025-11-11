"use client"
import { SearchRounded } from "@mui/icons-material";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Drawer, List, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import { Box } from "@mui/system";
import { useRef, useState } from "react";

export default function ShortSearchWithDrawer() {
    const [openSearch, setOpenSearch] = useState(false);
    const myRef = useRef(null);

    const toggleDrawerForSearch = (newOpen) => () => {
        setOpenSearch(newOpen);

    }

    const DrawerListForSearch = (
        <Box
            role="presentation"

        >
            <List>
                <ListItemButton
                    component={"button"}
                    onClick={toggleDrawerForSearch(false)}
                    sx={{

                        "&:hover": {
                            color: "grey",
                            transition: "all 0.4s"
                        }
                    }}
                >
                    <ListItemIcon sx={{ display: "flex", justifyContent: "center", alignItems: "start" }}>
                        <CloseRoundedIcon />
                    </ListItemIcon>

                </ListItemButton>
            </List>
            <Box sx={{ width: 500, maxWidth: '100%', display: "flex", justifyContent: "center", alignItems: "center" }}>
                <FormControl fullWidth sx={{ m: 1, borderRadius: "5px", backgroundColor: "#cecece" }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-amount" sx={{ p: 1, color: "blue" }}>جستجو برای محصولات</InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        inputRef={myRef}
                        startAdornment={<InputAdornment position="start">

                            <SearchRoundedIcon />
                        </InputAdornment>}
                    />
                </FormControl>
            </Box>
            <Stack direction="row" spacing={2} sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ width: "90%", display: "flex", justifyContent: "center", alignContent: "center" }}>
                    <Box sx={{ width: "30%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Typography variant="h6" sx={{ fontSize: "14px", textAlign: "center" }} color="grey">محبوب ترین جستجوها </Typography>
                    </Box>
                    <Box sx={{ width: "70%", display: "flex", justifyContent: "space-evenly", alignContent: "center", flexWrap: "wrap", mt: 1 }}>
                        <Chip label="تیشرت مردانه" variant="outlined" key={"t-shirt"} color="grey" sx={{
                            cursor: "pointer",
                            fontWeight: "500",
                            width: "30%",
                            marginBlock: "5px",
                            "&:hover": {
                                color: "tomato"
                            },
                            transition: "all 0.3s"
                        }}
                            component={"a"}
                            href=""
                        />
                        <Chip label="دامن زنانه" variant="outlined" key={"skirt"} color="grey" sx={{
                            cursor: "pointer",
                            fontWeight: "500",
                            width: "30%",
                            marginBlock: "5px",
                            "&:hover": {
                                color: "tomato"
                            },
                            transition: "all 0.3s"

                        }}
                            component={"a"}
                            href=""
                        />
                        <Chip label="پولوشرت مردانه" variant="outlined" key={"shirt"} color="grey" sx={{
                            cursor: "pointer",
                            fontWeight: "500",
                            width: "30%",
                            marginBlock: "5px",
                            "&:hover": {
                                color: "tomato"
                            },
                            transition: "all 0.3s"

                        }}
                            component={"a"}
                            href=""
                        />
                        <Chip label="روسری زنانه" variant="outlined" key={"skarf"} color="grey" sx={{
                            cursor: "pointer",
                            fontWeight: "500",
                            width: "30%",
                            marginBlock: "5px",
                            "&:hover": {
                                color: "tomato"
                            },
                            transition: "all 0.3s"

                        }}
                            component={"a"}
                            href=""
                        />
                        <Chip label="کاپشن" variant="outlined" key={"coat"} color="grey" sx={{
                            cursor: "pointer",
                            fontWeight: "500",
                            width: "30%",
                            marginBlock: "5px",
                            "&:hover": {
                                color: "tomato"
                            },
                            transition: "all 0.3s"

                        }}
                            component={"a"}
                            href=""
                        />
                        <Chip label="کلاه" variant="outlined" key={"hat"} color="grey" sx={{
                            cursor: "pointer",
                            fontWeight: "500",
                            width: "30%",
                            marginBlock: "5px",
                            "&:hover": {
                                color: "tomato"
                            },
                            transition: "all 0.3s"

                        }}
                            component={"a"}
                            href=""
                        />
                    </Box>
                </Box>

            </Stack>
        </Box>
    )

    return (
        <>
            <SearchRounded sx={{
                color: "white",
                marginInline: "1rem",
                "&:hover": {
                    color: "grey",
                    cursor: "pointer",
                    transition: "all 0.4s"
                }

            }}
                onClick={toggleDrawerForSearch(true)}
            />

            <Drawer open={openSearch} onClose={toggleDrawerForSearch(false)}
                PaperProps={{
                    sx: {
                        height: "30vh",         // ارتفاع دلخواه
                        width: "100vw",         // عرض تمام صفحه
                        display: { sm: "block", md: "none" },
                        backgroundColor: "#fff" // مثلاً رنگ زمینه
                    }
                }}
                ModalProps={{
                    onTransitionEnd: () => {
                        if (openSearch && myRef.current) {
                            myRef.current.focus();
                        }
                    }
                }}
            >
                {DrawerListForSearch}
            </Drawer>
        </>
    )
}