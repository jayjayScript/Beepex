"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Logo from '../../public/image.png'
import { Icon } from '@iconify/react'
import { navItems } from './constant'
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Close menu when clicking on a nav item
  const handleNavItemClick = () => {
    setIsMobileMenuOpen(false)
  }

  // Close menu on escape key
  useEffect(() => {
    interface EscapeEvent extends KeyboardEvent {
      key: string;
    }

    const handleEscape = (e: EscapeEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <nav className='bg-[#272727] py-3 pe-2 ps-5 md:px-[26px] m-4 my-[38px] rounded-[100px] flex justify-between items-center w-[90%]  md:max-w-[80%] mx-auto relative z-30'>
        {/* Logo */}
        <div className='flex items-center'>
          <Image src={Logo} height={29} width={95} alt="Logo" />
        </div>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex items-center justify-center gap-8'>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.id}
                smooth={true}
                duration={800} // control scroll speed
                offset={-80}  // adjust for fixed navbar
                className="text-white text-[16px] font-normal cursor-pointer hover:text-gray-300 transition-colors duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Download Button / Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className='bg-white rounded-full p-2 md:px-6 cursor-pointer flex items-center justify-center transition-all duration-200 hover:bg-gray-100'
        >
          <Icon
            icon={isMobileMenuOpen ? "mdi:close" : "clarity:menu-line"}
            width="24"
            height="24"
            className='md:hidden transition-transform duration-200'
          />
          <p className='hidden md:block font-normal text-[16px] text-black'>Download</p>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <>
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Side Drawer */}
        <div className={`fixed top-0 right-0 h-full w-[280px] bg-[#2727277C] z-50 transform transition-transform duration-300 ease-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
          {/* Header */}
          <div className='flex justify-end items-center p-6'>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className='text-white hover:text-gray-300 transition-colors p-1 mt-4'
            >
              <Icon icon="clarity:close-line" width="38" height="38" />
            </button>
          </div>

          {/* Navigation Items */}
          <ul className='flex flex-col gap-5 pt-8'>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.id}
                  smooth={true}
                  duration={800} // control scroll speed
                  offset={-80}  // adjust for fixed navbar
                  className="w-full text-center text-white text-[18px] font-normal px-6 py-4 hover:bg-gray-700 transition-colors duration-200 border-b border-gray-700 last:border-b-0"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Download Button */}
          <div className='absolute bottom-6 left-6 right-6'>
            <button className='w-full bg-white text-black py-3 px-6 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200'>
              Download
            </button>
          </div>
        </div>
      </>

    </>
  )
}

export default Navbar