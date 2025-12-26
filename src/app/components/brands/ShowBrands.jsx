
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
         
          minHeight: 140,          // ⭐ ثابت، نه VH
          flexWrap: "nowrap",
          gap: 2,
          overflowX: "auto",
        }}
      >
        {["1.jpg", "2.jpg", "3.jpg", "4.jpg"].map((img, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              width: 120,
              height: 120,        // ⭐ به‌جای aspect-ratio
            }}
          >
            <Image
              src={`/images/brands/${img}`}
              alt={`brand-${index}`}
              fill
              style={{ objectFit: "contain" }}
              priority               // ⭐ چون بالای صفحه است
            />
          </Box>
        ))}
      </Container>

      <Divider />
    </>
  );
}
