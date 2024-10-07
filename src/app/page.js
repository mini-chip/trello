import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      {/* 768px 이상에서 로고와 서비스 이름이 표시 */}
      <div className="hidden md:flex items-center">
        <Image src="/logo.png" alt="Logo" width={10} height={10} />
        <span className="text-lg font-bold">브랜드</span>
      </div>
      {/* 768px 이상에서 회원가입, 로그인 버튼 표시 */}
      <div className="hidden md:flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 rounded">회원가입</button>

        <button className="px-4 py-2 bg-gray-600 rounded">로그인</button>
      </div>
      {/* 768px 미만에서 로그인, 회원가입 버튼 표시 */}
      <div className="flex md:hidden space-x-4 w-full justify-between">
        <button className="px-4 py-2 bg-gray-600 rounded">로그인</button>
        <button className="px-4 py-2 bg-blue-500 rounded">회원가입</button>
      </div>
    </nav>
  );
  인;
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
