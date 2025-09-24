"use client";
import React from "react";
import cardBg from "../assets/img/image.png";
import { Icon } from "@iconify/react";
import { downloadAppButtons, navItems } from "./constant";
import Image from "next/image";
import logo from "../../public/footer-img.png";
import { motion } from "framer-motion";
import { scrollToSection } from "@/utils/ScrollToSection";
import ScrollToTop from '@/components/ScrollToTop';


const socials = [
  { icon: "ri:facebook-fill", href: "https://facebook.com" },
  { icon: "mdi:twitter", href: "https://twitter.com" },
  { icon: "ri:instagram-fill", href: "https://instagram.com" },
  { icon: "mdi:youtube", href: "https://youtube.com" },
];

const Footer = () => {
  return (
    <>
      <section className="bg-[#F5F7F8] mt-[18rem] p-4">
        <div className="relative md:w-[90%] max-w-[1300px] mx-auto p-4">
          {/* Card Banner */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute top-[-220px] left-1/2 transform -translate-x-1/2 p-4 py-[5rem] my-6 rounded-4xl bg-[#272727] md:h-[420px]"
            style={{
              backgroundImage: `url(${cardBg.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
          
            <header className="px-3 md:max-w-[70%] mx-auto ">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-center leading-[125%] text-[#fff]"
              >
                Download Our App for Free and get 5% cashback on your first
                transaction
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-sm md:text-[16px] text-[#FFFFFFCC] text-center font-normal leading-[125%] mt-[14px] md:w-[85%] mx-auto my-4"
              >
                From instant gift card redemptions to seamless bill payments and
                airtime top-ups, Beepex gives you the tools to manage it all
                securely, effortlessly, and in one place.
              </motion.p>
            </header>

            {/* Download Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-row md:w-[40%] mx-auto items-center justify-center gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-10 px-4"
            >
              {downloadAppButtons.map((item, index) => (
                <button
                  key={index}
                  className="flex items-center bg-[#000A03] rounded-md md:rounded-lg p-2 sm:p-3 md:p-4 w-full xs:w-auto min-w-[140px] sm:min-w-[160px] md:min-w-[180px] lg:w-[204px] h-12 sm:h-14 md:h-16 lg:h-[55px] border border-[#999999] hover:bg-[#1a1a1a] transition-colors duration-200 cursor-pointer"
                >
                  <Icon
                    icon={item.icon}
                    className="text-white flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                  />
                  <span className="ml-2 sm:ml-3 text-white text-left flex-1">
                    <p className="text-xs sm:text-sm md:text-base font-medium leading-tight">
                      {item.text}
                    </p>
                    <p className="text-sm md:text-lg font-medium leading-tight">
                      {item.store}
                    </p>
                  </span>
                </button>
              ))}
            </motion.div>
          </motion.div>

          {/* Footer Section */}
          <footer className="bg-[#F5F7F8] text-gray-700 py-6 mt-[13rem] md:mt-[20rem]">
            <div className=" mx-auto">
              {/* Top Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center md:text-left"
              >
                {/* Logo */}
                <div className="md:col-span-2">
                  <div
                    onClick={() => {
                      window.location.reload();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="flex items-center justify-center md:justify-start space-x-2 mb-4 cursor-pointer"
                  >
                    <Image
                      src={logo}
                      alt="Beepex Logo"
                      width={130}
                      height={43}
                    />
                  </div>
                </div>



                {/* Company Links */}
                <div>
                  <h3 className="font-semibold mb-3 text-[#171717]">Company</h3>
                  <ul className="space-y-2 text-gray-600">
                    {navItems.map((link, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.15 }}
                        viewport={{ once: true }}
                      >
                        <p
                          onClick={() => scrollToSection(link.id, 80, 700)}
                          className="hover:text-[#004BF5] transition-colors cursor-pointer"
                        >
                          {link.name}
                        </p>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Help + Socials */}
                <div>
                  <h3 className="font-semibold mb-2 text-[#171717]">
                    Need help?
                  </h3>
                  <a
                    href="mailto:supportbeepex@gmail.com"
                    className="text-[#004BF5] hover:underline"
                  >
                    supportbeepex@gmail.com
                  </a>

                  <h3 className="font-semibold mt-4 mb-3 text-[#171717]">
                    Socials
                  </h3>
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    {socials.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-white hover:bg-gray-200 transition"
                      >
                        <Icon
                          icon={social.icon}
                          className="w-5 h-5 text-[#171717]"
                        />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div>
                  <h3 className="font-semibold mb-2 text-[#171717]">
                    Location
                  </h3>
                  <p className="text-gray-600 text-[12px]">Lagos, Nigeria</p>
                </div>
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="border-t border-gray-300 mt-8 pt-6 text-left text-sm text-gray-500"
              >
                Copyright © {new Date().getFullYear()} Beepex. All Rights
                Reserved
              </motion.div>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
};

export default Footer;
