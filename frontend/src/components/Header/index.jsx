import React from "react";
import Container from "../Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b bg-white shadow-md">
      <Container designs="flex justify-between items-center p-6">
        <div className="flex gap-8 items-center">
          <Link to="/">
            <h1 className="font-bold text-2xl text-gray-800 hover:text-blue-600 transition">
              Tripster
            </h1>
          </Link>

          <nav className="flex gap-6 items-center">
            <Link
              className="text-gray-700 hover:text-blue-500 transition"
              to="/"
            >
              Oteller
            </Link>
            <Link
              className="text-gray-700 hover:text-blue-500 transition max-md:hidden"
              to="/"
            >
              Popüler
            </Link>
            <Link
              className="text-gray-700 hover:text-blue-500 transition"
              to="/admin/create"
            >
              Oluştur
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="border border-blue-500 rounded-full py-1 px-5 text-blue-500 hover:bg-blue-500 hover:text-white transition max-md:hidden">
            Kayıt Ol
          </button>
          <button className="bg-blue-500 text-white rounded-full py-1 px-5 hover:bg-blue-600 transition">
            Giriş Yap
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
