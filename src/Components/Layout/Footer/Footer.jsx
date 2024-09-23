import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneVolume } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      {/* <div className='bg-black p-4'>
            <h4 className='text-center text-white'>footer</h4>
      </div> */}
      <div className='bg-black text-white md:px-10 md:py-5'>
        <div className='lg:block hidden'>
          <img src="/logo.png" className='h-20' alt="" />
        </div>

        <div className='sm:flex'>
          <div className='px-1 py-2 md:w-2/5 lg:w-1/4'>
            <div className='h-full'>
              <h1 className='lg:text-xl text:lg py-2 ps-5'>Contact Us</h1>
              <ul className=''>
                <Link><li className='flex opacity-65 justify-start gap-5 items-center ps-5 py-1'><span className='text-green-500 text-2xl'><FaPhoneVolume /></span><span>89898989898</span></li></Link>
                <Link><li className='flex opacity-65 justify-start gap-5 items-center ps-5 py-1'><span className='text-red-500 text-2xl'><SiGmail /></span> <span>sagarlibrary@gmail.com</span></li></Link>
                <Link><li className='flex opacity-65 justify-start gap-5 items-center ps-5 py-1'><span className='text-red-500 text-2xl'><FaSquareInstagram /></span><span>sagar library official</span></li></Link>
                <Link><li className='flex opacity-65 justify-start gap-5 items-center ps-5 py-1'><span className='text-blue-500 text-2xl'><FaFacebook /></span><span>Sagar Library Official</span></li></Link>
                <Link><li className='flex opacity-65 justify-start gap-5 items-center ps-5 py-1'><span className='text-blue-500 text-2xl'><BsTelegram /></span><span>Sagar Library</span></li></Link>
              </ul>
            </div>
          </div>
          <div className=' px-1 py-2 md:w-2/5 lg:w-4/12'>
            <div className='sm:border-l-2 border-gray-500 h-full'>
              <h1 className='lg:text-xl text:lg py-2 ps-5'>Shifts</h1>
              <ul className='list-disc'>
                <li className='flex opacity-65 justify-start gap-5 items-center ps-5 py-1'><span>06:00 AM to 10:00 AM ( 4 hour )</span></li>
                <li className='flex opacity-65 justify-start gap-5 items-center ps-5 py-1'><span>10:00 AM to 02:00 PM ( 4 hour )</span></li>
                <li className='flex opacity-65 justify-start gap-5 items-center ps-5 py-1'><span>02:00 PM to 06:00 AM ( 4 hour )</span></li>
                <li className='flex opacity-65 justify-start gap-5 items-center ps-5 py-1'><span>06:00 PM to 10:00 PM ( 4 hour )</span></li>
                <li className='flex opacity-65 justify-start gap-5 items-center ps-5 py-1'><span className=''>Alpha Shift (03 month pass)</span></li>
                <li className='flex opacity-65 justify-start gap-5 items-center ps-5 py-1'><span className=''>Beta Shift (06 month pass)</span></li>
                <li className='flex opacity-65 justify-start gap-5 items-center ps-5 py-1'><span className=''>Gama Shift (12 month pass)</span></li>
              </ul>
            </div>
          </div>
          <div className='md:w-2/6 lg:w-5/12 px-1 py-2 hidden lg:block'>
            <div className='sm:border-l-2 border-gray-500 h-full ps-3'>
              <h1 className='lg:text-xl text:lg py-2'>Privacy Policy</h1>
              <p className='text-md opacity-65'>Welcome to <strong className='text-amber-400'>Sagar Library</strong>! We value your privacy and are committed to protecting the personal information you provide to us. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or use our services. By accessing our website or using our services, you agree to the terms of this Privacy Policy.</p>
            </div>
          </div>
          <div className='md:w-2/6 lg:w-5/12 px-1 py-2 flex lg:hidden items-start pt-16 justify-center'>
          <img src="/logo.png" className='h-20' alt="" />
          </div>
        </div>

      </div>


    </>
  )
}

export default Footer
