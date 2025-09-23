"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Poppins } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqData: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqData }) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number): void => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const isOpen = (index: number): boolean => {
    return openItems.has(index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-14 text-white ">
      <div className="flex flex-col gap-3">
        {faqData.map((item: FAQItem, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: false }}
            className="bg-[#F7F9F9] px-[15px] py-[11px] rounded-[8px]"
          >
            {/* Question Button */}
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left hover:bg-gray-750 transition-colors duration-200 flex items-center justify-between group"
            >
              <span className={`text-[#2F3237] font-semibold text-[12px] md:text-[16px] sm:text-base pr-4 ${poppins.className}`}>
                {item.question}
              </span>
              <div className="flex-shrink-0 ml-4 p-[6px] bg-[#004BF5D1] w-[32px] h-[32px] rounded-full">
                {isOpen(index) ? (
                  <ChevronUp className="w-5 h-5 text-white transform transition-transform duration-200" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-white transform transition-transform duration-200" />
                )}
              </div>
            </button>

            {/* Answer Panel with AnimatePresence */}
            <AnimatePresence initial={false}>
              {isOpen(index) && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className={`px-6 pb-4 text-[#2F3237] font-normal leading-[130%] text-xs sm:text-base ${poppins.className}`}>
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Support Box */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='bg-[#004BF5D1] rounded-[8px] p-[14px] flex items-center justify-between gap-4 mt-[2rem]'
      >
        <span className={`${poppins.className} flex-[2]`}>
          <p className='font-medium text-[14px] md:text-[20px] leading-[140%]'>Still have questions?</p>
          <p className='text-[12px] md:text-[14px] font-normal leading-[130%]'>
            Reach out to our support team to help out!
          </p>
        </span>

        <button className='w-[140px] bg-[#ffffff] px-6 py-2 rounded-[20px] text-[#004BF5D1] text-[14px] md:text-[16px] font-semibold leading-[100%] '>
          Send Email
        </button>
      </motion.div>
    </div>
  );
};

export default FAQAccordion;
