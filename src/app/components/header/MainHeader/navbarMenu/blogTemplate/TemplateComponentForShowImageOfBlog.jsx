import Link from "next/link";
import { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
export default function TemplateComponentForShowImageOfBlog({ myHref, srcOfIImg, dayAndMonth, year, title }) {
    return (
        <>
            <Card component={Link} href={myHref} sx={{
                maxWidth: 345, display: "flex", justifyContent: "center", alignItems: "center", textDecoration: "none",

                background: "none",
                boxShadow: "none",
                border: "none"
            }}>
                <CardMedia
                    sx={{
                        height: 150,
                        width: 150,
                        backgroundImage: `url(${srcOfIImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "0.3s",
                        "&:hover": {
                            transform: "scale(1.2)",
                            backgroundImage: `linear-gradient(176deg, rgba(255,255,255,0.3) 0%, rgba(206,206,206,0.4) 50%, rgba(0,0,0,0.6) 100%), url(${srcOfIImg})`
                        }

                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="subtitle2" component="div" sx={{ color: "#cecece" }}>
                        {dayAndMonth} {ChangeNumberToPersianForPhone(year)}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: "14px" }}>
                        {title}
                    </Typography>
                </CardContent>

            </Card>

        </>
    )
}