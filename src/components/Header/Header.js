import React from 'react';

import logo from './logo.svg';
import './Header.css';


/**
 * Muestra el header de nuestra aplicación. No necesitamos que se actualice por
 * dejamos shouldComponenteUpdate nunca retornará true.
 */
class Header extends React.Component {
  /**
   * Al ser contenido estático, no necesitamos actualizar este componente.
   */
  shouldComponenteUpdate() {
    return false;
  }

  /**
   * Render the Header component
   */
  render() {
    return <header className="Header">
      <h1>
        GeoNames Ui
        <span>
          <img src={logo} className="App-logo" alt="logo" />
        </span>
      </h1>
    </header>
  }
}

// Export the class
export default Header;
