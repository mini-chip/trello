"use client";
import React from "react";

import { Navbar } from "./component/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <section className="flex items-center justify-center h-[70vh]">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              홍보글이에용
            </h1>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
