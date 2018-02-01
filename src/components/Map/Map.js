import React from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, {Marker} from 'react-map-gl';
// require('dotenv').config()

class Map extends React.Component {

    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.object).isRequired,
        coordinates: PropTypes.shape({
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired
          }).isRequired
    }

    state = {
        viewport: {
            //   width: 100,
            height: 400,
            // latitude: 37.7577,
            // longitude: -122.4376,
            latitude: this.props.coordinates.latitude,
            longitude: this.props.coordinates.longitude,
            zoom: 8
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
                        <Marker latitude={location.lat} longitude={location.lng} offsetLeft={-20} offsetTop={-10}>
                            <div>You are here</div>
                        </Marker>
                    )}
            </ReactMapGL>
        );
    }
}

export default Map;