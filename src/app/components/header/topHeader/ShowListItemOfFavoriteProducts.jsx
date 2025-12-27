"use client";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ChangeNumbersToPersina from '@/tools/changeNumbersToPersian';
import { Box, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';


export default function ShowListItemOfFavoriteProducts({ allProducts, changeallProducts }) {

    console.log(allProducts);

    const handleDelete = (id) => {
        let products = JSON.parse(localStorage.getItem("myF"));
        if (products.length > 0) {
            products = products.filter((item) => {
                return item.id !== id
            })
            localStorage.setItem("myF", JSON.stringify(products));
            changeallProducts(products);

        }
    }

    return (

        <List sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>

            {
                allProducts && allProducts.map((item) => {
                    return (
                        <React.Fragment key={item.id}>
                            <ListItem
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item.id)} >
                                        <Delete sx={{ color: "red" }} />
                                    </IconButton>
                                }
                            >

                                <ListItemText
                                    slotProps={{
                                        primary: { textAlign: "center" },
                                        secondary: { component: "div" }
                                    }}
                                    primary={item.name}
                                    secondary={
                                        <Box
                                            sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}
                                        >
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                sx={{ color: "#000", display: 'inline', py: 1 }}
                                            >
                                                {ChangeNumbersToPersina(item.price)}
                                            </Typography>


                                        </Box>
                                    }
                                />


                                <Divider />
                                <ListItemAvatar>

                                    <Avatar sx={{ width: "70px", height: "70px" }} src={item.image} alt={item.name} />

                                </ListItemAvatar>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </React.Fragment>
                    )
                })
            }





        </List>
    );
}
