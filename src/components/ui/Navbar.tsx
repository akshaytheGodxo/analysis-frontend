"use client";
import lightLogo from "../../../public/visionflow-high-resolution-logo-transparent.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaTimes, FaBars, FaSun, FaMoon } from "react-icons/fa";
import NavbarDropdown from "./navbar-dropdown";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenu] = useState(false);
  const isDarkMode = true;


  const toggleMobileMenu = () => setMobileMenu(!mobileMenuOpen);

  const companyServices = [
    
    { label: "Hand Gesture Detection", href: "/hand-detection" },
    { label: "Face Detection", href: "/face-detection" },
    
  ];
  
  return (
    <nav className={`flex justify-between items-center w-[92%] mx-auto px-4 py-3 border-b-gray-100 ${isDarkMode ? "bg-black text-white" : "bg-white text-black" } z-10`}>
      {/* logo part */}
      <div className="flex items-center space-x-4  w-full">
        <div className="md:hidden">
          <Button
            onClick={toggleMobileMenu}
            className={`text-2xl ${
              isDarkMode
                ? "bg-black text-gray-100 border-gray-800"
                : "bg-white text-gray-950 border-gray-300"
            }`}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </Button>
        </div>
        <Link href="/" className="text-[1.6rem] font-normal w-[12rem] flex items-center">
          <Image src={lightLogo} alt="company-logo" className="align-middle text-white" />
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
                      ? "text-gray-200 hover:text-gray-100 bg-black"
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
                      ? "text-gray-200 hover:text-gray-100 bg-black"
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
                      ? "text-gray-200 hover:text-gray-100 bg-black"
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
                        ? "bg-black text-gray-100"
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
                      ? "text-gray-200 hover:text-gray-100 bg-black"
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
                      ? "text-gray-200 hover:text-gray-100 bg-black"
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
                      ? "text-gray-200 hover:text-gray-100 bg-black"
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


        <>
        <Button
                  
                  className={`w-full justify-center ${isDarkMode
                    ? 'text-yellow-300 hover:text-yellow-200 bg-gray-800 hover:bg-gray-700'
                    : 'text-blue-600 hover:text-blue-700 bg-gray-100 hover:bg-gray-200'
                    }`}
                >
                  {isDarkMode ? <FaSun className="mr-2" /> : <FaMoon className="mr-2" />}
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </Button>



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
