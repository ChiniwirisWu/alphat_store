import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("authToken");

  if (!token) {
    return NextResponse.json(
      { message: "Not loged in" },
      { status: 401 }
    );
  }

  try {
    cookiesStore.delete("authToken");
    return NextResponse.json(
      {},
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(error.message, { status: 500 });
    }
  }
};
