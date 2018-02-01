import React from 'react';
import PropTypes from 'prop-types';

// Componentes
import { Link } from 'react-router';
// import FaStar from 'react-icons/lib/fa/star';
// import FaCodeFork from 'react-icons/lib/fa/code-fork';
// import GithubAvatar from '../GithubAvatar';

/**
 * Renderiza la información relativa a un location
 */
class LocationRow extends React.PureComponent {
  /**
   * Props del componente
   */
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  /**
   * Render the LocationRow component
   */
  render() {
    let location = this.props.location;

    return <tr>
      <td>{ location.toponymName }</td>
      <td>{ location.countryName }</td>
      <td>{ location.fcodeName }</td>
      <td className="align-right">
        <Link
          className="button button-primary"
          to={{
            pathname: `/${location.name}`,
            state: { latitude: location.lat, longitude: location.lng },
          }} >
          Details / Map</Link>
      </td>
    </tr>
  }
}

// Export the class
export default LocationRow;
