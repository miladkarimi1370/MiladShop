"use client"
import TextField from '@mui/material/TextField';

export default function ShowSearchWithoutDrawer() {
    return (

        <TextField size='medium' id="outlined-basic" label="جستجو . . ." variant="outlined"
            sx={{
                width: "100%",
                "& .MuiOutlinedInput-root": {
                    backgroundColor: "#F5F5F5", // رنگ بکگراند دلخواه
                    "& fieldset": {
                        border: "none", // اگه میخوای border هم حذف بشه
                    },
                    "&:hover fieldset": {
                        border: "none",
                    },
                    "&.Mui-focused fieldset": {
                        border: "none",
                    },
                },
                "& .MuiInputBase-input": {
                    color: "#grey", // رنگ متن داخل input
                },
                "& .MuiInputLabel-root": {
                    color: "#a5a5a5ff", // رنگ label
                },
                "& .MuiInputLabel-root.Mui-focused": {
                    color: "#blue", // رنگ label وقتی فوکوسه
                },
            }}

        />


    )
}