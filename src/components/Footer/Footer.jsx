import React from 'react';
import m from './Footer.module.scss';
import Social from './Social/Social';

const Footer = () => {
    return (
        <footer className={m.footer}>
           <Social></Social>  
        </footer>
    )
};
export default Footer;