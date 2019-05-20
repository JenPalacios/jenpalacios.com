import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

// styles
import favicon from '../images/favicon_jen.ico';

import Footer from '../components/footer';

import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Jen Palacios <Developer />"
      meta={[
        { name: 'description', content: 'Jen Palacios is a Developer currently living in Düsseldorf, Germany.' },
        { name: 'keywords', content: 'developer, programmer, front-end, back-end, javascript, react, webpack, node.js' }
      ]}
      link={[
        { rel: 'icon', type: 'image/x-icon', sizes: '16x16', href: `${favicon}` }
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
