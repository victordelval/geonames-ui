import React from 'react';
import PropTypes from 'prop-types';

import MapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';

import PlacePin from '../PlacePin';
import PlaceInfo from '../PlaceInfo';


const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
  };


class Map extends React.Component {

    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.object).isRequired,
        coordinates: PropTypes.shape({
            latitude: PropTypes.string.isRequired,
            longitude: PropTypes.string.isRequired
        }).isRequired
    }


    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: parseFloat(this.props.coordinates.latitude),
                longitude: parseFloat(this.props.coordinates.longitude),
                zoom: 11,
                bearing: 0,
                pitch: 0,
                width: 500,
                height: 300,
            },
            popupInfo: null
        };
    }


    componentDidMount() {
        window.addEventListener('resize', this._resize);
        this._resize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._resize);
    }

    _resize = () => {
        var x = document.getElementsByTagName("MAIN")[0];
        this.setState({
            viewport: {
                ...this.state.viewport,
                width: this.props.width || x.offsetWidth,
            }
        });
    };

    _updateViewport = (viewport) => {
        this.setState({ viewport });
    }

    _renderPlaceMarker = (place, index) => {
        return (
            <Marker key={`marker-${index}`}
                longitude={parseFloat(place.lng)}
                latitude={parseFloat(place.lat)} >
                <PlacePin size={20} onClick={() => this.setState({ popupInfo: place })} />
            </Marker>
        );
    }

    _renderPopup() {
        const { popupInfo } = this.state;

        return popupInfo && (
            <Popup tipSize={5}
                anchor="top"
                longitude={parseFloat(popupInfo.lng)}
                latitude={parseFloat(popupInfo.lat)}
                onClose={() => this.setState({ popupInfo: null })} >
                <PlaceInfo info={popupInfo} />
            </Popup>
        );
    }


    render() {
        const { viewport } = this.state;
        return (
            <MapGL
                {...viewport}
                mapStyle="mapbox://styles/mapbox/dark-v9"
                onViewportChange={this._updateViewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} >

                {this.props.data.map(this._renderPlaceMarker)}
                {this._renderPopup()}
                <div className="nav" style={navStyle}>
                    <NavigationControl onViewportChange={this._updateViewport} />
                </div>
                {/* <ControlPanel containerComponent={this.props.containerComponent} /> */}
            </MapGL>
        );
    }

}

export default Map;