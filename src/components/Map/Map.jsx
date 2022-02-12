import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Rating } from '@material-ui/lab';

import useStyles from './styles';

const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)'); // false if device is larger than 600 px, true otherwise

    const coordinates = {lat: 0, lng: 0}; // in latitude and longitude

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDc2FnjIRaUkkIi9aydpvSWfOvTGG2ZP1M' }}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            options={''}
            onChange={''}
            onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    );
}

export default Map;