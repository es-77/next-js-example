
async function getData(){
    let data = await fetch('https://dummyjson.com/products');
    data = await data.json();
    return data?.products;l
}

export default async function ApiDataCAll() {
    let data = await getData();
    // console.log(data);
  return (
    <>
    {data.map((value,index)=>(
        <>
        <h1 key={index}>{value?.id}</h1>
        </>

    ))}
        <div>ApiDataCAll</div>

{/* 
        <>
            {data.map((value, index) => (
                <React.Fragment key={index}>
                    <h1>{value?.id}</h1>
                    <h1>hello</h1>
                </React.Fragment>
            ))}
            <div>ApiDataCall</div>
        </> */}



    </>

  )
}
