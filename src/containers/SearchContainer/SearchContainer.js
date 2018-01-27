// import React, { PropTypes } from 'react';
import React from 'react';

// Actions
import { startSearch, successSearch } from '../../actions/actions';

// Importamos los componentes
import SearchForm from '../../components/SearchForm';
import LocationList from '../../components/LocationList';

// React-Redux high order component
import { connect } from 'react-redux';

/**
 * Muestra un buscador, así como la lista de resultados.
 */
class SearchContainer extends React.Component {

  onSubmit = value => {
    this.props.dispatch(startSearch(value));
    // here we use fetch to request the data to the serve, and a promise is returned
    fetch(`http://api.geonames.org/searchJSON?q=${ value }&maxRows=10&username=victordelval`)
      .then(res => {
        // data is a string buffer, so we transform it to json
        return res.json();
      })
      .then(json => {
        this.props.dispatch(successSearch(json.geonames))
      })
  }

  /**
   * Render the SearchContainer component
   */
  render() {
    return <main className="container">
      <SearchForm
        onSubmit={ this.onSubmit }
        search={ this.props.search } />
      <LocationList
        data={ this.props.results }
        loading={ this.props.loading }
        queried={ this.props.queried }
        search={ this.props.search } />
    </main>
  }
}

// function to map the state properties from Redux to our component
const mapStateToProps = state => {
  let { search, loading, results, queried } = state;
  return { search, loading, results, queried };
}

// Connect is a HOC! It modifies the props of our component to include
// 'dispatch' and also the values retrieved from the state.
export default connect(mapStateToProps)(SearchContainer);
