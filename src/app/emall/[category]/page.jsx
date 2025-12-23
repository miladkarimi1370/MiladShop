import { createClient } from "@supabase/supabase-js";
import ShowProductsAsClientComponent from "./ShowProductsAsClientComponent";



export default async function MyCategory({ params, searchParams }) {
    const { category } = await params;
    const limit = 18;

    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )
    const { data, error } = await supabase
        .from('milad-shop-products')
        .select(`
            id ,
            name , 
            price , 
            count , 
            colors , 
            brand , 
            milad-shop-product-images (
            id , 
            image_url
            )  ,
            milad-shop-category (
            id , slug
            ) 
            `)




    const filteredProducts = data.filter((item) => item["milad-shop-category"].slug === category);

    const allMyPages = Math.ceil(filteredProducts.length / limit);
    return (
        <>
            <ShowProductsAsClientComponent data={filteredProducts} allProducts={filteredProducts.length} allPages={allMyPages} />

        </>
    )
}