"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();
  const signUpUser = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name
        }
      }
    });

    if (error) {
      alert(error.message);
    } else {
      alert("회원가입 성공! 로그인 페이지로 이동합니다.");
      router.push("/login");
    }
  };

  return (
    <div className="flex min-h-screen  items-center justify-center">
      <form className="w-96 flex flex-col space-y-4">
        <input
          type="text"
          value={email}
          placeholder="Email을 입력하세요"
          className="p-2 border rounded"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          value={password}
          placeholder="Password를 입력하세요"
          className="p-2 border rounded"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          vlaue={name}
          placeholder="이름을 정하세요"
          className="p-2 border rounded"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded"
          onClick={signUpUser}
        >
          Signup
        </button>
      </form>
    </div>
  );
}
