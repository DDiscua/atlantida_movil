import React, { Component } from 'react';
import { ImageBackground } from "react-native";

class BackgroundImage extends Component {

    render() {
        console.log('BG PROPS: ', this.props);
        return (
            <ImageBackground image={this.props.image} style={this.props.style}>
                {this.props.children}
            </ImageBackground>
        )
    }
}

export default BackgroundImage;