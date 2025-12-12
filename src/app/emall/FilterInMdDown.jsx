import { Subject } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function FilterInMdDown() {
    return (
        <>
            <Button sx={{
                border: "1px solid #cecece", color: "grey", fontSize: "14px", "&:hover": {
                    border: "1px solid #000", backgroundColor: "inherit"
                }
            }} variant="outlined" size="large" endIcon={<Subject sx={{ color: "grey" }} />}>
                فیلتر
            </Button>
        </>
    )
}