import React, { PropTypes } from 'react';

import LocationRow from '../LocationRow';
import HintMessage from '../HintMessage';
import Paginator from '../Paginator';

/**
 * Muestra los repositorios en una lista.
 */
class LocationList extends React.PureComponent {

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    queried: PropTypes.bool.isRequired,
    search: PropTypes.string.isRequired
  }

  renderMessage() {
    let text = '', l = this.props.data.length;

    if (this.props.loading) {
      text = <span>Searching results for <b>{ this.props.search }</b></span>;
    } else if (l > 0) {
      text = <span>We found <b>{ l }</b> locations for <b>{ this.props.search }</b></span>;
    } else if (l === 0 && this.props.queried) {
      text = <span>
        We could't find any locations matching <b>{ this.props.search }</b>. Try another terms please.
      </span>;
    } else {
      text = 'Type the name of a Location and click search';
    }
    // Return p
    return <HintMessage>{ text }</HintMessage>;
  }

  renderTable() {
    if(this.props.data.length === 0) { return null; }

    return <table className="u-full-width">
      <thead>
        <tr>
          <th>Name</th>
          <th>Country</th>
          <th>Feature class</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        { this.props.data.map(location =>
          <LocationRow location={ location } key={ location.id } />
        )}
      </tbody>
    </table>;
  }

  /**
   * Render the LocationList component
   */
  render() {
    return <section className="LocationList">
      { this.renderMessage() }
      { this.renderTable() }
    </section>;
  }
}

// Export the class
export default Paginator(LocationList);
