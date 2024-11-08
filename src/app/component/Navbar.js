"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../logo.png";
import { useRouter } from "next/navigation";
import { createSupabaseClient } from "../../lib/supabaseClient";

export const Navbar = () => {
  const supabase = createSupabaseClient();
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login"); // 메인 페이지로 리디렉션
      } else {
        setUser(user); // 사용자 정보를 상태에 설정
      }
    };

    fetchUser();
  }, [router]);

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session }
      } = await supabase.auth.getSession();
      setSession(session);
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
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    router.push("/login");
  };

  const LoginClickhandler = () => {
    router.push("/login");
  };

  const SignupClickhandler = () => {
    router.push("/signup");
  };
  if (!user) return <p>Loading...</p>;
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="hidden md:flex items-center">
        <Image src={logo} alt="Logo" width={40} height={40} />
        <span className="text-lg font-bold">Trello</span>
      </div>
      <div className="flex items-center w-full justify-between md:justify-end space-x-4">
        {session ? (
          <button
            className="px-4 py-2 bg-gray-600 rounded"
            onClick={handleLogout}
          >
            로그아웃
          </button>
        ) : (
          <>
            <button
              className="px-4 py-2 bg-gray-600 rounded"
              onClick={LoginClickhandler}
            >
              로그인
            </button>
            <button
              className="px-4 py-2 bg-blue-500 rounded"
              onClick={SignupClickhandler}
            >
              회원가입
            </button>
          </>
        )}
      </div>
    </nav>
  );
};
