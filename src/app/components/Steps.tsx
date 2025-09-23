"use client"
import React from "react";
import { steps } from "../../components/constant";
import Image from "next/image";
import howPhone from "../../assets/img/how-phone.png";
import ResponsiveHeader from "../../components/ResponsiveHeader";
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

const Steps = () => {
  return (
    <motion.section
      className="p-4 lg:max-w-[95%] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={staggerContainer}
    >
      {/* Header */}
      <motion.div variants={fadeInUp}>
        <ResponsiveHeader
          title="Manage Your Bills, Gift Cards, and Airtime in Just a Few Simple Steps"
          description="Whether you’re cashing in a gift card, topping up data, or paying bills, Beepex gives you one place to do it all, fast, simple, and stress-free."
        />
      </motion.div>

      <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-end justify-between gap-8 lg:gap-12 xl:gap-16 mt-12 md:mt-16 lg:mt-34">
          {/* Steps Content */}
          <motion.div className="w-full" variants={fadeInUp}>
            <h3 className="font-semibold text-[20px] text-[#272727] leading-[125%] my-4 mb-6">
              How it works in just four steps
            </h3>
            <motion.div
              className="relative"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="relative flex items-start mb-2 last:mb-0"
                  variants={fadeInUp}
                >
                  {/* Step Circle + its own line */}
                  <div className="relative flex-shrink-0 w-9 h-[130px] flex flex-col items-center mr-4 z-10">
                    <div className="w-[24px] h-[24px] border-[2.2px] border-[#004BF5D1] rounded-full flex items-center justify-center bg-white">
                      <div className="w-[10px] h-[10px] bg-[#004BF5D1] rounded-full"></div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-[2px] flex-1 border-l-2 border-dashed border-[#004BF5D1] mt-1"></div>
                    )}
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-[20px] font-medium text-[#272727] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[#252525CC] font-medium text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Phone Image */}
          <motion.div
            className="w-full relative mt-[6rem] flex justify-center lg:justify-base order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            viewport={{ once: false }}
          >
            <div className="bg-[#F5F7F8] rounded-2xl relative w-full h-[332px] md:h-[584px]">
              <div className="absolute bottom-6 md:-bottom-[6%] w-full">
                <Image src={howPhone} alt="how it works" className="w-full scale-110 sm:scale-92" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Steps;
