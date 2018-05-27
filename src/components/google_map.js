import React, { Component } from 'react';

export default class GoogleMap extends Component {
    // For this we are using a 3rd party library that already has the idea of how it will be rendering to the screen, it has no idea how to integrate into a React app this makes use of the 'REF' system in React, this allows us to get a REFERENCE to an HTML element that has been rendered to a page. After this element has been rendered I can grab it by referring to this.refs.map
    // componentDidMount is a lifecycle method and gets called automatically after this component has been rendered to the screen
    componentDidMount() {
        new google.maps.Map(this.refs.map, { // creating an embeded google map inside our doc
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }

    render() {
        return <div ref='map' />;
    }
}
