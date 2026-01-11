import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6';

function Footer() {
    return <>
        <hr className='border-gray-700' />
        <footer className='py-6 bg-black text-white'>
            <div className=' border-gray-700 pt-2 flex flex-col items-center'>
                        <p className='text-sm'>&copy; 2023 Shahranpasha. All rights reserved.</p>
                    </div>
        </footer>
    </>
}

export default Footer;