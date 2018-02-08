import React, { Component } from "react";
import { connect } from 'react-redux';
import { View } from "react-native";
import { Content, Form, Item, Input, Icon, Button, Text, Footer, Header, Fab } from 'native-base';
import { navigate } from '../../actions/navigate';

class Home extends Component {
    constructor(props) {
        super();
        this.state = {
            route: 'Home',
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
                <Button
                    onPress={(e) => this.props.navigate('Accounts')}
                >
                    <Text>Go</Text>
                </Button>
                <Text>HOME PAGE</Text>
            </Content>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, state.auth);
}

const mapDispatchToProps = (dispatch) => {
    return {
        navigate: (PATH) => { dispatch(navigate(PATH)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
