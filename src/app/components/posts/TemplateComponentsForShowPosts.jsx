import { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";
import Image from "next/image";
import Link from "next/link";
import { Box, Card, Typography } from "@mui/material";

export default function TemplateComponentsForShowPosts({ mySrc, href, title, description, date }) {
  return (
    <Link
      href={href || "#"}
      passHref
      style={{ textDecoration: "none", color: "inherit", width: "100%" }}
    >
      <Card
        sx={{
          maxWidth: 350,
          margin: "auto",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: "none",   // ← shadow حذف شد
          border: "none",      // ← border حذف شد
          transition: "transform 0.3s ease-in-out",
          "&:hover": { transform: "scale(1.02)" },
        }}
      >
        {/* تصویر */}
        <Box sx={{ position: "relative", width: "100%", height: { xs: 180, sm: 200, md: 220 } }}>
          <Image src={mySrc} alt={title} fill style={{ objectFit: "cover" }} priority />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0)",
              transition: "background-color 0.3s ease-in-out",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.2)" },
            }}
          />
        </Box>

        {/* متن‌ها */}
        <Box sx={{ backgroundColor: "#fff", p: 2, textAlign: "center" }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              fontSize: "1rem",
              color: "#000",
              mb: 0.5,
              transition: "color 0.3s ease-in-out",
              "&:hover": { color: "tomato" },
            }}
          >
            {title}
          </Typography>

          <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "0.8rem", mb: 0.5 }}>
            {ChangeNumberToPersianForPhone(String(date || ""))}
          </Typography>

          <Typography variant="body2" sx={{ color: "#555", fontSize: "0.85rem", lineHeight: 1.5 }}>
            {description}
          </Typography>
        </Box>
      </Card>
    </Link>
  );
}
