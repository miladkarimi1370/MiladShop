"use client";
import { Box, Fade, IconButton } from "@mui/material";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { useRef, useState } from "react";
import FullScreenPicture from "./FullScreenPicture";

export default function ShowPictureInEmallSingle({ srcOfImages }) {



  const [showNavigator, setShowNavigator] = useState(false);
  const [changeSrcOfPicture, setChangeSrcOfPicture] = useState(srcOfImages[0].image_url);
  const myRefIndex = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [positionOfImg, setPositionOfImg] = useState({
    position: "static",
    cursor: null,
    transform: "scale(1)"
  });

  const handleMouseenter = () => {
    setShowNavigator(true);
    setPositionOfImg({
      position: "absolute",
      transform: "scale(1.6) translate(0px, 0px)",
      cursor: "zoom-in"
    });
  };

  const handleMouseLeave = () => {
    setShowNavigator(false);
    setChangeSrcOfPicture(srcOfImages[myRefIndex.current ?? 0].image_url);
    setPositionOfImg({
      position: "static",
      transform: "scale(1) translate(0px,0px)",
      cursor: "pointer"
    });
  };

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const moveX = (rect.width / 2 - x) * 0.15;
    const moveY = (rect.height / 2 - y) * 0.15;
    setPositionOfImg({
      position: "absolute",
      cursor: "zoom-in",
      transform: `scale(1.6) translate(${moveX}px, ${moveY}px)`
    });
  };

  const handleChangePicture = (number) => {
    myRefIndex.current = number;
    setSelectedIndex(number);
    setChangeSrcOfPicture(srcOfImages[number].image_url);
  };

  const handleChangePictureWithArrow = (direction) => {
    let newIndex;
    if (direction === "forward") {
      newIndex = (selectedIndex + 1) % srcOfImages.length;
    } else {
      newIndex = (selectedIndex - 1 + srcOfImages.length) % srcOfImages.length;
    }
    setSelectedIndex(newIndex);
    myRefIndex.current = newIndex;
    setChangeSrcOfPicture(srcOfImages[newIndex].image_url);
  };

  return (
    <Box component="section" sx={{
      width: "100%",
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      gap: 1
    }}>
      {/* عکس اصلی */}
      <Box
        sx={{
          flex: { xs: "1 1 100%", md: "2 1 0" },
          position: "relative",
          overflow: "hidden"
        }}
        onMouseEnter={handleMouseenter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMove}
      >
        <Fade in={true} timeout={200}>
          <Box
            component="img"
            src={changeSrcOfPicture}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: positionOfImg.transform,
              cursor: positionOfImg.cursor,
              transition: "transform 0.35s ease-out"
            }}
          />
        </Fade>

        <FullScreenPicture srcOfImg={srcOfImages[selectedIndex].image_url} />

        {showNavigator && (
          <>
            <IconButton
              sx={{ position: "absolute", top: "50%", left: "5%" }}
              onClick={() => handleChangePictureWithArrow("forward")}
            >
              <ArrowBackIosRoundedIcon />
            </IconButton>
            <IconButton
              sx={{ position: "absolute", top: "50%", right: "5%" }}
              onClick={() => handleChangePictureWithArrow("backward")}
            >
              <ArrowForwardIosRoundedIcon />

            </IconButton>
          </>
        )}
      </Box>

      {/* Thumbnails */}
      <Box sx={{
        flex: { xs: "1 1 100%", md: "1 1 0" },
        display: "flex",
        flexDirection: { xs: "row", md: "column" },
        gap: 1,
        justifyContent: "center",
        alignItems: "center",
        my: { xs: 1, md: 0 }
      }}>
        {srcOfImages && srcOfImages.map((item, index) => (
          <Box
            key={item.id}
            component="img"
            src={item.image_url}
            sx={{
              border: selectedIndex === index ? "1px solid black" : "none",
              width: "23%",
              cursor: "pointer",
              "&:hover": { border: "0.5px solid #000" }
            }}
            onClick={() => handleChangePicture(index)}
          />
        ))}
      </Box>
    </Box>
  );
}
