import { NextResponse } from "next/server";

export function GET(request) {
  const users = [
    {
      name: "badal",
      phone: "77798",
      course: "java",
    },
    {
      name: "prince",
      phone: "545494",
      course: "c++",
    },
    {
      name: "ankit",
      phone: "77798",
      course: "css",
    },
    {
      name: "manish",
      phone: "464",
      course: "java",
    },
  ];
return NextResponse.json(users);
}

export function POST() {}

export  function DELETE(request) {
  console.log("delete api is called");
  return NextResponse.json({message:"deleted",
staus:true},
{status:201,statusText:"hey changed text"})
}

export function PUT() {}
