import React, { Component } from "react";
import { connect } from 'react-redux';
import { View, Image, ImageBackground } from "react-native";
import { Content, Form, Item, Input, Icon, Button, Text, Footer, Header, Fab } from 'native-base';
import SVGImage from 'react-native-svg-image';
import { login } from '../../actions/auth';

import { i18n, changeLocale, expandTranslations } from '../../actions/i18n';

import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import login_style from './login_style';
import login_bg from '../../assets/img/login/login_background_1.png';
import login_logo from '../../assets/img/login/bancatlan_logos/bancatlan_logo_white.png';
//const login_bg = require("../../assets/img/login/login_background_1.png");
import enUS from './i18n/en_us';
import esHN from './i18n/es_hn';
expandTranslations({
  'en-US':enUS,
  'es-HN':esHN
});

class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      route: 'Login',
      username: '',
      password: '',
      active: true
    };
  }

  componentWillMount() { }
  componentDidMount() { }

  userLogin(e) {
    this.props.onLogin(this.state.username, this.state.password);
    e.preventDefault();
  }

  getCurrentYear(){
    return new Date().getFullYear().toString();
  }

  render() {
    console.log('image', login_bg);
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
              <Input placeholder={i18n().t('user')}/>
            </Item>
            <Item error last>
              <Icon active name='eye' style={{ color: '#fff' }} />
              <Input placeholder={i18n().t('password')} />
            </Item>
            <Button light style={login_style.button}
              onPress={(e) => this.userLogin(e)} title={this.state.route}
            >
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>{i18n().t('login')}</Text>
            </Button>

            <Button light style={login_style.button}
              onPress={(e) => changeLocale(this)} title={this.state.route}
            >
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>Dummy Change Locale</Text>
            </Button>

          </Form>
        </Content>
        <Footer style={login_style.footer}>
          <Text style={{ color: '#fff' }}>© {this.getCurrentYear()} Banco Atlátida S.A.</Text>
        </Footer>
      </ImageBackground >

    );
  }
} 

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (username, password) => { dispatch(login(username, password)); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
