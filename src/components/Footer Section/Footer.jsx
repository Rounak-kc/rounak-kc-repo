import React from 'react'
import { BsTwitter } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-left'>
            <div className='footer-text'>
            DEVELOP FOR A BETTER FUTURE
            </div>
            <div className='footer-icons'>
                <a href='https://www.linkedin.com/in/rounak-kumar-01183024a'><SiLinkedin size={25} color='#ffffff' /></a>
                <a href='https://www.facebook.com/profile.php?id=100017844348118'><FaFacebookF size={25} color='#ffffff' /></a>
                <a href='https://www.instagram.com/r0unak_kumar_10/'><AiFillInstagram size={25} color='#ffffff' /></a>
                <a href='https://github.com/Rounak-kc'><FaGithub size={25} color='#ffffff' /></a>
            </div>
        </div>
        <div className='footer-right'>
            <div className='footer-info'>
                <a href='#'>+91-9835547601</a>
                <a href='#'className='email'>rounakkumarchauhan8@gmail.com</a>
                <a href='#'>Greater Noida, Uttar Pradesh, India</a>
                
            </div>
        </div>
    </div>
  )
}

export default Footer