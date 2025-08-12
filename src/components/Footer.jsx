import React from 'react';
import styles from './Footer.module.css';

import { BiLogoBehance } from 'react-icons/bi';
import { FaInstagram, FaPinterestP } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';

import logo2 from '../../public/logo2.png';

function Footer() {
  const socialLinks = [
    { name: 'juliamartinsa', icon: <BiLogoBehance />, url: 'https://www.behance.net/juliamartinsa' },
    { name: 'juliamartinsap', icon: <FaInstagram />, url: 'https://www.instagram.com/juliamartinsap/' },
    { name: 'juliamartinsa', icon: <IoLogoLinkedin />, url: 'https://www.linkedin.com/in/juliamartinsa/' },
    { name: 'juliamartinsa12', icon: <FaPinterestP />, url: 'https://br.pinterest.com/juliamartinsa12/' }
  ];

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>elsewhere on the internet</h3>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.socialGrid}>
          {socialLinks.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <span className={styles.icon}>{link.icon}</span>
              <span>{link.name}</span>
            </a>
          ))}
        </div>

        <div className={styles.logoWrapper}>
           <img src={logo2} alt="Logo" className={styles.footerLogo} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;