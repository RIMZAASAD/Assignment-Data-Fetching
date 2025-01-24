import Link from 'next/link';
import React from 'react';


const Header = () => {
  return (
    <nav className="bg-purple-600 h-16 w-full flex items-center justify-between px-6 shadow-md">
     
      <Link href="/" className="text-white text-2xl font-bold hover:underline">
        <h1>
         Rimza
        </h1>
      </Link>

      <div className="flex space-x-4">
        <Link
          href="/products"
          className="text-white px-4 py-2 rounded-md bg-purple-500 hover:bg-purple-700 transition-colors"
        >
          Client
        </Link>
        <Link
          href="/books"
          className="text-white px-4 py-2 rounded-md bg-purple-500 hover:bg-purple-700 transition-colors"
        >
          Server
         
        </Link>
      </div>
    </nav>
  );
};

export default Header;