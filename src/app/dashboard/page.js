// app/dashboard/page.js
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseClient } from "../../lib/supabaseClient";
import { Navbar } from "../component/Navbar";

export default function DashboardPage() {
  const supabase = createSupabaseClient();
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session }
      } = await supabase.auth.getSession();
      setSession(session);

      if (!session) {
        router.push("/login");
      }
    };

    checkSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      authListener.subscription?.unsubscribe();
    };
  }, [router]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center">
        {session ? <h1>대쉬보드입니당</h1> : <p>로그인 중...</p>}
      </div>
    </>
  );
}
