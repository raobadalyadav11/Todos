import { NextResponse } from "next/server";

export function GET(request){
    return NextResponse.json({
        message:"user post"
    })
}

export function POST(request){
    return NextResponse.json({
        message:"User postr using post method"
    })
}