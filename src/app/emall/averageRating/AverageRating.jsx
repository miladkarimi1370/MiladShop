
import { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";
import { Box, Checkbox, FormControlLabel, FormGroup, Rating, Typography } from "@mui/material";

export default function AverageRating() {
    const averageList = [
        { id: 1, averageRate: 3, countOfProducts: 22 },
        { id: 2, averageRate: 4, countOfProducts: 28 },
        { id: 3, averageRate: 5, countOfProducts: 11 },

    ]
    return (
        <>
            <Typography component={"h3"} sx={{ fontSize: "16px", color: "#000", width: "100%", display: "flex", justifyContent: "start", mt: 6, mb: 3 }}>رده بندی</Typography>

            <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <FormGroup sx={{ width: "90%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {averageList.map((item) => {
                        return (
                            <Box key={item.id} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                                <FormControlLabel
                                    control={
                                        <Checkbox

                                            checked={""}

                                            sx={{ color: "#000", '& .MuiSvgIcon-root': { fontSize: 22 } }}
                                        />
                                    }
                                    label={
                                        <Rating
                                            name="5start"
                                            value={item.averageRate}
                                            readOnly
                                        />
                                    }
                                    sx={{

                                        "& .MuiFormControlLabel-label": { fontSize: "14px" },
                                        "&:hover .MuiFormControlLabel-label": { color: "tomato" },
                                        "&:hover .MuiCheckbox-root": { color: "tomato" }
                                    }}
                                />
                                <Typography variant="subtitle2" >({ChangeNumberToPersianForPhone(item.countOfProducts)})</Typography>
                            </Box>
                        )
                    })}


                </FormGroup>
            </Box>
        </>
    )
}