"use client";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ChangeNumbersToPersina, { ChangeNumberToPersianForPhone } from '@/tools/changeNumbersToPersian';
import { Box, Button, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';


export default function ShowListItemOfProducts({ allProducts, changeallProducts }) {
    const calculateOfPriceForAllProducts = () => allProducts.reduce((accu, val) => accu + (Number(val.price) * Number(val.countOfProduct)), 0);
    const [allPriceOfBuy, setAllPricOfBuy] = React.useState(0)
    const handleDelete = (id) => {
        let products = JSON.parse(localStorage.getItem("myBasket"));
        if (products.length > 0) {
            products = products.filter((item) => {
                return item.idNumberOfProduct !== id
            })
            localStorage.setItem("myBasket", JSON.stringify(products));
            changeallProducts(products);
 
        }
    }

    React.useEffect(() => {
        setAllPricOfBuy(calculateOfPriceForAllProducts())
    }, [handleDelete])
    return (

        <List sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>

            {
                allProducts && allProducts.map((item) => {
                    return (
                        <React.Fragment key={item.idNumberOfProduct}>
                            <ListItem
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item.idNumberOfProduct)} >
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

                                            <Typography component="span" variant="subtitle2" sx={{ color: "green", fontSize: "12px" }}>
                                                {ChangeNumberToPersianForPhone(item.countOfProduct)} عدد
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

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" , bgcolor : "whitesmoke" , my : 2 , py : 2 }}>
                <Box component={"div"} sx={{  width: "100%", my: 2, display: "flex", justifyContent: "center", alignItems: "center", gap: 2 }}>
                    <Typography variant='body1' sx={{ color: "#000", fontSize: "12px" }}>مجموع خرید شما   :</Typography>
                    <Typography variant='body2' sx={{ color: "green", fontSize: "14px", fontWeight: "bolder" }}>{ChangeNumbersToPersina(allPriceOfBuy)}</Typography>
                </Box>
                <Button variant='outlined' href='#' >رفتن به صفحه خرید</Button>
            </Box>



        </List>
    );
}
