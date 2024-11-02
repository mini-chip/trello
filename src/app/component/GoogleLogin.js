"use client";

import { supabase } from "../../lib/supabaseClient";
export default function GoogleLogin() {
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent"
        },
        redirectTo: "/dashboard"
      }
    });

    if (error) {
      console.error("Google 로그인 오류:", error.message);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>구글로 로그인</button>
    </div>
  );
}
