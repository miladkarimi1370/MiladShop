import { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";
import { Box, Typography } from "@mui/material";
import MyPagination from "../ShowPagination";

export default function PaginationComponent({ startItem, endItem, allProducts, allPages }) {
    return (
        <>

            <Box sx={{ width: "100%", height: "10vh", display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                <Typography variant="subtitle2" sx={{ width: "100%", color: "grey", textAlign: "center", my: 2 }}>
                    تعداد  {" "}
                    {ChangeNumberToPersianForPhone(startItem + 1)} {" "}
                    الی {(endItem + 1) < allProducts ? ChangeNumberToPersianForPhone(endItem + 1) : ChangeNumberToPersianForPhone(allProducts)} {" "}
                    محصول از {ChangeNumberToPersianForPhone(allProducts)} {" "}
                    محصول
                </Typography>
                <MyPagination allPages={allPages} />
            </Box>
        </>
    )
}