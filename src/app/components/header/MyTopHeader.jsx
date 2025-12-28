"use client";
import { Box, Container, Divider, TextField } from "@mui/material";
import ShowLogo from "@/app/components/header/topHeader/ShowLogo";
import ShowCartWithDrawer from "@/app/components/header/topHeader/showCartWithDrawer";
import ShowMenuIcon from "@/app/components/header/topHeader/ShowMenuIcon";
import ShowRewardsOnTheTopHeader from "@/app/components/header/topHeader/ShowRewardsOnTheTopHeader";
import ShowNeedHelp from "@/app/components/header/topHeader/ShowNeedHelp";
import ShowSearchWithDrawer from "@/app/components/header/topHeader/ShowSearchWithDrawer"
import FavoriteGoodsWithDrawer from "./topHeader/FavoriteGoodsWithDrawer";
import ShowLoginOrRegisterIcon from "./topHeader/ShowLoginOrRegisterIcon";

import ShowCallInfo from "./topHeader/ShowCallInfo";

import ShowBigLogo from "./topHeader/ShowBigLogo";
import { useEffect, useState } from "react";
import IfLogInWeb from "./topHeader/IfLogInWeb";
import { supabase } from "@/utils/supabaseKey";




export default function MyTopHeader() {
    const [isLoged, setIsLoged] = useState(false);
    const [infoOfPerson, setInfoOfPerson] = useState("")
    useEffect(() => {
        const person = JSON.parse(localStorage.getItem("person_log"));
        if (!person) {
            setIsLoged(false);
            setInfoOfPerson("")
            return
        }
        setInfoOfPerson(person)
        setIsLoged(true);


        return () => {
            supabase
                .from("milad-shop-customers")
                .update({ user_id: null })
                .eq("email", infoOfPerson.email);
            setInfoOfPerson("");
            infoOfPerson(false);

        }
    }, [])

    return (
        <>
            {/* شروع قسمت تاپ هدر در زمانی که عرض پائین تر از ام دی است  */}
            <Container sx={{

                maxWidth: { sm: "100%" },
                display: { xs: "flex", sm: "flex", md: "none" },
                justifyContent: "start",
                alignItems: "center",
                backgroundColor: "#000000",

            }}>
                <ShowLogo />
                <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", width: "100%", height: "100%" }}>
                    <ShowCartWithDrawer color={"white"} />
                    <ShowSearchWithDrawer />
                    <ShowMenuIcon />

                </Box>
            </Container >
            {/* پایان قسمت تاپ هدر در زمانی که عرض پائین تر از ام دی است  */}
            {/* شروع قسمت تاپ هدر در زمانی که عرض بالاتر از ام دی است */}
            <Container
                sx={{

                    maxWidth: { md: "100%" },
                    display: { xs: "none", sm: "none", md: "flex" },
                    justifyContent: "start",
                    alignItems: "center",
                    backgroundColor: "#000000",
                    height: "40px",


                }}
            >
                <Container
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        Width: {
                            md: "100%",
                            lg: "80%"
                        }
                    }}
                >
                    <ShowRewardsOnTheTopHeader />
                    <ShowNeedHelp />

                </Container>
            </Container>
            {/* شروع قسمت تاپ هدر در زمانی که عرض بالاتر از ام دی است */}
            {/* شروع قسمت هدری که در پائین تاپ هدر است در زمانی که عرض بیشتر از ام دی است همونی که بکگراند مشکی نداره */}
            <Container sx={{

                justifyContent: "center",
                alignItems: "center",
                my: 1,

                width: {
                    md: "100%",
                },
                display: {
                    xs: "none", sm: "none", md: "flex"
                }
            }}>
                <Box component={"div"} sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", width: "100%" }}>
                    <Box
                        component={"div"}
                        sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}
                    >
                        <ShowCartWithDrawer color={"black"} />
                        <FavoriteGoodsWithDrawer color={"black"} />
                        {isLoged ? <IfLogInWeb personData={infoOfPerson} /> : <ShowLoginOrRegisterIcon color={"black"} />}

                    </Box>
                    <Divider orientation="vertical" variant="middle" flexItem sx={{ opacity: "0.6" }} />
                    <Box
                        component={"div"}
                        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                    >
                        <ShowCallInfo />

                    </Box>
                    <TextField
                        id="search-Bar"
                        label="جستجو . . ."

                        size="small"

                    />
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <ShowBigLogo />
                    </Box>
                </Box>
            </Container>
            <Divider sx={{ opacity: "0.6" }} />
            {/* پایان قسمت هدری که در پائین تاپ هدر است در زمانی که عرض بیشتر از ام دی است همونی که بکگراند مشکی نداره */}
        </>
    )
}