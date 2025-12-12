import { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";
import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  TextField,
  Typography,
} from "@mui/material";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          background: "linear-gradient(180deg, #f4f4f4 0%, #fafafa 100%)",
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: 4,
            }}
          >
            {/* ------------------ ستون ۱ ------------------ */}
            <Box>
              <List
                subheader={
                  <ListSubheader
                    sx={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      color: "#222",
                      bgcolor: "transparent",
                      mb: 1,
                    }}
                  >
                    راه‌های ارتباطی
                  </ListSubheader>
                }
                sx={{
                  width: "100%",
                  maxWidth: 300,
                  bgcolor: "transparent",
                  color: "#444",
                }}
              >
                <ListItem>
                  <ListItemText
                    primary="آدرس:"
                    secondary={`تهران - میدان آرژانتین پلاک ${ChangeNumberToPersianForPhone(
                      543
                    )}`}
                    primaryTypographyProps={{
                      fontWeight: 600,
                      color: "#000",
                    }}
                    secondaryTypographyProps={{
                      color: "text.secondary",
                      fontSize: "0.9rem",
                    }}
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary="ایمیل:"
                    secondary="mili@gmail.com"
                    primaryTypographyProps={{
                      fontWeight: 600,
                      color: "#000",
                    }}
                    secondaryTypographyProps={{
                      color: "text.secondary",
                      fontSize: "0.9rem",
                    }}
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary="ساعات کاری:"
                    secondary={`شنبه تا چهارشنبه از ساعت ${ChangeNumberToPersianForPhone(
                      "09:00"
                    )} تا ${ChangeNumberToPersianForPhone("18:00")}`}
                    primaryTypographyProps={{
                      fontWeight: 600,
                      color: "#000",
                    }}
                    secondaryTypographyProps={{
                      color: "text.secondary",
                      fontSize: "0.9rem",
                    }}
                  />
                </ListItem>
              </List>
            </Box>

            {/* ------------------ ستون ۲ ------------------ */}
            <Box>
              <List
                subheader={
                  <ListSubheader
                    sx={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      color: "#222",
                      bgcolor: "transparent",
                      mb: 1,
                    }}
                  >
                    شعبات فروشگاه
                  </ListSubheader>
                }
                sx={{
                  width: "100%",
                  maxWidth: 250,
                  bgcolor: "transparent",
                }}
              >
                {["تهران", "اصفهان", "ساری", "مشهد", "مازندران", "شیراز (به‌زودی)"].map(
                  (city, i) => (
                    <ListItemButton
                      key={i}
                      sx={{
                        color: "#444",
                        borderRadius: 1,
                        transition: "all 0.2s",
                        "&:hover": { color: "tomato", bgcolor: "transparent" },
                      }}
                    >
                      <ListItemText
                        primary={city}
                        primaryTypographyProps={{
                          fontSize: "14px",
                        }}
                      />
                    </ListItemButton>
                  )
                )}
              </List>
            </Box>

            {/* ------------------ ستون ۳ ------------------ */}
            <Box>
              <List
                subheader={
                  <ListSubheader
                    sx={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      color: "#222",
                      bgcolor: "transparent",
                      mb: 1,
                    }}
                  >
                    لینک‌های مرتبط
                  </ListSubheader>
                }
                sx={{
                  width: "100%",
                  maxWidth: 250,
                  bgcolor: "transparent",
                }}
              >
                {[
                  "قوانین و مقررات",
                  "درباره ما",
                  "ارتباط با ما",
                  "قوانین مرجوع کردن اجناس",
                  "آخرین اخبار",
                  "سایت مپ",
                ].map((item, i) => (
                  <ListItemButton
                    key={i}
                    sx={{
                      color: "#444",
                      borderRadius: 1,
                      transition: "all 0.2s",
                      "&:hover": { color: "tomato", bgcolor: "transparent" },
                    }}
                  >
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        fontSize: "14px",
                      }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Box>

            {/* ------------------ ستون ۴ ------------------ */}
            <Box>
              <List
                subheader={
                  <ListSubheader
                    sx={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      color: "#222",
                      bgcolor: "transparent",
                      mb: 1,
                    }}
                  >
                    عضویت در خبرنامه
                  </ListSubheader>
                }
                sx={{
                  width: "100%",
                  maxWidth: 300,
                  bgcolor: "transparent",
                }}
              >
                <ListItem>
                  <ListItemText
                    primary="ما از حریم شخصی شما محافظت می‌کنیم"
                    primaryTypographyProps={{
                      color: "text.secondary",
                      fontSize: "0.85rem",
                    }}
                  />
                </ListItem>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    my: 1,
                  }}
                >
                  <TextField
                    size="small"
                    placeholder="ایمیل خود را وارد کنید"
                    variant="outlined"
                    sx={{
                      width: "100%",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        "& fieldset": { borderColor: "#ccc" },
                        "&:hover fieldset": { borderColor: "tomato" },
                        "&.Mui-focused fieldset": { borderColor: "tomato" },
                      },
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                    mt: 2,
                    "& svg": {
                      cursor: "pointer",
                      color: "#555",
                      transition: "all 0.2s",
                      "&:hover": { color: "tomato", transform: "scale(1.1)" },
                    },
                  }}
                >
                  <XIcon />
                  <InstagramIcon />
                  <LinkedInIcon />
                  <TelegramIcon />
                  <WhatsAppIcon />
                </Box>
              </List>
            </Box>
          </Box>
        </Container>
      </Box>

      <Divider />

      <Box
        sx={{
          width: "100vw",
          backgroundColor: "#F4F4F4",
          py: 3,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "0.9rem",
            color: "text.secondary",
          }}
        >
          تمامی حقوق این وب‌سایت متعلق به <b>میلاد کریمی</b> می‌باشد و هر گونه
          سوءاستفاده پیگرد قانونی دارد.
        </Typography>
      </Box>
    </>
  );
}
