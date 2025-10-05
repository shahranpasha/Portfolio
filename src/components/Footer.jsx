import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6';

function Footer() {
    return <>
        <hr className='border-gray-700' />
        <footer className='py-12 bg-black text-white'>
            <div className="max-w-screen-2x1 container mx-auto px-4 md:px-20 ">
                <div className=" flex  flex-col items-center justify-center">
                    <div className='flex space-x-4'>
                        <FaFacebook size={24} />
                        <FaLinkedin size={24} />
                        <FaTwitter size={24} />
                        <FaInstagram size={24} />
                    </div>
                    <div className='mt-8 border-gray-700 pt-8 flex flex-col items-center'>
                        <p className='text-sm'>&copy; 2023 Shahranpasha. All rights reserved.</p>
                        <p className='text-sm'>Supportive partner Learn Coding</p>
                    </div>
                </div>
            </div>
        </footer>
    </>
}

export default Footer;