import React, { Component } from "react";
import { connect } from 'react-redux';
import { View } from "react-native";
import { Content, Form, Item, Input, Icon, Button, Text, Footer, Header, Fab } from 'native-base';


class Accounts extends Component {
    constructor(props) {
        super();
        this.state = {
            route: 'Accounts',
        };
        this.onInputChange = this.onInputChange.bind(this);
    }

    componentWillMount() { }
    componentDidMount() { }


    onInputChange(e) {

        this.setState({
            [e.target.name]: typeof e.target.value != 'undefined' ? e.target.value : e.target.checked
        });
    }


    render() {

        return (
            <Content>
                <Text>Accounts PAGE</Text>
            </Content>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, state.auth);
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
