import React from 'react';
import PropTypes from 'prop-types';


/**
 * Muestra una release de un repositorio
 */
class NearbyPlaceRow extends React.PureComponent {
  /**
   * Props del componente
   */
  static propTypes = {
    nearbyPlace: PropTypes.object.isRequired
  }


  /**
   * Render the NearbyPlaceRow component
   */
  render() {
    let nearbyPlace = this.props.nearbyPlace;

    return <tr className="NearbyPlaceRow">
      <td>{ nearbyPlace.name }</td>
      <td>{ nearbyPlace.fcodeName }</td>
      <td>{ nearbyPlace.fclName }</td>
      <td></td>
    </tr>;
  }
}

// Export the class
export default NearbyPlaceRow;
