import { user } from "@/db";
import { NextResponse } from "next/server";

// when using postman get request body must empty 
// post reqest must have body data
// put requet must have body and id in url
export function GET(req,content){
    const id = content?.params?.id;
    const data = user;
    const userData = data?.filter((item)=> item?.id == id);
    return NextResponse.json(userData);
}

export async function PUT(request, content){
    let payLoad = await request.json();
    let id = content?.params?.id;
    console.log(id,payLoad);
    return NextResponse.json("hello");
}

export function DELETE(request,content){
    let id = content.params.id;
    const data = user;
    const userData = data?.filter((item)=> item?.id !== id);
    return NextResponse.json(userData);
    return NextResponse.json("hello");
}