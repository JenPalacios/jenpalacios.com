import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

// styles
import sass from '../styles/index.module.sass'

import './index.css';

const Footer = () => (
  <div className={sass.footer}>
    <div className={sass.footerInner}>
      <p>Made by Jen Palacios with <a href="https://www.gatsbyjs.org" target="_blank">Gatsby.js</a>. The cool icons come from <a href="" target="_blank">Ego icons</a> and the dope patterns from <a href="http://www.heropatterns.com/" target="_blank">Hero Patterns</a>.</p>
    </div>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Jen Palacios <Developer />"
      meta={[
        { name: 'description', content: 'Jen Palacios is a Developer currently living in Düsseldorf, Germany.' },
        { name: 'keywords', content: 'developer, programmer, front-end, back-end, javascript, react, webpack, node.js' }
      ]}
      link={[
        {"rel": "icon", "sizes": "16x16", "href": "http://jenpalacios.com/jen_palacios_logo.png"}
      ]}
    />
    <div>
      {children()}
      <Footer />
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
