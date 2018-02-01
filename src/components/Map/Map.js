import React from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
// import ReactMapGL, {Marker} from 'react-map-gl';

class Map extends React.Component {

    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.object).isRequired,
        coordinates: PropTypes.shape({
            latitude: PropTypes.string.isRequired,
            longitude: PropTypes.string.isRequired
        }).isRequired
    }

    state = {
        viewport: {
            width: 800,
            height: 400,
            // latitude: 37.7577,
            // longitude: -122.4376,
            latitude: parseFloat(this.props.coordinates.latitude),
            longitude: parseFloat(this.props.coordinates.longitude),
            zoom: 13
        }
    };

    render() {
        console.log(">> map")
        console.log(this.props)
        return (
            <ReactMapGL
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({ viewport })}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}>

                    { this.props.data.map(location =>
                        <Marker latitude={parseFloat(location.lat)} longitude={parseFloat(location.lng)} >
                            <div>{ location.name }</div>
                        </Marker>
                        // <Popup latitude={ parseFloat(location.lat) } longitude={ parseFloat(location.lng) } closeButton={true} closeOnClick={true} anchor="top">
                        //     <div>{ location.name }</div>
                        // </Popup>
                    )}
            </ReactMapGL>
        );
    }
}

export default Map;