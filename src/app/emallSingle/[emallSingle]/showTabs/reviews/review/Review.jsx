import { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";
import { PhotoCamera, WorkspacePremium } from "@mui/icons-material";
import { Avatar, Box, Button, Divider, Rating, Stack, Typography } from "@mui/material";

export default function Review() {
    const reviews = [
        {
            name: "نازنین حمیدی",
            avatar: "/images/avatar/1.png",
            rating: 3,
            date: [12, 8, 1404],
            title: "خیلی عالی",
            text: "جنسش خیلی عالیه من الان دو ماه که دارم ازش استفاده میکنم و خیلی راضی هستم ممنون از سایت خوب میلاد شاپ امیدوارم که موفق باشید و دیگر دوستان توصیه میکنم حتما از محصولات این فروشگاه دیدن کنید و خرید کنید"
        },
        {
            name: "رامین محمدی",
            avatar: "/images/avatar/3.png",
            rating: 3,
            date: [15, 8, 1404],
            title: "خیلی عالی",
            text: "جنسش خیلی عالیه من الان دو ماه که دارم ازش استفاده میکنم و خیلی راضی هستم ممنون از سایت خوب میلاد شاپ امیدوارم که موفق باشید و دیگر دوستان توصیه میکنم حتما از محصولات این فروشگاه دیدن کنید و خرید کنید"
        }
    ];

    return (
        <Box sx={{ flex: 3, py: 3 }}>
            {/* دکمه‌ها */}
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, py: 2, flexWrap: "wrap" }}>
                <Button variant="outlined" sx={{ color: "grey", transition: "all 0.3s", border: "1px solid grey" }} endIcon={<PhotoCamera sx={{ color: "grey" }} />}>
                    عکس های کابران ({ChangeNumberToPersianForPhone(2)})
                </Button>
                <Button variant="outlined" sx={{ color: "grey", transition: "all 0.3s", border: "1px solid grey" }} endIcon={<WorkspacePremium sx={{ color: "grey" }} />}>
                    تائید شده({ChangeNumberToPersianForPhone(1)})
                </Button>
            </Box>

            <Divider variant="fullWidth" />

            <Stack spacing={3} sx={{ py: 3 }}>
                {reviews.map((review, i) => (
                    <Box key={i} sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                                alignItems: "flex-start",
                                flexDirection: { xs: "column", md: "row" } // responsive بدون useMediaQuery
                            }}
                        >
                            <Avatar alt={review.name} src={review.avatar} sx={{ width: 100, height: 100, bgcolor: "tomato" }} />
                            <Box>
                                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start", pb: 2 }}>
                                    <Rating value={review.rating} sx={{ color: "#000", py: 1 }} size="small" readOnly />
                                    <Typography variant="caption" sx={{ color: "#000", fontSize: "12px" }}>
                                        {review.name} - {ChangeNumberToPersianForPhone(review.date[0])} آبان ماه {ChangeNumberToPersianForPhone(review.date[2])}
                                    </Typography>
                                </Box>
                                <Typography variant="subtitle2" sx={{ color: "#000", fontSize: "14px", fontWeight: "bold" }}>{review.title}</Typography>
                                <Typography variant="body1" sx={{ color: "grey", fontSize: "12px", textAlign: "justify" }}>{review.text}</Typography>
                            </Box>
                        </Box>

                        {/* Divider بعد از هر نظر */}
                        {i < reviews.length - 1 && <Divider sx={{ mt: 2 }} />}
                    </Box>
                ))}
            </Stack>
        </Box>
    );
}
