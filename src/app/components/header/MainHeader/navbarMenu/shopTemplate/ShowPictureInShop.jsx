

"use client"
import Link from "next/link";
import Image from "next/image";
import { Box } from "@mui/material";

export default function ShowPictureInShop({ myHref, mySrc }) {
  return (
    <Link href={myHref} passHref>
      <Box
        sx={{
          width: 225,
          height: 280,
          borderRadius: 2,
          overflow: "hidden", // این Box بیرونی تصویر رو محدود می‌کنه
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            transition: "transform 0.4s ease",
            "&:hover": {
              transform: "scale(1.1)", // بزرگ شدن تصویر داخل قاب
            },
          }}
        >
          <Image
            src={mySrc}
            alt="shop-picture"
            width={225}
            height={280}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </Box>
      </Box>
    </Link>
  );
}
