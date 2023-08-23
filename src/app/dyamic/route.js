import { user } from "@/db";
import { NextRequest } from "next/server";

export function GET(){
    const data = user;
    return NextRequest.json(data);
}