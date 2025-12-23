"use client";

import {
  Box,
  Button,
  Divider,
  Fade,
  Popper,
  styled,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import { useRef, useState } from "react";
import ShowSubMenuFromHamburgerMenuIcon from "./ShowSubMenuFromHamburgerMenuIcon";

export default function ShowHamburgerMenuIconWithTitle() {
  const anchorRef = useRef(null);

  // وضعیت hover روی Box (آیکون + عنوان) و Popper (منوی بازشو)
  const [hovered, setHovered] = useState({
    box: false,
    popper: false,
  });

  // منو باز است اگر ماوس روی Box یا Popper باشد
  const isOpen = hovered.box || hovered.popper;

  const NoHoverButton = styled(Button)(({ theme }) => ({
    "&:hover": {
      backgroundColor: "inherit",
    },
    color: "black",
  }));

  return (
    <>
      <Divider orientation="vertical" />
      
      {/* Box اصلی که آیکون همبرگر و عنوان داخلش هست */}
      <Box
        ref={anchorRef}
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          cursor: "pointer",
        }}
        onMouseEnter={() => setHovered((prev) => ({ ...prev, box: true }))}
        onMouseLeave={() => setHovered((prev) => ({ ...prev, box: false }))}
      >
        <MenuRoundedIcon
          sx={{
            boxSizing: "content-box",
            p: { xs: 1 },
          }}
        />

        <NoHoverButton
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "block",
            },
          }}
        >
          منوی ناوبری
        </NoHoverButton>

        {/* آیکون فلش که با چرخش نرم تغییر می‌کنه */}
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "block",
            },
          }}
        >
          {isOpen ? (
            <ExpandLessRoundedIcon
              sx={{ transition: "transform 0.25s ease" }}
            />
          ) : (
            <ExpandMoreRoundedIcon
              sx={{
                transition: "transform 0.25s ease",
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          )}
        </Box>

        {/* Popper با Fade و مدیریت hover */}
        <Popper
          open={isOpen}
          anchorEl={anchorRef.current}
          placement="bottom-start"
          transition
          modifiers={[
            { name: "offset", options: { offset: [0, 6] } },
            {
              name: "zIndex",
              enabled: true,
              phase: "write",
              fn: ({ state }) => {
                state.styles.popper.zIndex = 2000;
              },
            },
          ]}
          onMouseEnter={() => setHovered((prev) => ({ ...prev, popper: true }))}
          onMouseLeave={() => setHovered((prev) => ({ ...prev, popper: false }))}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={200}>
              <div>
                <ShowSubMenuFromHamburgerMenuIcon />
              </div>
            </Fade>
          )}
        </Popper>
      </Box>

      <Divider orientation="vertical" flexItem />
    </>
  );
}