import React from 'react';
import styles from './Footer.module.css';

import { BiLogoBehance } from 'react-icons/bi';
import { FaInstagram, FaPinterestP } from 'react-icons/fa';
import { MdOutlineEmail} from 'react-icons/md';
import { IoLogoLinkedin } from 'react-icons/io';
import toast from 'react-hot-toast';

import logo2 from '../assets/logo2.png'

function Footer() {
  const socialLinks = [
    { name: 'juliamartinsa', icon: <BiLogoBehance />, url: 'https://www.behance.net/juliamartinsa' },
    { name: 'juliamartinsap', icon: <FaInstagram />, url: 'https://www.instagram.com/juliamartinsap/' },
    { name: 'juliamartinsa', icon: <IoLogoLinkedin />, url: 'https://www.linkedin.com/in/juliamartinsa/' },
    { name: 'juliamartinsa12', icon: <FaPinterestP />, url: 'https://br.pinterest.com/juliamartinsa12/' },
    { name: 'juliamartinsa12@gmail.com', icon: <MdOutlineEmail />, url: 'mailto:juliamartinsa12@gmail.com' }
  ];

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>elsewhere on the internet</h3>
        <img src={logo2} alt="Logo" className={styles.footerLogo} />
      </div>

      <div className={styles.mainContent}>
        <div className={styles.socialGrid}>
          {socialLinks.map((link) => {
            const isEmail = link.url.startsWith('mailto:');
            const emailAddress = 'juliamartinsa12@gmail.com';
            return isEmail ? (
              <button 
                key={link.url}
                className={styles.socialLink} 
                onClick={() => {
                  navigator.clipboard.writeText(emailAddress);
                  toast.success('Email copied to clipboard!');
                }}>
                <span className={styles.icon}>{link.icon}</span>
                <span>{link.name}</span>
              </button>
            ) : (
              <a 
                key={link.url}
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                className={styles.socialLink}>
                <span className={styles.icon}>{link.icon}</span>
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>

        
      </div>
    </footer>
  );
}

export default Footer;