import { Box, Container, Divider } from "@mui/material";
import Image from "next/image";

export default function ShowBrands() {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "20vh",
      
          flexWrap: "nowrap", // ❌ wrap حذف شد
          gap: 2,
          overflowX: "auto", // ✅ در صورت کمبود فضا، اسکرول افقی بده
        }}
      >
        {["1.jpg", "2.jpg", "3.jpg", "4.jpg"].map((img, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              width: { xs: "100px", sm: "130px", md: "150px" }, // عرض ثابت‌تر
              aspectRatio: "1 / 1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.08)",
              },
            }}
          >
            <Image
              src={`/images/brands/${img}`}
              alt={`brand-${index + 1}`}
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
        ))}
      </Container>
      <Divider />
    </>
  );
}
