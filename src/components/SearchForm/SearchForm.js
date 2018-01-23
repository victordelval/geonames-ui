import React, { PropTypes } from 'react';

/**
 * Renderiza el formulario de búsqueda.
 */
class SearchForm extends React.Component {

  constructor(props) {
    super(props);

    // Binds
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      search: '',
    }
  }

  onChange(e) {
    this.setState({ search: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
  }

  render() {
    return <form onSubmit={ this.onSubmit }>
      <label>Search a Location</label>
      <input type="text" className="u-full-width" placeholder="madrid, burgos..."
        onChange={ this.onChange } defaultValue={ this.state.search } />
      <p className="align-center">
        <input type="submit" className="button-primary" value="Search" />
      </p>
    </form>;
  }
}

// Export the class
export default SearchForm;
