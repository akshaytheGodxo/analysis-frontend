"use client";

import lightLogo from "../../../public/visionflow-high-resolution-logo-transparent.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import { useState } from "react";
import { FaTimes, FaBars, FaSun, FaMoon } from "react-icons/fa";
import NavbarDropdown from "./navbar-dropdown";

const Navbar = () => {
  const isDarkMode = false;
  const [mobileMenuOpen, setMobileMenu] = useState(false);
//   const dispatch = useAppDispatch();
//   const handleToggleTheme = () => {
//     dispatch(toggleTheme());
//   }

  const toggleMobileMenu = () => setMobileMenu(!mobileMenuOpen);

  const companyServices = [
    { label: "HeatMap Detection", href: "/main" },
    { label: "Video Analaysis", href: "/" },
    { label: "Face Detection", href: "/" },
    { label: "Automobile Detection", href: "/" },
  ];
  return (
    <nav className="flex justify-between items-center w-[92%] mx-auto px-4 py-3 border-b">
      {/* logo part */}
      <div className="flex items-center space-x-4  w-full">
        <div className="md:hidden">
          <Button
            onClick={toggleMobileMenu}
            className={`text-2xl ${
              isDarkMode
                ? "bg-gray-950 text-gray-100 border-gray-800"
                : "bg-white text-gray-950 border-gray-300"
            }`}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </Button>
        </div>
        <Link href="/" className="text-[1.6rem] font-normal w-[12rem] flex items-center">
          <Image src={lightLogo} alt="company-logo" className="align-middle" />
        </Link>

        <div className="hidden md:flex space-x-8 items-center mx-auto">
          <ul className="flex space-x-6 items-center">
            <li>
              <NavbarDropdown label="Features" items={companyServices} />
            </li>
            <li>
              <Link href="/about">
                <Button
                  className={`${
                    isDarkMode
                      ? "text-gray-200 hover:text-gray-100 bg-gray-950"
                      : "text-gray-700 hover:text-gray-900 hover:bg-white bg-white"
                  }`}
                >
                  About Us
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                <Button
                  className={`${
                    isDarkMode
                      ? "text-gray-200 hover:text-gray-100 bg-gray-950"
                      : "text-gray-700 hover:text-gray-900 hover:bg-white bg-white"
                  }`}
                >
                  Contacts
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/terms">
                <Button
                  className={`${
                    isDarkMode
                      ? "text-gray-200 hover:text-gray-100 bg-gray-950"
                      : "text-gray-700 hover:text-gray-900 hover:bg-white bg-white"
                  }`}
                >
                  Terms&Conditions
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className={`absolute top-[9%] left-0 w-full min-h-[60vh] px-5 flex flex-col space-y-6 items-center 
                    ${
                      isDarkMode
                        ? "bg-gray-950 text-gray-100"
                        : "bg-white text-gray-950"
                    } md:hidden`}
        >
          <ul>
            <li>
              <NavbarDropdown label="Services" items={companyServices} />
            </li>
            <li>
              <Link href="/about">
                <Button
                  className={`${
                    isDarkMode
                      ? "text-gray-200 hover:text-gray-100 bg-gray-950"
                      : "text-gray-700 hover:text-gray-900 bg-white"
                  } `}
                >
                  About Us
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                <Button
                  className={`${
                    isDarkMode
                      ? "text-gray-200 hover:text-gray-100 bg-gray-950"
                      : "text-gray-700 hover:text-gray-900 hover:bg-white bg-white"
                  }`}
                >
                  Contact Us
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/terms&conditions">
                <Button
                  className={`${
                    isDarkMode
                      ? "text-gray-200 hover:text-gray-100 bg-gray-950"
                      : "text-gray-700 hover:text-gray-900 bg-white"
                  }`}
                >
                  Terms & Conditions
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}

      <div className="flex items-center space-x-4">
        <Button
            className={`${isDarkMode ? "text-gray-200 bg-gray-950" : "text-gray-700 bg-white hover:bg-white"}`}
            
        >
            {isDarkMode ? <FaSun /> : <FaMoon />}
        </Button>
        <>
            <Link href="/register">
              <Button
                className={`text-l px-4 py-2 rounded-lg 
              ${isDarkMode ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-900"}`}
              >
                Register
              </Button>
            </Link>
            <Link
              href="/login"
              className={`text-l px-4 py-2 rounded-lg 
            ${isDarkMode ? "text-white hover:text-blue-500" : "text-gray-900 hover:text-blue-600"}`}
            >
              Login
            </Link>
          </>
      </div>
    </nav>
  );
};

export default Navbar;
