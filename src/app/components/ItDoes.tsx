"use client"
import React from "react";
import { itDoes } from "../../components/constant";
import { Icon } from "@iconify/react";
import Image from "next/image";
import ResponsiveHeader from "../../components/ResponsiveHeader";
import itDoesPhone from "../../assets/img/it-does-phone.png";
import { motion } from "framer-motion";

// Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const ItDoes = () => {
  const leftFeatures = itDoes.slice(0, Math.ceil(itDoes.length / 2));
  const rightFeatures = itDoes.slice(Math.ceil(itDoes.length / 2));

  return (
    <motion.section
      className="bg-[#F5F7F8] py-2 mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={staggerContainer}
    >
      <motion.div variants={fadeInUp} className="px-6">
        <ResponsiveHeader
          title="More Than Just Payments — Beepex Does It All"
          description="One app for all your day-to-day money moves: pay bills, redeem cards, buy airtime, and stay in control, with security built in."
        />
      </motion.div>

      <div className="w-full md:w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-10">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <motion.div
            className="p-4 mt-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {itDoes.map((item, index) => (
              <motion.div key={index} className="mb-9" variants={fadeInUp}>
                <div className="flex items-center justify-center border-[0.88px] border-[#004BF5D1] bg-[#004BF514] w-[40px] h-[42px] rounded-[8px]">
                  <Icon icon={item.icon} height={24} width={24} className="text-[#004BF5D1]" />
                </div>
                <div className="my-3">
                  <h3 className="text-[16px] font-medium text-[#272727] mb-1">{item.title}</h3>
                  <p className="text-[#252525CC] font-medium text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="-mt-8" variants={fadeInUp}>
            <Image src={itDoesPhone} height={600} width={900} alt="it Does Phone" />
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-center relative min-h-[400px] -mt-20">
          {/* Left Features */}
          <motion.div
            className="absolute left-0 top-1/2 transform -translate-y-1/2 space-y-32 w-80"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {leftFeatures.map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="inline-block mr-4">
                  <div className="flex items-center justify-center border-[0.88px] border-[#004BF5D1] bg-[#004BF514] w-[48px] h-[50px] rounded-[8px] mb-3">
                    <Icon icon={item.icon} height={28} width={28} className="text-[#004BF5D1]" />
                  </div>
                  <h3 className="text-[22px] font-medium text-[#272727] mb-2">{item.title}</h3>
                  <p className="text-[#252525CC] font-medium text-[14px] leading-relaxed max-w-xs ml-auto">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Center Phone */}
          <motion.div
            className="relative z-10 mx-16"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            viewport={{ once: false }}
          >
            <Image
              src={itDoesPhone}
              alt="Beepex App Features"
              className="w-[598px] h-[1033px] mx-auto object-cover object-center"
            />
          </motion.div>

          {/* Right Features */}
          <motion.div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 space-y-32 w-80"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {rightFeatures.map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="inline-block">
                  <div className="flex items-center justify-center border-[0.88px] border-[#004BF5D1] bg-[#004BF514] w-[48px] h-[50px] rounded-[8px] mb-3">
                    <Icon icon={item.icon} height={28} width={28} className="text-[#004BF5D1]" />
                  </div>
                  <h3 className="text-[22px] font-medium text-[#272727] mb-2">{item.title}</h3>
                  <p className="text-[#252525CC] font-medium text-[14px] leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ItDoes;
