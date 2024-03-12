const { NextResponse } = require("next/server");
const { Login } = require("../data");

function GET(req){
    return NextResponse.json(Login)
}