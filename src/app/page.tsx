import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="text-center text-[100px] font-inter">
        <span className="text-white">Web siteme,</span> <span className="text-red-600">hoşgeldiniz.</span>
      </div>
      <div className="mt-4 flex space-x-4">
        <button className="px-6 py-2 text-lg font-inter font-bold bg-transparent border-2 border-white rounded-l text-white rounded hover:bg-white hover:text-black transition duration-300"><Link href="/sign-in">Giriş Yap</Link></button>
        <button className="px-6 py-2 text-lg font-inter font-bold bg-transparent border-2 border-white rounded-l text-white rounded hover:bg-white hover:text-black transition duration-300"><Link href="/sign-up">Kayıt Ol</Link></button>
      </div>
    </div>
  );
};

export default Page;
