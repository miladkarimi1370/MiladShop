import { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";
import { Box, LinearProgress, Rating, Stack, Typography } from "@mui/material";

export default function ShowRateOfProduct() {
    const votes = [0, 0, 0, 0, 0]; // تعداد رای هر ستاره
    const totalVotes = votes.reduce((acc, val) => acc + val, 0);
    const averageRating = totalVotes > 0 ? (votes.reduce((acc, val, index) => acc + val * (5 - index), 0) / totalVotes) : 0;
    return (
        <>
            <Box sx={{ flex: 2, py: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 1, mb: 2 }}>
                    <Typography variant="h6" sx={{ color: "#000", fontSize: "14px" }}>
                        میانگین امتیاز این محصول {ChangeNumberToPersianForPhone(averageRating.toFixed(1))} می‌باشد
                    </Typography>
                    <Typography variant="h6" sx={{ color: "#000", fontSize: "14px" }}>
                        بر اساس نظرات ثبت شده
                    </Typography>
                </Box>

                <Stack spacing={1} sx={{ width: "80%" }}>
                    {votes.map((voteCount, index) => {
                        const starNumber = 5 - index;
                        const progressValue = totalVotes > 0 ? (voteCount / totalVotes) * 100 : 0;

                        return (
                            <Stack
                                key={index}
                                direction="row"
                                alignItems="center"
                                spacing={1}
                                sx={{ justifyContent: "flex-start" }}
                            >
                                {/* ستاره ها */}
                                <Rating
                                    name={`read-only-${starNumber}`}
                                    value={starNumber}
                                    readOnly
                                    size="small"
                                    sx={{ color: "#000", minWidth: 80 }}
                                />

                                {/* Progress */}
                                <LinearProgress
                                    variant="determinate"
                                    value={progressValue}
                                    sx={{ height: 10, borderRadius: 5, bgcolor: "#cecece", width: "60%" }}
                                />

                                {/* نمایش تعداد رای (همه صفر) */}
                                <Typography variant="body2" sx={{ width: 30, textAlign: "right" }}>
                                    {ChangeNumberToPersianForPhone(voteCount)}
                                </Typography>
                            </Stack>
                        );
                    })}
                </Stack>
            </Box>

        </>
    )
}