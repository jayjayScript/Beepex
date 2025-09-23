"use client"
import { testimonials } from '@/components/constant'
import ResponsiveHeader from '@/components/ResponsiveHeader'
import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { Manrope } from 'next/font/google';
import Image from 'next/image';
import Pagination from '../../components/Pagination';
import { motion } from 'framer-motion';

const manrope = Manrope({
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
    display: 'swap',
});

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" as const}
    }),
};

const Testimonials: React.FC<{ count?: number }> = ({ count = 5 }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const totalPages = Math.ceil(testimonials.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentTestimonials = testimonials.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <section className='bg-[#F5F7F8] py-12 px-4'>
            <div className='md:max-w-[90%] mx-auto'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <ResponsiveHeader
                        title='What Our Early Users Are Saying'
                        description='Real feedback from people who’ve used Beepex to redeem, top up, and pay, and now won’t go back.'
                    />
                </motion.div>

                {/* Testimonials Grid */}
                <div className='flex flex-col md:grid grid-cols-2 md:gap-[34px] gap-4 my-[54px]'>
                    {currentTestimonials.map((items, index) => (
                        <motion.div
                            key={index}
                            className='bg-[#FFFFFF] p-6 rounded-3xl'
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            variants={cardVariants}
                        >
                            <div className='flex justify-between items-center'>
                                <Icon icon="fontisto:quote-a-right" width="50" height="36" className='text-[#135CE733]' />

                                <div className='flex items-center'>
                                    {Array.from({ length: count }, (_, i) => (
                                        <Icon
                                            key={i}
                                            icon="bitcoin-icons:star-filled"
                                            width="24"
                                            height="24"
                                            className="text-[#FF7F22]"
                                        />
                                    ))}
                                </div>
                            </div>

                            <p className={`text-[#0F1125] font-medium text-[18px] leading-[190%] text-left w-[266px] md:w-[90%] ${manrope.className} my-[32px]`}>
                                {items.testimony}
                            </p>

                            <div className='border-[#E9EFF5] w-[356px] border-[1px]'></div>

                            <div className='flex items-center gap-4 mt-[24px]'>
                                <Image src={items.image} height={72} width={72} alt="profile image" />
                                <p className='text-[#0F1125] font-semibold text-[20px] leading-[100%]'>{items.name}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Pagination */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex justify-center mt-8"
                >
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials
