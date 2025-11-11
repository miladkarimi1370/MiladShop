import ChangeNumbersToPersina from "@/tools/changeNumbersToPersian";
import { Typography } from "@mui/material";

export default function ShowNameAndPriceProductInNavbar({ price, nameOfProduct }) {

    return (
        <>
            <Typography component={"h6"} sx={{ color: "#000", fontSize: "14px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>{nameOfProduct}</Typography>
            <Typography component={"h6"} sx={{ color: "grey", fontSize: "16px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>{price && ChangeNumbersToPersina(price)}</Typography>
        </>
    )
}