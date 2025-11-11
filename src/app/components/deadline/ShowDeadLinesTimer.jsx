"use client";
import { ChangeNumberToPersianForPhone } from '@/tools/changeNumbersToPersian';
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system';
import Countdown from 'react-countdown';






export default function ShowDeadLinesTimer() {
    const Completionist = () => <span>You are good to go!</span>;

    const deadLine = new Date();

    deadLine.setDate(deadLine.getDate() + 20);

    deadLine.setHours("11", "30", "0", "0");
    const renderer = ({ hours, minutes, seconds, completed, days }) => {
        if (completed) {

            return <Completionist />;
        } else {

            return (
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Typography>{ChangeNumberToPersianForPhone(seconds)}</Typography>
                        <Typography>ثانیه</Typography>
                    </Box>
                    <Typography sx={{ color: "grey" }}> : </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Typography>{ChangeNumberToPersianForPhone(minutes)}</Typography>
                        <Typography>دقیقه </Typography>
                    </Box>
                <Typography sx={{ color: "grey" }}> : </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Typography>{ChangeNumberToPersianForPhone(hours)}</Typography>
                        <Typography>ساعت  </Typography>
                    </Box>
                    <Typography sx={{ color: "grey" }}> : </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Typography>{ChangeNumberToPersianForPhone(days)}</Typography>
                        <Typography>روز  </Typography>
                    </Box>
                </Box>
            )

        }
    };



    return (
        <>
            <Typography variant="subtitle1" sx={{ color: "#000", fontSize: "40px", textAlign: "center" }}>{
                <Countdown
                    date={deadLine.getTime()}
                    renderer={renderer}
                >

                </Countdown>
            }</Typography>
        </>
    )
}