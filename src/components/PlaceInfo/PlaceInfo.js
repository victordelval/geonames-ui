import React, {PureComponent} from 'react';

export default class PlaceInfo extends PureComponent {

  render() {
    const {info} = this.props;
    const displayName = `${info.name}`;

    return (
      <div>
        <div>
          <b>{displayName}</b> |
          <a target="_new" href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${displayName}`}>
            Wikipedia
          </a>
        </div>
        <div><small>{info.fcodeName}</small></div>
      </div>
    );
  }
}