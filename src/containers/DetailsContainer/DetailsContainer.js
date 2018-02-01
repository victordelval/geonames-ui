import React from 'react';
import PropTypes from 'prop-types';

// Componentes
import NearbyPlaceList from '../../components/NearbyPlaceList';

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
      location: PropTypes.string.isRequired
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
    // hardcoded bounding box in the url...
    fetch(`http://api.geonames.org/searchJSON?${ this.queryDetails }`)
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
    return `q=${ this.props.params.location }&north=40.43374304623162&east=-3.683537891387914&south=40.400252786235214&west=-3.722462108612035&maxRows=100&username=victordelval`;
  }

  back() {
    this.props.router.goBack();
  }

  // Devuelve el nombre del repo
//   get repoName() {
//     return `${this.props.params.user}/${this.props.params.repo}`;
//   }

  /**
   * UI del contenedor
   */
  render() {
    return <section>
      <h2><b>{ this.props.params.location }</b> exploration page</h2>
      <button onClick={ this.back }>Back</button>
      <NearbyPlaceList data={ this.state.places } loading={ this.state.loading }
        location={ this.props.params.location } total={ this.state.places.length }
        itemsPerPage={ 5 }/>
    </section>;
  }
}

// Export the class
export default DetailsContainer;