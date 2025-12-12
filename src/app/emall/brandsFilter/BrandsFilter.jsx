import { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";
import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";

export default function BrandsFilter() {
    const brandsList = [
        { id: 1, name: "Fendi", countOfProducts: 7 },
        { id: 2, name: "Addias", countOfProducts: 5 },
        { id: 3, name: "Celin", countOfProducts: 4 },
        { id: 4, name: "M&L", countOfProducts: 11 },
        { id: 5, name: "Fila", countOfProducts: 3 },
        { id: 6, name: "GAP", countOfProducts: 5 },
        { id: 7, name: "H&M", countOfProducts: 22 },
        { id: 8, name: "Kappa", countOfProducts: 12 },
        { id: 9, name: "Levis", countOfProducts: 14 },
        { id: 10, name: "Lacoste", countOfProducts: 5 },
        { id: 11, name: "Carlos", countOfProducts: 24 },
        { id: 12, name: "Valentino", countOfProducts: 18 },
        { id: 13, name: "Unique", countOfProducts: 3 },
        { id: 14, name: "Zara", countOfProducts: 15 },
        { id: 15, name: "Masimo Dutti", countOfProducts: 11 },
        { id: 16, name: "Milad", countOfProducts: 32 },
    ]
    return (
        <>
            <Typography component={"h3"} sx={{ fontSize: "16px", color: "#000", width: "100%", display: "flex", justifyContent: "start", mt: 6, mb: 3 }}>

                برند
            </Typography>
            <Box sx={{ width: "100%",  display: "flex", justifyContent: "center" }}>
                <FormGroup sx={{ width: "90%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {brandsList.map((item) => {
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
                                        <span>
                                            {item.name}
                                        </span>
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