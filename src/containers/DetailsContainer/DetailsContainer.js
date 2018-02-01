import React from 'react';
import PropTypes from 'prop-types';

// Componentes
import NearbyPlaceList from '../../components/NearbyPlaceList';
import Map from '../../components/Map';

/**
 * Este container muestra los detalles para una localizacion concreto. Se renderiza cuando
 * un usuario accede a /:user/:repo. En el veremos la lista de places con
 * los detalles de cada una de ellas.
 */
class DetailsContainer extends React.Component {
  /**
   * Props del component
   */
  static propTypes = {
    // Este objeto contiene los valores de los campos definidos en Router
    // para la URL. En este caso, tendremos :user y :repo
    params: PropTypes.shape({
      place: PropTypes.string.isRequired
    }).isRequired,

    location: PropTypes.shape({
      state: PropTypes.shape({
        latitude: PropTypes.string.isRequired,
        longitude: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  };

  /**
   * Inicializamos el estado
   */
  constructor(props) {
    super(props);

    // Bind
    this.back = this.back.bind(this);

    this.state = {
      places: [],
      loading: true
    }
  }

  // Load the data
  componentDidMount() {
    this.setState({ loading: true });
    fetch(`http://api.geonames.org/findNearbyJSON?${this.queryDetails}`)
      .then(res => {
        return res.json();
      }).then(json => {
        this.setState({
          loading: false,
          places: json.geonames
        })
      })
  }

  get queryDetails() {
    const latitude = this.props.location.state.latitude;
    const longitude = this.props.location.state.longitude;
    const radius = 5;
    const maxRows = 500;
    return `lat=${latitude}&lng=${longitude}&radius=${radius}&maxRows=${maxRows}&featureCode!=HTL&username=victordelval`;
  }

  back() {
    this.props.router.goBack();
  }


  /**
   * UI del contenedor
   */
  render() {
    return <section>
      <button onClick={this.back} style={{ float: 'right' }}>Back</button>
      <h2><b>{this.props.params.place}</b> places</h2>
      <div style={{ paddingBottom: '30px' }} >
        <Map coordinates={this.props.location.state} data={this.state.places} />
      </div>
      <NearbyPlaceList data={this.state.places} loading={this.state.loading}
        location={this.props.params.place} total={this.state.places.length}
        itemsPerPage={5} />
    </section>;
  }
}

// Export the class
export default DetailsContainer;
