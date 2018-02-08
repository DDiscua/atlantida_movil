import React, { Component } from "react";
import { Container } from 'native-base';
import { StyleSheet, Text, View } from "react-native";
import { Provider } from 'react-redux';
import routes from "./app/routing/routes";
import MainLayout from './app/components/MainLayout/MainLayout';
import store from './app/config/store';
import Login from './app/pages/login/login';
import AppWithNavigationState from './app/navigators/AppNavigator';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: '100%'
  }
});