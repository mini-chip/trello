// app/dashboard/page.js
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";
import { Navbar } from "../component/Navbar";

export default function DashboardPage() {
  const [session, setSession] = useState(null);
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center">
        {session ? <h1>대시보드</h1> : <p>로그인 중...</p>}
      </div>
    </>
  );
}
