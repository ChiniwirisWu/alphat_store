import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const jwt = request.cookies.get("authToken");

  if (!jwt) return NextResponse.redirect(new URL("/login", request.url));

  try {
    const payload = await jwtVerify(
      jwt.value,
      new TextEncoder().encode("secret")
    );

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
};

export const config = {
  matcher: ["/catalog/:path*"],
};
