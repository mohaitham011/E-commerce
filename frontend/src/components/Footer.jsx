import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo} alt="" className='mb-5 w-32'/>
          <p className='w-full md:w-2/3 text-gray-600'>
          Shop the best deals on quality products! Fast shipping, secure payments, and 24/7 support.
           Your satisfaction is our priority. © 2024 forever. All rights reserved
          </p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li className='hover:underline underline-offset-8 '>Home</li>
            <li className='hover:underline underline-offset-8 '>About Us</li>
            <li className='hover:underline underline-offset-8 '>Delivery</li>
            <li className='hover:underline underline-offset-8 '>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li >+20-10-113-713-68</li>
            <li>contact@forever.com</li>
          </ul>
        </div>

        <div>
          <hr />
          <p className='py-5 text-sm text-end'>Copyright 2024@forever.com - All Right Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
