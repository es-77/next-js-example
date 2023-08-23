"use client"

import { useEffect, useState } from 'react'

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let data = await fetch("https://dummyjson.com/products");
        data = await data.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);

  
  return (
    
    <div>
    {console.log(products)}
     {products?.map((product,index)=>(
      <p key={index}>{product?.title}  {product?.price}</p>
     ))}
    </div>
  )
}
