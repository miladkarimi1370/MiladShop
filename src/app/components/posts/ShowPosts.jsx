import { Box, Container } from "@mui/material";

import ShowPostsHeader from "./ShowPostsHeader";
import PostsSlider from "./PostsSlider";
export default function ShowPosts() {
    return (
        <>
            <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" , my : 10 }}>
                <ShowPostsHeader />
                <Box sx={{ width: "100%", height: "30vh", display: "flex", justifyContent: "center", alignItems: "center" , my : 2 }}>
                    <PostsSlider />
                </Box>
            </Container>

        </>
    )
}