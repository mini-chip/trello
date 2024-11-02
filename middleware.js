import { NextResponse } from "next/server";
import { supabase } from "./src/lib/supabaseClient";

export async function middleware(req) {
  const {
    data: { session }
  } = await supabase.auth.getSession();
  const { pathname } = req.nextUrl;

  if (
    session &&
    (pathname === "/" || pathname === "/login" || pathname === "/signup")
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (!session && pathname === "/dashboard") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
