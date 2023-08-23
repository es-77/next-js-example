import { NextResponse } from "next/server"

export async function GET(request){
// console.log(request);

    // return new Response('hello world')
    return NextResponse.json({
        name:"emmanuel",
        father: "saleem",
        study:"bs/cs"
    },{status:310})

}

export async function POST(request ,Response){
    let data = await request.json();
    console.log(data);
    return NextResponse.json({name:"emmanuel",age:23});
    
}
