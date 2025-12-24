"use client";
import { usePriceFilter } from "@/store/usePriceFilter";
import ChangeNumbersToPersina from "@/tools/changeNumbersToPersian";
import { Radio, RadioGroup, FormControlLabel, Typography } from "@mui/material";

export default function PriceFilter() {
    const { currentPriceFilter, setCurrentPriceFilter } = usePriceFilter();

    return (
        <>
            <Typography
                component={"h3"}
                sx={{
                    fontSize: "16px",
                    color: "#000",
                    width: "100%",
                    display: "flex",
                    justifyContent: "start",
                    mt: 6,
                    mb: 3,
                }}
            >
                قیمت
            </Typography>

            <RadioGroup
                value={currentPriceFilter}
                onChange={(e) => setCurrentPriceFilter(e.target.value)}
                sx={{ width: "80%" }}
            >
                <FormControlLabel
                    value="all"
                    control={<Radio sx={{ color: "#000", '& .MuiSvgIcon-root': { fontSize: 22 } }} />}
                    label="همه"
                    sx={{
                        "& .MuiFormControlLabel-label": { fontSize: "14px" },
                        "&:hover .MuiFormControlLabel-label": { color: "tomato" },
                        "&:hover .MuiRadio-root": { color: "tomato" },
                    }}
                />
                <FormControlLabel
                    value="less200"
                    control={<Radio sx={{ color: "#000", '& .MuiSvgIcon-root': { fontSize: 22 } }} />}
                    label={
                        <span>
                            کمتر از <span>{ChangeNumbersToPersina(200)}</span>
                        </span>
                    }
                    sx={{
                        "& .MuiFormControlLabel-label": { fontSize: "14px" },
                        "&:hover .MuiFormControlLabel-label": { color: "tomato" },
                        "&:hover .MuiRadio-root": { color: "tomato" },
                    }}
                />
                <FormControlLabel
                    value="200to399"
                    control={<Radio sx={{ color: "#000", '& .MuiSvgIcon-root': { fontSize: 22 } }} />}
                    label={
                        <span>
                            بین <span>{ChangeNumbersToPersina(200)} تا {ChangeNumbersToPersina(399)}</span>
                        </span>
                    }
                    sx={{
                        "& .MuiFormControlLabel-label": { fontSize: "14px" },
                        "&:hover .MuiFormControlLabel-label": { color: "tomato" },
                        "&:hover .MuiRadio-root": { color: "tomato" },
                    }}
                />
                <FormControlLabel
                    value="400to599"
                    control={<Radio sx={{ color: "#000", '& .MuiSvgIcon-root': { fontSize: 22 } }} />}
                    label={
                        <span>
                            بین <span>{ChangeNumbersToPersina(400)} تا {ChangeNumbersToPersina(599)}</span>
                        </span>
                    }
                    sx={{
                        "& .MuiFormControlLabel-label": { fontSize: "14px" },
                        "&:hover .MuiFormControlLabel-label": { color: "tomato" },
                        "&:hover .MuiRadio-root": { color: "tomato" },
                    }}
                />
                <FormControlLabel
                    value="600to899"
                    control={<Radio sx={{ color: "#000", '& .MuiSvgIcon-root': { fontSize: 22 } }} />}
                    label={
                        <span>
                            بین <span>{ChangeNumbersToPersina(600)} تا {ChangeNumbersToPersina(899)}</span>
                        </span>
                    }
                    sx={{
                        "& .MuiFormControlLabel-label": { fontSize: "14px" },
                        "&:hover .MuiFormControlLabel-label": { color: "tomato" },
                        "&:hover .MuiRadio-root": { color: "tomato" },
                    }}
                />
                <FormControlLabel
                    value="more900"
                    control={<Radio sx={{ color: "#000", '& .MuiSvgIcon-root': { fontSize: 22 } }} />}
                    label={
                        <span>
                            بیش تر از <span>{ChangeNumbersToPersina(900)}</span>
                        </span>
                    }
                    sx={{
                        "& .MuiFormControlLabel-label": { fontSize: "14px" },
                        "&:hover .MuiFormControlLabel-label": { color: "tomato" },
                        "&:hover .MuiRadio-root": { color: "tomato" },
                    }}
                />
            </RadioGroup>
        </>
    );
}
