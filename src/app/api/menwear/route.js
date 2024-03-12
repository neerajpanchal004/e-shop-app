import { NextResponse } from "next/server";
import { Menwear } from "../data";

export function GET (request){
    
    return NextResponse.json(Menwear)
}