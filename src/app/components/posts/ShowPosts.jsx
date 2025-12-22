
import { Box, Container } from "@mui/material";

import ShowPostsHeader from "./ShowPostsHeader";
import PostsSlider from "./PostsSlider";
import { createClient } from "@supabase/supabase-js";
export default async function ShowPosts() {

    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    const { data: myData } = await supabase.from("posts").select("*");


    return (
        <>
            <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", my: 10 }}>
                <ShowPostsHeader />
                <Box sx={{ width: "100%", height: "30vh", display: "flex", justifyContent: "center", alignItems: "center", my: 2 }}>
                    <PostsSlider information={myData} />
                </Box>
            </Container>

        </>
    )
}