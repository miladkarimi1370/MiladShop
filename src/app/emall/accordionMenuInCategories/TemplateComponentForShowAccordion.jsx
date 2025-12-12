// "use client"
// import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
// import AddIcon from '@mui/icons-material/Add';
// import Link from "next/link";
// import { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";

// export default function TemplateComponentForShowAccordion({ id, myHref, title, countOfCategory, subTitleArray }) {

//     // realize issues from this component like not be plus icon clickable and other problems
//     return (
//         <>
//             <Accordion
//                 sx={{
//                     width: "100%",
//                     backgroundColor: "transparent",
//                     boxShadow: "none",

//                     // جلوگیری از margin اضافه هنگام Expand
//                     margin: "0 !important",
//                     "&.Mui-expanded": {
//                         margin: "0 !important",
//                     },

//                     "&::before": {
//                         display: "none",
//                     }
//                 }}
//             >
//                 <AccordionSummary
//                     sx={{
//                         minHeight: "40px !important",
//                         "&.Mui-expanded": {
//                             minHeight: "40px !important",
//                         },

//                         // حذف کامل فاصله‌ها در Summary
//                         "& .MuiAccordionSummary-content": {
//                             margin: "0 !important",
//                         },
//                         "& .MuiAccordionSummary-content.Mui-expanded": {
//                             margin: "0 !important",
//                         },

//                         "& .MuiAccordionSummary-contentGutters": {
//                             margin: "0 !important",
//                         },
//                         "& .MuiAccordionSummary-contentGutters.Mui-expanded": {
//                             margin: "0 !important",
//                         },
//                     }}
//                     aria-controls={`link-${id}`}
//                     id={`id-${id}`}
//                     expandIcon={
//                         <AddIcon
//                             onClick={(e) => e.stopPropagation()}
//                             style={{
//                                 cursor: "pointer",
//                                 fontSize: "18px"
//                             }}
//                         />
//                     }
//                 >
//                     <Box
//                         sx={{
//                             display: "flex",
//                             alignItems: "center",
//                             gap: "8px",
//                             width: "100%",
//                         }}
//                     >
//                         <Typography
//                             component={Link}
//                             href={myHref}


//                             sx={{
//                                 fontSize: "14px",
//                                 color: "#000",
//                                 textDecoration: "none",
//                                 transition: "all 0.2s",

//                                 "&:hover": {
//                                     color: "tomato",
//                                 },
//                                 "&:hover span": {
//                                     color: "tomato",
//                                 },
//                             }}
//                         >
//                             {title}{" "}
//                             <Typography
//                                 component="span"
//                                 sx={{
//                                     color: "grey",
//                                     fontSize: "14px",
//                                     transition: "all 0.2s",
//                                 }}
//                             >
//                                 ({countOfCategory && ChangeNumberToPersianForPhone(countOfCategory)})
//                             </Typography>
//                         </Typography>
//                     </Box>
//                 </AccordionSummary>

//                 <AccordionDetails
//                     sx={{
//                         width: "55%",
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                     }}
//                 >
//                     <Box
//                         sx={{
//                             display: "flex",
//                             flexDirection: "column",

//                             // فاصله Y بین زیرمنوها
//                             gap: 2,
//                         }}
//                     >
//                         {subTitleArray &&
//                             subTitleArray.map((item) => {
//                                 return (
//                                     <Typography
//                                         component={Link}
//                                         key={item.id}
//                                         href={item.myHref}
//                                         sx={{
//                                             fontSize: "14px",
//                                             color: "grey",
//                                             transition: "all linear 0.3s",
//                                             textDecoration: "none",
//                                             "&:hover": { color: "tomato" },
//                                         }}
//                                     >
//                                         {item.title} ({ChangeNumberToPersianForPhone(item.countOfCategory)})
//                                     </Typography>
//                                 );
//                             })}
//                     </Box>
//                 </AccordionDetails>
//             </Accordion>
//         </>
//     );
// }

"use client";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";

export default function TemplateComponentForShowAccordion({
    id,
    myHref,
    title,
    countOfCategory,
    subTitleArray
}) {
    return (
        <Accordion
            sx={{
                width: "100%",
                backgroundColor: "transparent",
                boxShadow: "none",
                margin: "0 !important",
                "&.Mui-expanded": { margin: "0 !important" },
                "&::before": { display: "none" },
            }}
        >
            <AccordionSummary
                expandIcon={
                    <AddIcon
                        style={{ cursor: "pointer", fontSize: "18px" }}
                    />
                }
                sx={{
                    minHeight: "40px !important",
                    "& .MuiAccordionSummary-content": {
                        margin: "0 !important",
                        display: "flex",
                        flexDirection: "column",   // مهم → زیر هم کردن
                        alignItems: "flex-start",
                    },
                }}
            >
                <Typography
                    component={Link}
                    href={myHref}
                    onClick={(e) => e.stopPropagation()}  // نمی‌ذاره آکاردئون باز شه
                    sx={{
                        fontSize: "14px",
                        color: "#000",
                        textDecoration: "none",
                        transition: "0.2s",

                        "&:hover": { color: "tomato" },
                        "&:hover span": { color: "tomato" },
                    }}
                >
                    {title}{" "}
                    <Typography
                        component="span"
                        sx={{
                            color: "grey",
                            fontSize: "14px",
                            transition: "0.2s",
                        }}
                    >
                        ({ChangeNumberToPersianForPhone(countOfCategory)})
                    </Typography>
                </Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ paddingLeft: 2 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {subTitleArray?.map((item) => (
                        <Typography
                            key={item.id}
                            component={Link}
                            href={item.myHref}
                            sx={{
                                fontSize: "14px",
                                color: "grey",
                                textDecoration: "none",
                                "&:hover": { color: "tomato" },
                            }}
                        >
                            {item.title} ({ChangeNumberToPersianForPhone(item.countOfCategory)})
                        </Typography>
                    ))}
                </Box>
            </AccordionDetails>
        </Accordion>





    );
}
