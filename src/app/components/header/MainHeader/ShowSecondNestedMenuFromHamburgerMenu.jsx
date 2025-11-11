"use client";
import NextLink from "next/link";
import { ListItemText, MenuItem, MenuList, Paper, Popper } from "@mui/material";

export default function ShowSecondNestedMenuFromHamburgerMenu({ desAncho, part, open }) {
    const parts = {
        part1: [
            { id: 1, title: "مردانه", href: "" },
            { id: 2, title: "زنانه", href: "" },
            { id: 3, title: "کفش و کتانی", href: "" },
            { id: 4, title: "لباس زیر", href: "" },
            { id: 5, title: "اکسسوری", href: "" },
        ],
        part2: [
            { id: 1, title: "تی شرت", href: "" },
            { id: 2, title: "سوئیشرت", href: "" },
            { id: 3, title: "شلوار", href: "" },
            { id: 4, title: "عینک", href: "" },
            { id: 5, title: "ساعت", href: "" },
        ],
        part3: [
            { id: 1, title: "شومیز و پیراهن", href: "" },
            { id: 2, title: "عینک", href: "" },
            { id: 3, title: "کیف و کوله پشتی", href: "" },
            { id: 4, title: "صندل", href: "" },
            { id: 5, title: "اکسسوری", href: "" },
        ],
    };

    if (!part) return null;

    return (
        <Popper
            open={open}
            anchorEl={desAncho}
            placement="left-start"
            sx={{
                zIndex: 1300,

            }}
        >
            <Paper elevation={2} sx={{ width: 300, maxWidth: "100%", transform: "translateX(2px) translateY(-7px)" }}>
                <MenuList sx={{ width: "100%" }}>
                    {parts[part].map((item) => (
                        <MenuItem
                            key={item.id}
                            disableRipple
                            component={NextLink}
                            href={item.href}
                            sx={{
                                width: "100%", "&:hover": {
                                    backgroundColor: "inherit", color: "tomato" , 
                                    transition : "all 0.2s"
                                }
                            }}
                        >
                            <ListItemText
                                primary={item.title}
                                slotProps={{
                                    primary: { sx: { fontSize: "14px" } },
                                }}
                            />
                        </MenuItem>
                    ))}
                </MenuList>
            </Paper>
        </Popper>
    );
}
