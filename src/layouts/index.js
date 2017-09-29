import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Header from '../components/header';

import './global.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Terminal"
      meta={[
        { name: 'description', content: 'Bold ideas require brilliant minds' },
        { name: 'keywords', content: 'Startup, Development, Design, Cowork, Talent' },
      ]}
    >
      <link rel="shortcut icon" type="image/png" href="/favicon-32x32.png" />
    </Helmet>
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
