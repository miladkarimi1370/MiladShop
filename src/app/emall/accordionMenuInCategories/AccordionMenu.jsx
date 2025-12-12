
import { Typography } from "@mui/material";

import TemplateComponentForShowAccordion from "./TemplateComponentForShowAccordion";



export default function AccordionMenu() {
    const inforFromCategory = [
        {
            id: 1, myHref: "", myTitle: "لوازم جانبی", countOfCategory: 23, subTitles: [
                { id: 1, title: "پوتین", myHref: "", countOfCategory: 4 },
                { id: 2, title: "کفش", myHref: "", countOfCategory: 3 },
                { id: 3, title: "عینک آفتابی", myHref: "", countOfCategory: 2 },
            ]
        },
        {
            id: 2, myHref: "", myTitle: "محصولات زیبایی", countOfCategory: 12, subTitles: [
                { id: 1, title: "چشم", myHref: "", countOfCategory: 6 },
                { id: 2, title: "عطر و ادکلن", myHref: "", countOfCategory: 6 },
                { id: 3, title: "مراقبت از مو", myHref: "", countOfCategory: 6 },
                { id: 4, title: "لب و دهان", myHref: "", countOfCategory: 4 },
                { id: 5, title: "مراقبت از ناخن", myHref: "", countOfCategory: 3 },
                { id: 6, title: "مراقبت از پوست", myHref: "", countOfCategory: 6 },


            ]
        },
        {
            id: 3, myHref: "", myTitle: "پوشاک", countOfCategory: 43, subTitles: [
                { id: 1, title: "کیف", myHref: "", countOfCategory: 6 },
                { id: 2, title: "چکمه", myHref: "", countOfCategory: 3 },
                { id: 3, title: "پیراهن", myHref: "", countOfCategory: 30 },
                { id: 4, title: "لباس زیر", myHref: "", countOfCategory: 2 },
                { id: 5, title: "ساعت", myHref: "", countOfCategory: 5 },
            ]
        },
        {
            id: 4, myHref: "", myTitle: "کالای دیجیتال", countOfCategory: 30, subTitles: [
                { id: 1, title: "دوربین فیلمبرداری", myHref: "", countOfCategory: 2 },
                { id: 2, title: "لپ تاپ", myHref: "", countOfCategory: 7 },
                { id: 3, title: "هدفون", myHref: "", countOfCategory: 2 },
                { id: 4, title: "لپ تاپ", myHref: "", countOfCategory: 5 },
                { id: 5, title: "موس", myHref: "", countOfCategory: 3 },
                { id: 6, title: "گوشی تلفن همراه", myHref: "", countOfCategory: 5 },
                { id: 7, title: "ساعت هوشمند", myHref: "", countOfCategory: 2 },
                { id: 8, title: "اسپیکر", myHref: "", countOfCategory: 2 },
                { id: 9, title: "مانیتور و تلویزیون", myHref: "", countOfCategory: 5 },
            ]
        },
        {
            id: 5, myHref: "", myTitle: "وسائل منزل", countOfCategory: 32, subTitles: [
                { id: 1, title: "کمد", myHref: "", countOfCategory: 2 },
                { id: 2, title: "صندلی", myHref: "", countOfCategory: 4 },
                { id: 3, title: "چراغ خواب", myHref: "", countOfCategory: 3 },
                { id: 4, title: "مبل", myHref: "", countOfCategory: 5 },
                { id: 5, title: "میز", myHref: "", countOfCategory: 3 },

            ]
        },
        {
            id: 6, myHref: "", myTitle: "جواهرات", countOfCategory: 10, subTitles: [
                { id: 1, title: "دستبند و النگو", myHref: "", countOfCategory: 6 },
                { id: 2, title: "گوشواره", myHref: "", countOfCategory: 4 },
                { id: 3, title: "گردنبند", myHref: "", countOfCategory: 2 },
                { id: 4, title: "انگشتر", myHref: "", countOfCategory: 5 },


            ]
        },
        {
            id: 7, myHref: "", myTitle: "آقایان", countOfCategory: 31, subTitles: [
                { id: 1, title: "لوازم جانبی", myHref: "", countOfCategory: 15 },
                { id: 2, title: "لباس", myHref: "", countOfCategory: 9 },
                { id: 3, title: "کفش و کتانی", myHref: "", countOfCategory: 2 },
                { id: 4, title: "ژاکت و کاپشن", myHref: "", countOfCategory: 9 },
                { id: 5, title: "شلوار", myHref: "", countOfCategory: 7 },
                { id: 6, title: "ساعت", myHref: "", countOfCategory: 3 },


            ]
        },
        {
            id: 8, myHref: "", myTitle: "ورزشی", countOfCategory: 17, subTitles: [
                { id: 1, title: "بدنسازی", myHref: "", countOfCategory: 9 },
                { id: 2, title: "کلاه", myHref: "", countOfCategory: 10 },
                { id: 3, title: "مردانه", myHref: "", countOfCategory: 11 },
                { id: 4, title: "کتانی ورزشی", myHref: "", countOfCategory: 10 },
                { id: 5, title: "شلوار", myHref: "", countOfCategory: 7 },
                { id: 6, title: "ساعت", myHref: "", countOfCategory: 3 },


            ]
        },
        {
            id: 9, myHref: "", myTitle: "بانوان", countOfCategory: 38, subTitles: [
                { id: 1, title: "لوازم جانبی", myHref: "", countOfCategory: 24 },
                { id: 2, title: "عینک", myHref: "", countOfCategory: 6 },
                { id: 3, title: "کیف دستی", myHref: "", countOfCategory: 3 },
                { id: 4, title: "کیف چرمی", myHref: "", countOfCategory: 7 },
                { id: 5, title: "اوت فیت", myHref: "", countOfCategory: 15 },
                { id: 6, title: "صندل و دمپایی", myHref: "", countOfCategory: 11 },


            ]
        },
    ]


    return (
        <>
            <Typography component={"h3"} sx={{ fontSize: "16px", color: "#000", width: "100%", display: "flex", justifyContent: "start", my: 3 }}>دسته بندی ها</Typography>
            {
                inforFromCategory.map((item) => {
                    return (
                        <TemplateComponentForShowAccordion
                            key={item.id}
                            id={item.id}
                            myHref={item.myHref}
                            countOfCategory={item.countOfCategory}
                            title={item.myTitle}
                            subTitleArray={item.subTitles}
                        />
                    )
                })
            }
        </>
    );
}
