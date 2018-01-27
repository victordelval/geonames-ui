import React from 'react';

// Componentes
import ExternalLink from '../ExternalLink';

/**
 * Página de About
 */
class About extends React.Component {
  /**
   * Nunca debemos de actualizar este componente
   */
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  get geoNamesLink() {
    return 'http://www.geonames.org/';
  }

  /**
   * Render the BaseComponent component
   */
  render() {
    return <section className="About">
      <p>ReactJS spa to use the api of
        { ' ' }<ExternalLink to={ this.geoNamesLink }>geonames.org</ExternalLink>.
        First steps with React and its technological ecosystem.
      </p>
    </section>
  }
}

// Export the class
export default About;
