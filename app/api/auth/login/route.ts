import { NextResponse } from "next/server";
import { sign } from "jsonwebtoken";


export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (email == "user@gmail.com" && password == "123") {

    const token = sign({
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
      email,
    }, "secret");

    const response = NextResponse.json({ token });

    response.cookies.set({
      name: "authToken",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV == "production",
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24 * 30,
      path: "/"
    });

    return response;

  } else {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }
};
