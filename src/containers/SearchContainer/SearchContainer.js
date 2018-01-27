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

  // Borramos todo lo referente al estado, ya que ahora lo obtenemos
  // del store

  // constructor(props) {
  //   super(props);
  //   // Binds
  //   this.onSubmit = this.onSubmit.bind(this);
  //   this.state = {
  //     loading: false,
  //     results: [],
  //     search: '',
  //     queried: false
  //   }
  // }

  /**
   * Datos falsos. Los utilizamos en desarrollo hasta que leamos los datos de
   * la API.
   */
  stubData() {
    let repo = {
      full_name: 'My Location',
      owner: {
        login: 'Angel',
        avatar_url: 'https://avatars.githubusercontent.com/u/4056725?v=3',
        html_url: 'https://github.com/Angelmmiguel'
      },
      stargazers_count: 10,
      forks_count: 5
    }
    return [
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo)
    ]
  }

  // onSubmit(value) {
  onSubmit = value => {
    // this.setState({ loading: true});
    this.props.dispatch(startSearch(value));

    setTimeout(() => {
      this.props.dispatch(successSearch(this.stubData()))
      // this.setState({
      //   search: value,
      //   loading: false,
      //   queried: true,
      //   results: this.stubData()
      // });
    }, 2000);
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
