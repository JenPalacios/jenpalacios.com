import React from 'react';
import sass from '../styles/index.module.sass';

const Footer = () => {
    return (
        <div className={sass.footer}>
            <div className={sass.footerInner}>
            <p>Made by Jen Palacios with <a href="https://www.gatsbyjs.org" target="_blank">Gatsby.js</a>. The cool icons come from <a href="" target="_blank">Ego icons</a> and the dope patterns from <a href="http://www.heropatterns.com/" target="_blank">Hero Patterns</a>.</p>
            </div>
        </div>
    );
}

export default Footer