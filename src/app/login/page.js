// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { supabase } from "../../lib/supabaseClient";
// import GoogleLogin from "../component/GoogleLogin";

// export default function Login() {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const router = useRouter();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password
//     });
//     console.log(data);
//     if (error) {
//       alert(error.message);
//     } else {
//       alert("로그인 성공! Dashboard로 이동합니다.");
//       router.push("/dashboard");
//     }
//   };

//   return (
//     <div className="flex min-h-screen  items-center justify-center">
//       <form className="w-96 flex flex-col space-y-4">
//         <input
//           type="text"
//           placeholder="Email을 입력하세요"
//           className="p-2 border rounded"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password를 입력하세요"
//           className="p-2 border rounded"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="p-2 bg-blue-500 text-white rounded"
//           onClick={handleSubmit}
//         >
//           Login
//         </button>
//         <GoogleLogin />

//         <button
//           type="submit"
//           className="p-2 bg-gray-600 text-white rounded"
//           onClick={(e) => router.push("/signup")}
//         >
//           Signup
//         </button>
//       </form>
//     </div>
//   );
// }
"use client";

import { createSupabaseClient } from "../../lib/supabaseClient";
export default function GoogleLogin() {
  const supabase = createSupabaseClient();
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent"
        },
        redirectTo: "http://localhost:3000/dashboard"
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
