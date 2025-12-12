"use client";
import ChangeNumbersToPersina from "@/tools/changeNumbersToPersian";
import { Checkbox } from "@mui/material"; // ← درست شد
import { FormControlLabel, FormGroup, Typography } from "@mui/material";
import { useState } from "react";

export default function PriceFilter() {
    const [state, setState] = useState({
        all: false,
        lessTwoHundred: false,
        between201Until399: false,
        between400Until599: false,
        between600Until899: false,
        more900: false
    });

    return (
        <>
            <Typography component={"h3"} sx={{ fontSize: "16px", color: "#000", width: "100%", display: "flex", justifyContent: "start", mt: 6, mb: 3 }}>
                قیمت
            </Typography>
            <FormGroup sx={{ width: "80%" }} >
                <FormControlLabel
                    control={
                        <Checkbox

                            checked={state.all}
                            onChange={(e) => setState(prev => ({ ...prev, all: e.target.checked }))}
                            sx={{ color: "#000", '& .MuiSvgIcon-root': { fontSize: 22 } }}
                        />
                    }
                    label={
                        <span>
                            همه
                        </span>
                    }
                    sx={{

                        "& .MuiFormControlLabel-label": { fontSize: "14px" },
                        "&:hover .MuiFormControlLabel-label": { color: "tomato" },
                        "&:hover .MuiCheckbox-root": { color: "tomato" }
                    }}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.lessTwoHundred}
                            onChange={(e) => setState(prev => ({ ...prev, lessTwoHundred: e.target.checked }))}
                            sx={{ color: "#000", '& .MuiSvgIcon-root': { fontSize: 22 } }}
                        />
                    }
                    label={
                        <span>
                            کمتر از <span>{ChangeNumbersToPersina(200)}</span>
                        </span>
                    }
                    sx={{

                        "& .MuiFormControlLabel-label": { fontSize: "14px" },
                        "&:hover .MuiFormControlLabel-label": { color: "tomato" },
                        "&:hover .MuiCheckbox-root": { color: "tomato" }
                    }}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.between201Until399}
                            onChange={(e) => setState(prev => ({ ...prev, between201Until399: e.target.checked }))}
                            sx={{ color: "#000", '& .MuiSvgIcon-root': { fontSize: 22 } }}
                        />
                    }
                    label={
                        <span>
                            بین <span>{ChangeNumbersToPersina(200)} تا {ChangeNumbersToPersina(399)}</span>
                        </span>
                    }
                    sx={{

                        "& .MuiFormControlLabel-label": { fontSize: "14px" },
                        "&:hover .MuiFormControlLabel-label": { color: "tomato" },
                        "&:hover .MuiCheckbox-root": { color: "tomato" }
                    }}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.between400Until599}
                            onChange={(e) => setState(prev => ({ ...prev, between400Until599: e.target.checked }))}
                            sx={{ color: "#000", '& .MuiSvgIcon-root': { fontSize: 22 } }}
                        />
                    }
                    label={
                        <span>
                            بین <span>{ChangeNumbersToPersina(400)} تا {ChangeNumbersToPersina(599)}</span>
                        </span>
                    }
                    sx={{

                        "& .MuiFormControlLabel-label": { fontSize: "14px" },
                        "&:hover .MuiFormControlLabel-label": { color: "tomato" },
                        "&:hover .MuiCheckbox-root": { color: "tomato" }
                    }}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.between600Until899}
                            onChange={(e) => setState(prev => ({ ...prev, between600Until899: e.target.checked }))}
                            sx={{ color: "#000", '& .MuiSvgIcon-root': { fontSize: 22 } }}
                        />
                    }
                    label={
                        <span>
                            بین <span>{ChangeNumbersToPersina(600)} تا {ChangeNumbersToPersina(899)}</span>
                        </span>
                    }
                    sx={{

                        "& .MuiFormControlLabel-label": { fontSize: "14px" },
                        "&:hover .MuiFormControlLabel-label": { color: "tomato" },
                        "&:hover .MuiCheckbox-root": { color: "tomato" }
                    }}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.more900}
                            onChange={(e) => setState(prev => ({ ...prev, more900: e.target.checked }))}
                            sx={{ color: "#000", '& .MuiSvgIcon-root': { fontSize: 22 } }}
                        />
                    }
                    label={
                        <span>
                            بیش تر از <span>{ChangeNumbersToPersina(900)}</span>
                        </span>
                    }
                    sx={{

                        "& .MuiFormControlLabel-label": { fontSize: "14px" },
                        "&:hover .MuiFormControlLabel-label": { color: "tomato" },
                        "&:hover .MuiCheckbox-root": { color: "tomato" }
                    }}
                />
            </FormGroup>
        </>
    );
}
