import { NextResponse } from "next/server"
import { LoginDetails } from "../data"

export function GET(req){
    return NextResponse.json(LoginDetails)
}