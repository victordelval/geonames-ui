import React, { PropTypes } from 'react';

// Componentes
import Paginator from '../Paginator';
import HintMessage from '../HintMessage';
import NearbyPlaceRow from '../NearbyPlaceRow';

/**
 * Muestra la lista de NearbyPlaces
 */
class NearbyPlaceList extends React.PureComponent {
  /**
   * Props of the component
   */
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    total: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    location: PropTypes.string.isRequired
  }

  renderMessage() {
    let text = '';

    if (this.props.loading) {
      text = <span>Retrieving NearbyPlaces of <b>{ this.props.location }</b></span>;
    } else if (this.props.total === 0) {
      text = <span><b>{ this.props.location }</b> doesn't have any public NearbyPlace</span>;
    } else {
      text = <span>Showing <b>{ this.props.total }</b> NearbyPlaces of <b>{ this.props.location }</b></span>;
    }

    return <HintMessage>{ text }</HintMessage>;
  }

  // Renderizamos la tabla si no estamos cargando resultados
  renderTable() {
    if (this.props.loading || this.props.total === 0) {
      return null;
    } else {
      return <table className="u-full-width">
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Clasification</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { this.props.data.map(nearbyPlace =>
            <NearbyPlaceRow nearbyPlace={ nearbyPlace } key={ nearbyPlace.id } />
          )}
        </tbody>
      </table>;
    }
  }

  /**
   * Render the NearbyPlaceList component
   */
  render() {
    return <div>
      { this.renderMessage() }
      { this.renderTable() }
    </div>;
  }
}

// Export the class
export default Paginator(NearbyPlaceList);
