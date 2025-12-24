"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";



export default function Tags() {
    const tagsList = [
        { id: 1, tagsName: "شلوار", myHref: "/emall/trouser" },
        { id: 2, tagsName: "تی شرت", myHref: "/emall/men" },
        { id: 3, tagsName: "پیراهن", myHref: "/emall/sweater" },
        { id: 4, tagsName: "شومیز", myHref: "/emall/women" },
        { id: 5, tagsName: "آرایشی و بهداشتی", myHref: "/emall/cosmetic" },
        { id: 6, tagsName: "کالکشن جدید", myHref: "/emall" },
        { id: 7, tagsName: "کلاه", myHref: "/emall/hat" },
        { id: 8, tagsName: "دستکش", myHref: "/emall/men" },
        { id: 9, tagsName: "دورس", myHref: "/emall/out_fit_women" },
        { id: 10, tagsName: "ژاکت", myHref: "/emall/women_jacket" },
        { id: 11, tagsName: "کت و. شلوار", myHref: "/emall/men" },
        { id: 12, tagsName: "اوت فیت", myHref: "/emall/out_fit_women" },
        { id: 13, tagsName: "ساعت", myHref: "/emall/accessory" },
        { id: 14, tagsName: "لوازم خانگی", myHref: "/emall/furniture" },

    ]

    const route = useRouter();

    return (
        <>
            <Typography component={"h3"} sx={{ fontSize: "16px", color: "#000", width: "100%", display: "flex", justifyContent: "start", mt: 6, mb: 3 }}>تگ ها</Typography>

            <Box sx={{ width: "100%", flexGrow: 1 }}>
                <Grid container spacing={1}>
                    {
                        tagsList.map((item) => {
                            return (
                                <Grid key={item.id}>
                                    <Button
                                        variant="outlined"
                                        sx={{ transition: "all 0.2s", color: '#000', border: "1px solid #cecece", "&:hover": { color: "tomato", border: "1px solid tomato" } }}
                                        onClick={() => route.push(item.myHref)}
                                    >
                                        {item.tagsName}
                                    </Button>
                                </Grid>
                            )
                        })
                    }

                </Grid>
            </Box>
        </>
    )
}