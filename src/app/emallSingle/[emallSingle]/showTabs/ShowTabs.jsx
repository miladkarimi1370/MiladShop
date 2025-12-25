"use client"
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import Descriptions from "./descriptions/Descriptions";
import { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";
import ShowTable from "./table/ShowTable";
import Reviews from "./reviews/Reviews";

export default function BasicTabs() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ width: '100%', display: "flex", justifyContent: "center", alignItems: "center", borderBottom: "1px solid #cecece", pt: 5 }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="توضیحات" />
                    <Tab label="راهنمای سایز" />
                    <Tab label={`نظرات کاربران (${ChangeNumberToPersianForPhone(5)})`} />
                </Tabs>


            </Box>
            {value === 0 && (<Descriptions />)}
            {value === 1 && (<ShowTable />)}
            {value === 2 && (<Reviews />)}
        </>
    );
}
