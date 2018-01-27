import React, { PropTypes } from 'react';

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
      {/* <td>{ location.lat }</td>
      <td>{ location.lng }</td> */}
      <td className="align-right">
        <Link className="button button-primary" to={ `/${location.name}`}>Details / Map</Link>
      </td>
    </tr>
  }
}

// Export the class
export default LocationRow;
