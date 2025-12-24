"use client";

import { useState, useEffect } from "react";
import { ChangeNumberToPersianForPhone } from '@/tools/changeNumbersToPersian';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Countdown from 'react-countdown';

export default function ShowDeadLinesTimer() {
    const [deadLine, setDeadLine] = useState(null);

    useEffect(() => {
        // فقط در کلاینت اجرا شود
        const target = new Date();
        target.setDate(target.getDate() + 20);
        target.setHours(11, 30, 0, 0);
        setDeadLine(target);
    }, []);

    const Completionist = () => <span>پایان یافت</span>;

    const renderer = ({ hours, minutes, seconds, completed, days }) => {
        if (completed) return <Completionist />;

        return (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2 }}>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Typography>{ChangeNumberToPersianForPhone(seconds)}</Typography>
                    <Typography>ثانیه</Typography>
                </Box>

                <Typography sx={{ color: "grey" }}> : </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Typography>{ChangeNumberToPersianForPhone(minutes)}</Typography>
                    <Typography>دقیقه</Typography>
                </Box>

                <Typography sx={{ color: "grey" }}> : </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Typography>{ChangeNumberToPersianForPhone(hours)}</Typography>
                    <Typography>ساعت</Typography>
                </Box>

                <Typography sx={{ color: "grey" }}> : </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Typography>{ChangeNumberToPersianForPhone(days)}</Typography>
                    <Typography>روز</Typography>
                </Box>
            </Box>
        );
    };

    if (!deadLine) return null; // تا زمانی که تاریخ آماده نشده چیزی رندر نشه

    return (
        <Countdown
            date={deadLine.getTime()}
            renderer={renderer}
        />
    );
}
