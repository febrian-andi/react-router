import { useState } from "react";
import padiUmkmLogo from "../assets/padi-umkm.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = sessionStorage.getItem("login") === "true";

  const handleLogout = () => {
    sessionStorage.removeItem("login");
    window.location.reload();
  };

  return (
    <nav className="bg-gray-100">
      <div className="container mx-auto md:flex items-center py-3 px-4">
        <div className="flex justify-between">
          <Link className="text-teal-600 font-bold" to="/">
            <img src={padiUmkmLogo} alt="padi-umkm-logo" />
          </Link>
          <button
            className="text-gray-600 md:hidden focus:outline-none"
            type="button"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto md:ml-8`}
          id="navbarNav"
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0">
            <li>
              <Link
                className="block text-gray-800 hover:text-teal-600 px-4 py-2 rounded md:inline-block"
                to="/"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                className="block text-gray-800 hover:text-teal-600 px-4 py-2 rounded md:inline-block"
                to="/tentang-kami"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                className="block text-gray-800 hover:text-teal-600 px-4 py-2 rounded md:inline-block"
                to="/bantuan"
              >
                Bantuan
              </Link>
            </li>
            <li>
              <Link
                className="block text-gray-800 hover:text-teal-600 px-4 py-2 rounded md:inline-block"
                to="/media"
              >
                Media
              </Link>
            </li>
            <li>
              <Link
                className="block text-gray-800 hover:text-teal-600 px-4 py-2 rounded md:inline-block"
                to="/kontak"
              >
                Kontak
              </Link>
            </li>
            {!isLoggedIn ? (
              <li>
                <Link
                  to="/login"
                  className="block bg-white text-teal-600 font-bold border border-teal-600 px-4 py-2 rounded hover:bg-teal-600 hover:text-white transition md:inline-block"
                >
                  Login
                </Link>
              </li>
            ) : (
              <li>
                <button
                  onClick={handleLogout}
                  className="block bg-red-500 text-white font-bold px-4 py-2 rounded hover:bg-red-600 transition md:inline-block"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
