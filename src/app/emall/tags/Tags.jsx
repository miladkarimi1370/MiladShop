import { Box, Button, Grid, Typography } from "@mui/material";



export default function Tags() {
    const tagsList = [
        { id: 1, tagsName: "شلوار" },
        { id: 2, tagsName: "تی شرت" },
        { id: 3, tagsName: "پیراهن", },
        { id: 4, tagsName: "شومیز", },
        { id: 5, tagsName: "آرایشی و بهداشتی" },
        { id: 6, tagsName: "کالکشن جدید" },
        { id: 7, tagsName: "کلاه" },
        { id: 8, tagsName: "دستکش", },
        { id: 9, tagsName: "دورس", },
        { id: 10, tagsName: "ژاکت" },
        { id: 11, tagsName: "کت و. شلوار" },
        { id: 12, tagsName: "اوت فیت" },
        { id: 13, tagsName: "ساعت" },
        { id: 14, tagsName: "لباس زیر", },

    ]
    return (
        <>
            <Typography component={"h3"} sx={{ fontSize: "16px", color: "#000", width: "100%", display: "flex", justifyContent: "start", mt: 6, mb: 3 }}>تگ ها</Typography>

            <Box sx={{ width: "100%", flexGrow: 1 }}>
                <Grid container spacing={1}>
                    {
                        tagsList.map((item) => {
                            return (
                                <Grid key={item.id}>
                                    <Button variant="outlined" sx={{ transition: "all 0.2s", color: '#000', border: "1px solid #cecece", "&:hover": { color: "tomato", border: "1px solid tomato" } }}>{item.tagsName}</Button>
                                </Grid>
                            )
                        })
                    }

                </Grid>
            </Box>
        </>
    )
}