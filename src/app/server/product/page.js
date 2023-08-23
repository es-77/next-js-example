import Button from "@/app/common/Button";

export default async function Products() {
    let products = await getProduct();
  return (
    <div>
        {products?.map((product, index)=>(
            <>
            <p key={index}>{product?.id} {product?.title}</p>
            <Button price={product?.price}/>
            </>
        ))}
    </div>
  )
}


async function getProduct(){
    let data = await fetch("https://dummyjson.com/products");
    let jsonData = await data.json();
    return jsonData?.products;
}
