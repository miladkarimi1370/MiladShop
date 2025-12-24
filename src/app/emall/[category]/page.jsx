
import ShowProductsAsClientComponent from "./ShowProductsAsClientComponent";



export default async function MyCategory({ params, searchParams }) {
    const { category } = await params;


    return (
        <>
            <ShowProductsAsClientComponent category={category} />

        </>
    )
}