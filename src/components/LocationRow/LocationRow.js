import React, { PropTypes } from 'react';

// Componentes
import { Link } from 'react-router';
// import FaStar from 'react-icons/lib/fa/star';
// import FaCodeFork from 'react-icons/lib/fa/code-fork';
// import GithubAvatar from '../GithubAvatar';

/**
 * Renderiza la información relativa a un locationsitorio
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
      <td>{ location.full_name }</td>
      {/* <td><GithubAvatar author={ location.owner } /></td> */}
      {/* <td><FaStar /> { location.stargazers_count }</td> */}
      {/* <td><FaCodeFork /> { location.forks_count }</td> */}
      <td>-</td>
      <td>-</td>
      <td>-</td>

      <td className="align-right">
        <Link className="button button-primary" to={ `/${location.full_name}`}>Details / Map</Link>
      </td>
    </tr>
  }
}

// Export the class
export default LocationRow;
