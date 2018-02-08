import React, { Component } from "react";
import { connect } from 'react-redux';
import { View, Image, ImageBackground } from "react-native";
import { Content, Form, Item, Input, Icon, Button, Text, Footer, Header, Fab } from 'native-base';
import { secretImage, login } from '../../actions/auth';
import { navigate } from '../../actions/navigate';
import setEndpoint from '../../actions/connections';
import { i18n, changeLocale, expandTranslations } from '../../actions/i18n';
import login_style from './login_style';
import login_bg from '../../assets/img/login/login_background_1.png';
import login_logo from '../../assets/img/login/bancatlan_logos/bancatlan_logo_white.png';

import enUS from './i18n/en_us';
import esHN from './i18n/es_hn';
import { endPoints } from '../../config/config';


const secretWord = 'anl';


const endpoints = [{
  label: 'Production',
  value: 'endPointProduction',
},
{
  label: 'Developmet',
  value: 'endPointDevelopment',
}
];


class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      route: 'Login',
      username: '',
      password: '',
      active: true,
      currentEndpoint: '',
      endpoint_modal: false,
    };
    expandTranslations({
      'en-US': enUS,
      'es-HN': esHN
    });
    this.onInputChange = this.onInputChange.bind(this);
    this.setEndpoint = this.setEndpoint.bind(this);
  }


  getSecretImage(e) {
    e.preventDefault();
    const { username } = this.state;
    if (username === secretWord) {
      this.showModal('endpoint_modal').bind(this);
    } else {
      this.props.getSecretImage(username);
    }
  }

  getCurrentYear() {
    return new Date().getFullYear().toString();
  }

  setEndpoint(option) {
    const { currentEndpoint } = this.state;
    this.props.setEndpoint(endPoints.find(function (element) { return element.name === option }));
    e.preventDefault();
  }

  currentEndpoint(option) {
    this.setState({
      currentEndpoint: option
    });
  }

  onInputChange(e) {

    this.setState({
      [e.target.name]: typeof e.target.value != 'undefined' ? e.target.value : e.target.checked
    });
  }

  render() {

    console.log('________Login_props_________', this.props);

    return (
      <ImageBackground source={require('../../assets/img/login/login_background_1.png')} style={login_style.backgroundImage}>

        <Image
          style={{ width: '80%', height: '25%', marginTop: 100 }}
          source={login_logo}
        />

        <Content style={login_style.content}>
          <Form style={login_style.form}>
            <Item error>
              <Icon active name='person' style={{ color: '#fff' }} />
              <Input
                placeholder={i18n().t('user')}
                value={this.state.username}
                onChangeText={(username) => this.setState({ username: username })}
                style={{ color: '#fff' }}
              />
            </Item>
            <Button
              light style={login_style.button}
              onPress={(e) => this.props.navigate('Home')/*(e) => this.getSecretImage(e)*/}
              title={this.state.route}
            >
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>{i18n().t('login')}</Text>
            </Button>

            {/*<Button light style={login_style.button}
              onPress={(e) => changeLocale(this)} title={this.state.route}
            >
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>Dummy Change Locale</Text>
            </Button>*/}
          </Form>
        </Content>
        <Footer style={login_style.footer}>
          <Text style={{ color: '#fff' }}>© {this.getCurrentYear()} Banco Atlátida S.A. </Text>
        </Footer>
      </ImageBackground >
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, state.auth);
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSecretImage: (username) => { dispatch(secretImage(username)) },
    setEndpoint: (URL) => { dispatch(setEndpoint(URL)) },
    navigate: (PATH) => { dispatch(navigate(PATH)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
