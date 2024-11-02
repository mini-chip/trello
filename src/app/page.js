"use client";
import React from "react";
import Image from "next/image";
import logo from "./logo.png";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Navbar = () => {
  const router = useRouter();
  const LoginClickhandler = () => {
    router.push("/login");
  };
  const SignupClickhandler = () => {
    router.push("/signup");
  };
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="hidden md:flex items-center">
        <Image src={logo} alt="Logo" width={40} height={40} />
        <span className="text-lg font-bold">Trello</span>
      </div>
      <div className="flex items-center w-full justify-between md:justify-end space-x-4">
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
      </div>
    </nav>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <section className="flex items-center justify-center h-[70vh]">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">홍보글이에용</h1>
        </div>
      </section>
    </div>
  );
};

export default Home;
