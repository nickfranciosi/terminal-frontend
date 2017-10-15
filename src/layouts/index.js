import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Header from '../components/header';
import LoadingScreen from '../components/loadingScreen';
import mastheadImagePartner from '../assets/images/mast-cropped.jpg';
import mastheadImageJoin from '../assets/images/red-room-tall.jpg';
import aboutFull from '../assets/images/aboutFull.jpg';

import './global.css';

class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoader: true,
    }

    this.handleDone = this.handleDone.bind(this);
  }

  handleDone = () => {
    setTimeout(() => {
      this.setState({ showLoader: false});
    }, 1700)
  }

  render() {
    return(
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
           {/* preload the images */}
          <img src={mastheadImagePartner} style={{
            display: "none",
          }}/>
          <img src={mastheadImageJoin} style={{
            display: "none",
          }}/>
          <img src={aboutFull} style={{
            display: "none",
          }}/>
          { this.state.showLoader ?
            <LoadingScreen done={() => this.handleDone()}/> :
            this.props.children()
          }
        </div>
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
