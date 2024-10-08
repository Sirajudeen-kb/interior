"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Updated import
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  const router = useRouter();

  const handleNavLinkClick = (id: string) => {
    if (window.location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <>
      <div className="bg-[#1F1F1F] text-white py-8">
        <div className="w-full flex md:flex-row flex-col justify-around items-start">
          <div className="p-5">
            <ul>
              <p className="font-semibold text-2xl pb-5">Br Interior</p>
              <p className="text-start text-base text-gray-100 md:text-left mb-6">
                Br Interior your premier <br />
                destination for luxury and <br />
                modern interior design.
              </p>
              <div className="flex gap-6 pb-5">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-2xl cursor-pointer hover:scale-125" />
                </a>
                <a
                  href="https://www.x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-2xl cursor-pointer hover:scale-125" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-2xl cursor-pointer hover:scale-125" />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="text-2xl cursor-pointer hover:scale-125" />
                </a>
              </div>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="font-semibold text-2xl mb-5">Quick Links</p>
              <li
                className="text-md pb-2 mb-2 font-light hover:underline cursor-pointer"
                onClick={() => handleNavLinkClick("home-section")}
              >
                Home
              </li>
              <li
                className="text-md mb-2 pb-2 font-light hover:underline cursor-pointer"
                onClick={() => handleNavLinkClick("about-section")}
              >
                About Us
              </li>
              <li
                className="text-md mb-2 pb-2 font-light hover:underline cursor-pointer"
                onClick={() => handleNavLinkClick("services-section")}
              >
                Services
              </li>
              <li
                className="text-md mb-2 pb-2 font-light hover:underline cursor-pointer"
                onClick={() => handleNavLinkClick("projects-section")}
              >
                Our Projects
              </li>
            </ul>
          </div>
          <div className="p-5">
            <p className="font-semibold text-2xl mb-5">Our Services</p>
            <p className="text-base pb-2 mb-2 font-light hover:underline">
              <a href="/services#home-office"> Home & Office Interior</a>
            </p>
            <p className="text-base pb-2 mb-2 font-light hover:underline">
              <a href="/services#modular-kitchen"> Modular Kitchen</a>
            </p>
            <p className="text-base pb-2 mb-2 font-light hover:underline">
              <a href="/services#painting-services"> Painting Services</a>
            </p>
            <p className="text-base pb-2 mb-2 font-light hover:underline">
              <a href="/services#other-services"> Other Services</a>
            </p>
          </div>
          <div className="p-5">
            <p className="font-semibold text-2xl mb-2">Contact Us</p>
            <p className="text-md pb-2 font-light">
              <span className="font-medium">Phone :</span>{" "}
              <a href="tel:+919884814786" className="hover:underline">
                +91 9884814786
              </a>
              <span> | </span>
              <a href="tel:+919884814060" className="hover:underline">
                +91 9884814060
              </a>
            </p>
            <p className="text-md pb-2 font-light">
              <span className="font-medium">Email :</span>{" "}
              <a
                href="mailto:brinterior.in@gmail.com"
                className="hover:underline"
              >
                brinterior.in@gmail.com
              </a>
            </p>
            <p className="font-semibold text-2xl mb-2 mt-2">Office</p>
            <p className="text-base pb-2 font-light">
              125/257, Canara Bank Building, Angappa Naicken Street,
              <br />
              Parrys, Chennai, Tamil Nadu 600001
            </p>
          </div>
        </div>
        <div className="text-center">
          <p>
            <a
              href="https://www.freepik.com/author/stories"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              ❤️ Images by storyset on Freepik
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
