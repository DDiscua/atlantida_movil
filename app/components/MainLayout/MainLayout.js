import React, { Component } from 'react';
import { Drawer, Container, Content } from 'native-base';
import SideBar from '../SideBar/SideBar';

export default class MainLayout extends Component {

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
    } 

    render() {
        closeDrawer = () => {
            this.drawer._root.close()
        };
        openDrawer = () => {
            this.drawer._root.open()
        };
        return (
            <Container style={{ width: '100%' }}>
                <Drawer
                    ref={(ref) => { this.drawer = ref; }}
                    content={<SideBar navigator={this.navigator} />}
                    onClose={() => this.closeDrawer()} >
                </Drawer>
                <Content>
                    {this.props.children}
                </Content>
            </Container>
        );
    }
}