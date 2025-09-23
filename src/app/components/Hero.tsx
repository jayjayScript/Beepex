"use client"
import React from "react";
import { downloadAppButtons } from "../../components/constant";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { motion } from "framer-motion";
import phone from "../../assets/img/hero-phone.png";

// Reusable variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut"as const} }
};

const Hero = () => {
  return (
    <section className='bg-[#F5F7F8] mx-4 sm:mx-4 lg:mx-auto pt-4 sm:pt-6 md:pt-8 lg:pt-12 px-4 sm:px-6 md:px-8 lg:px-12 rounded-lg md:rounded-2xl lg:rounded-3xl vertical-grid-bg max-w-7xl lg:max-w-[90%]'>
      {/* Header */}
      <motion.header
        className='w-full max-w-3xl mx-auto'
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <h1 className='font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[46px] text-[#272727] leading-tight text-center px-2'>
          All Your Payments, One Smart App.
        </h1>
      </motion.header>

      {/* Description */}
      <motion.div
        className='w-full max-w-3xl mx-auto mt-4 sm:mt-6 md:mt-8'
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <p className='font-normal text-sm sm:text-base md:text-[16px] lg:text-[18px] text-[#252525CC] leading-relaxed text-center px-4'>
          Redeem gift cards for cash, pay electricity and cable bills, buy
          airtime and data, fast, secure, and built for how you actually live.
        </p>
      </motion.div>

      {/* Download Buttons */}
      <motion.div
        className="flex flex-row md:w-[40%] mx-auto items-center justify-center gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-10 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {downloadAppButtons.map((item, index) => (
          <motion.button
            key={index}
            variants={fadeInUp}
            transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
            className="flex items-center bg-[#000A03] rounded-md md:rounded-lg p-2 sm:p-3 md:p-4 w-full xs:w-auto min-w-[140px] sm:min-w-[160px] md:min-w-[180px] lg:min-w-[194px] h-12 sm:h-14 md:h-16 lg:h-[55px] border border-[#999999] hover:bg-[#1a1a1a] transition-colors duration-200 cursor-pointer"
          >
            <Icon
              icon={item.icon}
              className="text-white flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
            />
            <span className="ml-2 sm:ml-3 text-white text-left flex-1">
              <p className="text-xs sm:text-sm md:text-[14px] font-medium leading-tight">{item.text}</p>
              <p className="text-sm sm:text-base md:text-lg lg:text-[18px] font-medium leading-tight">{item.store}</p>
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* Hero Image */}
      <motion.div
        className="flex justify-center mt-6 sm:mt-8 md:mt-10 lg:-mt-5"
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="relative inline-block w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
          <Image
            src={phone}
            alt="hero phone image"
            className="w-full h-auto object-contain"
            priority
          />
          <div className="absolute bottom-0 left-0 w-full h-12 sm:h-16 md:h-24 lg:h-[1440px] xl:h-40 2xl:h-52 bg-gradient-to-t from-[#F3F3F5] via-[#F3F3F54D] to-[#F3F3F500]"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
