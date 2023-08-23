"use client"

export default function EqupimentSingle({params}) {
    console.log(params);
  return (
    <div>EqupimentSingle
    {params?.equpment.map((name,index)=>(
        <p key={index}> {name}</p>
    ))}
    </div>
  )
}
