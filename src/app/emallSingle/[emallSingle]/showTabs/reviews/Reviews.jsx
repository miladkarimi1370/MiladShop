import { Box } from "@mui/material";
import ShowRateOfProduct from "./showRateOfProduct/ShowRateOfProduct";
import Review from "./review/Review";
import SayReview from "./SayReview/SayReview";

export default function Reviews() {
  return (
    <Box
      sx={{
        width: "100%",
        my: 4,
        display: { xs: "block", md: "flex" },
        gap: { xs: 0, md: 4 },
        flexWrap: "wrap",
      }}
    >
      {/* قسمت اول: امتیاز */}
      <ShowRateOfProduct />

      {/* قسمت دوم: نظرات کاربران */}
      <Review />

      {/* قسمت سوم: ثبت نظر */}
      <SayReview />
    </Box>
  );
}
