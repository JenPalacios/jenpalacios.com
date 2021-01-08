import React from 'react';
import sass from '../styles/index.module.sass';

const Footer = () => {
    const thisYear = new Date().getFullYear();
    
    return (
        <div className={sass.footer}>
            <div className={sass.footerInner}>
                <p>Developed by Jen Palacios with <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby.js</a>. The cool icons come from <a href="https://ego.streamlineicons.com/" target="_blank" rel="noopener noreferrer">Ego icons</a> and the dope patterns from <a href="https://www.heropatterns.com/" target="_blank" rel="noopener noreferrer">Hero Patterns</a>.</p>
                <p className={sass.footerYear}>{thisYear}</p>
            </div>
        </div>
    );
}

export default Footer